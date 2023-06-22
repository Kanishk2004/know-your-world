import Image from "next/image";
import styles from "@/styles/card.module.css";
import Link from "next/link";

const Card = (props) => {
	let { imgurl, capital, name, region, population, code } = props;
	return (
		<Link href={`/country/${code}`} style={{ textDecoration: "none" }}>
			<section
				className={styles.card}
				style={{ backgroundColor: `${props.theme === "" ? "hsla(0, 0%, 98%, 0)" : "hsl(209, 23%, 22%)"}` }}>
				<div>
					<Image className={styles.flag} src={imgurl} alt="Country flag" width={235} height={160} />
				</div>

				<div className={styles.info} style={{ color: `${props.theme === "" ? "black" : "white"}` }}>
					<h3>{name}</h3>

					<div className={styles.details}>
						<p>
							<span>Population:</span> {population}
						</p>
						<p>
							<span>Region:</span> {region}
						</p>
						<p>
							<span>Capital:</span> {capital}
						</p>
					</div>
				</div>
			</section>
		</Link>
	);
};

export default Card;
