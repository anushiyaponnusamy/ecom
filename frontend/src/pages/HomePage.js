import React, { useEffect, useRef, useState } from 'react';
import Layout from '../components/layout/layout';
import Watch from '../images/homepage2.jpg';
import './HomePage.css';
import { getProductsByCategory } from './service';
import { getAllCategories, getAllProducts } from './admin/service';
import AllProducts from './AllProducts';
import SingleProduct from './singleProduct';

const HomePage = () => {

    const [categories, setCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [searchCategoryId, setSearchCategoryId] = useState("");
    const handleInputChange = (id) => {
        setSearchCategoryId(id)
    }
    const getApi = () => {
        getAllProducts()
            .then((response) => {
                console.log(response.data)
                setProducts(response.data);
            })
            .catch((err) => console.log(err));
    }
    useEffect(() => {
        getAllCategories().then((response) => {
            setCategories(response.data)
        }).catch((err) => { console.log(err) })
        getApi()
        if (searchCategoryId) {
            getProductsByCategory(searchCategoryId).then((response) => {
                if (response.data.length > 0) {
                    setFilteredProducts(response.data)
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    }, [searchCategoryId])
    return (
        <Layout title='Home | Shopping'>
            <div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ background: 'white', padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '5px', marginBottom: '20px' }}>
                        <h3 style={{ fontWeight: '700', color: 'black', marginBottom: '10px' }}>Filter by category</h3>
                        <div>
                            {categories && categories.map((category, index) => (
                                <div key={category._id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                    <input
                                        style={{ marginTop: '2px', marginRight: '5px' }}
                                        type="radio"
                                        id={category._id}
                                        name="category"
                                        value={category._id}
                                        onChange={() => handleInputChange(category._id)}
                                    />
                                    <label
                                        style={{ fontSize: '16px', color: 'black' }}
                                        htmlFor={category._id}>{category.name}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 style={{ textAlign: 'center', fontWeight: '700', color: 'black', marginBottom: '10px' }}>All Products</h3>
                        {filteredProducts.length > 0 ? (
                            <div className="product-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                {filteredProducts.map((product, index) => (
                                    <SingleProduct product={product} key={product._id} style={{ flexBasis: 'calc(50% - 10px)' }} />
                                ))}
                            </div>
                        ) : (
                            <div className="product-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                {products.map((product, index) => (
                                    <SingleProduct product={product} key={product._id} style={{ flexBasis: 'calc(45% - 10px)' }} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export default HomePage;
