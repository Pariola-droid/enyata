import React, { Component } from "react"
import { Link } from 'react-router-dom'

import styles from "../styles/home/cta.module.scss";

class Cta extends Component{   

    render(){
        return(
            <div>
                <section className={styles.cta}>
                        <div className={styles.wrapper}>
                            <div className={styles.content}>
                                <div className={styles.title}>Do you have a next-level idea?</div>
                                <div className={styles.desc}>Reach out and we can create magic together.</div>
                            </div>
                            <div className={styles.button}>
                                <Link to="/contact">
                                    work with us
                                </Link>
                            </div>
                        </div>
                    </section>
            </div>
        );
    }
}

export default Cta;