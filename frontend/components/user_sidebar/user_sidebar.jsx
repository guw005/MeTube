import React from 'react';
import GoogleSignInContainer from "./../session_form/google_signin_container";

const UserSidebar = ({ currentUser, logout }) => {
    const personalInfo = () => (
        <div>
            <h2>{currentUser.username}</h2>
            <h2>{currentUser.email}</h2>
            <img src={currentUser.image_url} />
            <div onClick={logout}>SIGN OUT</div>
        </div>
    )

    return currentUser ? personalInfo() : <GoogleSignInContainer />;
};

export default UserSidebar;