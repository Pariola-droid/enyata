import React, {Component} from 'react'
// import {Link} from 'react-router-dom'

import Navbar from '../../components/home/Navbar'
import Header from '../../components/home/header'
import WeDo from '../../components/home/WeDo'
import Show from '../../components/showcase/show'
import WhyUs from '../../components/home/WhyUs'
import Clients from '../../components/home/clients'
import Cta from '../../components/home/cta'
import Footer from '../../components/home/Footer'


import styles from '../../styles/home/index.module.scss'

class Home extends Component{

    

    render(){
        return(
            <div>
                <Navbar />

                <main>
                    
                    <Header />
                    <WeDo />           

                    <section className={styles.projects}>
                        <div className={styles.wrapper}>
                            <div className={styles.pro_tag}>
                                FEATURED PROJECTS
                            </div>

                            <div className={styles.pro_items}>
                                <Show />
                            </div>    
                            <div className={styles.pro_items}>
                                <Show />
                            </div>    
                            <div className={styles.pro_items}>
                                <Show />
                            </div> 
                        </div>
                    </section>

                    <WhyUs />                   
                    <Clients />
                    <Cta />              

                </main>

                <Footer />

            </div>
        )
    }
}

export default Home;