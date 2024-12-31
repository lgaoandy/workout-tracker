import { useState } from "react"
import { Menu, Flex } from "antd"
import { FaHome } from "react-icons/fa"
import { FaDumbbell, FaPersonRunning } from "react-icons/fa6"
import Home from "./pages/Home"
import "./App.scss"
import WorkoutHistory from "./pages/WorkoutHistory"
import Exercises from "./pages/Exercises"

function App() {
    const [current, setCurrent] = useState("home")

    return (
        <div>
            <Menu
                selectable={false}
                style={{ width: 256 }}
                items={[
                    {
                        key: "home",
                        label: (
                            <Flex
                                onClick={() => setCurrent("home")}
                                gap={10}
                                align="center"
                            >
                                <FaHome className="menu-icon" />
                                Home
                            </Flex>
                        ),
                    },
                    {
                        key: "workouts",
                        label: (
                            <Flex
                                onClick={() => setCurrent("workouts")}
                                gap={10}
                                align="center"
                            >
                                <FaDumbbell className="menu-icon" />
                                Workouts
                            </Flex>
                        ),
                    },
                    {
                        key: "exercises",
                        label: (
                            <Flex
                                onClick={() => setCurrent("exercises")}
                                gap={10}
                                align="center"
                            >
                                <FaPersonRunning className="menu-icon" />
                                Exercises
                            </Flex>
                        ),
                    },
                ]}
            />
            {renderCurrent()}
        </div>
    )

    function renderCurrent() {
        switch (current) {
            case "home":
                return <Home />
            case "workouts":
                return <WorkoutHistory />
            case "exercises":
                return <Exercises />
            default:
                return "error"
        }
    }
}

export default App
