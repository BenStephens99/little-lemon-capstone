import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';
import BookingForm from './components/BookingForm';


function App() {

  const [formOpen, setFormOpen] = useState("closed")

  function toggleForm () {
    console.log("pressed")
    if (formOpen === "closed") {
      setFormOpen("open")
    } else {
      setFormOpen("closed")
    }
  }

  return (
    <>
      <Header />  
      <Main toggleForm={toggleForm} />
      <BookingForm toggleForm={toggleForm} formStatus={formOpen} />
      <Footer />
    </>
  );
}

export default App;
