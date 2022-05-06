import React from 'react'
import { Form ,Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function Login() {
    const navigate=useNavigate()
    const LoginHandler=()=>{
        navigate('/')
    }
    return (
        <div>
            <h1 className='text-center'>Login Page</h1>
            <div className='container  mt-5 pt-2 shadow' style={{width:'30%',height:'250px'}}>
                <Form.Control className='mt-5' type="text" placeholder="Enter your name" />
                <Form.Control   className='mt-3' type="password" placeholder="Enter your password"  />
                <Button className='mt-2 text-center'  type="submit"onClick={LoginHandler}>Login</Button>
            </div>
        </div>
    )
}

export default Login