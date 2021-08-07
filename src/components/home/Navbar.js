import React, {Component} from "react"
import { Link } from 'react-router-dom'

import styles from "../styles/home/navbar.module.scss";
import logo from "../../assets/images/enyata.svg"

class Navbar extends Component{   

    render(){
        return(
            <div>
                <nav className={styles.navbar} id="klas">
                    <div className={styles.navInner}>                        
                        <div className={styles.navLogo}>
                            <img src={logo} alt=""/>
                        </div>
                        
                        <ul className={styles.navList}>
                            <li>
                                <Link to="/">about us</Link>
                            </li>
                            <li>
                                <Link to="/">showcase</Link>
                            </li>
                            <li>
                                <Link to="/">academy</Link>
                            </li>
                            <li>
                                <Link to="/" className={styles.a}>Work with us</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;