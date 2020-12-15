let xyz, demo;
let impUID = localStorage.getItem("finalUIDD");
let PRN = localStorage.getItem("PRN");
demo = impUID;
console.log(PRN);

let RespectiveClass = localStorage.getItem("RespectiveClass");
let RespectiveDivision = localStorage.getItem("RespectiveDivision");
let arr_class_division = [RespectiveClass, RespectiveDivision];

function ImportantTask(xyz) {
  document.getElementById("finish_task_header").innerHTML = document.getElementById(xyz).innerHTML;

  console.log(xyz);
  unfinished_task_container = document.getElementsByClassName("container")[0];
  unfinished_task_container.innerHTML = "";
  console.log(xyz);
  console.log(demo);

  // let imparray = ["B", "B3", "Pvt"];

  //   xyz = "B3";
  //let impTask = db.collection("starflag").doc(key);

  task_array = [];
  firebase
    .database()
    .ref("/To-Do-List/" + demo + "/IMP/" + xyz)
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
        console.log(xyz);
        console.log(task_key);
        console.log(task_description);

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
        console.log(task_decrypted_title);
        title.innerHTML = task_decrypted_title;
        console.log(title);

        dateDisplay = document.createElement("input");
        dateDisplay.setAttribute("id", "task_displaydate");
        dateDisplay.setAttribute("contenteditable", true);
        dateDisplay.innerHTML = task_date;
        dateDisplay.setAttribute("type", "date");

        deadline = document.createElement("p");
        deadline.setAttribute("id", "task_date");
        deadline.setAttribute("contenteditable", false);
        deadline.innerHTML = task_date;
        deadline.disabled = true;

        description = document.createElement("p");
        description.setAttribute("id", "task_description");
        description.setAttribute("contenteditable", false);
        description.innerHTML = task_decrypted_description;

        // TASK TOOLS
        task_tool = document.createElement("div");
        task_tool.setAttribute("id", "task_tool");

        console.log(xyz);

        task_star_button = document.createElement("button");
        task_star_button.setAttribute("id", "star_button");
        task_star_button.setAttribute("onclick", "Imp_list(this.parentElement.parentElement," + xyz + ")");
        fa_star = document.createElement("i");
        fa_star.setAttribute("id", "toggle");
        fa_star.setAttribute("class", "fas fa-star fa-2x "); //unfilled
        fa_star.setAttribute("style", "color: orange");

        unfinished_task_container.append(task_container);
        task_container.append(task_data);
        task_data.append(title);
        task_data.append(deadline);
        task_data.append(description);

        task_container.append(task_tool);
        task_tool.append(task_star_button);
        task_star_button.append(fa_star);
      }
    });

  Qwerty();
}

function Qwerty() {
  let demo = document.getElementById("ImpClass").innerHTML;
  console.log(demo);
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
  console.log(s);
  return s;
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
  //console.log(d22);
  return d22;
}

function signOut() {
  // xyz = "";
  // task_array = [];

  firebase
    .auth()
    .signOut()
    .then(function () {
      // Sign-out successful.

      for (let i = 0; i < arr_class_division.length; i++) {
        remove_source = firebase.database().ref("/Source/" + arr_class_division[i] + "/" + demo);
        remove_source.remove();
      }

      remove_PRN_Source = firebase.database().ref("/PRN-Source/" + "/" + demo);
      remove_PRN_Source.remove();

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

function Imp_list(task, qwerty) {
  key = task.getAttribute("data-key");
  uniqkey = key;
  xyz = qwerty.id;
  console.log(qwerty.id);
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

  console.log(IMPPPP.title);
  console.log(title);

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

        console.log(task);
        task.remove();
        console.log("Yupieeeeeeeeeeeee");
      } else {
        console.log("there is nothing");
      }
    });
}

function ImpHeading() {
  console.log(RespectiveDivision);
  console.log(RespectiveClass);

  let CSarray = ["A", "C", "B", "B1", "B2", "B3", "A1", "A2", "A3", "C1", "C2", "C3"];

  if (CSarray.includes(RespectiveClass) || CSarray.includes(RespectiveDivision)) {
    console.log("CS");
    document.getElementById("Impdivision").innerHTML = "CS-" + RespectiveClass;
    document.getElementById("ImpClass").innerHTML = "CS-" + RespectiveDivision;
  } else {
    document.getElementById("Impdivision").innerHTML = RespectiveClass;
    document.getElementById("ImpClass").innerHTML = "IT-" + RespectiveDivision;
    console.log("IT");
  }
}

