import * as firebase from 'firebase';

const Config = {
  apiKey: "AIzaSyBYvnnsdQN_JPsTTI_FCtN5gjUFO0gdq54",
  authDomain: "test-app-ac8f8.firebaseapp.com",
  databaseURL: "https://test-app-ac8f8.firebaseio.com",
  projectId: "test-app-ac8f8",
  storageBucket: "test-app-ac8f8.appspot.com",
  messagingSenderId: "321470843588",
  appId: "1:321470843588:web:b383ee6993000d788b9791"
  };

  firebase.initializeApp(Config);
  export default firebase;