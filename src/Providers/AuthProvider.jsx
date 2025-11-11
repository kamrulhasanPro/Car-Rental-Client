import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    const authInfo = {

    }

    return (
        <AuthContext.Provider value={authInfo}>
                
        </AuthContext.Provider>
    );
};

export default AuthProvider;