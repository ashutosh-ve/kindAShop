import { Container } from 'react-bootstrap';
import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Header/>
      <main className='py-3'>
        <Container>
          <Outlet/>
        </Container>
      </main>
      <Footer/>
    </>
  )
}

export default App;