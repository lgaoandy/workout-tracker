import { useState, useEffect } from "react"
import { Button } from "antd"

export default function Home() {
	useEffect(() => {}, [])

	return (
		<main>
			<Button onClick={onStartWorkout}>Start workout</Button>
		</main>
	)

	function onStartWorkout() {
		console.log("FETCH")
		fetch("https://improved-train-9q76wqwjj752p7vq-5001.app.github.dev:5001")
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.log(error))
	}
}
