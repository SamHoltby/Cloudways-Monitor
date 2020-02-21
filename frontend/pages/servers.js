import React from 'react';
import cookie from "react-cookies";
import Servers from "../components/Servers";

const ServersPage = () => {
    return ( <Servers access_token={cookie.load('access_token')}/>);
};

export default ServersPage;
