import React, { Component } from 'react';
import Timer from "../components/Countdown/Timer"

import "./comingsoon.css";


class Contact extends Component {

  constructor(props) {
    super(props); 
      this.state = {
        fname: '',
        lname: '',
        email: '',
        message: '',
        mailSent: false,
        error: null
      }
  }

  handleFormSubmit( event ) {
    event.preventDefault();
    console.log(this.state);
  }

  render(){
    return (
      <div class="wrapper">
        <div class="content">
          <h1>
            Website
            <br />
            Coming Soon
          </h1>
          <br />
          <h3>But first hand in at:</h3>
          <Timer />
        </div>
        <div class="emailcontact">
          <p>Contact Me</p>
          <form>
            <label>First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."  value={this.state.fname}
            onChange={e => this.setState({ fname: e.target.value })}/>
            <label>Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."  value={this.state.lname}
            onChange={e => this.setState({ lname: e.target.value })}/>
            <label>Email</label>
            <input type="email" id="email" name="email" placeholder="Your email" value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}/>
            <label>Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." onChange={e => this.setState({ message: e.target.value })}
            value={this.state.message}></textarea>
            <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
          </form>
        </div>
    </div>
      
    );
  }
  
}


  

export default Contact;