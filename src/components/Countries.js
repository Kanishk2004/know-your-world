"use client";
import Image from "next/image";
import styles from "@/styles/countries.module.css";
import Card from "./Card";
import { useEffect, useState } from "react";

const Countries = (props) => {
	let [data, setData] = useState([]);
	// let [searchQuery, setSearchQuery] = useState();

	const getData = async () => {
		let url = `https://restcountries.com/v3.1/all`;
		// setLoading(false);
		let data = await fetch(url);
		let parsedData = await data.json();

		setData(parsedData);
	};

	const showDataByRegion = async (e) => {
		let url = `https://restcountries.com/v3.1/region/${e.currentTarget.id}`;
		// setLoading(false);
		let data = await fetch(url);
		let parsedData = await data.json();
		// document.title = `Countries in - ${e.currentTarget.id}`

		setData(parsedData);
	};

	// const onChange = (e) => {
	// 	setSearchQuery(e.currentTarget.value);
	// 	console.log(searchQuery);
	// };

	// const getCountryByName = async (e) => {
	// 	let url = `https://restcountries.com/v3.1/name/${searchQuery}`;
	// 	// setLoading(false);
	// 	let data = await fetch(url);
	// 	let parsedData = await data.json();
	// 	// document.title = `Countries in - ${e.currentTarget.id}`

	// 	setData(parsedData);
	// 	console.log(e.target.value);
	// 	console.log(searchQuery);
	// };
	useEffect(() => {
		getData();
		// showDataByRegion;
	}, []);

	return (
		<section style={{ backgroundColor: `${props.theme === "" ? "hsl(0, 0%, 98%)" : "hsl(209, 23%, 22%)"}` }}>
			<div className={`${styles.search}`}>
				{/* <div
					className={styles.left}
					style={{ backgroundColor: `${props.theme === "" ? "hsla(0, 0%, 98%, 0)" : "hsl(209, 23%, 22%)"}` }}>
					<Image
						src={`./${props.theme === "" ? "grey" : "white"}-search-icon.svg`}
						alt="Search Icon"
						width={20}
						height={20}
					/>
					<form onSubmit={getCountryByName}>
						<input
							type="text"
							name="country"
							id="country"
							placeholder="Search for a country..."
							style={{ color: `${props.theme === "" ? "black" : "white"}` }}
							onChange={onChange}
							value={searchQuery}
						/>
					</form>
				</div> */}
				<div
					className={styles.dropdown}
					style={{ backgroundColor: `${props.theme === "" ? "hsla(0, 0%, 98%, 0)" : "hsl(209, 23%, 22%)"}` }}>
					<button className={styles.dropbtn} style={{ color: `${props.theme === "" ? "black" : "white"}` }}>
						Filter by Region
					</button>
					<Image
						src={`./${props.theme === "" ? "" : "white-"}caret-down-icon.svg`}
						alt="down arrow"
						width={15}
						height={15}
					/>

					<div
						className={styles.dropdown_content}
						style={{
							color: `${props.theme === "" ? "black" : "white"}`,
							backgroundColor: `${props.theme === "" ? "hsl(0, 0%, 98%)" : "hsl(209, 23%, 22%)"}`,
						}}>
						<p onClick={showDataByRegion} id="africa">
							Africa
						</p>
						<p onClick={showDataByRegion} id="america">
							America
						</p>
						<p onClick={showDataByRegion} id="asia">
							Asia
						</p>
						<p onClick={showDataByRegion} id="europe">
							Europe
						</p>
						<p onClick={showDataByRegion} id="oceania">
							Oceania
						</p>
					</div>
				</div>
			</div>

			<div className={styles.main_flexbox}>
				{data.map((element) => {
					return (
						<Card
							theme={props.theme}
							key={element.name.official}
							imgurl={element.flags.svg}
							name={element.name.common}
							capital={element.capital}
							region={element.region}
							population={element.population}
							code={element.ccn3}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Countries;
