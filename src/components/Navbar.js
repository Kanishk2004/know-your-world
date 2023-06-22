import Image from "next/image";
import styles from "@/styles/nav.module.css";

const Navbar = (props) => {
	return (
		<nav className={`${styles.navbar} ${props.theme}`}>
			<div className={styles.brand}>
				<h1>Where in the world?</h1>
			</div>

			<div className={styles.theme_selector} onClick={props.toggleTheme}>
				{props.theme === "" ? (
					<Image src={"../moon.svg"} width={20} height={20} alt="light theme moon" />
				) : (
					<Image src={"../white-moon.svg"} width={20} height={20} alt="dark theme moon" />
				)}
				<h3>Dark Mode</h3>
			</div>
		</nav>
	);
};

export default Navbar;
