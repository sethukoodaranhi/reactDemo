import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import apple from '../images/apple.png'
import mango from '../images/mango.jpeg'
import orange from '../images/orange.jpeg'
export default function Singlepage() {
    const [SPrdct, setSPrdct] = useState([])
    const { id } = useParams()
    console.log(id)
    const products = [
        {
            id: 1,
            title: 'Mango',
            image: mango,
            price: 300,
            description: 'Mango is very tasty fruit'
        },
        {
            id: 2,
            title: 'Orange',
            image: orange,
            price: 340,
            description: 'Orange is very tasty fruit'
        },
        {
            id: 3,
            title: 'Apple',
            image: apple,
            price: 200,
            description: 'Apple is very tasty fruit'
        }
    ]
    useEffect(() => {
        const Sproduct = (products.find(s => s.id == id))
        console.log("productslist..." + JSON.stringify(Sproduct))
        setSPrdct(Sproduct)

    }, [])

    //    console.log("uinghgggggg"+JSON.stringify(SPrdct))
    return (
        <div>

            <Card style={{ width: '20rem' }}  className='me-4'>
                <Card.Img variant="top" src={SPrdct.image} />
                <Card.Body>
                    <Card.Title>{SPrdct.title}</Card.Title>
                    <Card.Text>
                        {SPrdct.price}
                    </Card.Text>
                    <Card.Text>
                        {SPrdct.description}
                    </Card.Text>
                </Card.Body>
            </Card>


        </div>
    )
}
