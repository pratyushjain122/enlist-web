let checkValue, check_class;
let storage_UIDD;
// console.log(storage_UIDD);

var pathEls = document.querySelectorAll("path");
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute("stroke-dashoffset", offset);
  anime({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: anime.random(1000, 3000),
    delay: anime.random(0, 1000),
    loop: true,
    direction: "alternate",
    easing: "easeInOutSine",
    autoplay: true,
  });
}

function first(ID, storage_UIDD) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (storage_UIDD) {
      // User is signed in.
      console.log("aaaaaaa");
      // let UIDD = storage_UIDD.uid;
      // console.log(UIDD);

      // let prnValue = localStorage.getItem("bypassPRN");
      // console.log(prnValue);

      //localStorage.setItem("uniqueUid", UIDD);

      get_PRN = firebase.database().ref("/PRN-Source/" + "/" + storage_UIDD);
      console.log(get_PRN);

      get_PRN.on(
        "value",
        function (snapshot) {
          console.log(snapshot.val());
          console.log(ID);
          let get_PRN_value = snapshot.val();

          console.log(get_PRN_value);

          if (Number(get_PRN_value) >= 19070122073 && Number(get_PRN_value) <= 19070122145) {
            check_class = "B";
          } else if (Number(get_PRN_value) >= 19070122001 && Number(get_PRN_value) <= 19070122072) {
            check_class = "A";
          } else if (Number(get_PRN_value) >= 19070122001 && Number(get_PRN_value) <= 19070122072) {
            check_class = "C";
          } else if (Number(get_PRN_value) >= 19070122001 && Number(get_PRN_value) <= 19070122072) {
            check_class = "IT";
          }

          console.log(check_class);
          console.log(ID);

          if (check_class === ID) {
            console.log("qqqqqqqqqqqqqqqqqqqqqq");
            window.location.assign("../main/home.html");
          } else {
            window.location.assign("../Login/login.html");
            console.log("NOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
          }
        },
        function (error) {
          console.log("Error: " + error.code);
        }
      );
    } else {
      // No user is signed in.
      console.log("bbbbbbbbbbbbb");
      window.location.assign("../Login/login.html");
    }
  });
}

// let BBB = document.getElementById("BBB");
// console.log(BBB.getAttribute("value"));

function CS_A(ID) {
  sessionStorage.setItem("class", "CS-A");
  storage_UIDD = localStorage.getItem("finalUIDD");
  console.log({ ID, storage_UIDD });
  console.log("I am in A");

  first(ID, storage_UIDD);
}

function CS_B(ID) {
  sessionStorage.setItem("class", "CS-B");
  storage_UIDD = localStorage.getItem("finalUIDD");
  console.log({ ID, storage_UIDD });
  console.log("I am in B");

  first(ID, storage_UIDD);
}

function CS_C(ID) {
  sessionStorage.setItem("class", "CS-C");
  storage_UIDD = localStorage.getItem("finalUIDD");
  console.log({ ID, storage_UIDD });
  console.log("I am in C");

  first(ID, storage_UIDD);
}

function IT(ID) {
  sessionStorage.setItem("class", "IT");
  storage_UIDD = localStorage.getItem("finalUIDD");
  console.log({ ID, storage_UIDD });
  console.log("I am in IT");

  first(ID, storage_UIDD);
}
