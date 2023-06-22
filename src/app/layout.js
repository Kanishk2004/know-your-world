import "./globals.css";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
	title: "Where in the world?",
	description: "Get relavent info about all the countries of the world!",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={nunitoSans.className}>{children}</body>
		</html>
	);
}
