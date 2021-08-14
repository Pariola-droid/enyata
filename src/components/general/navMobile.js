import React, {Component} from "react"
import { Link } from 'react-router-dom'

import styles from "../styles/general/nav_mobile.module.scss";
import logo_blue from "../../assets/images/regnify-blue.png"

class NavMobile extends Component{   

    render(){
        return(
            <div>
                <nav className={styles.navbar} id="klas">
                    <div className={styles.navInner}>                        
                        <div className={styles.navLogo}>
                            <Link to="/">
                                <img src={logo_blue} alt="" />
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
}

export default NavMobile;