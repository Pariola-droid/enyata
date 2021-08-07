import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import NavSmall from '../../components/home/NavSmall'
import Footer from '../../components/home/Footer'

import styles from '../../styles/faq/faq.module.scss'

class Faq extends Component{
    render(){
        return(
            <div>
                <NavSmall />

                <header className={styles.header}>
                    <h1>
                        Frequently Asked Questions
                    </h1>
                </header>
                
                <section className={styles.faqSect}>
                    <div className={styles.faqWrap}>

                        <div className={styles.faq}>
                            <div className={styles.faqHead}>
                                <h4>
                                    Who can use Klas?
                                </h4>

                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>

                            <div className={styles.faqPara}>
                                <p>
                                    Anyone looking to monetize their knowledge through simple remote experiences.
                                </p>
                            </div>
                        </div>

                        <div className={styles.faq}>
                            <div className={styles.faqHead}>
                                <h4>
                                    What if i want to host a paid class?
                                </h4>

                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>

                            <div className={styles.faqPara}>
                                <p>
                                    Hosting paid classes is currently only available in Nigeria, We would be expanding globally in 2021.
                                </p>
                            </div>
                        </div>

                        <div className={styles.faq}>
                            <div className={styles.faqHead}>
                                <h4>
                                    How much does it cost to use Klas?
                                </h4>

                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>

                            <div className={styles.faqPara}>
                                <p>
                                    It's completely free to use. We charge nothing to create a free class, however, if you're hosting paid classes , we charge a percentage of each booking a s transaction fee. check out our pricing page.
                                </p>
                            </div>
                        </div>

                        <div className={styles.faq}>
                            <div className={styles.faqHead}>
                                <h4>
                                    What is a content library?
                                </h4>

                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>

                            <div className={styles.faqPara}>
                                <p>
                                   Our content library helps you to deliver other forms of educational contents like e-books, courses, etc. The best part is that you can monetize it.
                                </p>
                            </div>
                        </div>

                        <div className={styles.faq}>
                            <div className={styles.faqHead}>
                                <h4>
                                    Why does Klas cost more than Paystack?
                                </h4>

                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>

                            <div className={styles.faqPara}>
                                 <p>
                                    We charge a little higher than payment gateways because we offer more value to online educators and creators. Aside for monetizing the classes, we offer tools to manage students, zoom integration, email marketing, data collection and a lot of third-party integrations all in one platform. We also remit part of the fees to Paystack (payment processor), so their fee is included in our transaction processing fees
                                </p>
                            </div>
                        </div>

                        <div className={styles.faq}>
                            <div className={styles.faqHead}>
                                <h4>
                                     What is Klas pro?
                                </h4>

                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>

                            <div className={styles.faqPara}>
                                 <p>
                                    As a premium user, you get to fully white-label the experience with custom domains, color scheme and branding, CRM integration, community forum and lower transaction fee all for 80 USD per month. Coming soon!

                                </p>
                            </div>
                        </div>

                        <div className={styles.faq}>
                            <div className={styles.faqHead}>
                                <h4>
                                    How do I get my money from paid bookings?
                                </h4>

                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>

                            <div className={styles.faqPara}>
                                 <p>
                                     You need to link a bank account to your profile to accept bookings. We'll deposit into that bank account weekly.
                                </p>
                            </div>
                        </div>                                   

                    </div>
                </section>

                <section className={styles.contact}>
                    <h1>
                        Would you need any further help?
                    </h1>

                    <a href="mailto:hello@tryklas.com">
                        contact support
                    </a>
                </section>

                <Footer />

            </div>
        )
    }
}

export default Faq;