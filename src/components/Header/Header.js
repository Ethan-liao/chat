import React, { Component } from 'react';

class Header extends Component {
  render(){
    return(
      <nav>
        <div className='heading navBar'>
          Web Chat-App
          <div className='count'>{`count is ${this.props.messageCount}`}</div>
        </div>

        <br/>
      </nav>
    )
  }
}

export default Header;
