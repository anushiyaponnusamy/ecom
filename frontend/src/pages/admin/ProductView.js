import React, { useEffect, useState } from 'react'
import { getAllProducts } from './service';
import { Card, CardContent, Grid, Typography } from '@mui/material';
const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: '100%',
};

const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover', // Ensures the image fully covers the card
};
const ProductView = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getAllProducts().then((response) => {
            setProducts(response.data)
        }).catch((err) => console.log(err));
    }, [])
    return (
        <Grid container spacing={2}>
            {products.map((product, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card style={cardStyle}>
                        <CardContent>
                            <div style={{ height: '80%' }}>
                                <img src={product.photo} alt={product.name} style={imageStyle} />
                            </div>
                            <Typography variant="h6">{product.name}</Typography>
                            <Typography variant="h6">{product.price}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

export default ProductView