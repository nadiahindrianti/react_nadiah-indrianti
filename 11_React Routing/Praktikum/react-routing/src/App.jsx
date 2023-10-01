import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import CreateProduct from './pages/createProduct'
import LandingPage from './pages/landingPage'
import React, { useEffect } from 'react';

function App() {

  useEffect (() => {
    alert("Welcome")
  }, []);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-product" element={<CreateProduct />} />
        {/* ... etc. */}
      </>
    )
  );  

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
    
  )
}

export default App
