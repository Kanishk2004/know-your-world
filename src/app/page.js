"use client";
import Countries from "@/components/Countries";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import styles from "@/styles/nav.module.css";

export default function Home() {
	const [theme, setTheme] = useState("");

	const toggleTheme = () => {
		if (theme === "") {
			setTheme(styles.navbar_dark);
		} else setTheme("");
	};
	return (
		<header>
			<Navbar theme={theme} toggleTheme={toggleTheme} />
			<Countries theme={theme} />
		</header>
	);
}
