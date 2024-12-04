import React, { useState } from "react";
import styles from "./Header.module.css";
import chromeyelogo from "../../assets/chromeye_logo.svg";
import Button from '../atoms/Button/Button';

export default function Header({ pagesInfo }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header className={`${styles.header} container`}>
            <div className={styles.logoContainer}>
                <img src={chromeyelogo} alt="logo" />
            </div>
            <button
                className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ""}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>
            <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}>
                {pagesInfo.map((item, i) => (
                   item.url && <li
                        className={item.url === "#contact" ? styles.contact : ""}
                        key={i}
                    >
                       {item.url === "#contact" ? <Button variation='grey'>{item.name}</Button> : <>{item.name}</> }
                    </li>
                ))}
            </ul>
        </header>
    );
}
