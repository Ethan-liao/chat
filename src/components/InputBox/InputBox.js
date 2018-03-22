import React, { Component } from 'react';

class InputBox extends Component {
  render() {
    return(
      <div>
        <div className='input-container'>
         <p
           suppressContentEditableWarning={true}
           spellCheck={true}
           contentEditable={true}
           className="input box"
           ref={c => { this.messageInput = c}}
         ><br/></p>
         <button
           className="input btn"
           onClick={e => {
             this.props.onSubmit(this.messageInput.textContent)
             this.messageInput.textContent = '';
           }}
         >Send</button>
        </div>
      </div>
    )
  }
}

export default InputBox;
