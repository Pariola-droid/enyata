import React, {Component} from "react"
import { Link } from 'react-router-dom'

import styles from "../styles/home/navbar.module.scss";
import logo from "../../assets/images/regnify-white.png"

class Navbar extends Component{   

    render(){
        return(
            <div>
                <nav className={styles.navbar} id="">
                    <div className={styles.navInner}>                        
                        <div className={styles.navLogo}>
                            <Link to="/">
                                <img src={logo} alt="" />
                            </Link>    
                        </div>
                        
                        <ul className={styles.navList}>
                            <li>
                                <Link to="/about">about us</Link>
                            </li>
                            <li>
                                <Link to="/showcase">showcase</Link>
                            </li>
                            <li>
                                <Link to="/contact">contact</Link>
                            </li>
                            <li>
                                <Link to="/contact" className={styles.a}>Work with us</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;