import React, { Component } from 'react';

class Header extends Component {
  render(){
    return(
      <nav>
        
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
