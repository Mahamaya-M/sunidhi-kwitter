//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCuPqlrN4Ofg5ZH_c0wn7M5QLk9LiEqBL4",
      authDomain: "classtest-84e08.firebaseapp.com",
      databaseURL: "https://classtest-84e08.firebaseio.com",
      projectId: "classtest-84e08",
      storageBucket: "classtest-84e08.appspot.com",
      messagingSenderId: "671082416160",
      appId: "1:671082416160:web:db4944c7d8e54595ec1445"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("User name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  
                  console.log("Room Name: "+Room_names);

                  row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
                  document.getElementById("output").innerHTML += row;
                        });
      });
}
getData();

function add_room() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);

      localStorage.setItem("room Name", name);
      window.location="kwitter_page.html";
}
function log_out(){
      localStorage.removeItem("User name");
      localStorage.removeItem("room name");

      window.location="index.html";
}