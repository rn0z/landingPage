import React from 'react'

class LoginForm extends React.Component {

    state = {
        isValid: true
    }

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    validate(email, password) {
        return email.includes("@") && (password.length > 6)
    }
    
    handleSubmit(event) {
        event.preventDefault()
        const email = event.target.elements.email.value
        const password = event.target.elements.password.value
        this.setState({
            isValid: this.validate(email, password)
        })
        console.log(this.validate(email, password))
    }

    render() {
        return (
            <div className='container'>
                <form className='text-center border border-light p-5' onSubmit={this.handleSubmit} action='#' method='port'>
                    <p className='h4 mb-4'>Sign in</p>
                    <div className='form-group'>
                        <input type='email' className='form-control mb-4' placeholder='Enter email' name='email'></input>
                    </div>
                    <div className='form-group'>
                        <input type='password' className='form-control mb-4' placeholder='Password' name='password'></input>
                    </div>
                    {
                        !this.state.isValid? (<b><p style={{color:'red'}}>invalid login</p></b>): (<div/>)
                        // this.state.isValid? (<h1>TRUE</h1>):(<h1>FALSE</h1>)
                    }
                    <div className='form-group form-check'>
                        <input className='form-check-input' type='checkbox'></input>
                        <label className='form-check-label'>Remember me</label>
                    </div>
                    <button type='submit' className='btn btn-info my-4'>Sign in</button>
                </form>
            </div>
        )
    }
}

export default LoginForm