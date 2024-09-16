import React from 'react'

const NavBarComp1 = ({imgHeight, imgSrc, styleClass}) => {

    return (

        <>
        
            <div className={`${styleClass}`}>

                 <a
                    href='https://gohospitals.in/'
                >

                    <img 
                        className={`w-[100px] h-[${imgHeight}]`}
                        src={`${imgSrc}`}
                    />

                </a>

            </div>

        </>

    )

}

export default NavBarComp1