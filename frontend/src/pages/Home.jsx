import { useState } from "react"
import { Button } from "antd"
import Workout from "./Workout"

export default function Home() {
    const [workoutId, setWorkoutId] = useState()

    return (
        <main>
            {workoutId ? (
                <Workout />
            ) : (
                <Button onClick={onStartWorkout}>Start workout</Button>
            )}
        </main>
    )

    function onStartWorkout() {
        fetch("http://127.0.0.1:5000/startworkout")
            .then((response) => response.json())
            .then((id) => setWorkoutId(id))
            .catch((error) => console.log(error))
    }
}
