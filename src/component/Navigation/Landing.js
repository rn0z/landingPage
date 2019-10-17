import React from 'react'

import Login from './../Form/Login'

const Landing = () => {
    return (
        <div>
            {/* <div className='row'> */}
                <div className='container'>
                    <div className='col-md-12'>
                        <div className='jumbotron'>
                            <h1 className='displayJumbotron'>
                                Jumbotron heading
                            </h1>
                            <div className='col-md-4'>
                                <Login/>
                            </div>
                            <p class='lead'>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    )
}

export default Landing