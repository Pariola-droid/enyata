import React, { Component } from "react"
// import { Link } from 'react-router-dom'

import styles from "../styles/home/we_do.module.scss";

import we_do_img from "../../assets/images/what-we-do-img.png"
import purpleDs from "../../assets/images/purple-dots.svg"

class WeDo extends Component{   

    render(){
        return(
            <div>
                <section className={styles.we_do}>
                        <div className={styles.wrapper}>
                            <div className={styles.we_do_img}>
                                <figure>
                                    <img src={we_do_img} alt="" />
                                </figure>
                                <img src={purpleDs} alt="" />
                            </div>

                            <div className={styles.we_do_text}>
                                <div className={styles.we_do_tag}>
                                    what we do
                                </div>
                                <div className={styles.we_do_title}>
                                    On-demand engineering team augmentation
                                </div>
                                <div className={styles.we_do_desc}>
                                    Build for quality and optimize your product life cycle with our world-class, scalable teams of engineers, data scientists, product managers, and designers.
                                </div>

                                <div className={styles.we_do_items}>
                                    <div className={styles.items}>
                                        <div className={styles.itemsIcon}>
                                            <ion-icon name="chevron-forward-outline"></ion-icon>
                                        </div>

                                        <div className={styles.itemsCut}>
                                            <div className={styles.itemsHeader}>
                                                Team Augmentation
                                            </div>
                                            <div className={styles.itemsContent}>
                                                Leverage top engineering talent at scale to build and ship products fast.
                                            </div>
                                        </div>                                        
                                    </div>

                                    <div className={styles.items}>
                                        <div className={styles.itemsIcon}>
                                            <ion-icon name="chevron-forward-outline"></ion-icon>
                                        </div>

                                        <div className={styles.itemsCut}>
                                            <div className={styles.itemsHeader}>
                                                Application Development
                                            </div>
                                            <div className={styles.itemsContent}>
                                                Leverage top engineering talent at scale to build and ship products fast.
                                            </div>
                                        </div>                                        
                                    </div>

                                    <div className={styles.items}>
                                        <div className={styles.itemsIcon}>
                                            <ion-icon name="chevron-forward-outline"></ion-icon>
                                        </div>

                                        <div className={styles.itemsCut}>
                                            <div className={styles.itemsHeader}>
                                                Data Science & Engineering

                                            </div>
                                            <div className={styles.itemsContent}>
                                                Leverage top engineering talent at scale to build and ship products fast.
                                            </div>
                                        </div>                                        
                                    </div>
                                    
                                    <div className={styles.items}>
                                        <div className={styles.itemsIcon}>
                                            <ion-icon name="chevron-forward-outline"></ion-icon>
                                        </div>

                                        <div className={styles.itemsCut}>
                                            <div className={styles.itemsHeader}>
                                                Blockchain Development
                                            </div>
                                            <div className={styles.itemsContent}>
                                                Leverage top engineering talent at scale to build and ship products fast.
                                            </div>
                                        </div>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
        );
    }
}

export default WeDo;