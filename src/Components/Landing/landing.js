import React from 'react';
import {Link} from 'react-router-dom';
import './landing.css'

export default class Landing extends React.Component {
 
 
  render() {
    return (
      <div className="landing">
        <h1>Landing Page</h1>
        <div className="button">
        <Link to="/userDetails">Show User Details</Link>
      </div>
      </div>
    );
  }
}

