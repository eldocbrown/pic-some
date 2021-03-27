import firebase from 'firebase'

// Should be a different config for different environments
const firebaseConfig = {
    apiKey: "AIzaSyB9SSWTuNUb2HUHzBnWNAk8J4wNx9vfQAE",
    authDomain: "pic-some-300b5.firebaseapp.com",
    projectId: "pic-some-300b5",
    storageBucket: "pic-some-300b5.appspot.com",
    messagingSenderId: "440861919380",
    appId: "1:440861919380:web:6734f4c08306a1e9b5cc81"
  }

firebase.initializeApp(firebaseConfig)

export default firebase
