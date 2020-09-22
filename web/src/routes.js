import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Atendimento from '../src/pages/atendimento/index'

export default function Routes(){

    return(
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Atendimento}/>
        </Switch>
    </BrowserRouter>
    )

}