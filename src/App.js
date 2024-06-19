import { useState } from "react";
import "./App.css";
import search from "./assets/icons/search.svg";
import { useStateContext } from "./Context/ind.js";
import BackgroundLayout from "./components/BackgroundLayout";
import WeatherCard from "./components/WeatherCard";
import MiniCard from "./components/MiniCard";

function App() {
	const [input, setInput] = useState("");
	const { weather, thisLocation, values, place, setPlace } =
		useStateContext();

	const submitCity = () => {
		setPlace(input);
		setInput("");
	};

	return (
		<div className="wrapper montserrat">
			<nav className="navbar">
				<h1 className="mainHeading">SkyGuard</h1>

				<div className="inputBox">
					<img
						src={search}
						alt="search"
						className="searchimage"
					></img>
					<input
						type="text"
						onKeyUp={(e) => {
							if (e.key === "Enter") {
								submitCity();
							}
						}}
						className="inputField1"
						placeholder="Search City"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					></input>
				</div>
			</nav>
			<BackgroundLayout></BackgroundLayout>
			<main className="mainContainer">
				<WeatherCard
					place={thisLocation}
					windspeed={weather.wspd}
					humidity={weather.humidity}
					temperature={weather.temp}
					heatIndex={weather.heatindex}
					iconString={weather.conditions}
					conditions={weather.conditions}
				></WeatherCard>

				<div className="mini-card">
					{values?.slice(1, 7).map((curr) => {
						return (
							<MiniCard
								key={curr.datetime}
								time={curr.datetime}
								temp={curr.temp}
								iconString={curr.conditions}
							></MiniCard>
						);
					})}
				</div>
			</main>
		</div>
	);
}

export default App;
