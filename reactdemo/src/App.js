import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Customer from './pages/Customer';
import ProductsPage from './pages/ProductsPage';
import Singlepage from './pages/Singlepage';

function App() {
  const route = [{
    exact: true,
    path: '/',
    element: <Dashboard />
  },
  {
    exact: true,
    path: '/login',
    element: <Login />
  },
  {
    exact: true,
    path: '/products',
    element: <ProductsPage />
  }, {
    exact: true,
    path: '/customer',
    element: <Customer />
  },
  {
    exact: true,
    path: '/product/:id',
    element: <Singlepage />
  },

  ]



  return (
    <BrowserRouter>
      <Routes>
      {
        route.map((value, key) => {
          return (
            
              <Route  path={value.path} element={value.element} />            
            
          )
        })
      }
      {/* <Route path="/" element={<Dashboard/>}/>        
        <Route exact path="login" element={<Login />} />
        <Route path="customer" element={<Customer />} />
        <Route path="products" element={<ProductsPage />} />      */}
      </Routes>
    </BrowserRouter>
  );

}

export default App;
