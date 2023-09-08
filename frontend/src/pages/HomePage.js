import React from 'react';
import Layout from '../components/layout/layout';
import Watch from '../images/watchhomepage.jpg';
import './HomePage.css';

const HomePage = () => {
    return (
        <Layout title='Home | Shopping'>
            <div
                className='shopping-background'
                style={{ backgroundImage: `url(${Watch})` }}
            >
                <div className='shopping-content'>
                    <h1 className='heading_style'>Welcome to Our Watch Shop</h1>
                    <p className='paragraph_style'>
                        <p className='highlighted-text'>
                            Explore our collection today and elevate your style with the perfect watch.
                        </p>
                        Discover the World of Timepieces

                        At our watch shop, we bring you a curated selection of the finest timepieces for every style and occasion. Whether you're looking for a classic wristwatch, a sporty chronograph, or an elegant dress watch, we have something for everyone.

                        Our collection features watches from renowned brands, each crafted with precision and attention to detail. Explore our range of designs, materials, and functionalities to find the perfect watch that suits your lifestyle.

                        Whether you're dressing up for a formal event, going on an adventure, or simply keeping track of time in your everyday life, our watches are not just timekeepers; they are expressions of your personality and taste.

                        Shop with confidence, knowing that every watch in our collection is a testament to quality and craftsmanship. We are committed to helping you find a timepiece that you'll cherish for years to come.


                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;
