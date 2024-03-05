
import './App.css'
import { Home } from './components/Home'
import { CustomerForm } from './components/CustomerForm'
import { Route, Routes } from 'react-router-dom'
import { SelectedProducts } from './components/SelectedProducts'
import { SuccessScreen } from './components/SuccessScreen'
import { NavBar } from './components/NavBar'
import { PaymentForm } from './components/PaymentForm'





export default function App() {

  return(
    <>
    <NavBar></NavBar>

    <div style={{marginTop:59}}>
      <Routes >
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/customer-form' element={<CustomerForm></CustomerForm>}></Route>
          <Route path='/selected-products' element={<SelectedProducts></SelectedProducts>}></Route>
          <Route path='/success-screen' element={<SuccessScreen></SuccessScreen>}></Route>
          <Route path='/payment-form' element={<PaymentForm></PaymentForm>}></Route>
          <Route path='*' element={<Home></Home>}></Route>
      </Routes>
    </div>
    </>
  )
  

}


