// document.onkeydown = function(e) {
//   if(event.keyCode == 123) {
//   return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
//   return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
//   return false;
//   }
//   if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
//   return false;
//   }
//   }

let prN = localStorage.getItem("PRN");
let q = localStorage.getItem("finalUIDD");

let prnnn = prN;
let demo, xyz;
let parsedBase64Key, encryptedData;

demo = q;
console.log(prnnn);
console.log(q);
console.log(demo);

let flag = 0;
var task;
let uniqkey, finalDate;
let encrypted, encryptKey;
var db = firebase.firestore();

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var Currentdate = today.getDate() + " " + today.getMonth() + " " + today.getFullYear();

let ZeroDate = today.getDate();
if (ZeroDate === 1 || ZeroDate === 2 || ZeroDate === 3 || ZeroDate === 4 || ZeroDate === 5 || ZeroDate === 6 || ZeroDate === 7 || ZeroDate === 8 || ZeroDate === 9) {
  ZeroDate = "0" + ZeroDate;
  Currentdate = ZeroDate + " " + today.getMonth() + " " + today.getFullYear();
} else {
  Currentdate = ZeroDate + " " + today.getMonth() + " " + today.getFullYear();
}
//console.log(Currentdate);
let dateC = Currentdate.split(" ");
let dayC = dateC[0];
let monthC = dateC[1];
let yearC = dateC[2];

let montharrayC = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

for (let i = 0; i < montharrayC.length; i++) {
  if (i === Number(monthC)) {
    monthC = montharrayC[i];
  }
}
Currentdate = dayC + " " + monthC + " " + yearC;

let a = document.getElementById("B");
let c = document.getElementById("B2");
let d = document.getElementById("B3");

// function allowAlphaNumericSpace(thisInput) {
//   thisInput.value = thisInput.value.split(/[^a-zA-Z0-9 ]/).join("");
// }

function popup_alltasks(sent, time, color) {
  console.log("Popup finction");
  let pass = document.getElementById("pop-upppp");
  let A = document.createElement("div");
  console.log(color);
  A.setAttribute("class", color);
  A.setAttribute("role", "alert");
  A.setAttribute("id", "popup");
  A.innerHTML = sent;
  pass.append(A);
  console.log("Execute");
  setTimeout(function () {
    $(".alert")
      .fadeTo(500, 0)
      .slideUp(500, function () {
        $(this).remove();
      });
  }, time);
}

function popup_alltasks2(sent, time, color) {
  console.log("Popup finction");
  let pass = document.getElementById("pop-uppppppppp");
  let A = document.createElement("div");
  console.log(color);
  A.setAttribute("class", color);
  A.setAttribute("role", "alert");
  A.setAttribute("id", "popup");
  A.innerHTML = sent;
  pass.append(A);
  console.log("Execute");
  setTimeout(function () {
    $(".alert")
      .fadeTo(500, 0)
      .slideUp(500, function () {
        $(this).remove();
      });
  }, time);
}

let flagTime;

if (flagTime == 1) {
  console.log("nahi banana");
} else {
  //oneTime();
  console.log("banana");
}

function signOut() {
  // xyz = "";
  // task_array = [];

  firebase
    .auth()
    .signOut()
    .then(function () {
      // Sign-out successful.
      popup_alltasks2("Please login !", 4000, "alert alert-warning");
      setTimeout(function () {
        window.location.assign("../Login/login.html");
      }, 2000);
    })
    .catch(function (error) {
      // An error happened.
      console.log(error);
    });
}

function onloadEverytime() {
  console.log("holaaaaaaaaaaaaaaaaaa");
  let message = document.getElementById("task_input_container");
  message.innerHTML = "Hola Amigos";
  return;
}

function Class() {
  let personal = document.getElementById("personalList");
  let shared = document.getElementById("sharedList");
  let hello = document.getElementById("hello");

  personal.style.visibility = "visible";
  shared.style.visibility = "visible";
  hello.style.visibility = "visible";
  personal.disabled = false;
  shared.disabled = false;
  // update_alert.style.visibility = "visible";
  // update_alert.disabled = false;

  if (Number(prnnn) >= 19070122073 && Number(prnnn) <= 19070122145) {
    xyz = "B";

    create_unfinished_task();
    document.getElementById("finish_task_header").innerHTML = "CS-B";
  } else if (Number(prnnn) >= 19070122001 && Number(prnnn) <= 19070122072) {
    xyz = "A";

    create_unfinished_task();
    document.getElementById("finish_task_header").innerHTML = "CS-A";
  } else if (Number(prnnn) >= 19070122001 && Number(prnnn) <= 19070122072) {
    xyz = "C";

    create_unfinished_task();
    document.getElementById("finish_task_header").innerHTML = "CS-C";
  } else if (Number(prnnn) >= 19070122001 && Number(prnnn) <= 19070122072) {
    xyz = "IT";

    create_unfinished_task();
    document.getElementById("finish_task_header").innerHTML = "IT";
  }
  //sideBarClass(xyz);
}

function Division() {
  let personal = document.getElementById("personalList");
  let shared = document.getElementById("sharedList");
  let hello = document.getElementById("hello");

  personal.style.visibility = "visible";
  shared.style.visibility = "visible";
  hello.style.visibility = "visible";
  personal.disabled = false;
  shared.disabled = false;

  if (Number(prnnn) == 19070122120 || Number(prnnn) == 19070122126 || Number(prnnn) == 19070122129) {
    xyz = "B3";

    create_unfinished_task();
    document.getElementById("finish_task_header").innerHTML = "Admin";
  } else if (Number(prnnn) >= 19070122073 && Number(prnnn) <= 19070122095) {
    xyz = "B1";
    create_unfinished_task();
    document.getElementById("finish_task_header").innerHTML = "CS-B1";
  } else if (Number(prnnn) >= 19070122096 && Number(prnnn) <= 19070122119) {
    xyz = "B2";

    create_unfinished_task();
    document.getElementById("finish_task_header").innerHTML = "CS-B2";
  } else if (Number(prnnn) >= 19070122120 && Number(prnnn) <= 19070122145) {
    xyz = "B3";

    create_unfinished_task();
    document.getElementById("finish_task_header").innerHTML = "CS-B3";
  } else if (Number(prnnn) >= 19070122001 && Number(prnnn) <= 19070122025) {
    xyz = "A1";

    create_unfinished_task();
    document.getElementById("finish_task_header").innerHTML = "CS-A1";
  } else if (Number(prnnn) >= 19070122026 && Number(prnnn) <= 19070122048) {
    xyz = "A2";

    create_unfinished_task();
    document.getElementById("finish_task_header").innerHTML = "CS-A2";
  } else if (Number(prnnn) >= 19070122049 && Number(prnnn) <= 19070122072) {
    xyz = "A3";

    create_unfinished_task();
    document.getElementById("finish_task_header").innerHTML = "CS-A3";
  } else if (Number(prnnn) >= 19070122146 && Number(prnnn) <= 19070122167) {
    xyz = "C1";

    create_unfinished_task();
    document.getElementById("finish_task_header").innerHTML = "CS-C1";
  } else if (Number(prnnn) >= 19070122168 && Number(prnnn) <= 19070122190) {
    xyz = "C2";

    create_unfinished_task();
    document.getElementById("finish_task_header").innerHTML = "CS-C2";
  } else if (Number(prnnn) >= 19070122191 && Number(prnnn) <= 20070122515) {
    xyz = "C3";

    create_unfinished_task();
    document.getElementById("finish_task_header").innerHTML = "CS-C3";
  } else if (Number(prnnn) >= 19070124001 && Number(prnnn) <= 19070124028) {
    xyz = "T1";

    create_unfinished_task();
    document.getElementById("finish_task_header").innerHTML = "CS-T1";
  } else if (Number(prnnn) >= 19070124029 && Number(prnnn) <= 19070124055) {
    xyz = "T2";

    create_unfinished_task();
    document.getElementById("finish_task_header").innerHTML = "CS-T2";
  } else if (Number(prnnn) >= 19070124056 && Number(prnnn) <= 20070124502) {
    xyz = "T3";

    create_unfinished_task();
    document.getElementById("finish_task_header").innerHTML = "CS-T3";
  }
}

