


var myExtObject=(function(){
    return{
        func1:function () {
        debugger;

        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        AWSCognito.config.credentials = new AWSCognito.CognitoIdentityCredentials({
            IdentityPoolId: 'us-west-2:ee354832-9616-4e3d-864b-c24f95df3d70'
        });

        AWSCognito.config.region = 'us-west-2'; //This is required to derive the endpoint

        var poolData = {
            UserPoolId: 'us-west-2_Sj6eJ7IIm',
            ClientId: '2gaea88h1gs60hhs2bh9dekvr3'
        };
    var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);

//var userPool= new AWS.CognitoIdentityCredentials(poolData);

        var userData = {
            Username: email,
            Pool: userPool
        };

        cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);

        var authenticationData = {
            Username: email,
            Password: password,
        };

   //     var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);
  var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);

        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                debugger;
               // alert('authentication successful!');
                cognitoUser.getUserAttributes(function (err, result) {
                    debugger;
                    if (err) {
                        alert(err);
                        return;
                    }
                    var url = $("#RedirectTo").val();
                    location.href = url + "?firstName=" + result[4].getValue() + "&lastName=" + result[2].getValue() + "&gender=" + null + "&email=" + result[6].getValue() + "&pic=" + null;

                    for (i = 0; i < result.length; i++) {
                        console.log('attribute ' + result[i].getName() + ' has value ' + result[i].getValue());
                    }
                });

                
            },

            onFailure: function (err) {
                alert(err);
            },

            mfaRequired: function (codeDeliveryDetails) {
                debugger;
                var verificationCode = prompt('Please input verification code', '');
                cognitoUser.sendMFACode(verificationCode, this);
            }

        });

    },
    func2:function(){
        debugger;
       AWS.config.region = 'us-west-2';

       window.fbAsyncInit = function () {
           FB.init({
               appId: '1380179595358431',
               cookie: true,
               xfbml: true,
               version: 'v2.8'
           });
           FB.AppEvents.logPageView();

       };

       (function (d, s, id) {
           debugger;
           var js, fjs = d.getElementsByTagName(s)[0];
           if (d.getElementById(id)) { return; }
           js = d.createElement(s); js.id = id;
           js.src = "//connect.facebook.net/en_US/sdk.js";
           fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));

       setTimeout(function () {
 debugger;
            
        debugger;
var ffb =FB;

           FB.getLoginStatus(function (response) {
               debugger;
               if (response.status === 'connected') {
                   debugger;
                   var uid = response.authResponse.userID;
                   var accessToken = response.authResponse.accessToken;

                   AWS.config.region = 'us-west-2';
                   AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                       IdentityPoolId: 'us-west-2:ee354832-9616-4e3d-864b-c24f95df3d70',
                       Logins: { 'graph.facebook.com': response.authResponse.accessToken }
                   });

                   AWS.config.credentials.get(function (err) {
                       if (err) return console.log("Error", err);
                       console.log("Cognito Identity Id", AWS.config.credentials.identityId);
                   });

                   FB.api('/me?fields=email,birthday,location,locale,age_range,currency,first_name,last_name,name_format,gender,picture', function (data) {
                       if (data.email != undefined) {

                           document.getElementById('status').innerHTML = 'Thanks for logging in, ' + data.first_name + " " + data.last_name + ' !';
                           var url = $("#RedirectTo").val();
                           location.href = url + "?firstName=" + data.first_name + "&lastName=" + data.last_name + "&gender=" + data.gender + "&email=" + data.email + "&pic=" + data.picture.data.url;
                       } else {
                           FBLogin();
                       }
                   });


               } else if (response.status === 'not_authorized') {
                   debugger;
               } else {
                   debugger;
               }
           }
          
           );




       }, 3000);
    },
    func3:function(){
        debugger;
        FB.login(function (response) {
          debugger;
          if (response.authResponse) {
              debugger;
              console.log('Welcome!  Fetching your information.... ');
              //console.log(response); // dump complete info
              access_token = response.authResponse.accessToken; //get access token
              user_id = response.authResponse.userID; //get FB UID


              if (response.status === 'connected' && response.authResponse) {
                  debugger;
                  testAPI();
                  AWS.config.region = 'us-west-2';
                  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                      IdentityPoolId: 'us-west-2:ee354832-9616-4e3d-864b-c24f95df3d70',
                      Logins: { 'graph.facebook.com': response.authResponse.accessToken }
                  });

                  AWS.config.credentials.get(function (err) {
                      if (err) return console.log("Error", err);
                      console.log("Cognito Identity Id", AWS.config.credentials.identityId);
                  });

              } else if (response.status === 'not_authorized') {
                  document.getElementById('status').innerHTML = 'Please log into this app.';
              } else {
                  document.getElementById('status').innerHTML = 'Please log into Facebook.';
              }

          } else {
              //user hit cancel button
              console.log('User cancelled login or did not fully authorize.');

          }
      }, {
          scope: 'public_profile,email'
      });
    }
    }
})(myExtObject||{})

 function testAPI(e) {
      debugger;
   
     
      FB.api('/me?fields=email,birthday,location,locale,age_range,currency,first_name,last_name,name_format,gender,picture', function (data) {
          if (data.email != undefined) {
             
              document.getElementById('status').innerHTML = 'Thanks for logging in, ' + data.first_name + " " + data.last_name + ' !';
              var url = $("#RedirectTo").val();
              location.href = url + "?firstName=" + data.first_name + "&lastName=" + data.last_name + "&gender=" + data.gender + "&email=" + data.email + "&pic=" + data.picture.data.url;
          } else {
              FBLogin();
          }
      });

  }

  function FBLogin() {

      FB.login(function (response) {
          debugger;
          if (response.authResponse) {
              debugger;
              console.log('Welcome!  Fetching your information.... ');
              //console.log(response); // dump complete info
              access_token = response.authResponse.accessToken; //get access token
              user_id = response.authResponse.userID; //get FB UID


              if (response.status === 'connected' && response.authResponse) {
                  debugger;
                  testAPI();
                  AWS.config.region = 'us-west-2';
                  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                      IdentityPoolId: 'us-west-2:ee354832-9616-4e3d-864b-c24f95df3d70',
                      Logins: { 'graph.facebook.com': response.authResponse.accessToken }
                  });

                  AWS.config.credentials.get(function (err) {
                      if (err) return console.log("Error", err);
                      console.log("Cognito Identity Id", AWS.config.credentials.identityId);
                  });

              } else if (response.status === 'not_authorized') {
                  document.getElementById('status').innerHTML = 'Please log into this app.';
              } else {
                  document.getElementById('status').innerHTML = 'Please log into Facebook.';
              }

          } else {
              //user hit cancel button
              console.log('User cancelled login or did not fully authorize.');

          }
      }, {
          scope: 'public_profile,email'
      });
  }
