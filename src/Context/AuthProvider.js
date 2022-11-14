import React, { createContext, useContext } from 'react';
import { getAuth } from 'firebase/auth'
import app from '../firebase/firebase.config';

const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = () => {
    return (
        <div>

        </div>
    );
};

export default AuthProvider;