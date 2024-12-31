import { useEffect, useState } from "react"
import { Result } from "antd"
import AreaButton from "../components/AreaButton/AreaButton"
import AddExercise from "../components/AddExercise/AddExercise"

export default function Exercises() {
    const [exercises, setExercises] = useState([])
    const [addExercise, setAddExercise] = useState(false)

    useEffect(() => {
        fetch("http://127.0.0.1:5000/exercises")
            .then((response) => response.json())
            .then((exercises) => {
                setExercises(exercises)
            })
            .catch((error) => console.log(error))
    }, [])

    return (
        <main>
            {!exercises.length ? (
                <div>
                    <Result
                        status="404"
                        subTitle="Sorry, you do not have any exercises added"
                    />
                    <br />
                    <AreaButton onClick={() => setAddExercise(true)}>
                        Add Exercise
                    </AreaButton>
                    <AddExercise
                        open={addExercise}
                        onCancel={() => setAddExercise(false)}
                        onFinish={(exercises) => {
                            setAddExercise(false)
                            console.log(exercises)
                            setExercises(exercises)
                        }}
                    />
                </div>
            ) : (
                <div>
                    {exercises.map((exercise, i) => (
                        <AreaButton key={i}>{exercise[0]}</AreaButton>
                    ))}
                    <AreaButton onClick={() => setAddExercise(true)}>
                        Add Exercise
                    </AreaButton>
                    <AddExercise
                        open={addExercise}
                        onCancel={() => setAddExercise(false)}
                        onFinish={(exercises) => {
                            setAddExercise(false)
                            setExercises(exercises)
                        }}
                    />
                </div>
            )}
        </main>
    )
}
