import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';

import Login from './login/Login';

const Home = () => ( < div> Home </div>);
const About = () => ( <div> About </div>);


const Routers = ( 
    <BrowserRouter >
        <Switch >
            <Route path = "/" exact component = { Home }/> 
            <Route path = "/login" component = { Login }/> 
        </Switch > 
    </BrowserRouter>);

export default Routers;