import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import HomePage from '../HomePage/index';
import ContactPage from '../ContactPage/index';

class Main extends Component{
    render(){
        return(
            <Switch>
                  <Route exact path='/' component={HomePage} />
                  <Route exact path='/ContactPage' component={ContactPage} />
            </Switch> 

        )
    }
}

export default Main;