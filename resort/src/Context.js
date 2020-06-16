import React, { Component } from 'react';

const RoomContext = React.createContext();
// <RoomContext.Provider value ={}
export default class RoomProvider extends Component {
  state = {
      greeting: "hello",
      name: "Skeeb"
  };
  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export{RoomProvider, RoomConsumer, RoomContext}