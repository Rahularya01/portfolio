import Head from "next/head";
import Header from "../components/header/header";
import HomeSection from "../elements/home/home";

export default function Home() {
	return (
		<>
			<Head>
				<title>Rahul Arya - Front-End Developer</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			{/* Header */}
			<Header />
			{/* Main */}
			<main className="main">
				<HomeSection />
			</main>
			{/* Footer */}
		</>
	);
}