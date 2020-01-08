import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from './../../actions/session_actions';
import SessionForm from './session_form';

const mSP = state => ({
    errors: state.errors.session,
    formType: 'signup',
});

const mDP = dispatch => ({
    processForm: user => dispatch(signup(user))
});

export default connect(mSP, mDP)(SessionForm);