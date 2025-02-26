import { Card, CardBody, CardFooter, CardImg, CardTitle } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'


export const Product = ({product}) => {
  return (
    <>
      <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product._id}`}><Card.Img src={product.image}/></Link>
          <CardBody>
          <Link to={`/product/${product._id}`}>
            <CardTitle as='div' className='product-title'>
              {product.name}
            </CardTitle>
          </Link>
          
            
            <Card.Text as='h3'>
              {product.brand}
            </Card.Text>
          </CardBody>
          <CardFooter>
            {product.price}
              <Card.Text>
                <Rating value={product.rating} text={product.numReviews}/>
              </Card.Text>
          </CardFooter>
        
      </Card>
    </>
  )
}

export default Product;