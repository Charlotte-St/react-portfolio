//import { useState } from 'react'
import './App.css';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <>
          <Nav />
          <main className='col-8'>
            <Outlet />
          </main>
          <Footer />
    </>
  )
}

export default App
