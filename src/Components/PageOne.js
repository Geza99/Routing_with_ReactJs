import {Component} from 'react'
import {Link} from 'react-router-dom';

class PageOne extends Component{
   render (){
    return (
        <div >
      <p style={{color:"red",fontSize:"30px"}}>Ez az első oldal</p> 
      {/*<a> nem ajanlatos mert az oldalt ujra lekerdezi a hatso szerverrol */}
      <Link to='/pagetwo'>Go to page two</Link>
        </div>
      );
    }
}
export default PageOne;