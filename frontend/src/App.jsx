import { useState } from "react"
import { Menu, Flex } from "antd"
import { FaHome } from "react-icons/fa"
import { FaDumbbell, FaPersonRunning } from "react-icons/fa6"
import Home from "./components/Home"
import "./App.scss"

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
							<Flex onClick={() => setCurrent("home")} gap={10} align="center">
								<FaHome className="menu-icon" />
								Home
							</Flex>
						),
					},
					{
						key: "workouts",
						label: (
							<Flex onClick={() => setCurrent("workouts")} gap={10} align="center">
								<FaDumbbell className="menu-icon" />
								Workouts
							</Flex>
						),
					},
					{
						key: "exercises",
						label: (
							<Flex onClick={() => setCurrent("exercises")} gap={10} align="center">
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
			default:
				return "error"
		}
	}
}

export default App
