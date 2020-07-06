import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "./firebase.js";

import BeautyStars from "./components/ratings";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
      users: [],
      title: [],
    };
  }

  componentDidMount() {
    const accountRef = firebase.database().ref("accounts");
    accountRef.on("value", (snapshot) => {
      let newState = [];
      snapshot.forEach((data) => {
        const dataVal = data.val();
        newState.push({
          id: data.key,
          app: dataVal.apps,
        });
      });
      this.setState({
        accounts: newState,
      });
    });
    const userRef = firebase.database().ref("users");
    userRef.on("value", (snapshot) => {
      let users = snapshot.val();
      let newUserState = [];
      for (let data in users) {
        newUserState.push({
          id: data,
          username: users[data].account,
          name: users[data].name,
        });
      }
      this.setState({
        users: newUserState,
      });
    });
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <div>
            {this.state.users.map((data) => (
              <div className="card-body" key={data.id}>
                <div>
                  <h5> Name-{data.name}</h5>
                  <br />
                  <div style={{ marginBottom: 0 }}>
                    <BeautyStars />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2>User Title</h2>
            {this.state.accounts.map((data) => (
              <div key={data.id}></div>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}
export default App;
