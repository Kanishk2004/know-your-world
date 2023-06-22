'use client'
import Countryinfo from "@/components/Countryinfo";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import styles from "@/styles/nav.module.css";

const page = async ({ params }) => {
	const [mode, setmode] = useState("");

	const toggleMode = () => {
		if (mode === "") {
			setmode(styles.navbar_dark);
		} else setmode("");
	};

	const code = params.id;

	let contryUrl = `https://restcountries.com/v3.1/alpha/${code}`;
	let data = await fetch(contryUrl);
	let parsedData = await data.json();


	let flagurl = parsedData[0].flags.svg;
	let name = parsedData[0].name.common;
	let nativeName = Object.values(parsedData[0].name.nativeName)[0].official;
	let population = parsedData[0].population;
	let region = parsedData[0].region;
	let subRegion = parsedData[0].subregion;
	let capital = parsedData[0].capital;
	let domain = parsedData[0].tld[0];
	let currency = Object.values(parsedData[0].currencies)[0].name;
	let languages = Object.values(parsedData[0].languages);
	let borders = parsedData[0].borders;

	return (
		<header>
			<Navbar theme={mode} toggleTheme={toggleMode} />
			<Countryinfo
				flagurl={flagurl}
				name={name}
				nativeName={!nativeName ? "null" : nativeName}
				population={population}
				region={region}
				subRegion={subRegion}
				capital={capital}
				domain={domain}
				currency={currency}
				languages={languages}
				borders={!borders ? ["No neighbour country"] : borders}
			/>
		</header>
	);
};

export default page;
