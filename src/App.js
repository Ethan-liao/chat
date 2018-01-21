import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import RenderMessage from './components/Messages/Messages'

const generateUniqueID = () => {
  return Math.floor((Math.random() * 10000000) + 1);
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: 456,
      // users: {},
      // messages: {},
      users: {
        123: {
          name: 'Steven Cheng',
          email: 'cheng@gmail.com'
        },
        456: {
          name: 'Ping Liao',
          email: 'ping@gmail.com'
        }
      },
      messages: {
        1: {
          body: 'Hey steven!',
          timestamp:12345678,
          authorKey: 456
        },
        2: {
          body: 'Howdy!',
          timestamp: 23456789,
          authorKey: 123
        }
      }
    }
    console.log('messages ', Object.keys(this.state.messages).length);
  }

  // componentWillMount() {
  //   // Get users collection from firestore.
  //   this.usersUnsubscribe = this.props.db.collection("users")
  //   .onSnapshot((querySnapshot) => {
  //     const users = {}
  //     querySnapshot.forEach(doc => {
  //       users[doc.id] = doc.data()
  //     })
  //
  //     this.setState({
  //       users,
  //     })
  //   });
  //
  //   // Get messages collection from firestore.
  //   this.messagesUnsubscribe = this.props.db.collection("messages")
  //   .onSnapshot((querySnapshot) => {
  //     const messages = {}
  //     querySnapshot.forEach(doc => {
  //       messages[doc.id] = doc.data()
  //       console.log(doc);
  //     })
  //     this.setState({
  //       messages,
  //     })
  //   });
  // }
  //
  // componentWillUnmount() {
  //   this.usersUnsubscribe()
  //   this.messagesUnsubscribe()
  // }


  sendMessage(value) {
    const msg = {
      body: value,
      timestamp: Date.now(),
      authorKey: this.state.currentUser,
    }

    // const newMsgDocRef = this.props.db.collection("messages").doc()
    this.messageInput = '';
    // newMsgDocRef.set(msg)
    const messages = {
      ...this.state.messages,
      [generateUniqueID()]: {
        body: value,
        timestamp: Date.now(),
        authorKey: this.state.currentUser,
      }
    }

    console.warn("this.sendMessage", messages)

    this.setState({
      messages
    })
  }

  render() {

    return (
      <div>

      <Header messageCount={Object.keys(this.state.messages).length}/>
      <RenderMessage messages={this.state.messages}/>
      <SearchBar
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
