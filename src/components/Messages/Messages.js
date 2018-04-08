import React, { Component } from 'react';
import logo from '../../Assets/avatar.png'
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
                  <div>
                    <div className='owner' key={`${messagesFromState[messageKey].timestamp}`}>
                      <div className='message-box-owner'>
                      {`${messagesFromState[messageKey].body}`}
                      </div>
                      <div className='message-box-corner-owner'></div>
                    </div>
                    <div className='owner-identity' >
                      {`${messagesFromState[messageKey].authorKey}  `}
                      <span className="messageTimeStamp">{`${moment(messagesFromState[messageKey].timestamp).format('MMM D YYYY, h:mm a')}`}</span>
                    </div>
                  </div>
                )
              } else {
                return (
                  <div className='guest' key={`${messagesFromState[messageKey].timestamp}`}>

                    <a>
                      <img className='avatar-image' src={logo} alt='Loading...'></img>
                    </a>
                      <div className='message-box-corner'>
                        {/* <div className='message-box-interior'></div> */}
                      </div>
                      <div className='message-box' key={`${messagesFromState[messageKey].timestamp}`}>
                        {`${messagesFromState[messageKey].body}`}
                      </div>


                    <div className='avatar' >
                      {`${messagesFromState[messageKey].authorKey}  `}
                      <span className="messageTimeStamp">{`${moment(messagesFromState[messageKey].timestamp).format('MMM D YYYY, h:mm a')}`}</span>
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
