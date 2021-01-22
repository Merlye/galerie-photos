import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import { Home } from './pages/Home';


export class App extends React.Component {


  render() {

    return (
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                  <Home style = {{height : "100%", width:"100%"}}/>
                </Route>
            </Switch>
          </BrowserRouter>     
    );
  }
}
