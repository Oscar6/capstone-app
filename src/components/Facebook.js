import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { Button } from 'reactstrap'

export default class Facebook extends Component {


    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }
    responseFacebook = response => {
        console.log(response)
        this.setState({
            isLoggedIn: true,
            UserID: response.userID,
            name: response.name,
            email: response.email
        })
    }


    componentClicked = () => console.log('clicked')

    render() {
        let fbContent;

        if (this.state.isLoggedIn) {
            fbContent = null;
        } else {
            fbContent = (<FacebookLogin
                appId="251450022470636"
                autoLoad={false}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                render={renderProps => (
                    <Button onClick={renderProps.onClick} className="btn-facebook mb-1 btn-lrg" block><span>Facebook</span></Button>
                )} />)
        }

        return (
            <div className="facebookButton">
                {fbContent}
            </div>
        )
    }
}
