import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import Navbar from '../../components/home/Navbar'
import Header from '../../components/home/Navbar'
import Show from '../../components/showcase/show'
import Footer from '../../components/home/Footer'

import motif from "../../assets/images/motif.svg"
import graph from "../../assets/images/hero-graph.svg"
import dots from "../../assets/images/orange-dots.svg"
import human from "../../assets/images/hero-image.png"
import check from "../../assets/images/hero-check.svg"
import we_do_img from "../../assets/images/what-we-do-img.png"
import purpleDs from "../../assets/images/purple-dots.svg"
import world from "../../assets/images/world-class.svg"
import rocket from "../../assets/images/rocket.svg"
import scale from "../../assets/images/scale.svg"
import verified from "../../assets/images/verified.svg"
import james from "../../assets/images/James.png"

import styles from '../../styles/home/index.module.scss'

class Home extends Component{

    

    render(){
        return(
            <div>
                <Navbar />

                <main>
                    <Header />

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


                    <section className={styles.why_us}>
                        <div className={styles.wrapper}>
                            <div className={styles._tag}>
                                WHY US
                            </div>

                            <div className={styles.why_content}>
                                <div className={styles.title}>
                                    Projects that matter deserve the best hands
                                </div>

                                <div className={styles.desc}>
                                    Assemble expert, diverse, agile, and scalable engineering teams on-demand to build and ship products quickly and efficiently.
                                </div>
                            </div>
                            
                            <div className={styles.why_items}>
                                <div className={styles.why_box}>
                                    <div className={styles._item}>
                                        <div className={styles.icon}>
                                            <img src={world} alt=""/>
                                        </div>

                                        <div className={ styles._iContent}>
                                            <div className={styles.title}>
                                                World class team
                                            </div>
                                            <div className={styles.desc}>
                                                Engineers at Enyata are technology leaders and domain experts in their fields.
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles._item}>
                                        <div className={styles.icon}>
                                            <img src={rocket} alt=""/>
                                        </div>

                                        <div className={ styles._iContent}>
                                            <div className={styles.title}>
                                                Agile culture
                                            </div>
                                            <div className={styles.desc}>
                                                Design thinking and agile principles are at the core of how our teams operate.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.why_box}>
                                    <div className={styles._item}>
                                        <div className={styles.icon}>
                                            <img src={scale} alt=""/>
                                        </div>

                                        <div className={ styles._iContent}>
                                            <div className={styles.title}>
                                                Scalable teams
                                            </div>
                                            <div className={styles.desc}>
                                                Augment your teams with our on-demand, high-quality engineering teams to build at scale.
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className={styles._item}>
                                        <div className={styles.icon}>
                                            <img src={verified} alt=""/>
                                        </div>

                                        <div className={ styles._iContent}>
                                            <div className={styles.title}>
                                                Successful, diverse teams
                                            </div>
                                            <div className={styles.desc}>
                                                Our teams benefit from the compounding effect of deep expertise and varied experience.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </section>

                    
                    <section className={styles.clients}>
                        <div className={styles.wrapper}>
                            <div className={styles._tag}>
                                OUR CLIENTS
                            </div>

                            <div className={styles.client_content}>
                                <div className={styles.title}>
                                    Don’t take our word for it, here’s what our partners think
                                </div>
                            </div>

                            <div className={styles.testimony}>
                                <div className={styles.test}>
                                    <div className={styles.item}>
                                        <div className={styles.message}>
                                            The accuracy in which they quickly understood what we were trying to build was very impressive.Both the system and app have met our expectations and functions successfully.
                                        </div>

                                        <div className={styles.author}>
                                            <div className={styles.aImg}>
                                                <img src={james} alt=""/>
                                            </div>
                                            <div className={styles.aID}>
                                                <div className={styles.aName}>
                                                    James Schuler
                                                </div>
                                                <div className={styles.aProf}>
                                                    CTO, Kafene
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.item}>
                                        <div className={styles.message}>
                                            The accuracy in which they quickly understood what we were trying to build was very impressive.Both the system and app have met our expectations and functions successfully.
                                        </div>

                                        <div className={styles.author}>
                                            <div className={styles.aImg}>
                                                <img src={james} alt=""/>
                                            </div>
                                            <div className={styles.aID}>
                                                <div className={styles.aName}>
                                                    James Schuler
                                                </div>
                                                <div className={styles.aProf}>
                                                    CTO, Kafene
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.test}>
                                    <div className={styles.item}>
                                        <div className={styles.message}>
                                            The accuracy in which they quickly understood what we were trying to build was very impressive.Both the system and app have met our expectations and functions successfully.
                                        </div>

                                        <div className={styles.author}>
                                            <div className={styles.aImg}>
                                                <img src={james} alt=""/>
                                            </div>
                                            <div className={styles.aID}>
                                                <div className={styles.aName}>
                                                    James Schuler
                                                </div>
                                                <div className={styles.aProf}>
                                                    CTO, Kafene
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.item}>
                                        <div className={styles.message}>
                                            The accuracy in which they quickly understood what we were trying to build was very impressive.Both the system and app have met our expectations and functions successfully.
                                        </div>

                                        <div className={styles.author}>
                                            <div className={styles.aImg}>
                                                <img src={james} alt=""/>
                                            </div>
                                            <div className={styles.aID}>
                                                <div className={styles.aName}>
                                                    James Schuler
                                                </div>
                                                <div className={styles.aProf}>
                                                    CTO, Kafene
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className={styles.cta}>
                        <div className={styles.wrapper}>
                            <div className={styles.content}>
                                <div className={styles.title}>Do you have a next-level idea?</div>
                                <div className={styles.desc}>Reach out and we can create magic together.</div>
                            </div>
                            <div className={styles.button}>
                                <Link to="/">
                                    work with us
                                </Link>
                            </div>
                        </div>
                    </section>


                </main>
                <Footer />

            </div>
        )
    }
}

export default Home;