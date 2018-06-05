import React from "react";
import { Row, Col, Input, CardPanel } from "react-materialize";
import {Button, Icon} from 'react-materialize'
import { Link } from "react-router-dom";

const FloatButton = props => (
    
  
  <Button floating fab='horizontal' icon='add' className='red' large style={{bottom: '45px', right: '24px'}}>
  <Button floating icon='local_dining
' className='green'/>
            <Link to="/push" >
  <Button floating icon='local_drink' className='blue darken-1'/></Link>
  <Button floating icon='airline_seat_legroom_normal
' className='brown'/>
  <Button floating icon='scatter_plot' className='orange'/>
</Button> 
);

export default FloatButton;
