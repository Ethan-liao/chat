import React, { Component } from 'react';
import './Styles/CSS/App.css';
import Nav from './components/Nav/Nav'
import InputBox from './components/InputBox/InputBox'
import RenderMessage from './components/Messages/Messages'
import Login from './components/Login/Login'


const generateUniqueID = () => {
  return Math.floor((Math.random() * 10000000) + 1);
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: true,
      currentUser:'',
      // users: {},
      // messages: {},
      users: {
        'Steven': {
          name: 'Steven Cheng',
          email: 'cheng@gmail.com'
        },
        'Ping': {
          name: 'Ping Liao',
          email: 'ping@gmail.com'
        }
      },
      messages: {
        1: {
          body: 'Hey steven!',
          timestamp:12345678,
          authorKey: 'Ping'
        },
        2: {
          body: 'Howdy!',
          timestamp: 23456789,
          authorKey: 'Steven'
        }
      }
    }
  }

  componentWillMount() {
/*---------------------------- Get users collection from firestore.------------------------------*/
    this.usersUnsubscribe = this.props.db.collection("users")
    .onSnapshot((querySnapshot) => {
      const users = {}
      querySnapshot.forEach(doc => {
        users[doc.id] = doc.data()
      })

      this.setState({
        users,
      })
    });
/*---------------------------- Get messages collection from firestore..------------------------------*/
    this.messagesUnsubscribe = this.props.db.collection("messages")
    .onSnapshot((querySnapshot) => {
      const messages = {}
      querySnapshot.forEach(doc => {
        messages[doc.id] = doc.data()
      })
      this.setState({
        messages,
      })
    });
  }

  componentWillUnmount() {
    this.usersUnsubscribe()
    this.messagesUnsubscribe()
  }


  sendMessage(value) {
    const msg = {
      body: value,
      timestamp: Date.now(),
      authorKey: this.state.currentUser,
    }

    const newMsgDocRef = this.props.db.collection("messages").doc()
    // this.messageInput = '';
    newMsgDocRef.set(msg)
    const messages = {
      ...this.state.messages,
      [generateUniqueID()]: {
        body: value,
        timestamp: Date.now(),
        authorKey: this.state.currentUser,
      }
    }
    this.setState({
      messages
    })
  }


checkStatus = (value) => {
  if (this.state.currentUser === '' || this.state.currentUser === 'Ping') {
    this.setState({
      currentUser: value,
      showModal: false,
    })
  }
}

logout = () => {
   this.setState({
    currentUser:'',
    showModal: true
  })
}

  render() {

    return (
      <div>
        <Login
        showModal={this.state.showModal}
        checkStatus={this.checkStatus}
        />


      <Nav
        logout={this.logout}
        currentUserName={this.state.currentUser}
        messageCount={Object.keys(this.state.messages).length}
      />

      <RenderMessage messages={this.state.messages} user={this.state.currentUser}
      />
      <InputBox
        //calling a function
        onSubmit={(value) => {
          this.sendMessage(value)
        }}
      />
      </div>
    )
  }
}

export default App;
