import React from 'react';
// import Header from './Components/Common/Header/header';
// import List from './Components/List/list';

import Header from './Router/header';
import Car from './Router/car';
import Moto from './Router/moto';
import Home from './Router/home';
import Detail from './Router/detail';
import NotFound from './Router/notFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/car" exact component={Car} />
                    <Route path="/moto" exact component={Moto} />
                    <Route path='/car/:id' component={Detail} />
                    {/* <Route path='/moto/:id' component={Detail} /> */}
                    <Route component={NotFound} />
                </Switch>
                {/* <Home/>
                <Car/>
                <Moto/> */}
            </BrowserRouter>
        </div>

    )
};

export default App;