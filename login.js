// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());


// if(Source.main_PRN >= 19070122073L && Source.main_PRN <= 19070122095L){
//   b2.setEnabled(false);
//   b3.setEnabled(false);
// }
// else if(Source.main_PRN >= 19070122096L && Source.main_PRN <= 19070122119L){
//   b1.setEnabled(false);
//   b3.setEnabled(false);
// }
// else if(Source.main_PRN >= 19070122120L && Source.main_PRN <= 19070122145L){
//   b1.setEnabled(false);
//   b2.setEnabled(false);
// }


var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: 'home.html',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
       firebase.auth.GoogleAuthProvider.PROVIDER_ID
    //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //   firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    //   firebase.auth.GithubAuthProvider.PROVIDER_ID,
    //  firebase.auth.EmailAuthProvider.PROVIDER_ID
    //   firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: 'home.html',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
  };

  // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);