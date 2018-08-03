import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <div className="header" >
             Header loaded Here
             <span> <Link to='/'>Home</Link></span>
             <br/>
             <span><Link to='/ContactPage'>Contact</Link></span>
            </div>
        )
    }
}
export default Header;