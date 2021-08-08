import React, { Component } from "react"
import { Link } from 'react-router-dom'

import styles from "../styles/home/header.module.scss";

import motif from "../../assets/images/motif.svg"
import graph from "../../assets/images/hero-graph.svg"
import dots from "../../assets/images/orange-dots.svg"
import human from "../../assets/images/hero-image.png"
import check from "../../assets/images/hero-check.svg"

class Header extends Component{   

    render(){
        return(
            <div>
                <header className={styles.header}>
                        <div className={styles.wrapper}>
                            <div className={styles.inWrap}>
                                
                                <div className={styles.motifH}>
                                    <img src={motif} alt=""/>
                                </div>

                                <div className={styles.wText}>
                                    <h1>
                                        Build and ship products efficiently with Enyata
                                    </h1>

                                    <p>
                                        Leverage Enyata's world-class engineering teams to get your ideas and projects up and running quickly.
                                    </p>

                                    <Link to="/">
                                        get started
                                    </Link>
                                </div>

                                <div className={styles.wImage}>
                                    <img src={dots} className={styles.img} alt="" />
                                    <img src={graph} className={styles.img} alt=""/>                                    
                                    <img src={human} className={styles.img} alt="" />
                                    
                                    <div className={styles.checkT}>
                                        <img src={check} alt="" />
                                        <p>Best in class engineering for the finest ideas.</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </header>
            </div>
        );
    }
}

export default Header;