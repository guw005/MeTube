import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { googlelogin, login } from "./../../actions/session_actions";
import GoogleSignIn from "./google_signin";

// const mSP = state => ({
//     errors: state.errors.session,
//     formType: "googlelogin",
// });

const mDP = dispatch => ({
    processForm: idToken => dispatch(googlelogin(idToken)),
    demoUserLogin: (user) => dispatch(login(user))
});

export default connect(null, mDP)(GoogleSignIn);