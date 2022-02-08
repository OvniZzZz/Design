import './Interior.css'
import Menu from "./components/Menu"
import Showcase from './components/Showcase'
import Services from './components/Services'
import Packages from './components/Packages'
import Tariffs from './components/Tariffs'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import React from 'react'

function Interior(){
    return(
        <div>
            <div className='main'>
            <Menu/>
            <Showcase/>
            </div>
            <Services/>
            <Packages/>
            <Tariffs/>
            <Contacts/>
            <Footer/>
            
        </div>        
    )
}

export default Interior;