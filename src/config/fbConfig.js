import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//Initialize Firebase
const config = {
  apiKey: "AIzaSyBVwUdwPRPspsdU0AdmjoKPIoPGOzUWXgU",
  authDomain: "mariam-projectplanner.firebaseapp.com",
  databaseURL: "https://mariam-projectplanner.firebaseio.com",
  projectId: "mariam-projectplanner",
  storageBucket: "",
  messagingSenderId: "1019107098810",
  appId: "1:1019107098810:web:6c8b8165828ec061"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapShots: true })

export default firebase;
