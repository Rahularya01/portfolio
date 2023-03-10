import Head from "next/head";
import Header from "../components/header/header";
import HomeSection from "../elements/home/home";
import Qualification from "../elements/qualification/qualification";
import Skills from "../elements/skills/skills";

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
        <Skills />
        <Qualification />
      </main>
      {/* Footer */}
    </>
  );
}
