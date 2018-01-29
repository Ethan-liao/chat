import React, { Component } from 'react';

class RenderMessage extends Component {
  render(){
      const messageKeys = Object.keys(this.props.messages).sort((keyA, keyB) => {
        return this.props.messages[keyA].timestamp - this.props.messages[keyB].timestamp
      });

      return (
        <div className='messages'>
          <div className='message-wrapper'>
            {messageKeys.map(messageKey => {
              if (this.props.messages[messageKey].authorKey === this.props.user) {
                return (
                    <div className='owner'>
                      {`${this.props.messages[messageKey].authorKey}: ${this.props.messages[messageKey].body}`}
                    </div>
                )
              } else {
                return (
                  <div className='guest'>
                    {`${this.props.messages[messageKey].authorKey}: ${this.props.messages[messageKey].body}`}
                  </div>
                )
              }
            })}
          </div>
        </div>
      )
  }
}

export default RenderMessage;
