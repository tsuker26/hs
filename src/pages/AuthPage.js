import React from 'react';
import AuthForm from "../components/AuthForm/AuthForm";

const AuthPage = () => {
    return (
        <div className={'auth_page'}>
            <div className="content">
                <AuthForm/>
            </div>
        </div>

    );
};

export default AuthPage;