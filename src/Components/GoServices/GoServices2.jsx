import React from 'react'

const GoServices2 = () => {

    return (

        <>

            <div className={`fixed bottom-5 right-3 z-50`}>

                <a
                    href='https://wa.me/9069152152?text=Hello,%20I%20have%20a%20request.%20Could%20you%20please%20assist%20me%3F'
                >

                    <img 
                        src={`/whatsapp-icon.png`}
                        className={`w-[40px] ml-7 max-[500px]:ml-6`}
                    />

                    <p
                        className='text-white font-bold tracking-wider text-sm max-[500px]:text-[12px]'
                    >Whatsapp us</p>

                </a>

            </div>
        
        </>

    )

}

export default GoServices2