function Swap(v, chooseArray) {
  let d22 = chooseArray;

  let r = v % (d2.length - 1);
  let temp, val, inp;

  for (let i = 0; i < d22.length; i++) {
    val = i % (d2.length - 1);
    temp = d22[val];
    inp = (i + r) % (d2.length - 1);

    d22[val] = d22[inp];
    d22[inp] = temp;
  }

  return d22;
}

function setlonglist() {
  let d = [
    ".@#1%%42",
    ".&2^36@",
    ".$%aASH2343",
    ".sahd%$%^$",
    ".%$*%GF%",
    ".^&&^Hjj5",
    ".!^%&",
    ".!@!@!",
    ".!#$!",
    ".#%GFY$^",
    ".&^%&^GFUYRUYF%$&^",
    ".$^%^%#^GGFHDKJ",
    ".#@*&gfuF",
    ".jgj564$#@",
    ".frdk4667$#",
    ".53fh#$",
    ".HJ57554&%",
    ".JKfy6754F",
    ".DS5DHF$%ds",
    ".ds23478h#!$",
    ".HGWIU",
    ".12387192",
    ".479128",
    ".[$$^$^]][]",
    ".{}{}{}{**",
    ".**&&*",
    ".%%{{{767",
    ".^^JASKNA768",
    ".^^##^^)",
    ".{gvh^%",
    ".872%$^^",
    ".*&^*hvj",
    ".++__kjHK",
    ".~@@!@#$@",
    ".||***guy",
    ".y1741938cjb",
    ".239182h^&d",
    ".jscnak3@#s",
    ".^&&^Hbq45jj5",
    ".!atw4^%&",
    ".qr!@!@!",
    ".!#rgee$!",
    ".#%GdfheraFY$^",
    ".&^%25&^UYF%$&^",
    ".$^%^%D423ef#^GGFHDKJ",
    ".#@waeawgr*&gfuF",
    ".jgjqb5564$#@",
    ".frdk2q54667$#",
    ".53f245vh#$",
    ".HJ57356554&%",
    ".JK35fy6754F",
    ".DS5aegDHF$%ds",
    ".ds23478hsd#!$",
    ".HG436WIU",
    ".12387sgd192",
    ".47sg9128",
    ".[$$^$^]]sg[]",
    ".{}dg{}{}{**",
    ".*sgd*&&*",
    ".%%532{{{767",
    ".^^JASK253NA768",
    ".^^##234^^)",
    ".!@#!GJFYD<UT}{|",
    ".hbjHGU6567@$",
    ".!#1$%gq",
    ".32^qw@",
    ".$%a71*343",
    ".*$cv%$%i$",
    ".%-pu%GF%",
    ".^*8asjj5",
    ".p1%&",
    ".!@ty!",
    ".!#&$q",
    ".#gq%Y$^",
    ".&^%&^ua^*$%$&^",
    ".$^%^%hagq%KJ",
    ".#@*&UA*F",
    ".jgjNUI^%*$#@",
    ".frdkna*7$#",
    ".IA&%#$",
    ".HJ56&*)&%",
    ".JK&#@(54F",
    ".DS^(#%ds",
    ".ds23^ANA!$",
    ".HA&BAIU",
    ".12nuaa^*92",
    ".4^*SNA28",
    ".[A^*YCB]][]",
    ".{}KUA&{**",
    ".*&^%A*",
    ".%^&a67",
  ];
  return d;
}

function fetchlonglist() {
  let d = [
    "@#1%%42",
    "&2^36@",
    "$%aASH2343",
    "sahd%$%^$",
    "%$*%GF%",
    "^&&^Hjj5",
    "!^%&",
    "!@!@!",
    "!#$!",
    "#%GFY$^",
    "&^%&^GFUYRUYF%$&^",
    "$^%^%#^GGFHDKJ",
    "#@*&gfuF",
    "jgj564$#@",
    "frdk4667$#",
    "53fh#$",
    "HJ57554&%",
    "JKfy6754F",
    "DS5DHF$%ds",
    "ds23478h#!$",
    "HGWIU",
    "12387192",
    "479128",
    "[$$^$^]][]",
    "{}{}{}{**",
    "**&&*",
    "%%{{{767",
    "^^JASKNA768",
    "^^##^^)",
    "{gvh^%",
    "872%$^^",
    "*&^*hvj",
    "++__kjHK",
    "~@@!@#$@",
    "||***guy",
    "y1741938cjb",
    "239182h^&d",
    "jscnak3@#s",
    "^&&^Hbq45jj5",
    "!atw4^%&",
    "qr!@!@!",
    "!#rgee$!",
    "#%GdfheraFY$^",
    "&^%25&^UYF%$&^",
    "$^%^%D423ef#^GGFHDKJ",
    "#@waeawgr*&gfuF",
    "jgjqb5564$#@",
    "frdk2q54667$#",
    "53f245vh#$",
    "HJ57356554&%",
    "JK35fy6754F",
    "DS5aegDHF$%ds",
    "ds23478hsd#!$",
    "HG436WIU",
    "12387sgd192",
    "47sg9128",
    "[$$^$^]]sg[]",
    "{}dg{}{}{**",
    "*sgd*&&*",
    "%%532{{{767",
    "^^JASK253NA768",
    "^^##234^^)",
    "!@#!GJFYD<UT}{|",
    "hbjHGU6567@$",
    "!#1$%gq",
    "32^qw@",
    "$%a71*343",
    "*$cv%$%i$",
    "%-pu%GF%",
    "^*8asjj5",
    "p1%&",
    "!@ty!",
    "!#&$q",
    "#gq%Y$^",
    "&^%&^ua^*$%$&^",
    "$^%^%hagq%KJ",
    "#@*&UA*F",
    "jgjNUI^%*$#@",
    "frdkna*7$#",
    "IA&%#$",
    "HJ56&*)&%",
    "JK&#@(54F",
    "DS^(#%ds",
    "ds23^ANA!$",
    "HA&BAIU",
    "12nuaa^*92",
    "4^*SNA28",
    "[A^*YCB]][]",
    "{}KUA&{**",
    "*&^%A*",
    "%^&a67",
  ];
  return d;
}

