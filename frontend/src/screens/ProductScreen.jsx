import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../products'
import { Link } from 'react-router-dom'
import {Row, Col, Image, Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'

export const ProductScreen = () => {
    const {id: productId} = useParams()
    const product = products.find((p)=> p._id===productId);
    
  return (
    <>
        <Link to='/' className='btn btn-light my-3'>
            Back
        </Link>

        <Row>
            <Col md={5}>
            <Image src={product.image} alt={product.name} fluid/>
            </Col>
            <Col md={4}>
            <ListGroup>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                ₹ {product.price}
                </ListGroup.Item>
                <ListGroup.Item>
                   <Rating value={product.rating} text={product.numReviews}/>
                </ListGroup.Item>
                <ListGroup.Item>
                   {product.description}
                </ListGroup.Item>
            </ListGroup>
            </Col>
            <Col md={3}>
                <ListGroup>
                    <ListGroup.Item>
                        <strong>₹ {product.price}</strong>
                    </ListGroup.Item>
                    <ListGroup.Item >
                       <strong> Stock: {product.countInStock>0?'In Stock':'Out Of Stock'}
                       </strong>                    
                    </ListGroup.Item>
                    <ListGroup.Item >
                        <Button className='btn-block' type='button' disabled={product.countInStock===0} >Add to cart</Button>
                    </ListGroup.Item>

                </ListGroup>
            </Col>
        </Row>
        
    </>
  )
}
