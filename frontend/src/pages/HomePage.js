import React, { useCallback, useEffect, useRef, useState } from 'react';
import Layout from '../components/layout/layout';
import Watch from '../images/homepage2.jpg';
import './HomePage.css';
import { getProductsByCategory } from './service';
import { getAllCategories, getAllProducts, getProductByCategories } from './admin/service';
import AllProducts from './AllProducts';
import SingleProduct from './singleProduct';
import { Prices } from './Prices';
const HomePage = () => {
    const [categories, setCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchCategoryId, setSearchCategoryId] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 0]);

    const handleInputChange = useCallback((id) => {
        setSearchCategoryId((prevIds) =>
            prevIds.includes(id) ? prevIds.filter((item) => item !== id) : [...prevIds, id]
        );
    }, []);

    const handlePriceChange = useCallback((range) => {
        setPriceRange(range);
    }, []);

    const getApi = useCallback(() => {
        getAllProducts()
            .then((response) => {
                setFilteredProducts(response.data);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        Promise.all([getAllCategories(), getApi()])
            .then(([categoriesResponse]) => {
                setCategories(categoriesResponse.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [getApi]);

    useEffect(() => {
        if (searchCategoryId.length === 0 && priceRange[0] === 0 && priceRange[1] === 0) {
            getApi();
        } else {
            getProductByCategories(searchCategoryId, priceRange[0], priceRange[1])
                .then((response) => {
                    setFilteredProducts(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [searchCategoryId, priceRange, getApi]);
    return (
        <Layout title='Home | Shopping'>
            <div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ background: 'white', padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '5px', marginBottom: '20px' }}>
                        <h3 style={{ fontWeight: '700', color: 'black', marginBottom: '10px' }}>Filter by category</h3>
                        <div>
                            {categories && categories.map((category, index) => (
                                <div key={category._id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                    <input
                                        style={{ marginTop: '2px', marginRight: '5px' }}
                                        type="checkbox"
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
                        <h3 style={{ fontWeight: '700', color: 'black', marginBottom: '10px' }}>Filter by price</h3>
                        <div>
                            {Prices && Prices.map((price, index) => (
                                <div key={price._id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                    <input
                                        style={{ marginTop: '2px', marginRight: '5px' }}
                                        type="radio"
                                        id={price._id}
                                        name="price"
                                        value={price._id}
                                        onChange={() => handlePriceChange(price.array)}
                                    />
                                    <label
                                        style={{ fontSize: '16px', color: 'black' }}
                                        htmlFor={price._id}>{price.name}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div >
                        <h3 style={{ textAlign: 'center', fontWeight: '700', color: 'black', marginBottom: '10px' }}>All Products</h3>
                        {filteredProducts.length > 0 ? (
                            <div className="product-container" style={{ display: 'flex', flexWrap: 'wrap' }} >
                                {filteredProducts.map((product, index) => (
                                    <SingleProduct product={product} key={product._id} style={{ flexBasis: 'calc(50% - 10px)' }} />
                                ))}
                            </div>
                        ) : (
                            <div className="product-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {/* {products.map((product, index) => (
                <SingleProduct product={product} key={product._id} style={{ flexBasis: 'calc(45% - 10px)' }} />
            ))} */}
                                <p style={{ fontSize: '16px', color: 'black' }}>None of the categories or price matched</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export default HomePage;