function Encript(character, Dotarray, KEY) {
  KEY = Math.abs(KEY);

  let Dotarray1 = [
    ".@#1%%42",
    ".&2^36@",
    ".$%aASH2343",
    ".sahd%$%^$",
    ".%$*%GF%",
    ".^&&^Hjj5",
    ".!^%&",
    ".!@!@!",
    ".!#$!",
    ".#%GFY$^",
    ".&^%&^GFUYRUYF%$&^",
    ".$^%^%#^GGFHDKJ",
    ".#@*&gfuF",
    ".jgj564$#@",
    ".frdk4667$#",
    ".53fh#$",
    ".HJ57554&%",
    ".JKfy6754F",
    ".DS5DHF$%ds",
    ".ds23478h#!$",
    ".HGWIU",
    ".12387192",
    ".479128",
    ".[$$^$^]][]",
    ".{}{}{}{**",
    ".**&&*",
    ".%%{{{767",
    ".^^JASKNA768",
    ".^^##^^)",
    ".{gvh^%",
    ".872%$^^",
    ".*&^*hvj",
    ".++__kjHK",
    ".~@@!@#$@",
    ".||***guy",
    ".y1741938cjb",
    ".239182h^&d",
    ".jscnak3@#s",
    ".^&&^Hbq45jj5",
    ".!atw4^%&",
    ".qr!@!@!",
    ".!#rgee$!",
    ".#%GdfheraFY$^",
    ".&^%25&^UYF%$&^",
    ".$^%^%D423ef#^GGFHDKJ",
    ".#@waeawgr*&gfuF",
    ".jgjqb5564$#@",
    ".frdk2q54667$#",
    ".53f245vh#$",
    ".HJ57356554&%",
    ".JK35fy6754F",
    ".DS5aegDHF$%ds",
    ".ds23478hsd#!$",
    ".HG436WIU",
    ".12387sgd192",
    ".47sg9128",
    ".[$$^$^]]sg[]",
    ".{}dg{}{}{**",
    ".*sgd*&&*",
    ".%%532{{{767",
    ".^^JASK253NA768",
    ".^^##234^^)",
    ".!@#!GJFYD<UT}{|",
    ".hbjHGU6567@$",
    ".!#1$%gq",
    ".32^qw@",
    ".$%a71*343",
    ".*$cv%$%i$",
    ".%-pu%GF%",
    ".^*8asjj5",
    ".p1%&",
    ".!@ty!",
    ".!#&$q",
    ".#gq%Y$^",
    ".&^%&^ua^*$%$&^",
    ".$^%^%hagq%KJ",
    ".#@*&UA*F",
    ".jgjNUI^%*$#@",
    ".frdkna*7$#",
    ".IA&%#$",
    ".HJ56&*)&%",
    ".JK&#@(54F",
    ".DS^(#%ds",
    ".ds23^ANA!$",
    ".HA&BAIU",
    ".12nuaa^*92",
    ".4^*SNA28",
    ".[A^*YCB]][]",
    ".{}KUA&{**",
    ".*&^%A*",
    ".%^&a67",
  ];

  d2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " ", "\t", "-", "(", ")", "{", "}", "[", "]", "<", ">", "+", ".", "'", ":", ";", "|", "!", "?", "$", "%", "&", '"', ",", "@", "=", "#", "*", "/"];

  let swappedlist = Swap(KEY, Dotarray1);

  let val = "";
  let e;

  for (let i = 0; i < character.length; i++) {
    e = character[i];

    val = val + swappedlist[d2.indexOf(e)];
  }

  return val;
}

function Decript(key, to_encript) {
  let to_encript11111 = to_encript.split(".");

  to_encript11111 = to_encript11111.slice(1, to_encript11111.length);

  d2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " ", "\t", "-", "(", ")", "{", "}", "[", "]", "<", ">", "+", ".", "'", ":", ";", "|", "!", "?", "$", "%", "&", '"', ",", "@", "=", "#", "*", "/"];
  let WithoutDotArray = [
    "@#1%%42",
    "&2^36@",
    "$%aASH2343",
    "sahd%$%^$",
    "%$*%GF%",
    "^&&^Hjj5",
    "!^%&",
    "!@!@!",
    "!#$!",
    "#%GFY$^",
    "&^%&^GFUYRUYF%$&^",
    "$^%^%#^GGFHDKJ",
    "#@*&gfuF",
    "jgj564$#@",
    "frdk4667$#",
    "53fh#$",
    "HJ57554&%",
    "JKfy6754F",
    "DS5DHF$%ds",
    "ds23478h#!$",
    "HGWIU",
    "12387192",
    "479128",
    "[$$^$^]][]",
    "{}{}{}{**",
    "**&&*",
    "%%{{{767",
    "^^JASKNA768",
    "^^##^^)",
    "{gvh^%",
    "872%$^^",
    "*&^*hvj",
    "++__kjHK",
    "~@@!@#$@",
    "||***guy",
    "y1741938cjb",
    "239182h^&d",
    "jscnak3@#s",
    "^&&^Hbq45jj5",
    "!atw4^%&",
    "qr!@!@!",
    "!#rgee$!",
    "#%GdfheraFY$^",
    "&^%25&^UYF%$&^",
    "$^%^%D423ef#^GGFHDKJ",
    "#@waeawgr*&gfuF",
    "jgjqb5564$#@",
    "frdk2q54667$#",
    "53f245vh#$",
    "HJ57356554&%",
    "JK35fy6754F",
    "DS5aegDHF$%ds",
    "ds23478hsd#!$",
    "HG436WIU",
    "12387sgd192",
    "47sg9128",
    "[$$^$^]]sg[]",
    "{}dg{}{}{**",
    "*sgd*&&*",
    "%%532{{{767",
    "^^JASK253NA768",
    "^^##234^^)",
    "!@#!GJFYD<UT}{|",
    "hbjHGU6567@$",
    "!#1$%gq",
    "32^qw@",
    "$%a71*343",
    "*$cv%$%i$",
    "%-pu%GF%",
    "^*8asjj5",
    "p1%&",
    "!@ty!",
    "!#&$q",
    "#gq%Y$^",
    "&^%&^ua^*$%$&^",
    "$^%^%hagq%KJ",
    "#@*&UA*F",
    "jgjNUI^%*$#@",
    "frdkna*7$#",
    "IA&%#$",
    "HJ56&*)&%",
    "JK&#@(54F",
    "DS^(#%ds",
    "ds23^ANA!$",
    "HA&BAIU",
    "12nuaa^*92",
    "4^*SNA28",
    "[A^*YCB]][]",
    "{}KUA&{**",
    "*&^%A*",
    "%^&a67",
  ];

  let dd = Swap(key, WithoutDotArray);

  let s = "";

  for (let i = 0; i < to_encript11111.length; i++) {
    e = to_encript11111[i];

    s = s + d2[dd.indexOf(e)];
  }
  return s;
}

