import React from "react";
import Image from "next/image";
import styles from "./home.module.scss";
import Link from "next/link";
// Images
import prefill from "../../assets/img/perfil.png";
import shapeWawes from "../../assets/img/shape-wawes.svg";
import shapeCircle from "../../assets/img/shape-circle.svg";

const HomeSection = () => {
	const info_one = [
		{
			title: "BIOGRAPHY",
			description:
				"Hi, I'm Rahul, Frontend Developer. Passionate about developing beautiful web and mobile applications.",
		},
		{
			title: "CONTACT",
			description: (
				<>
					Gurdaspur, India <br />
					aryarahul819@gmail.com <br />
					+91 7009391495 <br />
				</>
			),
		},
		{
			title: "SERVICES",
			description: (
				<>
					Web Development
					<br />
					Mobile Application Development <br />
					UI/UX Design <br />
				</>
			),
		},
	];

	const info_two = [
		{title: "YEARS OF EXPERIENCE", description: "06+"},
		{title: "COMPLETED PROJECTS", description: "18+"},
		{title: "COMPANIES WORKED", description: "05+"},
	];
	return (
		<section className={`${styles.home} section`}>
			<div className={`${styles.home__container} container grid section__border`}>
				<div className={`${styles.home__data} grid`}>
					<h1 className={styles.home__title}>
						{`Hi, I'm Rahul`} <br />
						Frontend Developer <br />
						Based In India <br />
					</h1>
					<div className={`${styles.home__blob} grid`}>
						<div className={styles.home__prefil}>
							<Image
								src={prefill}
								alt="home prefill"
							/>
						</div>
						<div className={styles['home__shape-wawes']}>
                            <Image src={shapeWawes} alt='waws'/>
                        </div>
                        <div className={styles['home__shape-circle']}>
                            <Image src={shapeCircle} alt='waws'/>
                        </div>
					</div>
					<ul className={styles.home__social}>
						<Link
							href={"https://www.linkedin.com/in/rahul-arya-0993841b7/"}
							target="_blank"
							className={styles["home__social-link"]}
						>
							<i className="ri-linkedin-box-line"></i>
						</Link>
						<Link
							href={"https://github.com/Rahularya01"}
							target="_blank"
							className={styles["home__social-link"]}
						>
							<i className="ri-github-line"></i>
						</Link>
						<Link
							href={"https://www.instagram.com/rahularya_01/?hl=en"}
							target="_blank"
							className={styles["home__social-link"]}
						>
							<i className="ri-instagram-line"></i>
						</Link>
					</ul>
				</div>
				{/* INFO ONE */}
				<div className={styles.home__info}>
					{info_one.map((item, index) => (
						<div key={index}>
							<h3 className={`${styles["home__info-title"]}`}>{item.title}</h3>
							<p className={`${styles["home__info-description"]}`}>
								{item.description}
							</p>
						</div>
					))}
				</div>
				{/* INFO TWO */}
				<div className={styles.home__info}>
					{info_two.map((item, index) => (
						<div key={index}>
							<h3 className={`${styles["home__info-title"]}`}>{item.title}</h3>
							<p className={`${styles["home__info-number"]}`}>{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HomeSection;
