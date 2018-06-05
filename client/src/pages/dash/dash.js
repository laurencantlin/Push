import React, { Component } from "react";
import Nav from "../../components/nav"
// import {Button, Icon} from 'react-materialize'
import FloatButton from "../../components/floatbutton";
import Accordian from "../../components/accordian";
import Button from 'antd/lib/button';

import "./dash.css"

class Dash extends Component {
  componentDidMount() {
    this.getDate();
}
  getDate(){
    var d=new Date;
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var month=months[d.getMonth()];
    var date=d.getDate();
    var year=d.getFullYear();
    console.log(month, date, year);
    return <div>{month} {date}</div>
  }
    render() {
      return (
        <div className="vp" >

          <Nav></Nav>
          {/* <Button type="primary">Button</Button> */}
          {/* <div className="section">   */}
             <div className="container title">
{this.getDate()}
             </div>
          <Accordian></Accordian>

        <FloatButton></FloatButton> 
        </div>
        // </div>
      );
    }
  }
  
  export default Dash;
  