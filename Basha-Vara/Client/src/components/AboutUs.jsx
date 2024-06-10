import React from 'react';
import styles from './AboutUs.module.css';
import Navbar from './Navbar';



const AboutUs = () => {
    return (
        <div>
            <Navbar/>
        <div className={styles.wrapper}>
          
           
            <div className={styles.container}>
          
                <header className={styles.header}>
                    <h1>Welcome to DREAM  HOME BD</h1>
                    <p>Your Trusted Partner in Home Rentals</p>
                </header>
                
                <section className={styles.mission}>
                    <h3>Our Mission</h3>
                    <p>
                        Our mission is to revolutionize the home rental market in Bangladesh by providing transparent, reliable, and convenient rental services that cater to the diverse needs of our clients.
                    </p>
                </section>
                
                <section className={styles.vision}>
                    <h3>Our Vision</h3>
                    <p>
                        We envision a future where everyone in Bangladesh has access to a comfortable and affordable home, fostering a community of satisfied tenants and landlords.
                    </p>
                </section>
                
                <section className={styles.services}>
                    <h3>Our Services</h3>
                    <ul>
                        <li>Comprehensive Listings: Wide range of rental properties across major cities and towns in Bangladesh.</li>
                        <li>Verified Properties: Ensuring high standards for quality and safety.</li>
                        <li>Personalized Assistance: Supporting you throughout the rental process.</li>
                    </ul>
                </section>
                
                <section className={styles.whyChooseUs}>
                    <h3>Why Choose Us</h3>
                    <ul>
                        <li>Local Expertise: Extensive knowledge of the Bangladeshi real estate market.</li>
                        <li>Customer-Centric Approach: Commitment to excellent service and support.</li>
                        <li>Innovative Solutions: Leveraging technology to simplify the rental process.</li>
                    </ul>
                </section>
                
                <section className={styles.team}>
                    <h3>Meet the Team</h3>
                    <p>Meet our passionate team dedicated to helping you find your Dream Home.</p>
                    <div className={styles.teamMembers}>
                        <div className={styles.teamMember}>
                            <img src="images/Jerin.jpeg" alt="Team Member 1" />
                            <h3>Nusrat Jahan Jerin</h3>
                
                        </div>
                        <div className={styles.teamMember}>
                            <img src="images/Sadia.jpg" alt="Team Member 2" />
                            <h3>Sadia Farzana Jessia</h3>
                           
                        </div>
                    </div>
                </section>
            
                
                <section className={styles.journey}>
                    <h3>Our Journey</h3>
                    <p>Founded in 2024, DREAM  HOME BD started with a simple goal: to simplify the home rental process for people in Bangladesh.</p>
                </section>
                
                <section className={styles.community}>
                    <h3>Commitment to Community</h3>
                    <p>At DREAM  HOME BD, we believe in giving back to the community. We actively support local charities and initiatives aimed at improving housing and living conditions for underprivileged families in Bangladesh.</p>
                </section>
                
                <section className={styles.contact}>
                    <h3>Contact Us</h3>
                    <p>Email: info@DREAM  HOME BD.com</p>
                    <p>Phone: +8801792530123</p>
                    <p>Address: Akhalia, Sylhet, Bangladesh</p>
                </section>
                
                <footer className={styles.footer}>
                    <p>Ready to find your next home? <a href="/homePage">Browse our listings</a> or contact us today!</p>
                </footer>
            </div>
        </div>
        </div>
    );
};

export default AboutUs;
