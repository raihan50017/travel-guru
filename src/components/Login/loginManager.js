import * as firebase from "firebase/app";
import "firebase/auth";
import {firebaseConfig} from './firebase.config';

export const initializeLoginFramework = () =>{
    firebase.initializeApp(firebaseConfig);
}

export const handleGoogleSignIn = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then(result => {
      const {displayName, email} = result.user;
      const signedInUser = {
        isSignedIn : true,
        name: displayName,
        email: email,
        success: true
      }
      
      return signedInUser;

    })
    .catch(err => {
      console.log(err);
    })
  }

 export const handleFbSignIn = () =>{
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log(user)
      return user;
    }).catch(function(error) {
      var errorMessage = error.message;
      console.log(errorMessage);
    });
  } 

  export const handleSignOut = () => {
    return firebase.auth().signOut()
    .then(() =>{
      const signOutUser = {
        isSignedIn: false,
        name: '',
        email: '',
        error: '',
        success: false
      }
      return signOutUser;
    }).catch(err => {
      console.log(err)
    });
  }

  export const createUserWithEmailAndPassword = (name, email, password) =>{
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
      const newUser = res.user;
      return newUser;
      updateUserName(name);
    })
    .catch(function(error) {
      var errorMessage = error.message;
      const newUser = {};
      newUser.error = errorMessage;
      return newUser;
      console.log( errorMessage);
    });
  }

  export const signInWithEmailAndPassword = (email, password) =>{
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
      const newUser = res.user;
      return newUser
    })
    .catch(function(error) {
      var errorMessage = error.message;
      const newUser = {};
      newUser.error = errorMessage;
      newUser.success = false;
      return newUser;
      console.log(errorMessage);
    });
  }

  export const updateUserName = name =>{
    var user = firebase.auth().currentUser;

      user.updateProfile({
        displayName: name
      }).then(function() {
        console.log('User name updated successfully');
      }).catch(function(error) {
        console.log(error);
      });
  }