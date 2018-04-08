import React, { Component } from 'react';
import {Button } from 'reactstrap'
class InputBox extends Component {
  render() {
    return(
      <div>
        <div className='input-container'>
         <p
           suppressContentEditableWarning={true}
           spellCheck={true}
           contentEditable={true}
           className="input-box"
           ref={c => { this.messageInput = c}}
         ></p>
         <Button outline color="success"
          //  className="input-btn"
           onClick={e => {
             this.props.onSubmit(this.messageInput.textContent)
             this.messageInput.textContent = '';
           }}
         >Send</Button>
        </div>
      </div>
    )
  }
}

export default InputBox;
