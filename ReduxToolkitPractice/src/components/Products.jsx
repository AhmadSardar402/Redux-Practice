import React from 'react'
import { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {add} from './store/cartSlice'
const Products = () => {

    const dispath = useDispatch();
    const [products,setProducts] = useState([])

    useEffect(()=>{
        //api
        fetch('https://fakestoreapi.com/products')
        .then(data => data.json())
        .then(result => setProducts(result))
    },[]);

    const addToCart = (product) => {
        // dispatch an add action 
        dispath(add(product))
    }

    const cards = products.map(product => (
        <div className='col-md-3' style = {{marginBottom: '5px'}}>
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
      <h1>Product Dashboard</h1>
      <div className="row">
        {cards}
      </div>
    </>
  )
}

export default Products
