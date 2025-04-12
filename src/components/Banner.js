import React from 'react';

//Styles
import styles from '../styles/Banner.module.css'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <img src='https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=''/>
            <div className={styles.text}>
                <div className={styles.left}>
                    <h2><span className={styles.animationText}>Black Friday</span>  is Coming...</h2>
                </div>
                <div className={styles.right}>
                    <h3 className={styles.animationText2}>Buy now <br/> Pay later</h3>
                    <p>1 3 4 ipsum dolor sit amet sed. Kasd diam sit lorem sea ullamcorper feugait dolor sed rebum et.</p>
                    <button className={styles.btn}>Buy now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;