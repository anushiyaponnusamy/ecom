import React from 'react';
import Layout from '../components/layout/layout';
import Watch from '../images/homepage2.jpg';
import './HomePage.css';

const HomePage = () => {
    return (
        <Layout title='Home | Shopping'>
            <div
                className='shopping-background'
                style={{ backgroundImage: `url(${Watch})` }}
            >
                <div className='shopping-content'>
                    {/* <h1 className='heading_style'>Welcome to Our Watch Shop</h1> */}
                    <p className='paragraph_style'>
                        Explore our collection today and elevate your style with the perfect watch.

                        Shop with confidence, knowing that every watch in our collection is a testament to quality and craftsmanship. We are committed to helping you find a timepiece that you'll cherish for years to come.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;
