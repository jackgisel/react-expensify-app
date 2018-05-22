import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startGoogle, startGithub }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control</p>
            <div className="box-layout__action">
                <button className="button" onClick={startGoogle}>Login with Google</button>
            </div>
            <div className="box-layout__action">
                <button className="button--secondary" onClick={startGithub}>Login with Github</button> 
            </div>    
        </div> 
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startGoogle: () => dispatch(startLogin("google")),
    startGithub: () => dispatch(startLogin("github"))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);