import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Button } from 'react-bootstrap'
import { remove } from './store/cartSlice'

const Cart = () => {

  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeFromCart =(id) =>{
    // dispatch a remove action
    dispatch(remove(id))
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
                <Button variant="danger" onClick={()=> removeFromCart(product.id)}>Remove Item</Button>
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

export default Cart