function task_done(task, task_tool) {
  finished_task_container = document.getElementsByClassName("container")[1];

  console.log(task);
  //var key = task.getAttribute("data-key");
  uniqkey = "-" + Math.floor(1000000000 + Math.random() * 9000000000);

  title = task.childNodes[0].childNodes[0];
  deadline = task.childNodes[0].childNodes[1];

  task.removeChild(task_tool);
  flag = 1;
  task_delete(task);
}

function task_edit(task, edit_button) {
  //console.log("aaaaaaaaaaaaaaaaaa");

  edit_button.setAttribute("id", "task_edit_button_editing");
  edit_button.setAttribute("onclick", "finish_edit(this.parentElement.parentElement, this)");

  title = task.childNodes[0].childNodes[0];
  title.setAttribute("contenteditable", true);
  title.setAttribute("id", "title_editing");
  title.setAttribute("onkeypress", "allowAlphaNumericSpace(event); return (this.innerText.length < 21)");

  deadline = task.childNodes[0].childNodes[1];
  deadline.setAttribute("contenteditable", false);
  deadline.setAttribute("id", "date_editing");
  deadline.disabled = false;
  deadline.append(dateDisplay);
  dateDisplay.style.visibility = "visible";
  // dateDisplay.setAttribute("onclick", "popup_alltasks(" / "Date changed !", 2000, "alert alert-info" / ")");

  console.log(deadline.innerHTML);
  console.log(dateDisplay.innerHTML);

  description = task.childNodes[0].childNodes[2];
  description.setAttribute("contenteditable", true);
  description.setAttribute("id", "description_editing");
  description.focus();
  description.setAttribute("onkeypress", "allowAlphaNumericSpace(event); return (this.innerText.length < 21)");
}

function finish_edit(task, edit_button) {
  edit_button.setAttribute("id", "task_edit_button");
  edit_button.setAttribute("onclick", "task_edit(this.parentElement.parentElement, this)");

  title = task.childNodes[0].childNodes[0];
  title.setAttribute("contenteditable", false);
  title.setAttribute("id", "task_title");
  title.disabled = true;

  console.log(title);

  deadline = task.childNodes[0].childNodes[1];
  deadline.setAttribute("contenteditable", false);
  deadline.setAttribute("id", "task_date");
  deadline.disabled = true;

  console.log(deadline);

  let date_edit = dateDisplay.value.split("-");
  let day_edit = date_edit[2];
  let month_edit = date_edit[1];
  let year_edit = date_edit[0];

  var montharray_edit = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  for (let i = 0; i < montharray_edit.length; i++) {
    if (i === Number(month_edit)) {
      month_edit = montharray_edit[i - 1];
    }
  }

  let finalDate_edit = day_edit + " " + month_edit;
  console.log(day_edit);
  console.log(month_edit);
  console.log(finalDate_edit);
  console.log(input_box.value.length);
  console.log(finalDate_edit.length);

  let slice_deadline = deadline.innerHTML.slice(0, 6);
  console.log(slice_deadline);

  if (finalDate_edit === "undefined undefined") {
    dateDisplay.style.visibility = "hidden";
    console.log("date is not edited");
    finalDate_edit = slice_deadline;
  } else {
    dateDisplay.style.visibility = "visible";
    deadline.innerHTML = finalDate_edit;
  }

  console.log(finalDate);
  console.log(deadline.innerHTML);
  console.log(finalDate_edit);

  description = task.childNodes[0].childNodes[2];
  description.setAttribute("contenteditable", false);
  description.setAttribute("id", "task_description");
  console.log(deadline.innerHTML);
  console.log(dateDisplay.innerHTML);

  var key = task.getAttribute("data-key");
  //console.log(key);
  var task_obj = {
    title: task.childNodes[0].childNodes[0].innerHTML,
    deadline: finalDate_edit,
    key: key,
    description: task.childNodes[0].childNodes[2].innerHTML,
  };

  console.log(task_obj.deadline);

  let DotArray = [
    ".@#1%%42",
    ".&2^36@",
    ".$%aASH2343",
    ".sahd%$%^$",
    ".%$*%GF%",
    ".^&&^Hjj5",
    ".!^%&",
    ".!@!@!",
    ".!#$!",
    ".#%GFY$^",
    ".&^%&^GFUYRUYF%$&^",
    ".$^%^%#^GGFHDKJ",
    ".#@*&gfuF",
    ".jgj564$#@",
    ".frdk4667$#",
    ".53fh#$",
    ".HJ57554&%",
    ".JKfy6754F",
    ".DS5DHF$%ds",
    ".ds23478h#!$",
    ".HGWIU",
    ".12387192",
    ".479128",
    ".[$$^$^]][]",
    ".{}{}{}{**",
    ".**&&*",
    ".%%{{{767",
    ".^^JASKNA768",
    ".^^##^^)",
    ".{gvh^%",
    ".872%$^^",
    ".*&^*hvj",
    ".++__kjHK",
    ".~@@!@#$@",
    ".||***guy",
    ".y1741938cjb",
    ".239182h^&d",
    ".jscnak3@#s",
    ".^&&^Hbq45jj5",
    ".!atw4^%&",
    ".qr!@!@!",
    ".!#rgee$!",
    ".#%GdfheraFY$^",
    ".&^%25&^UYF%$&^",
    ".$^%^%D423ef#^GGFHDKJ",
    ".#@waeawgr*&gfuF",
    ".jgjqb5564$#@",
    ".frdk2q54667$#",
    ".53f245vh#$",
    ".HJ57356554&%",
    ".JK35fy6754F",
    ".DS5aegDHF$%ds",
    ".ds23478hsd#!$",
    ".HG436WIU",
    ".12387sgd192",
    ".47sg9128",
    ".[$$^$^]]sg[]",
    ".{}dg{}{}{**",
    ".*sgd*&&*",
    ".%%532{{{767",
    ".^^JASK253NA768",
    ".^^##234^^)",
    ".!@#!GJFYD<UT}{|",
    ".hbjHGU6567@$",
    ".!#1$%gq",
    ".32^qw@",
    ".$%a71*343",
    ".*$cv%$%i$",
    ".%-pu%GF%",
    ".^*8asjj5",
    ".p1%&",
    ".!@ty!",
    ".!#&$q",
    ".#gq%Y$^",
    ".&^%&^ua^*$%$&^",
    ".$^%^%hagq%KJ",
    ".#@*&UA*F",
    ".jgjNUI^%*$#@",
    ".frdkna*7$#",
    ".IA&%#$",
    ".HJ56&*)&%",
    ".JK&#@(54F",
    ".DS^(#%ds",
    ".ds23^ANA!$",
    ".HA&BAIU",
    ".12nuaa^*92",
    ".4^*SNA28",
    ".[A^*YCB]][]",
    ".{}KUA&{**",
    ".*&^%A*",
    ".%^&a67",
  ];

  console.log(task_obj.title);
  console.log(task_obj.description);
  console.log(task_obj.deadline);

  let encryptTitle = Encript(task_obj.title, DotArray, task_obj.key);
  task_obj.title = encryptTitle;

  let encryptDescription = Encript(task_obj.description, DotArray, task_obj.key);
  task_obj.description = encryptDescription;

  console.log(task_obj.title);
  console.log(task_obj.description);
  //console.log(uniqkey);
  uniqkey = key;

  var updates = {};
  updates["/To-Do-List/" + demo + "/" + xyz + "/" + "Task" + uniqkey] = task_obj;
  firebase.database().ref().update(updates);

  popup_alltasks("Task has been edited !", 2000, "alert alert-info");
}

