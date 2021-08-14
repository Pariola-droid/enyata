import React, { useState } from "react"
import { Link } from 'react-router-dom'

import styles from "../styles/home/nav_mobile.module.scss";
import logo from "../../assets/images/regnify-white.png"

function NavMobile() {
        
    // const [active, setActive] = useState{false}
    return(
        <div>
            <nav className={styles.navbar} id="klas">
                <div className={styles.navInner}>
                    <div className={styles.navLogo}>
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                        
                    <div className={styles.menuI}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                        
                        
                </div>
            </nav>
        </div>
    );
}        

export default NavMobile;