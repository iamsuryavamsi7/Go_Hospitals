import React from 'react'
import './CSS/NavBar.css'
import NavBarComp1 from './NavBar/NavBarComp1'

const NavBar = () => {

    return (

        <div className="h-[100px] fixed bg-white w-full flex justify-center items-center space-x-[50px] border-solid border-t-goServicesDarkBlue border-t-4 z-50 max-[500px]:justify-center max-[500px]:space-x-5">

            <NavBarComp1 
                imgHeight= '60px'
                imgSrc = '/goclinic-logo.png'
                styleClass = 'max-[500px]:w-[80px]'
            />

            <div className="text-goServicesDarkBlue font-extrabold pTag text-lg max-[500px]:min-w-[157px] max-[500px]:text-[17px]">

                <p>Our quality service</p>
                <p>starts from here</p>

            </div>

            <NavBarComp1 
                imgHeight= '55px'
                imgSrc = '/Go-Vascular.png'
                styleClass = 'max-[500px]:w-[80px] max-[500px]:ml-0'
            />
            
        </div>

    )

}

export default NavBar