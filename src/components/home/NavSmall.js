import React, { Component } from "react"
import { Link } from 'react-router-dom'

import styles from "../styles/home/navOther.module.scss";
// import logo from "../../assets/images/klas-logo.png"

class Navbar extends Component{   

    render(){
        return(
            <div>
                <nav className={styles.navbar} id="klas">
                    <div className={styles.navInner}>
                        <Link to="/" className={styles.navLogo}>
                            {/*<img src={logo} alt="" />*/}
                            <h1>Klas.</h1>
                        </Link>
                        
                        <a href="https://web.elpisacademy.us/#/" className={styles.get}>
                            get started
                        </a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;