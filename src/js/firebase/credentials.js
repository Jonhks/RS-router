  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAyivWd3lXsAP90rT4a26Nho_0pKTEmsdc",
    authDomain: "red-social-router.firebaseapp.com",
    databaseURL: "https://red-social-router.firebaseio.com",
    projectId: "red-social-router",
    storageBucket: "red-social-router.appspot.com",
    messagingSenderId: "578822134927"
  };
  firebase.initializeApp(config);
  var ui = new firebaseui.auth.AuthUI(firebase.auth());


  ui.start('#firebaseui-auth-container', {
    signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
      },
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Other config options...
  });

  // ui.start('#firebaseui-auth-container', {
  //   signInOptions: [
  //     // List of OAuth providers supported.
  //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  //     firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  //     firebase.auth.GithubAuthProvider.PROVIDER_ID
  //   ],
  //   // Other config options...
  // });
  