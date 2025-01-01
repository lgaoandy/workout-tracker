import { Checkbox, Input, Table } from "antd"
import { useState } from "react"
import AreaButton from "../AreaButton/AreaButton"
import { FaDumbbell } from "react-icons/fa6"
import { IoMdClose } from "react-icons/io"
import "./ActiveExercise.scss"

export default function ActiveExercise({ exercise, onDelete }) {
    const [data, setData] = useState([{ set: 1 }])

    return (
        <div className="active-exercise">
            <div className="name-space">
                <div className="name">
                    <FaDumbbell />
                    {exercise[0]}
                </div>
                <IoMdClose onClick={onDelete} />
            </div>
            <Table
                rowKey="name"
                dataSource={data}
                columns={[
                    { title: "SET", dataIndex: "set" },
                    {
                        title: "LBS",
                        dataIndex: "weight",
                        render: () => <Input />,
                    },
                    {
                        title: "REPS",
                        dataIndex: "reps",
                        render: () => <Input />,
                    },
                    {
                        render: () => <Checkbox />,
                    },
                ]}
                pagination={false}
            />
            <AreaButton
                onClick={() =>
                    setData((data) => [...data, { set: data.length + 1 }])
                }
            >
                Add Set
            </AreaButton>
        </div>
    )
}
