import React from 'react';
import Layout from '../components/layout/layout';
import Image1 from '../images/shopping1.jpg';
import Image2 from '../images/shopping3.jpg';
import Image3 from '../images/shopping4.jpg';
import Image4 from '../images/shopping5.jpg';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
    return (
        <Layout title='Home | Shopping'>
            <div className='shopping-images-container'>
                <div className='shopping-image-grid'>
                    <div className='image-container'>
                        <img src={Image1} alt='ShoppingImage1' />
                        <p className='heading_style'>discounts %</p>
                    </div>
                    <div className='image-container'>
                        <img src={Image2} alt='ShoppingImage2' />
                        <p className='heading_style'>gifts</p>
                    </div>
                    <div className='image-container'>
                        <img src={Image3} alt='ShoppingImage3' />
                        <p className='heading_style'>party wears</p>
                    </div>
                    <div className='image-container'>
                        <img src={Image4} alt='ShoppingImage4' />
                        <p className='heading_style'>lifestyle</p>
                    </div>      <div className='image-container'>
                        <img src={Image1} alt='ShoppingImage1' />
                        <p className='heading_style'>discounts %</p>
                    </div>
                    <div className='image-container'>
                        <img src={Image2} alt='ShoppingImage2' />
                        <p className='heading_style'>gifts</p>
                    </div>
                    <div className='image-container'>
                        <img src={Image3} alt='ShoppingImage3' />
                        <p className='heading_style'>party wears</p>
                    </div>
                    <div className='image-container'>
                        <img src={Image4} alt='ShoppingImage4' />
                        <p className='heading_style'>lifestyle</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;
