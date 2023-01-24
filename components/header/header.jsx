import Link from "next/link";
import React, {useState} from "react";
import styles from "./header.module.scss";

const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	return (
		<header
			className={styles.header}
			id="header"
		>
			<nav className={`container ${styles.nav}`}>
				<Link
					href={"/"}
					className={styles.nav__logo}
				>
					Rahul
				</Link>
				<div
					className={toggleMenu ? `${styles.nav__menu} ${styles['show-menu']}` : `${styles.nav__menu}`}
					id="nav-menu"
				>
					<ul className={`grid ${styles.nav__list}`}>
						{/* Home */}
						<li onClick={() => setToggleMenu(false)} className={styles.nav__item}>
							<Link
								href={"#home"}
								className={styles.nav__link}
							>
								<i className="ri-home-5-line"></i>
								Home
							</Link>
						</li>
						{/* Skills */}
						<li onClick={() => setToggleMenu(false)} className={styles.nav__item}>
							<Link
								href={"#skills"}
								className={styles.nav__link}
							>
								<i className="ri-trophy-line"></i>
								Skills
							</Link>
						</li>
						{/* Qualifications */}
						<li onClick={() => setToggleMenu(false)} className={styles.nav__item}>
							<Link
								href={"#qualification"}
								className={styles.nav__link}
							>
								<i className="ri-book-open-line"></i>
								Qualification
							</Link>
						</li>
						{/* Services */}
						<li onClick={() => setToggleMenu(false)} className={styles.nav__item}>
							<Link
								href={"#services"}
								className={styles.nav__link}
							>
								<i className="ri-briefcase-line"></i>
								Services
							</Link>
						</li>
						{/* Projects */}
						<li onClick={() => setToggleMenu(false)} className={styles.nav__item}>
							<Link
								href={"#projects"}
								className={styles.nav__link}
							>
								<i className="ri-image-line"></i>
								Projects
							</Link>
						</li>
						{/* Contact */}
						<li onClick={() => setToggleMenu(false)} className={styles.nav__item}>
							<Link
								href={"#contact"}
								className={styles.nav__link}
							>
								<i className="ri-chat-3-line"></i>
								Contact
							</Link>
						</li>
					</ul>

					{/* Close Button */}
					<div
						className={styles.nav__close}
						id="nav-close"
						onClick={() => setToggleMenu(false)} 
					>
						<i className="ri-close-line"></i>
					</div>
				</div>

				<div className={styles.nav__buttons}>
					{/* Theme Change Button */}
					{/* <i
						className={`ri-moon-line ${styles["change-theme"]}`}
						id="theme-button"
					></i> */}

					{/* Toggle Button */}
					<div
						className={styles.nav__toggle}
						id="nav-toggle"
						onClick={() => setToggleMenu(true)}
					>
						<i className="ri-menu-4-line"></i>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
