import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  apple   from '../images/apple.png'
import  mango  from '../images/mango.jpeg'
import orange  from '../images/orange.jpeg'

function ProductsPage(props) {
  console.log(props)
//  console.log(Object.keys(props))
//  console.log(Object.values(props))
    const products = [
        {
            id: 1,
            title: 'Mango',
            image: mango ,
            price: 300,
            description:'Mango is very tasty fruit'
        },
        {
            id: 2,
            title: 'Orange',
            image: orange ,
            price: 340,
            description:'Orange is very tasty fruit'
        },
        {
            id: 3,
            title: 'Apple',
            image: apple,
            price: 200,
            description:'Apple is very tasty fruit'
        }
    ]
 
    // if(Object.entries(props)!=0)
    // {
    //     products=Object.entries(props)
    // }
    return (
        <div>
            <h1>Products..</h1>                     
            <div className='Productcontainer' style={{display:'inline-flex'}}>
                {
                   Object.entries(props).map((items, key) => {
                        console.log(items)
                        return (
                            <Card style={{ width: '14rem' }} key={key} className='me-4'>
                                <Card.Img variant="top"src={items[1].image}/>
                                <Card.Body>
                                    <Card.Title>{items[1].title}</Card.Title>
                                    <Card.Text>
                                        {items[1].price}
                                    </Card.Text>
                                    <Link to={`/product/${items[1].id}`}><Button variant="primary" >View</Button></Link>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductsPage