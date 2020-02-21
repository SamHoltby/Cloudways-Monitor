import React from 'react'
import Servers from "../components/Servers";
import cookie from "react-cookies";
import Login from "../components/Login";
import Router from 'next/router'

const Home = () => {
    if(cookie.load('access_token')){
        Router.push('/servers')
    }

    return (<Login/> )
};

export default Home