function task_delete(task) {
  key = task.getAttribute("data-key");
  task_to_remove = firebase.database().ref("To-Do-List/" + demo + "/" + xyz + "/" + "Task" + key);
  task_to_remove.remove();

  remove_IMP = firebase.database().ref("/To-Do-List/" + demo + "/Imp/" + xyz + "/" + "Task" + key);
  remove_IMP.remove();

  console.log(task);
  task.remove();
  if (flag == 1) {
    popup_alltasks("Task has been Completed !", 2000, "alert alert-success");
    flag = 0;
  } else {
    popup_alltasks("Task has been Deleted !", 2000, "alert alert-danger");
    flag = 0;
  }
}

let UIDDDD;

function Pvt() {
  // User is signed in.
  // UIDDDD = user.uid;
  // console.log(UIDDDD);

  let personal = document.getElementById("personalList");
  let shared = document.getElementById("sharedList");
  let hello = document.getElementById("hello");
  // let update_alert = document.getElementById("update_alert");

  personal.style.visibility = "hidden";
  shared.style.visibility = "hidden";
  personal.disabled = true;
  shared.disabled = true;
  hello.style.visibility = "hidden";
  // update_alert.style.visibility = "hidden";
  // update_alert.disabled = true;

  xyz = "Pvt";
  document.getElementById("finish_task_header").innerHTML = "Personal";
  console.log(demo);
  create_unfinished_task();
  console.log("yupieee");
}

let dateDisplay;

function create_unfinished_task() {
  console.log(xyz);
  unfinished_task_container = document.getElementsByClassName("container")[0];
  unfinished_task_container.innerHTML === "";

  // if ($(".container").is(":empty")) {
  //   document.querySelector(".output1").textContent = true;
  //   console.log("Agaiyo");
  // } else {
  //   console.log("dddddddddddddddddddddddddddddddddddddd");
  // }

  console.log(xyz);
  console.log(demo);

  task_array = [];
  firebase
    .database()
    .ref("To-Do-List/" + demo + "/" + xyz)
    .once("value", function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        var childKey = childSnapshot.uniqkey;
        var childData = childSnapshot.val();
        task_array.push(Object.values(childData));
      });
      console.log("aaaaa");
      console.log(task_array);
      for (var i, i = 0; i < task_array.length; i++) {
        task_date = task_array[i][0];
        task_title = task_array[i][3];
        task_key = task_array[i][2];
        task_description = task_array[i][1];
        console.log(xyz);
        console.log(task_title);
        console.log(task_array);

        let task_decrypted_title = Decript(Math.abs(task_key), task_title);
        let task_decrypted_description = Decript(Math.abs(task_key), task_description);

        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        task_container.setAttribute("data-key", task_key);

        // TASK DATA
        task_data = document.createElement("div");
        task_data.setAttribute("id", "task_data");

        title = document.createElement("p");
        title.setAttribute("id", "task_title");
        title.setAttribute("contenteditable", false);

        task_data.append(title);

        title.innerHTML = task_decrypted_title;
        console.log(title);

        dateDisplay = document.createElement("input");
        dateDisplay.setAttribute("id", "task_displaydate");
        dateDisplay.setAttribute("contenteditable", false);
        dateDisplay.innerHTML = task_date;
        dateDisplay.setAttribute("type", "date");

        deadline = document.createElement("p");
        deadline.setAttribute("id", "task_date");
        deadline.setAttribute("contenteditable", true);
        deadline.innerHTML = task_date;
        deadline.disabled = true;

        description = document.createElement("p");
        description.setAttribute("id", "task_description");
        description.setAttribute("contenteditable", false);
        description.innerHTML = task_decrypted_description;

        // TASK TOOLS
        task_tool = document.createElement("div");
        task_tool.setAttribute("id", "task_tool");

        task_done_button = document.createElement("button");
        task_done_button.setAttribute("id", "task_done_button");
        task_done_button.setAttribute("onclick", "task_done(this.parentElement.parentElement, this.parentElement)");
        fa_done = document.createElement("i");
        fa_done.setAttribute("class", "fa fa-check fa-2x");
        fa_done.setAttribute("style", "color: green");

        task_edit_button = document.createElement("button");
        task_edit_button.setAttribute("id", "task_edit_button");
        task_edit_button.setAttribute("onclick", "task_edit(this.parentElement.parentElement, this)");

        fa_edit = document.createElement("i");
        fa_edit.setAttribute("class", "fas fa-edit fa-2x");

        task_delete_button = document.createElement("button");
        task_delete_button.setAttribute("id", "task_delete_button");
        task_delete_button.setAttribute("onclick", "task_delete(this.parentElement.parentElement)");
        fa_delete = document.createElement("i");
        fa_delete.setAttribute("class", "fa fa-trash fa-2x");
        fa_delete.setAttribute("style", "color: red");

        task_star_button = document.createElement("button");
        task_star_button.setAttribute("id", "star_button");
        task_star_button.setAttribute("onclick", "Imp_list(this.parentElement.parentElement)");
        fa_star = document.createElement("i");
        fa_star.setAttribute("id", "toggle");
        fa_star.setAttribute("class", "far fa-star fa-2x "); //unfilled
        fa_star.setAttribute("style", "color: orange");

        // impTask
        //   .get()
        //   .then(function (querySnapshot) {
        //     fa_star.setAttribute("class", "fas fa-star fa-2x "); //filled
        //     fa_star.setAttribute("style", "color: orange");
        //     // querySnapshot.forEach(function (doc) {
        //     //   // doc.data() is never undefined for query doc snapshots
        //     //   console.log(doc.id, " => ", doc.data());
        //     // });
        //   })
        //   .catch(function (error) {
        //     console.log("Error getting documents: ", error);
        //   });

        // if (impTask.where("starflag", "==", 0)) {
        //   fa_star.setAttribute("class", "far fa-star fa-2x "); //unfilled
        //   fa_star.setAttribute("style", "color: orange");
        // } else {
        //   fa_star.setAttribute("class", "far fa-star fa-2x "); //unfilled
        //   fa_star.setAttribute("style", "color: orange");
        // }

        unfinished_task_container.append(task_container);
        task_container.append(task_data);
        task_data.append(title);
        task_data.append(deadline);
        task_data.append(description);

        task_container.append(task_tool);
        task_tool.append(task_done_button);
        task_done_button.append(fa_done);
        task_tool.append(task_edit_button);
        task_edit_button.append(fa_edit);
        task_tool.append(task_delete_button);
        task_delete_button.append(fa_delete);
        task_tool.append(task_star_button);
        task_star_button.append(fa_star);

        let todaytime16 = new Date();
        let todaytime1 = new Date();
        todaytime16.setDate(todaytime16.getDate() - 16);
        todaytime1.setDate(todaytime1.getDate() - 1);
        //console.log(todaytime16.toUTCString());

        let timestring16 = todaytime16.toUTCString();
        let timestring1 = todaytime1.toUTCString();
        let time16 = timestring16.split(" ");
        let time1 = timestring1.split(" ");
        let day16 = time16[1];
        let month16 = time16[2];
        let day1 = time1[1];
        let month1 = time1[2];

        let timeon16 = day16 + " " + month16;
        let timeon1 = day1 + " " + month1;

        if (timeon16 == task_date) {
          let userRef16 = firebase.database().ref("/To-Do-List/" + demo + "/" + xyz + "/" + "Task" + uniqkey);

          userRef16.remove();
        }
        if (timeon1 == task_date) {
          let userRef1 = firebase.database().ref("All-Tasks" + "/" + xyz + "/" + "Task" + uniqkey);

          userRef1.remove();
        }
      }
    });
}

