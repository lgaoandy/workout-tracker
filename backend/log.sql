CREATE TABLE IF NOT EXISTS exercises (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE NOT NULL,
    type TEXT,
    primary_muscle TEXT,
    equipment TEXT,
    date_created DATE DEFAULT (CURRENT_DATE) NOT NULL
);


CREATE TABLE IF NOT EXISTS workouts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    datetime_started DATETIME DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
    datetime_ended DATETIME
);


CREATE TABLE IF NOT EXISTS workout_exercises (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    workout_id INTEGER NOT NULL,
    exercise_id INTEGER NOT NULL,
    exercise_sequence INTEGER DEFAULT 0 NOT NULL,
    rest_timer NUMERIC,
    UNIQUE(workout_id, exercise_id, exercise_sequence),
    FOREIGN KEY (workout_id) REFERENCES workouts (id),
    FOREIGN KEY (exercise_id) REFERENCES exercises (id)
);


CREATE TABLE IF NOT EXISTS workout_exercise_reps (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    workout_exercise_id INTEGER NOT NULL,
    weight NUMERIC,
    weight_unit TEXT,
    rep INTEGER
);

