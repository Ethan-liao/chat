import React, { Component } from 'react';

class Header extends Component {
  render(){
    return(
      <nav>
        <div className='heading navBar'>
          Web Chat-App
        </div>
        <div className='subHeading'>
        <div className='currentUser'>{`Current user: ${this.props.currentUserName}`}</div>
        <div className='count'>{`Messages total: ${this.props.messageCount}`}</div>
        </div>
        <br/>
      </nav>
    )
  }
}

export default Header;