function Imp_Class() {
  if (Number(PRN) >= 19070122073 && Number(PRN) <= 19070122145) {
    xyzClass = "B";

    ImportantTask(xyzClass);
    document.getElementById("finish_task_header").innerHTML = "CS-B";
  } else if (Number(PRN) >= 19070122001 && Number(PRN) <= 19070122072) {
    xyzClass = "A";

    ImportantTask(xyzClass);
    document.getElementById("finish_task_header").innerHTML = "CS-A";
  } else if (Number(PRN) >= 19070122001 && Number(PRN) <= 19070122072) {
    xyzClass = "C";

    ImportantTask(xyzClass);
    document.getElementById("finish_task_header").innerHTML = "CS-C";
  } else if (Number(PRN) >= 19070122001 && Number(PRN) <= 19070122072) {
    xyzClass = "IT";

    ImportantTask(xyzClass);
    document.getElementById("finish_task_header").innerHTML = "IT";
  }
}

function Imp_Division() {
  if (Number(PRN) == 19070122120 || Number(PRN) == 19070122126) {
    xyz = "B3";

    ImportantTask(xyz);
    document.getElementById("finish_task_header").innerHTML = "Admin";
  } else if (Number(PRN) >= 19070122073 && Number(PRN) <= 19070122095) {
    xyz = "B1";
    ImportantTask(xyz);
    document.getElementById("finish_task_header").innerHTML = "CS-B1";
  } else if (Number(PRN) >= 19070122096 && Number(PRN) <= 19070122119) {
    xyz = "B2";

    ImportantTask(xyz);
    document.getElementById("finish_task_header").innerHTML = "CS-B2";
  } else if (Number(PRN) >= 19070122120 && Number(PRN) <= 19070122145) {
    xyz = "B3";

    ImportantTask(xyz);
    document.getElementById("finish_task_header").innerHTML = "CS-B3";
  } else if (Number(PRN) >= 19070122001 && Number(PRN) <= 19070122025) {
    xyz = "A1";

    ImportantTask(xyz);
    document.getElementById("finish_task_header").innerHTML = "CS-A1";
  } else if (Number(PRN) >= 19070122026 && Number(PRN) <= 19070122048) {
    xyz = "A2";

    ImportantTask(xyz);
    document.getElementById("finish_task_header").innerHTML = "CS-A2";
  } else if (Number(PRN) >= 19070122049 && Number(PRN) <= 19070122072) {
    xyz = "A3";

    ImportantTask(xyz);
    document.getElementById("finish_task_header").innerHTML = "CS-A3";
  } else if (Number(PRN) >= 19070122146 && Number(PRN) <= 19070122167) {
    xyz = "C1";

    ImportantTask(xyz);
    document.getElementById("finish_task_header").innerHTML = "CS-C1";
  } else if (Number(PRN) >= 19070122168 && Number(PRN) <= 19070122190) {
    xyz = "C2";

    ImportantTask(xyz);
    document.getElementById("finish_task_header").innerHTML = "CS-C2";
  } else if (Number(PRN) >= 19070122191 && Number(PRN) <= 20070122515) {
    xyz = "C3";

    ImportantTask(xyz);
    document.getElementById("finish_task_header").innerHTML = "CS-C3";
  } else if (Number(PRN) >= 19070124001 && Number(PRN) <= 19070124028) {
    xyz = "T1";

    ImportantTask(xyz);
    document.getElementById("finish_task_header").innerHTML = "CS-T1";
  } else if (Number(PRN) >= 19070124029 && Number(PRN) <= 19070124055) {
    xyz = "T2";

    ImportantTask(xyz);
    document.getElementById("finish_task_header").innerHTML = "CS-T2";
  } else if (Number(PRN) >= 19070124056 && Number(PRN) <= 20070124502) {
    xyz = "T3";

    ImportantTask(xyz);
    document.getElementById("finish_task_header").innerHTML = "CS-T3";
  }
}

function Imp_Pvt() {
  xyz = "Pvt";
  ImportantTask(xyz);
  document.getElementById("finish_task_header").innerHTML = "Pvt";
}
