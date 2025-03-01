import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Firstpage from './components/Firstpage/Firstpage'
import AboutUs from './components/About/AboutUs'
import Products from './components/Product/Products'
import BookingForm from './components/Booking/BookingForm'
import HealthcareSteps from './components/Steps/HealthCareSteps'
import HealthcarePlatform from './components/Platform/HealthcarePlatform'
import Customers from './components/Customer/Customer'
import CaseStudy from './components/CaseStudy/CaseStudy'
import Footer from './components/Footer/Footer'
// import Testimonial from './components/Testimonal/Testimonal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Firstpage/>
      <AboutUs/>
      <Products/>
      <BookingForm/>
      <HealthcareSteps/>
      <HealthcarePlatform/>
      {/* <Testimonial/> */}
      <Customers/>
      <CaseStudy/>
      <Footer/>
    </>
  )
}

export default App