let starflag = 0;
let x;

function Imp_list(task) {
  key = task.getAttribute("data-key");
  uniqkey = key;

  console.log(key);
  console.log(demo);
  console.log(xyz);
  console.log(task);

  var IMPPPP = {
    title: task.childNodes[0].childNodes[0].innerHTML,
    deadline: task.childNodes[0].childNodes[1].innerHTML,
    key: key,
    description: task.childNodes[0].childNodes[2].innerHTML,
  };

  console.log(task.title);
  console.log(title);

  let DotArrayImportant = [
    ".@#1%%42",
    ".&2^36@",
    ".$%aASH2343",
    ".sahd%$%^$",
    ".%$*%GF%",
    ".^&&^Hjj5",
    ".!^%&",
    ".!@!@!",
    ".!#$!",
    ".#%GFY$^",
    ".&^%&^GFUYRUYF%$&^",
    ".$^%^%#^GGFHDKJ",
    ".#@*&gfuF",
    ".jgj564$#@",
    ".frdk4667$#",
    ".53fh#$",
    ".HJ57554&%",
    ".JKfy6754F",
    ".DS5DHF$%ds",
    ".ds23478h#!$",
    ".HGWIU",
    ".12387192",
    ".479128",
    ".[$$^$^]][]",
    ".{}{}{}{**",
    ".**&&*",
    ".%%{{{767",
    ".^^JASKNA768",
    ".^^##^^)",
    ".{gvh^%",
    ".872%$^^",
    ".*&^*hvj",
    ".++__kjHK",
    ".~@@!@#$@",
    ".||***guy",
    ".y1741938cjb",
    ".239182h^&d",
    ".jscnak3@#s",
    ".^&&^Hbq45jj5",
    ".!atw4^%&",
    ".qr!@!@!",
    ".!#rgee$!",
    ".#%GdfheraFY$^",
    ".&^%25&^UYF%$&^",
    ".$^%^%D423ef#^GGFHDKJ",
    ".#@waeawgr*&gfuF",
    ".jgjqb5564$#@",
    ".frdk2q54667$#",
    ".53f245vh#$",
    ".HJ57356554&%",
    ".JK35fy6754F",
    ".DS5aegDHF$%ds",
    ".ds23478hsd#!$",
    ".HG436WIU",
    ".12387sgd192",
    ".47sg9128",
    ".[$$^$^]]sg[]",
    ".{}dg{}{}{**",
    ".*sgd*&&*",
    ".%%532{{{767",
    ".^^JASK253NA768",
    ".^^##234^^)",
    ".!@#!GJFYD<UT}{|",
    ".hbjHGU6567@$",
    ".!#1$%gq",
    ".32^qw@",
    ".$%a71*343",
    ".*$cv%$%i$",
    ".%-pu%GF%",
    ".^*8asjj5",
    ".p1%&",
    ".!@ty!",
    ".!#&$q",
    ".#gq%Y$^",
    ".&^%&^ua^*$%$&^",
    ".$^%^%hagq%KJ",
    ".#@*&UA*F",
    ".jgjNUI^%*$#@",
    ".frdkna*7$#",
    ".IA&%#$",
    ".HJ56&*)&%",
    ".JK&#@(54F",
    ".DS^(#%ds",
    ".ds23^ANA!$",
    ".HA&BAIU",
    ".12nuaa^*92",
    ".4^*SNA28",
    ".[A^*YCB]][]",
    ".{}KUA&{**",
    ".*&^%A*",
    ".%^&a67",
  ];

  let encryptTitle = Encript(IMPPPP.title, DotArrayImportant, uniqkey);
  IMPPPP.title = encryptTitle;

  console.log(input_description.value);
  let encryptDescription = Encript(IMPPPP.description, DotArrayImportant, uniqkey);
  IMPPPP.description = encryptDescription;

  // if (starflag == 0) {
  //   starflag = 1;
  //   console.log(starflag);
  //   popup_alltasks("Task added to important !", 2000, "alert alert-warning");

  //   var updates = {};
  //   updates["/To-Do-List/" + demo + "/Imp/" + xyz + "/" + "Task" + uniqkey] = IMPPPP;
  //   firebase.database().ref().update(updates);
  //   //create_unfinished_task();
  //   console.log(updates);
  // } else {
  //   starflag = 0;
  //   remove_IMP = firebase.database().ref("/To-Do-List/" + demo + "/Imp/" + xyz + "/" + "Task" + uniqkey);
  //   remove_IMP.remove();

  //   popup_alltasks("Task removed from important !", 2000, "alert alert-danger");

  //   console.log("yupieee");
  //   console.log(starflag);
  // }

  firebase
    .database()
    .ref("/To-Do-List/" + demo + "/IMP/" + xyz + "/" + "Task" + uniqkey)
    .once("value", (snapshot) => {
      if (snapshot.exists()) {
        popup_alltasks("Task removed from important !", 2000, "alert alert-danger");
        console.log("exists!");
        console.log(snapshot.val());
        remove_IMP = firebase.database().ref("/To-Do-List/" + demo + "/IMP/" + xyz + "/" + "Task" + uniqkey);
        remove_IMP.remove();
      } else {
        popup_alltasks("Task added to important !", 2000, "alert alert-warning");
        var updates = {};
        updates["/To-Do-List/" + demo + "/IMP/" + xyz + "/" + "Task" + uniqkey] = IMPPPP;
        firebase.database().ref().update(updates);
        //create_unfinished_task();
        console.log(updates);
      }
    });
}

function date_picker() {
  console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
  var cdate = new Date();
  cdate.setDate(cdate.getDate());

  $("#input_date").datepicker({
    minDate: cdate,
  });
}

