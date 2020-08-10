import React from 'react';
// import Header from './Components/Common/Header/header';
// import List from './Components/List/list';
import Header from './Router/header';
import Car from './Router/car';
import Moto from './Router/moto';
import Home from './Router/home';


import {BrowserRouter , Route, Switch} from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Header/>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/car" component={Car}/>
                    <Route path="/moto" component={Moto}/>
                </Switch>
                {/* <Home/>
                <Car/>
                <Moto/> */}
            </BrowserRouter>
        </div>

    )
};

export default App;