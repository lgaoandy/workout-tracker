from flask import Flask, g, request
from flask_cors import CORS
from datetime import datetime

import sqlite3


app = Flask(__name__)
CORS(app)


def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect("workout.db")
    return db


@app.route("/")
def here():
    print("START")
    return { "member": ["1", "2", "3"] }


@app.route("/startworkout")
def startworkout():
    db = get_db()
    cursor = db.cursor()
    
    # Check if there is an ongoing workout
    cursor.execute("SELECT id FROM workouts WHERE datetime_started IS NOT NULL AND datetime_ended IS NULL")
    existing_workout = cursor.fetchone()
    
    if existing_workout:
        return str(existing_workout[0]), 200
        
    # create a new workout
    cursor.execute("INSERT INTO workouts DEFAULT VALUES")
    db.commit()
    workout_id = cursor.lastrowid
    return str(workout_id), 200


@app.route("/exercises", methods=["GET", "POST"])
def exercises():
    db = get_db()
    
    if request.method == "POST":
        data = request.get_json()
        db.execute("INSERT INTO exercises (name, type, primary_muscle, equipment) VALUES (?, ?, ?, ?)", (data["name"], data["category"], data["muscle"], data["equipment"]))
        db.commit()
    exercises = db.execute("SELECT name, type, primary_muscle, equipment FROM exercises").fetchall()
    print(exercises)
    return exercises, 200
    

if __name__ == "__main__":
    app.run(debug=True)