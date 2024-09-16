import React from 'react'
import GoServices1 from './GoServices/GoServices1'
import TransitionAnimation from './HeadlessDesigns/TransitionAnimation'
import GoServices2 from './GoServices/GoServices2'
import TransitionAnimation1 from './HeadlessDesigns/TransitionAnimation1'
import TransitionAnimation2 from './HeadlessDesigns/TransitionAnimation2'

const GoServices = () => {

    return (

        <>
        
            <div className="pt-[100px] relative z-10">

                <GoServices1 />

                <GoServices2 />

                <TransitionAnimation 
                    imgSrc={'/Doctor.png'}
                    imgDesc = {'Book an appointment'}
                    ImageURL = {'https://wa.me/9069152152?text=Hello,%20I%20would%20like%20to%20book%20an%20appointment'}
                />

                <TransitionAnimation2 
                    imgSrc={'/map.png'}
                    imgDesc = {'Find our location'}
                    ImageURL = {'https://maps.app.goo.gl/1FQVe8RL88sMXz9f8?g_st=aw'}
                />

                <TransitionAnimation1 
                    imgSrc={'/cashless-payment.png'}
                    imgDesc = {'Make a payment'}
                    ImageURL = {'upi://pay?pa=9966534535.ibz@icici&pn=YourName&cu=INR'}
                />

            </div>

        </>

    )

}

export default GoServices