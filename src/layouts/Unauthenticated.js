import React from 'react'
import Login from '../pages/Login'
import Register from '../pages/Register'
import {Route} from 'react-router'
import ForgotPassword from '../pages/ForgotPassword'

export default function Unauthenticated() {
    return (
        <div>
            <Route exact path="/" component={Login}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/forgot-password" component={ForgotPassword}/>
        </div>
    )
}
