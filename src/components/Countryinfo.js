import Image from "next/image";
import styles from "@/styles/countryinfo.module.css";
import Link from "next/link";

const Countryinfo = (props) => {
	let { flagurl, name, nativeName, population, region, subRegion, capital, domain, currency, languages, borders } =
		props;

	return (
		<div className={styles.parent_div}>
			<Link href={"/"} className={styles.back_btn}>
				{" "}
				<Image src={"../arrow-left.svg"} width={20} height={20} alt="Back arrow" /> Back
			</Link>
			<div className={styles.info}>
				<div className={styles.left}>
					<Image className={styles.flag_img} src={flagurl} width={470} height={320} alt={"flag img"} />
				</div>
				<div className={styles.right}>
					<h1>{name}</h1>
					<div className={styles.details}>
						<div className="detail_left">
							<p>
								Native Name: &nbsp; <span> {[nativeName]}</span>
							</p>
							<p>
								Population: &nbsp; <span> {population}</span>
							</p>
							<p>
								Region: &nbsp; <span> {region}</span>
							</p>
							<p>
								Sub Region: &nbsp;<span> {subRegion}</span>
							</p>
							<p>
								Capital: &nbsp;<span> {capital}</span>
							</p>
						</div>

						<div className="detail_right">
							<p>
								Top Level Domain: &nbsp; <span>{domain}</span>
							</p>
							<p>
								Currrencies: &nbsp; <span>{currency}</span>
							</p>
							<p>
								Languages: &nbsp;
								{languages.map((language) => (
									<span>{language}&nbsp; &nbsp;</span>
								))}
							</p>
						</div>
					</div>

					<p className={styles.bor_country}>
						Border countries: &nbsp;
						{borders.map((country) => (
							<button>{country}</button>
						))}{" "}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Countryinfo;
