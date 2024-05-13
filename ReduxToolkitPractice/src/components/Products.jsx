import React from 'react'
import { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {add} from './store/cartSlice'
import { getProducts } from './store/productSlice'


const Products = () => {

    const dispath = useDispatch();
    const {data: products} = useSelector(state => state.products)

    useEffect(()=>{
        //api
        // fetch('https://fakestoreapi.com/products')
        // .then(data => data.json())
        // .then(result => setProducts(result))

        
        // Dispatch an action to fetch products
        dispath(getProducts());


    },[]);

    const addToCart = (product) => {
        // dispatch an add action 
        dispath(add(product))
    }

    const cards = products.map(product => (
        <div className='col' style = {{marginBottom: '5px'}}>
            <Card key={product.id} style={{ width: '18rem'}} className='h-100'>
                <div className="text-center">
                    <Card.Img variant="top" src={product.image} style = {{width: '100px', height: '130px' }}/>
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        USD: {product.price}
                    </Card.Text>
                </Card.Body>
                <div className="Card.Footer">
                    <Button variant="primary" onClick={()=> addToCart(product)}>Add to Cart</Button>
                </div>

            </Card>
        </div>
    ))
  return (
    <>
        <div className="row">
            {cards}
        </div>
    </>
  )
}

export default Products
