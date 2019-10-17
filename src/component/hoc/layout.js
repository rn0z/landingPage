import React from 'react'
import Header from './../Navigation/Header'
import Footer from './../Navigation/Footer'
import Landing from './../Navigation/Landing'

const layout = (props) => {
    return (
        <div className='main_wrapper'>
            <div className='header'>
                <div style={{paddingBottom: '1rem'}}>
                    <Header/>
                </div>
                <Landing/>
            </div>
            <div className='body'>
                <main>
                    {props.children}
                </main>
            </div>
            <div className='footer'>
                <Footer/>
            </div>
        </div>
    )
}

export default layout