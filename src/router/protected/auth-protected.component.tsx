import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Routes } from "../routes";
import { IAuthProtectedProps } from './auth-protected';
import { useEffect } from 'react';
import { getToken } from '../../core/helpers/get-token';

const AuthProtected = ({ children, layout = 'public' }: IAuthProtectedProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = getToken();
        if (!token) {
            dispatch({ type: 'LOGOUT' });
        }
    }, []);

    switch (layout) {
        case 'auth':
            return getToken() ? <Navigate to={Routes.default} replace /> : children;
        case 'public':
            return getToken() ? children : <Navigate to={Routes.login} replace />;
        default:
            return children;
    }
};

export default AuthProtected;