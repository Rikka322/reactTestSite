import React, { useContext } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';
import About from '../pages/About';
import Error from "../pages/Error";
import { privateRoutes, publicRoutes } from '../router';
import Loader from './UI/loader/Loader';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if(isLoading) {
        return <Loader/>;
    }

    return (
        isAuth 
        ?
        <Routes>
            {privateRoutes.map(route => 
                <Route key={route.path} path={route.path} element={<route.component/>}/>    
            )}
            <Route path="/" element={<About/>}/>
            <Route path= "*"     element={<Error/>}/>
        </Routes>
        :
        <Routes>
            {publicRoutes.map(route => 
                <Route key={route.path} path={route.path} element={<route.component/>}/>    
            )}
            <Route path= "*"     element={<Navigate to="/login" />}/>
        </Routes>
    );
};

export default AppRouter;