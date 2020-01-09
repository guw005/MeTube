// GOOGLE SIGN IN HELPED BY YINQIAN!!!!!
import React from 'react';

class GoogleSignIn extends React.Component{
    constructor(props){
        super(props);
        this.onSuccess = this.onSuccess.bind(this);
        // this.attachSignin = this.attachSignin.bind(this);
    }
    componentDidMount(){
        const intervalId = setInterval(() => {
            if (gapi) {
                this.renderButton();
                clearInterval(intervalId);
            }
        }, 100)
    }

    onSuccess(googleUser) {
        this.props.processForm(googleUser.getAuthResponse().id_token);
    }


    renderButton() {
        gapi.signin2.render('my-signin2', {
            'scope': 'profile email',
            'width': 105.3,
            'height': 40,
            'longtitle': false,
            'theme': 'light',
            'onsuccess': this.onSuccess,
        });
    }

    render(){
        return (
            <div className= "nav-upper">
                <div className = "cover-image">
                    <img src="/assets/profile_icon.png" className = "cover-image-profile-icon"/>
                    <span className = "cover-image-text">SIGN IN</span>
                </div>
                <div className = "google-signin-button" id='my-signin2'></div>
            </div>
        )
    }
}

export default GoogleSignIn
