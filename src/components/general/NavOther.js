import React, {Component} from "react"
import { Link } from 'react-router-dom'

import styles from "../styles/general/navOther.module.scss";
import logo_purple from "../../assets/images/enyata_purple.svg"

class NavOther extends Component{   

    render(){
        return(
            <div>
                <nav className={styles.navbar} id="klas">
                    <div className={styles.navInner}>                        
                        <div className={styles.navLogo}>
                            <Link to="/">
                                <img src={logo_purple} alt="" />
                            </Link>   
                        </div>
                        
                        <ul className={styles.navList}>
                            <li>
                                <Link to="/">about us</Link>
                            </li>
                            <li>
                                <Link to="/showcase">showcase</Link>
                            </li>
                            <li>
                                <Link to="/">contact</Link>
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

export default NavOther;