import React, {Component} from 'react'
// import {Link} from 'react-router-dom'

import NavOther from '../../components/general/NavOther'
import Header from '../../components/general/header'
// import Cta from '../../components/home/cta'
import Footer from '../../components/home/Footer'

import styles from '../../styles/about/about.module.scss'

class About extends Component{


    render(){
        return(
            <div>
                <NavOther />

                <main>
                    <Header />

                        

                    

                </main>                

                <Footer />

            </div>
        )
    }
}

export default About;