function add_task() {
  console.log(xyz);
  if (xyz !== null) {
    console.log("Date entered");
    input_box = document.getElementById("input_box");
    input_date = document.getElementById("input_date");
    input_description = document.getElementById("input_description");

    uniqkey = "-" + Math.floor(1000000000 + Math.random() * 9000000000);

    var dateControl = document.querySelector("#input_date");
    date = dateControl.value.split("/");
    let day = date[1];
    let month = date[0];
    let year = date[2];

    var montharray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    for (let i = 0; i < montharray.length; i++) {
      if (i === Number(month)) {
        month = montharray[i - 1];
      }
    }

    finalDate = day + " " + month;
    console.log(day);

    console.log(month);

    console.log(finalDate);
    console.log(input_box.value.length);
    console.log(finalDate.length);

    if (input_box.value.length != 0) {
      if (typeof day != "undefined" && typeof month != "undefined") {
        task = {
          title: input_box.value,
          deadline: finalDate,
          key: uniqkey,
          description: input_description.value,
        };

        var user = firebase.auth().currentUser;

        if (user != null) {
          name = user.displayName;
          uid = user.uid;
        }

        const docRef = db.doc("AnalysisB/" + time);
        docRef
          .set({
            date: Currentdate,
            title: input_box.value,
            name: name,
          })
          .then(function (docRef) {})
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });

        let personal = document.getElementById("personalList");
        let shared = document.getElementById("sharedList");

        console.log(uniqkey);
        // var IMP_Task = {};
        // IMP_Task["/To-Do-List/" + demo + "/" + "IMP" + "/" + xyz + "/" + "Task" + uniqkey] = task;
        // firebase.database().ref().update(IMP_Task);

        if (xyz === "Pvt") {
          let DotArrayPersonalPrivate = [
            ".@#1%%42",
            ".&2^36@",
            ".$%aASH2343",
            ".sahd%$%^$",
            ".%$*%GF%",
            ".^&&^Hjj5",
            ".!^%&",
            ".!@!@!",
            ".!#$!",
            ".#%GFY$^",
            ".&^%&^GFUYRUYF%$&^",
            ".$^%^%#^GGFHDKJ",
            ".#@*&gfuF",
            ".jgj564$#@",
            ".frdk4667$#",
            ".53fh#$",
            ".HJ57554&%",
            ".JKfy6754F",
            ".DS5DHF$%ds",
            ".ds23478h#!$",
            ".HGWIU",
            ".12387192",
            ".479128",
            ".[$$^$^]][]",
            ".{}{}{}{**",
            ".**&&*",
            ".%%{{{767",
            ".^^JASKNA768",
            ".^^##^^)",
            ".{gvh^%",
            ".872%$^^",
            ".*&^*hvj",
            ".++__kjHK",
            ".~@@!@#$@",
            ".||***guy",
            ".y1741938cjb",
            ".239182h^&d",
            ".jscnak3@#s",
            ".^&&^Hbq45jj5",
            ".!atw4^%&",
            ".qr!@!@!",
            ".!#rgee$!",
            ".#%GdfheraFY$^",
            ".&^%25&^UYF%$&^",
            ".$^%^%D423ef#^GGFHDKJ",
            ".#@waeawgr*&gfuF",
            ".jgjqb5564$#@",
            ".frdk2q54667$#",
            ".53f245vh#$",
            ".HJ57356554&%",
            ".JK35fy6754F",
            ".DS5aegDHF$%ds",
            ".ds23478hsd#!$",
            ".HG436WIU",
            ".12387sgd192",
            ".47sg9128",
            ".[$$^$^]]sg[]",
            ".{}dg{}{}{**",
            ".*sgd*&&*",
            ".%%532{{{767",
            ".^^JASK253NA768",
            ".^^##234^^)",
            ".!@#!GJFYD<UT}{|",
            ".hbjHGU6567@$",
            ".!#1$%gq",
            ".32^qw@",
            ".$%a71*343",
            ".*$cv%$%i$",
            ".%-pu%GF%",
            ".^*8asjj5",
            ".p1%&",
            ".!@ty!",
            ".!#&$q",
            ".#gq%Y$^",
            ".&^%&^ua^*$%$&^",
            ".$^%^%hagq%KJ",
            ".#@*&UA*F",
            ".jgjNUI^%*$#@",
            ".frdkna*7$#",
            ".IA&%#$",
            ".HJ56&*)&%",
            ".JK&#@(54F",
            ".DS^(#%ds",
            ".ds23^ANA!$",
            ".HA&BAIU",
            ".12nuaa^*92",
            ".4^*SNA28",
            ".[A^*YCB]][]",
            ".{}KUA&{**",
            ".*&^%A*",
            ".%^&a67",
          ];

          let encryptTitle = Encript(input_box.value, DotArrayPersonalPrivate, uniqkey);
          task.title = encryptTitle;

          console.log(input_description.value);
          let encryptDescription = Encript(input_description.value, DotArrayPersonalPrivate, uniqkey);
          task.description = encryptDescription;

          var personal_Tasks = {};
          personal_Tasks["/To-Do-List/" + demo + "/" + xyz + "/" + "Task" + uniqkey] = task;
          firebase.database().ref().update(personal_Tasks);
          create_unfinished_task();
        } else {
          if (personal.checked) {
            let DotArrayPersonal = [
              ".@#1%%42",
              ".&2^36@",
              ".$%aASH2343",
              ".sahd%$%^$",
              ".%$*%GF%",
              ".^&&^Hjj5",
              ".!^%&",
              ".!@!@!",
              ".!#$!",
              ".#%GFY$^",
              ".&^%&^GFUYRUYF%$&^",
              ".$^%^%#^GGFHDKJ",
              ".#@*&gfuF",
              ".jgj564$#@",
              ".frdk4667$#",
              ".53fh#$",
              ".HJ57554&%",
              ".JKfy6754F",
              ".DS5DHF$%ds",
              ".ds23478h#!$",
              ".HGWIU",
              ".12387192",
              ".479128",
              ".[$$^$^]][]",
              ".{}{}{}{**",
              ".**&&*",
              ".%%{{{767",
              ".^^JASKNA768",
              ".^^##^^)",
              ".{gvh^%",
              ".872%$^^",
              ".*&^*hvj",
              ".++__kjHK",
              ".~@@!@#$@",
              ".||***guy",
              ".y1741938cjb",
              ".239182h^&d",
              ".jscnak3@#s",
              ".^&&^Hbq45jj5",
              ".!atw4^%&",
              ".qr!@!@!",
              ".!#rgee$!",
              ".#%GdfheraFY$^",
              ".&^%25&^UYF%$&^",
              ".$^%^%D423ef#^GGFHDKJ",
              ".#@waeawgr*&gfuF",
              ".jgjqb5564$#@",
              ".frdk2q54667$#",
              ".53f245vh#$",
              ".HJ57356554&%",
              ".JK35fy6754F",
              ".DS5aegDHF$%ds",
              ".ds23478hsd#!$",
              ".HG436WIU",
              ".12387sgd192",
              ".47sg9128",
              ".[$$^$^]]sg[]",
              ".{}dg{}{}{**",
              ".*sgd*&&*",
              ".%%532{{{767",
              ".^^JASK253NA768",
              ".^^##234^^)",
              ".!@#!GJFYD<UT}{|",
              ".hbjHGU6567@$",
              ".!#1$%gq",
              ".32^qw@",
              ".$%a71*343",
              ".*$cv%$%i$",
              ".%-pu%GF%",
              ".^*8asjj5",
              ".p1%&",
              ".!@ty!",
              ".!#&$q",
              ".#gq%Y$^",
              ".&^%&^ua^*$%$&^",
              ".$^%^%hagq%KJ",
              ".#@*&UA*F",
              ".jgjNUI^%*$#@",
              ".frdkna*7$#",
              ".IA&%#$",
              ".HJ56&*)&%",
              ".JK&#@(54F",
              ".DS^(#%ds",
              ".ds23^ANA!$",
              ".HA&BAIU",
              ".12nuaa^*92",
              ".4^*SNA28",
              ".[A^*YCB]][]",
              ".{}KUA&{**",
              ".*&^%A*",
              ".%^&a67",
            ];

            let encryptTitle = Encript(input_box.value, DotArrayPersonal, uniqkey);
            task.title = encryptTitle;

            console.log(input_description.value);
            let encryptDescription = Encript(input_description.value, DotArrayPersonal, uniqkey);
            task.description = encryptDescription;

            var updates = {};
            updates["/To-Do-List/" + demo + "/" + xyz + "/" + "Task" + uniqkey] = task;
            firebase.database().ref().update(updates);
            create_unfinished_task();
          } else if (shared.checked) {
            console.log(task.title);
            //console.log(encryptedData);
            let DotArrayShared = [
              ".@#1%%42",
              ".&2^36@",
              ".$%aASH2343",
              ".sahd%$%^$",
              ".%$*%GF%",
              ".^&&^Hjj5",
              ".!^%&",
              ".!@!@!",
              ".!#$!",
              ".#%GFY$^",
              ".&^%&^GFUYRUYF%$&^",
              ".$^%^%#^GGFHDKJ",
              ".#@*&gfuF",
              ".jgj564$#@",
              ".frdk4667$#",
              ".53fh#$",
              ".HJ57554&%",
              ".JKfy6754F",
              ".DS5DHF$%ds",
              ".ds23478h#!$",
              ".HGWIU",
              ".12387192",
              ".479128",
              ".[$$^$^]][]",
              ".{}{}{}{**",
              ".**&&*",
              ".%%{{{767",
              ".^^JASKNA768",
              ".^^##^^)",
              ".{gvh^%",
              ".872%$^^",
              ".*&^*hvj",
              ".++__kjHK",
              ".~@@!@#$@",
              ".||***guy",
              ".y1741938cjb",
              ".239182h^&d",
              ".jscnak3@#s",
              ".^&&^Hbq45jj5",
              ".!atw4^%&",
              ".qr!@!@!",
              ".!#rgee$!",
              ".#%GdfheraFY$^",
              ".&^%25&^UYF%$&^",
              ".$^%^%D423ef#^GGFHDKJ",
              ".#@waeawgr*&gfuF",
              ".jgjqb5564$#@",
              ".frdk2q54667$#",
              ".53f245vh#$",
              ".HJ57356554&%",
              ".JK35fy6754F",
              ".DS5aegDHF$%ds",
              ".ds23478hsd#!$",
              ".HG436WIU",
              ".12387sgd192",
              ".47sg9128",
              ".[$$^$^]]sg[]",
              ".{}dg{}{}{**",
              ".*sgd*&&*",
              ".%%532{{{767",
              ".^^JASK253NA768",
              ".^^##234^^)",
              ".!@#!GJFYD<UT}{|",
              ".hbjHGU6567@$",
              ".!#1$%gq",
              ".32^qw@",
              ".$%a71*343",
              ".*$cv%$%i$",
              ".%-pu%GF%",
              ".^*8asjj5",
              ".p1%&",
              ".!@ty!",
              ".!#&$q",
              ".#gq%Y$^",
              ".&^%&^ua^*$%$&^",
              ".$^%^%hagq%KJ",
              ".#@*&UA*F",
              ".jgjNUI^%*$#@",
              ".frdkna*7$#",
              ".IA&%#$",
              ".HJ56&*)&%",
              ".JK&#@(54F",
              ".DS^(#%ds",
              ".ds23^ANA!$",
              ".HA&BAIU",
              ".12nuaa^*92",
              ".4^*SNA28",
              ".[A^*YCB]][]",
              ".{}KUA&{**",
              ".*&^%A*",
              ".%^&a67",
            ];

            let encryptTitle = Encript(input_box.value, DotArrayShared, uniqkey);
            task.title = encryptTitle;

            console.log(input_description.value);
            let encryptDescription = Encript(input_description.value, DotArrayShared, uniqkey);
            task.description = encryptDescription;

            ref = firebase.database().ref();

            var urlRef = ref.child("Source/" + xyz);

            urlRef.once("value", function (snapshot) {
              snapshot.forEach(function (child) {
                let allchild = child.key;
                keySplittedArray = allchild.split(" ");

                for (let i = 0; i < keySplittedArray.length; i++) {
                  var updates = {};
                  updates["/To-Do-List/" + keySplittedArray[i] + "/" + xyz + "/" + "Task" + uniqkey] = task;

                  firebase.database().ref().update(updates);
                }
              });
            });

            // firebase ref
            var All_Tasks = {};
            All_Tasks["All-Tasks" + "/" + xyz + "/" + "Task" + uniqkey] = task;
            firebase.database().ref().update(All_Tasks);
            create_unfinished_task(xyz);
          }
        }
        input_box.value = "";
        input_date.value = "";
        input_description.value = "";
      } else {
        popup_alltasks("Enter deadline!!!", 2000, "alert alert-danger");
      }
    } else {
      popup_alltasks("Enter title!!!", 2000, "alert alert-danger");
    }
  }
}

