//import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Converter from './components/Converter/Converter'
import ErrorBoundary from './components/ErrorBoundary'
import Alerts from './components/Alerts'
import RatesTable from './components/RatesTable/RatesTable'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Header />
      <ErrorBoundary>
        <Converter />
      </ErrorBoundary>
      <Alerts />
      <RatesTable />
      <Footer /> 
    </>
  )
}

export default App
