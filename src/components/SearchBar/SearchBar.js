import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return(
      <div>
        <div className='input-container'>
         <input
           className="input box"
           ref={c => { this.messageInput = c}}
         />
         <button
           className="input btn"
           onClick={e => {
             this.props.onSubmit(this.messageInput.value)
             this.messageInput.value = '';
           }}
         >Send</button>
        </div>
      </div>
    )
  }
}

export default SearchBar;
