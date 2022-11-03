import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './Layout/Layout';
import Dashboard from './Pages/Dashboard/Dashboard';


function App() {


  return (
   <>
   
   <Routes>

    <Route path='/*'
    element={

      <Layout>
        <Dashboard />
      </Layout>
    }
    >

    </Route>
   </Routes>
   
   </>
  )
}

export default App
