
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
let xyz;
let uniqkey = "-" + Math.floor(1000000000 + Math.random() * 9000000000);
console.log("Ayooo");
alert("Choose any class");
//create_unfinished_task(); //FETCH TABHI HOGA JAB USMAI KOI DATA HOGA


function CS_B(){
  xyz="B";
  console.log(xyz);
  console.log("function entered B");
  //document.getElementById("content_container").reload();
  var updates1 = {};
      updates1["/Source/" + xyz + "/" + demo] = demo; 
      console.log(updates1);//replace key with userUID
      firebase.database().ref().update(updates1);

  
}

function CS_B1(){
  xyz="B1";
  console.log(xyz);
  console.log("function entered B1");
  
  var updates1 = {};
  updates1["/Source/" + xyz + "/" + demo] = demo; 
  console.log(updates1);//replace key with userUID
  firebase.database().ref().update(updates1);

}

function CS_B2(){
  xyz="B2";
  console.log(xyz);
  console.log("function entered B2");
  var updates1 = {};
      updates1["/Source/" + xyz + "/" + demo] = demo; 
      console.log(updates1);//replace key with userUID
      firebase.database().ref().update(updates1);

}

function CS_B3(){
  xyz="B3";
  console.log(xyz);
  console.log("function entered B3");
  var updates1 = {};
      updates1["/Source/" + xyz + "/" + demo] = demo; 
      console.log(updates1);//replace key with userUID
      firebase.database().ref().update(updates1);

}


      
      


function add_task(){
    input_box = document.getElementById("input_box");
    input_date = document.getElementById("input_date");
    input_description = document.getElementById("input_description");
    
    


    if(input_box.value.length != 0 && input_date.value.length != 0){
      // our boxes have data and we take database
      
      var key = firebase.database().ref();
      console.log(key);


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



      

      // var count = 0;
      // ref.on('value',gotData,ErrorData);

      // function gotData(data){
      //   //console.log(data.val());
      //   let allData = data.val();
      //   let keys = Object.keys(allData);
      //   console.log(keys); 
      //   console.log("i got the data");
      // }
      
      // function ErrorData(err){
      //   console.log(err);
      //   console.log("i got an error");
      // }
      
      ref = firebase.database().ref();
      
      var urlRef = ref.child("Source/" + xyz);

      urlRef.once("value", function(snapshot) {
        snapshot.forEach(function(child) {
          let allchild = child.val();
          //let keys = Object.keys(allchild);
          console.log(allchild);
        
          // keystring="";
          // //for(let i=0; i< (allchild!=0);i++){
          //   keystring+=allchild + " ";
          //   console.log(keystring);
            keySplittedArray = allchild.split(' ');
            //console.log(keySplittedArray);
          console.log(keySplittedArray.length);
            for(let i=0; i<keySplittedArray.length;i++){

              console.log(keySplittedArray[i]);
              var updates = {};
              updates["/To-Do-List/" + keySplittedArray[i] +"/" + xyz + "/" +"Task" + uniqkey] = task;
              console.log(updates);
              firebase.database().ref().update(updates);
              //console.log(updates);

            }
         
          });
          //console.log(keystring);
          //console.log(keySplittedArray.length);
          //create_unfinished_task();
        
      });





     
      

      // var updates = {};
      // updates["/To-Do-List/" + demo +"/" + xyz + "/" +"Task" + uniqkey] = task;
      // // updates[xyz + "/" +"Task" + uniqkey] = task;
      // firebase.database().ref().update(updates);


      // ID ,BATCH,KEY

    //   async function getTime() {
    //     let value = await eel.Sync(demo,xyz,uniqkey)();
    //     console.log("sssssssssssss");
    //     console.log(value);
    // }
    // getTime();
      
      input_box.value = '';
      input_date.value = '';
      input_description.value = '';

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
        //console.log(task_date);
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


    //unfinished_task_container.innerHTML = "";
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


