<script lang="text/javascript"> 
    <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.16.0/firebase-app.js"></script>

    <!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.16.0/firebase-analytics.js"></script>

    <script>
  // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyC_Ce7X7W-rcX8NksvYWl6B0bLZorynEn0",
    authDomain: "help-us-to-help-u-web-data.firebaseapp.com",
    databaseURL: "https://help-us-to-help-u-web-data.firebaseio.com",
    projectId: "help-us-to-help-u-web-data",
    storageBucket: "help-us-to-help-u-web-data.appspot.com",
    messagingSenderId: "156853689026",
    appId: "1:156853689026:web:73cb2c8f3284eae430795b",
    measurementId: "G-SP5WB878LY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
</script>

    <script>
        var messagesRef = firebase.database().ref('contactformmessages');
        //alert("ereww");
    $('#frmCreateAdvert').submit(function (e) {
            e.preventDefault();
       // alert("232");
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
            Country: $('.countryList').val(),
            Province: $('.provinceList').val(),
            City: $('.cityList').val(),
            Category: $('.categoryList').val(),
            ContactName: $('.cname').val(),
            PhoneNumber: $('.phonenumber').val(),
            Description: $('.description').val()
        });

        $('.success-message').show();

        $('#frmCreateAdvert')[0].reset();
    });
</script>