function allowAlphaNumericSpace(e) {
  console.log("call hua");
  var code = "charCode" in e ? e.charCode : e.keyCode;
  if (
    !(code > 31 && code < 92) && // numeric (0-9) // upper alpha (A-Z)
    !(code > 96 && code < 126) &&
    !(code == 93)
  ) {
    // lower alpha (a-z)
    e.preventDefault();
  }
}

function on_load() {
  if (xyz === "Pvt") {
    Pvt();
  }
}

function sideBar() {
  let RespectiveClass = localStorage.getItem("RespectiveClass");
  let RespectiveDivision = localStorage.getItem("RespectiveDivision");

  console.log(RespectiveDivision);
  console.log(RespectiveClass);

  let CSarray = ["A", "C", "B", "B1", "B2", "B3", "A1", "A2", "A3", "C1", "C2", "C3"];

  if (CSarray.includes(RespectiveClass) || CSarray.includes(RespectiveDivision)) {
    console.log("CS");
    document.getElementById("division").innerHTML = "CS-" + RespectiveClass;
    document.getElementById("ResClass").innerHTML = "CS-" + RespectiveDivision;
  } else {
    document.getElementById("division").innerHTML = RespectiveClass;
    document.getElementById("ResClass").innerHTML = "IT" + RespectiveDivision;
    console.log("IT");
  }

  //Nodirectpass();
}

function Nodirectpass() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log("aaja aaja aaaja");
    } else {
      // No user is signed in.
      console.log("naja naja naja");
      signOut();
    }
  });
}
