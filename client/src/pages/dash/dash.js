import React, { Component } from "react";
import Nav from "../../components/nav"
import {Button, Icon} from 'react-materialize'

class Dash extends Component {
    
    render() {
      return (
        <div>
          <Nav></Nav>
          
          <Button floating fab='horizontal' icon='mode_edit' className='red' large style={{bottom: '45px', right: '24px'}}>
        <Button floating icon='insert_chart' className='red'/>
        <Button floating icon='format_quote' className='yellow darken-1'/>
        <Button floating icon='publish' className='green'/>
        <Button floating icon='attach_file' className='blue'/>
      </Button>   </div>
        // </div>
      );
    }
  }
  
  export default Dash;
  