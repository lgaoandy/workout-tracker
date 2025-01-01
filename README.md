# Let's Workout!

#### Video Demo: https://youtu.be/d0t6Ca2KkhE

#### Description:

> A workout tracking web application written in React and Flask

-   NOTE: this app is incomplete due to unforeseen circumstances during holidays (caught influenza)

## Languages & Libraries Used

-   Frontend

    -   [React](https://react.dev/)
    -   [Vite](https://vite.dev/guide/)
    -   [Ant Design](https://ant.design/components/overview)
    -   [SASS](https://ant.design/components/overview)
    -   [React-icons](https://react-icons.github.io/react-icons/)

-   Backend

    -   [Python](https://www.python.org/)
    -   [Flask](https://flask.palletsprojects.com/en/stable/)
    -   [Sqlite3](https://www.sqlite.org/)

-   AI Support
    -   [Gemini](https://gemini.google.com/app)
    -   [Phind](https://www.phind.com/)

## Database Setup

> Please view SQL used to created database in backend/log.sql

## How to Use?

#### Home

-   Click "START WORKOUT"

    > clicking on start workout, will insert new instance in workouts, returning the id after inserting. However, if you have an existing instance, it will return to that one instead .This will prevent you spamming multiple workout session at a time (which is physically not possible)

-   Click "ADD NEW EXERCISE"

    > Unfortunately, the intended action for this is to insert a row in the workout_exercise table given the workout_id we generated from starting a workout, but this part of the backend is not complete due to time. However, frontend does function as intended

-   Fill out "Weight" and "Reps" as you workout
-   TODO: Add a SAVE button to end the workout

    > The save button is to save all of the data logged inside of a workout session and end the current workout by update the datetime ended into the workout table

#### TODO: Workouts

-   Conceptually, this page will display a list of workouts in the past

#### Exercises

-   ON START

    > By default, when you enter this page, a service is sent to request a full list of exercises from the exercises table. These exercises objects are then used to render the contents of the exercise page. Each exercise is rendered as a customize component in REACT

-   Adding new exercises

    > This will create a popup form. You can fill it up and submit to insert the data into the table exercises. The full list of exercises is then returned and refreshes the exercises page

-   TODO: Viewing exercises

    > Clicking into an exercise should allow user to view more information about an exercise

-   TODO: Editing exercises

    > Users should be allowed to edit exercises or at least the ones they created

-   TODO: Deleteing exercises

    > Users should be able to delete exercises they have no workout records with
