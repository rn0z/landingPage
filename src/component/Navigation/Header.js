import React from 'react'

const Header = () => {
    return (
        <div>
            <nav className='navbar navbar' style={{backgroundColor: '#282c34', paddingBottom: '0px'}}>
                <a className='navbar-brand' href='http://localhost:3000'>
                    <h3>
                        Prototype Landingpage
                    </h3>
                </a>
                <ul className="nav nav-pills float-right">
                    <li className="nav-item">
                    <a className="nav-link" href="http://youtube.com">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="http://localhost:3000">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="http://localhost:3000">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header