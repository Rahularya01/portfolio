import "../styles/globals.scss";
import "remixicon/fonts/remixicon.css";
import {Roboto, Lora} from "@next/font/google";

const roboto = Roboto({
	weight: ["500", "700"],
	subsets: ["latin"],
});

const lora = Lora({
	weight: ["500", "600"],
	subsets: ["latin"],
});

function MyApp({Component, pageProps}) {
	return (
		<>
			<style
				jsx
				global
			>{`
				body {
					font-family: ${roboto.style.fontFamily};
				}
				h1,
				h2,
				h3 {
					font-family: ${lora.style.fontFamily};
				}
			`}</style>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
