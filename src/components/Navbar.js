import React from 'react';

//Styles
import styles from "../styles/Navbar.module.css"

//Photo
import avatar from "../assets/images/avatar.jpg"

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.left}>
                <h1 className={styles.logo}>Borzokhan</h1>
            </div>
            <div className={styles.center}>
                <ul className={styles.list}>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <div className={styles.right}>
                <img src={avatar} alt="avatar" />
            </div>
        </nav>
    );
};

export default Navbar;