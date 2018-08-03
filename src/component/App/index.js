import React,{Component} from 'react';
import '../../style/bootstrap.min.css';
import '../../style/new_global_header.css';


// import Header from '../Header/index';
// import Footer from '../Footer/index';
import Main from '../Main/index';


class App extends Component{
    render(){
        return(
            <div className="wrapper">
               
                {/* <Header/> */}
                <Main/>
                {/* <Footer/> */}
            </div>
            
        );
    }
} 

export default App;

