import React, { Component } from 'react';
import logo from '../../Assets/Ethan.jpg'
import moment from 'moment';

class RenderMessage extends Component {
  render(){
    let messagesFromState = this.props.messages;
      const messageKeys = Object.keys(messagesFromState).sort((keyA, keyB) => {
        // console.log(messagesFromState);
        return messagesFromState[keyA].timestamp - messagesFromState[keyB].timestamp
      });

      return (
        <div className='messages'>
          <div className='message-wrapper'>
            {messageKeys.map(messageKey => {
              if (messagesFromState[messageKey].authorKey === this.props.user) {
                return (
                    <div className='owner' key={`${messagesFromState[messageKey].timestamp}`}>
                      {`${messagesFromState[messageKey].authorKey}: ${messagesFromState[messageKey].body}`}
                    </div>
                )
              } else {
                return (
                  <div className='guest' key={`${messagesFromState[messageKey].timestamp}`}>
                    <div className='avatar' >
                      <a>
                        <img className='avatar image' src={logo} alt='Loading...'></img>
                      </a>
                      <span className="messageTimeStamp">{`${moment(messagesFromState[messageKey].timestamp).format('MMM D YYYY, h:mm a')}`}</span>
                    </div>
                    <div key={`${messagesFromState[messageKey].timestamp}`}>
                      {`${messagesFromState[messageKey].authorKey}: ${messagesFromState[messageKey].body}`}
                    </div>
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
