import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ColorRing } from 'react-loader-spinner';

const Datafetch = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                console.log(response.data);
                setProducts(response.data);
                setLoading(false); // Set loading to false when the data is fetched
            } catch (error) {
                console.log(error);
            }
        };

        // Simulate a 2-second delay before fetching the data
        const delay = setTimeout(() => {
            fetchData();
            clearTimeout(delay);
        }, 2000);

        return () => clearTimeout(delay); // Clean up the timeout if the component unmounts
    }, []);

    return (
        <>
            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                    <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    />
                </div>
            ) : (
                products.map((item, i) => (
                    <div key={i}>
                        <h1 className='text-primary'>{item.title}</h1>
                        <h2>${item.price}</h2>
                    </div>
                ))
            )}
        </>
    );
};

export default Datafetch;
