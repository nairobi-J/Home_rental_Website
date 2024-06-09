import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1>Welcome to DREAM  HOME BD</h1>
                    <p>Your Trusted Partner in Home Rentals</p>
                </header>
                
                <section className={styles.mission}>
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to revolutionize the home rental market in Bangladesh by providing transparent, reliable, and convenient rental services that cater to the diverse needs of our clients.
                    </p>
                </section>
                
                <section className={styles.vision}>
                    <h2>Our Vision</h2>
                    <p>
                        We envision a future where everyone in Bangladesh has access to a comfortable and affordable home, fostering a community of satisfied tenants and landlords.
                    </p>
                </section>
                
                <section className={styles.services}>
                    <h2>Our Services</h2>
                    <ul>
                        <li>Comprehensive Listings: Wide range of rental properties across major cities and towns in Bangladesh.</li>
                        <li>Verified Properties: Ensuring high standards for quality and safety.</li>
                        <li>Personalized Assistance: Supporting you throughout the rental process.</li>
                    </ul>
                </section>
                
                <section className={styles.whyChooseUs}>
                    <h2>Why Choose Us</h2>
                    <ul>
                        <li>Local Expertise: Extensive knowledge of the Bangladeshi real estate market.</li>
                        <li>Customer-Centric Approach: Commitment to excellent service and support.</li>
                        <li>Innovative Solutions: Leveraging technology to simplify the rental process.</li>
                    </ul>
                </section>
                
                {/* <section className={styles.team}>
                    <h2>Meet the Team</h2>
                    <p>Meet our passionate team dedicated to helping you find your next home.</p>
                    <div className={styles.teamMembers}>
                        <div className={styles.teamMember}>
                            <img src="team_member1.jpg" alt="Team Member 1" />
                            <h3>John Doe</h3>
                            <p>Property Manager</p>
                        </div>
                        <div className={styles.teamMember}>
                            <img src="team_member2.jpg" alt="Team Member 2" />
                            <h3>Jane Smith</h3>
                            <p>Customer Service Specialist</p>
                        </div>
                    </div>
                </section> */}
                
                <section className={styles.testimonials}>
                    <h2>Customer Testimonials</h2>
                    <blockquote>
                        “Finding a rental home in Dhaka was a breeze with DREAM  HOME BD. The team was professional, helpful, and made the entire process stress-free.” - A. Rahman
                    </blockquote>
                </section>
                
                <section className={styles.journey}>
                    <h2>Our Journey</h2>
                    <p>Founded in 2015, DREAM  HOME BD started with a simple goal: to simplify the home rental process for people in Bangladesh. Over the years, we have grown to become a trusted name in the industry, helping thousands of tenants find their perfect homes.</p>
                </section>
                
                <section className={styles.community}>
                    <h2>Commitment to Community</h2>
                    <p>At DREAM  HOME BD, we believe in giving back to the community. We actively support local charities and initiatives aimed at improving housing and living conditions for underprivileged families in Bangladesh.</p>
                </section>
                
                <section className={styles.contact}>
                    <h2>Contact Us</h2>
                    <p>Email: info@DREAM  HOME BD.com</p>
                    <p>Phone: +880-123-456-789</p>
                    <p>Address: 123 Renters Lane, Dhaka, Bangladesh</p>
                </section>
                
                <footer className={styles.footer}>
                    <p>Ready to find your next home? <a href="/listings">Browse our listings</a> or <a href="/contact">contact us</a> today!</p>
                </footer>
            </div>
        </div>
    );
};

export default AboutUs;
