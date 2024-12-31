import { useEffect, useState } from "react"
import { Button, Divider, Flex, Modal } from "antd"
import AreaButton from "../components/AreaButton/AreaButton"
import Exercises from "../components/Exercises"

export default function Workout() {
    const [open, setOpen] = useState(false)
    const [exercises, setExercises] = useState([])

    return (
        <div>
            <AreaButton onClick={() => setOpen(true)}>Add Exercise</AreaButton>
            <Divider />
            {exercises.map((exercise) => (
                <div>{exercise[0]}</div>
            ))}
            <Modal
                maskClosable={false}
                closable={false}
                open={open}
                footer={
                    null
                    // <Flex justify="right" gap={10}>
                    //     <Button onClick={() => form.submit()}>Add</Button>
                    //     <Button onClick={onCancel}>Cancel</Button>
                    // </Flex>
                }
            >
                <Exercises inactive={false} onSelect={onSelect} />
            </Modal>
        </div>
    )

    function onSelect(exercise) {
        setExercises((exercises) => {
            return [...exercises, exercise]
        })
        setOpen(false)
    }
}
