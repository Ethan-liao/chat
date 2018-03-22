import React, {Component} from 'react';

class Login extends Component {
//two ways of doing this.
// have state if emtpy, then button disable true
checkInputBox(inputValue) {
  if(inputValue !== ''){
    return true
  } else {
    return false;
  }
}

  render() {
    // const checkInputBox = true;
    return(
      <div
        className='modal'
         style={{display:(this.props.showModal ? 'block':'none')}}>
        <div
          className='modal-content'>
          Please enter a username
          <input
            type='text'
            placeholder='type here'
            ref={c => { this.userInfo = c}}
          />
          {/* so onclick is for buttons */}
          <button
            disabled={this.checkInputBox('')}
            onClick={() => {
              this.props.checkStatus(this.userInfo.value)
              this.userInfo.value = ''
            }}
            >Submit</button>
        </div>
      </div>
    )
  }
}

export default Login;
