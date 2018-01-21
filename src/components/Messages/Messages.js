import React, { Component } from 'react';

class RenderMessage extends Component {
  render(){
      const messageKeys = Object.keys(this.props.messages).sort((keyA, keyB) => {
        return this.props.messages[keyA].timestamp - this.props.messages[keyB].timestamp
      });

      return (
        <div className='messages'>
          <div className='message-wrapper'>
            {messageKeys.map(messsageKey => {
              if (this.props.messages[messsageKey].authorKey === 456) {
                return (
                  <div className='guest'>
                    {this.props.messages[messsageKey].body}
                  </div>
                )
              } else {
                return (
                  <div className='owner'>
                    {this.props.messages[messsageKey].body}
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
