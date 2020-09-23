
//import {demo} from './login'; 



let demo;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log(user.uid);
        console.log("lol");
        demo = user.uid;
       
      } else {
        // No user is signed in.
      }
    });
console.log("lol1");

 function signOut(){
  firebase.auth().signOut();
  console.log("lolllllllllllllllllllllll");
}



// console.log(demo);
let xyz=prompt("enter the class");
let uniqkey = "-" + Math.floor(1000000000 + Math.random() * 9000000000);

function add_task(){
    input_box = document.getElementById("input_box");
    input_date = document.getElementById("input_date");
    input_description = document.getElementById("input_description");
    

    if(input_box.value.length != 0 && input_date.value.length != 0){
      // our boxes have data and we take database
      
      var key = firebase.database().ref();

      if (xyz === "B") {
          key = key.child("To-Do-List/"+ demo + "/B/").push().key;
        
      }
      else if(xyz === "B1"){
        key = key.child("To-Do-List/"+ demo + "/B1/").push().key;

      }
      else if(xyz === "B2"){
        
        key = key.child("To-Do-List/"+ demo + "/B2/").push().key;
  
      }
      else if(xyz === "B3"){
         
        key = key.child("To-Do-List/"+ demo + "/B3/").push().key;
         
      }

      var task = {
        title: input_box.value,
        deadline: input_date.value,
        key: uniqkey,
        description: input_description.value
      };

      var updates1 = {};
      updates1["/Source/" + xyz + "/" + demo] = demo; //replace key with userUID
      firebase.database().ref().update(updates1);

      var updates = {};
      updates["/To-Do-List/" + demo +"/" + xyz + "/" +"Task" + uniqkey] = task;
      // updates[xyz + "/" +"Task" + uniqkey] = task;
      firebase.database().ref().update(updates);

      

      create_unfinished_task();
    }
  }

  function create_unfinished_task(){
    unfinished_task_container = document.getElementsByClassName("container")[0];
    unfinished_task_container.innerHTML = "";

    task_array = [];
    firebase.database().ref("To-Do-List/"+ demo +"/" + xyz).once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.uniqkey;
        var childData = childSnapshot.val();
        task_array.push(Object.values(childData));
      });
      for(var i, i = 0; i < task_array.length; i++){
        task_date = task_array[i][0];
        task_title = task_array[i][3];
        task_key = task_array[i][2];
        task_description = task_array[i][1];

        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        task_container.setAttribute("data-key", task_key);

        // TASK DATA
        task_data = document.createElement('div');
        task_data.setAttribute('id', 'task_data');

        title = document.createElement('p');
        title.setAttribute('id', 'task_title');
        title.setAttribute('contenteditable', false);
        title.innerHTML = task_title;

        deadline = document.createElement('p');
        deadline.setAttribute('id', 'task_date');
        deadline.setAttribute('contenteditable', false);
        deadline.innerHTML = task_date;

        description = document.createElement('p');
        description.setAttribute('id', 'task_description');
        description.setAttribute('contenteditable', false);
        description.innerHTML = task_description;

        // TASK TOOLS
        task_tool = document.createElement('div');
        task_tool.setAttribute('id', 'task_tool');

        task_done_button = document.createElement('button');
        task_done_button.setAttribute('id', 'task_done_button');
        task_done_button.setAttribute('onclick', "task_done(this.parentElement.parentElement, this.parentElement)");
        fa_done = document.createElement('i');
        fa_done.setAttribute('class', 'fa fa-check');

        task_edit_button = document.createElement('button');
        task_edit_button.setAttribute('id', 'task_edit_button');
        task_edit_button.setAttribute('onclick', "task_edit(this.parentElement.parentElement, this)");
        fa_edit = document.createElement('i');
        fa_edit.setAttribute('class', 'fa fa-pencil');

        task_delete_button = document.createElement('button');
        task_delete_button.setAttribute('id', 'task_delete_button');
        task_delete_button.setAttribute('onclick', "task_delete(this.parentElement.parentElement)");
        fa_delete = document.createElement('i');
        fa_delete.setAttribute('class', 'fa fa-trash');


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
      }

    });

  }
  

  function task_done(task, task_tool){
    finished_task_container = document.getElementsByClassName("container")[1];
    task.removeChild(task_tool);
    //finished_task_container.append(task);

    var key = task.getAttribute("data-key");
    

    // delete our task from unfinished
    task_delete(task);
    
  }

  function task_edit(task, edit_button){
    edit_button.setAttribute("id", "task_edit_button_editing");
    edit_button.setAttribute("onclick", "finish_edit(this.parentElement.parentElement, this)");

    title = task.childNodes[0].childNodes[0];
    title.setAttribute("contenteditable", true);
    title.setAttribute("id", "title_editing");
    title.focus();

    deadline = task.childNodes[0].childNodes[1];
    deadline.setAttribute("contenteditable", true);
    deadline.setAttribute("id", "date_editing");

    description = task.childNodes[0].childNodes[2];
    description.setAttribute("contenteditable", true);
    description.setAttribute("id", "description_editing");
    description.focus();

  }
  function finish_edit(task, edit_button){
    edit_button.setAttribute("id", "task_edit_button");
    edit_button.setAttribute("onclick", "task_edit(this.parentElement.parentElement, this)");

    title = task.childNodes[0].childNodes[0];
    title.setAttribute("contenteditable", false);
    title.setAttribute("id", "task_title");

    deadline = task.childNodes[0].childNodes[1];
    deadline.setAttribute("contenteditable", false);
    deadline.setAttribute("id", "task_date");

    description = task.childNodes[0].childNodes[2];
    description.setAttribute("contenteditable", false);
    description.setAttribute("id", "task_description");

    // change in firebase to
    var key = task.getAttribute("data-key");
    var task_obj = {
      title: task.childNodes[0].childNodes[0].innerHTML,
      deadline: task.childNodes[0].childNodes[1].innerHTML,
      key: key,
      description: task.childNodes[0].childNodes[2].innerHTML
    };

    var updates = {};
    updates["/To-Do-List/" + demo +"/" + xyz + "/" +"Task"+ uniqkey] = task_obj;
    firebase.database().ref().update(updates);

  }

  function task_delete(task){
    key = task.getAttribute("data-key");
    task_to_remove = firebase.database().ref("To-Do-List/" + demo +"/" + xyz + "/" +"Task"  + key);
    task_to_remove.remove();
    console.log("delete hogya 1");

    // remove from html view or whatevesss
    task.remove();

  }


