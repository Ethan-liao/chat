import React, { Component } from 'react';
import logo from '../../Assets/Ethan.jpg'

class Header extends Component {
  render(){
    return(
      <nav>
        <div className='avatar'>
          <a >
            <img className='avatar image' src={logo} alt='Loading...'></img>
          </a>
        </div>
        <div className='subHeading'>
        <div className='currentUser'>{`Current user: ${this.props.currentUserName}`}</div>
        <br/>
        <div className='count'>{`Messages total: ${this.props.messageCount}`}</div>
        </div>
        <br/>
      </nav>
    )
  }
}

export default Header;
