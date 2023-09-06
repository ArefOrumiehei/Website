import React from 'react';

//Styles
import styles from "../styles/Navbar.module.css"

//Photo
import avatar from "../assets/images/photo_2022-09-27_14-08-39.jpg"

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li>Home Page</li>
                    <li>Products</li>
                    <li>About Us</li>
                </ul>
            </div>

            <div className={styles.logo}>
                <img src={avatar} alt="avatar" />
            </div>
        </nav>
    );
};

export default Navbar;