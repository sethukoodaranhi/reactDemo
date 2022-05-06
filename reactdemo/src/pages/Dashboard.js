import React from 'react'
import ProductsPage from './ProductsPage'
import { InputGroup, FormControl, Button,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import apple from '../images/apple.png'
import mango from '../images/mango.jpeg'
import orange from '../images/orange.jpeg'

function Dashboard() {
    const [Searchkey, setSearchkey] = useState('')    
    const [Productlist, setProductlist] = useState([
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
    

    ])
   
    
    
    console.log("prdcts...."+JSON.stringify(Productlist))

    // const SearchHandler = () => {
    //     let filter=products.filter(p=>p.title='mango')
    //     console.log("mangoooo"+filter)
    //     setfltrRslt(filter)
    // }
   
    
   
   const SearchHandler=()=>{
    let rslt=Productlist.filter((p)=>{
        console.log(p.title.toLowerCase().includes(Searchkey))
        return p.title.toLowerCase().includes(Searchkey)        
    }) 
    setProductlist(rslt)
    // console.log(",,,"+FltrRslt) 
    // console.log("working.."+JSON.stringify(rslt))
   
   }
   
     console.log("ssss"+Searchkey)  
    return (
        <div>
            <center>
                <h1>
                    This is your Dashboard
                </h1>
                
                <p>Welcome to the Dashboard</p>
                <div className='search'>
                    <InputGroup className="mb-3 w-50">
                        <FormControl
                            placeholder="search here..."
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            onChange={(e) => {setSearchkey(e.target.value)}}
                        />
                        <Button variant="outline-secondary" id="button-addon2" onClick={SearchHandler}  >
                            search
                        </Button>
                    </InputGroup>

                </div>
                <div>
                <ProductsPage  {...Productlist}
                />
                
                </div>
            </center>

        </div>
    )
}

export default Dashboard