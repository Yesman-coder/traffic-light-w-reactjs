import React, { useState } from "react";

//create your first component
export function Home() {
	const [clickedLight, setClickedLight] = useState("null");

	let redSelected = "";
	if (clickedLight == "red") {
		redSelected = "selected";
	}

	let yellowSelected = "";
	if (clickedLight == "yellow") {
		yellowSelected = "selected";
	}

	let greenSelected = "";
	if (clickedLight == "green") {
		greenSelected = "selected";
	}
	return (
		<div className="">
			<div className="light-top" />

			<div className="trafficlight">
				<div
					id="red"
					className={"lamp red " + redSelected}
					onClick={event => {
						setClickedLight("red");
					}}
				/>
				<div
					id="yellow"
					className={"lamp yellow " + yellowSelected}
					onClick={event => {
						setClickedLight("yellow");
					}}
				/>
				<div
					id="green"
					className={"lamp green " + greenSelected}
					onClick={event => {
						setClickedLight("green");
					}}
				/>
			</div>
			<h1 className="text-center">
				The marvelous light that leads the way
			</h1>
		</div>
	);
}
