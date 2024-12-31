import { Modal, Form, Input, Select, Button, Flex } from "antd"

const categories = [
    "Weight Lifting",
    "Cardio",
    "Calisthenics",
    "Plyometrics",
    "Powerlifting",
    "Stretching",
]

const muscles = [
    "Abdominals",
    "Abductors",
    "Adductors",
    "Biceps",
    "Calves",
    "Chest",
    "Forearms",
    "Glutes",
    "Hamstrings",
    "Lats",
    "Lower Back",
    "Neck",
    "Quadriceps",
    "Traps",
    "Triceps",
]

const equipments = [
    "None",
    "Dumbbell",
    "Barbell",
    "Weighted Plate",
    "Machine",
    "Resistance Band",
]

export default function AddExercise({ open, onCancel, onFinish }) {
    const [form] = Form.useForm()

    return (
        <Modal
            maskClosable={false}
            closable={false}
            open={open}
            footer={
                <Flex justify="right" gap={10}>
                    <Button onClick={() => form.submit()}>Add</Button>
                    <Button onClick={onCancel}>Cancel</Button>
                </Flex>
            }
        >
            <Form form={form} requiredMark="optional" onFinish={onSaveExercise}>
                <Form.Item
                    required
                    rules={[{ required: true, message: "Required " }]}
                    name="name"
                    label="Name"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    required
                    rules={[{ required: true, message: "Required " }]}
                    name="category"
                    label="Category"
                >
                    <Select options={menuify(categories)} />
                </Form.Item>
                <Form.Item
                    required
                    rules={[{ required: true, message: "Required " }]}
                    name="muscle"
                    label="Muscle"
                >
                    <Select options={menuify(muscles)} />
                </Form.Item>
                <Form.Item
                    required
                    rules={[{ required: true, message: "Required " }]}
                    name="equipment"
                    label="Equipment"
                >
                    <Select options={menuify(equipments)} />
                </Form.Item>
            </Form>
        </Modal>
    )

    function onSaveExercise(inputs) {
        fetch("http://127.0.0.1:5000/exercises", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inputs),
        })
            .then((response) => response.json())
            .then((exercises) => {
                console.log(exercises)
                onFinish(exercises)
            })
    }
}

function menuify(items) {
    return items.map((item) => ({
        label: item,
        value: item.toLowerCase(),
    }))
}
