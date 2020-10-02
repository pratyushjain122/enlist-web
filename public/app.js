document.onkeydown = function(e) {
  if(event.keyCode == 123) {
  return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
  return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
  return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
  return false;
  }
  }
  

var favoritemovie = sessionStorage.getItem("favoriteMovie");

let prnnn = favoritemovie;


let a=document.getElementById("B");

let c=document.getElementById("B2");
let d=document.getElementById("B3");


let demo;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user!==null) {
        demo = user.uid;
       
      } else {
  
        alert("Please login");
        window.location.assign('./index.html');
      }

      
    });

 function signOut(){
  firebase.auth().signOut();
}



let xyz;
xyz="B";

let uniqkey;
var finalDate;
alert("Choose Your Class or Division");


var db = firebase.firestore();



function CS_B(){
  alert("You are in CS-B");
  let a=document.getElementById("B");

  xyz="B";

  var updates1 = {};
      updates1["/Source/" + xyz + "/" + demo] = demo; 
      firebase.database().ref().update(updates1);
      create_unfinished_task();
}

function CS_B1(){
let a=document.getElementById("B1");
alert("You are in B1 Division");
  xyz="B1";
  
  
  var updates1 = {};
  updates1["/Source/" + xyz + "/" + demo] = demo; 
  firebase.database().ref().update(updates1);
  create_unfinished_task();
}

function CS_B2(){
  xyz="B2";
  alert("You are in B2 Division");
  var updates1 = {};
      updates1["/Source/" + xyz + "/" + demo] = demo; 
      firebase.database().ref().update(updates1);
      create_unfinished_task();
}

function CS_B3(){
  xyz="B3";
  alert("You are in B3 Division");
  var updates1 = {};
      updates1["/Source/" + xyz + "/" + demo] = demo; 

      firebase.database().ref().update(updates1);
      create_unfinished_task();
}


function Division(){


  if(Number(prnnn) == 120 || Number(prnnn) == 126 || Number(prnnn) == 129 || Number(prnnn) ==134){
    CS_B1();
    CS_B2();
    CS_B3();
    
  }
  else if(Number(prnnn) >= 073 && Number(prnnn) <= 095){
    
    CS_B1();
  }
  else if(Number(prnnn) >= 096 && Number(prnnn) <= 119){
    
    CS_B2();
  }
  else if(Number(prnnn) >= 120 && Number(prnnn) <=145){
    
    CS_B3();
  
  }


}   
     

function add_task(){
    input_box = document.getElementById("input_box");
    input_date = document.getElementById("input_date");
    input_description = document.getElementById("input_description");
    
    uniqkey = "-" + Math.floor(1000000000 + Math.random() * 9000000000);

    

      var cdate = new Date();
      cdate.setDate(cdate.getDate());
      
      $('#input_date').datepicker({ 
      // startDate: cdate,
      minDate: cdate
      });


      var dateControl = document.querySelector('#input_date');
      date = dateControl.value.split("/");
      let day = date[1];
      let month = date[0];
      let year = date[2];

      var montharray = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

      for(let i=0;i<montharray.length;i++){
          if(i===Number(month)){
            month=montharray[i-1];
          }
        }
        
        finalDate = day + " " + month ;
  


    if(input_box.value.length != 0 && finalDate.length != 0){
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
        deadline: finalDate,
        key: uniqkey,
        description: input_description.value
      };

      var today = new Date();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var Currentdate = today.getDate() +' '+ today.getMonth()+' '+ today.getFullYear();
      
      let ZeroDate = today.getDate();
        if(ZeroDate === 1 || ZeroDate === 2 || ZeroDate === 3 || ZeroDate === 4 || ZeroDate === 5 || ZeroDate === 6 || ZeroDate === 7 || ZeroDate === 8 || ZeroDate === 9){
          ZeroDate = '0' + ZeroDate;
          Currentdate =  ZeroDate +' '+today.getMonth()+' '+today.getFullYear();
        }else{
          Currentdate =  ZeroDate +' '+today.getMonth()+' '+today.getFullYear();
        }

        let dateC = Currentdate.split(" ");
        let dayC = dateC[0];
        let monthC = dateC[1];
        let yearC = dateC[2];
  
        var montharrayC = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  
        for(let i=0;i<montharray.length;i++){
            if(i===Number(monthC)){
              monthC=montharrayC[i-1];
            }
          }
          Currentdate = dayC + " " + monthC + " " + yearC;




      const docRef = db.doc("Analysis/" + time);
      docRef.set({
          date: Currentdate,
          title: input_box.value,
          uid: demo   
      })
      .then(function(docRef) {
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });







      let personal = document.getElementById("personalList");
      let shared = document.getElementById("sharedList");

      

      if(personal.checked){
              var updates = {};
              updates["/To-Do-List/" + demo +"/" + xyz + "/" +"Task" + uniqkey] = task;
              firebase.database().ref().update(updates);

      }else{
      

      
      ref = firebase.database().ref();
      
      var urlRef = ref.child("Source/" + xyz);

      urlRef.once("value", function(snapshot) {
        snapshot.forEach(function(child) {
          let allchild = child.val();
         
            keySplittedArray = allchild.split(' ');
          
            for(let i=0; i<keySplittedArray.length;i++){

             
              var updates = {};
              updates["/To-Do-List/" + keySplittedArray[i] +"/" + xyz + "/" +"Task" + uniqkey] = task;
             
              firebase.database().ref().update(updates);
            
            }
         
          });
          
      });


    }



      
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
        fa_done.setAttribute('class', 'fa fa-check fa-2x');

        task_edit_button = document.createElement('button');
        task_edit_button.setAttribute('id', 'task_edit_button');
        task_edit_button.setAttribute('onclick', "task_edit(this.parentElement.parentElement, this)");
        fa_edit = document.createElement('i');
        fa_edit.setAttribute('class', 'fa fa-pencil fa-2x');

        task_delete_button = document.createElement('button');
        task_delete_button.setAttribute('id', 'task_delete_button');
        task_delete_button.setAttribute('onclick', "task_delete(this.parentElement.parentElement)");
        fa_delete = document.createElement('i');
        fa_delete.setAttribute('class', 'fa fa-trash fa-2x');


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

    var key = task.getAttribute("data-key");
    uniqkey = "-" + Math.floor(1000000000 + Math.random() * 9000000000);
    
    title = task.childNodes[0].childNodes[0];
    deadline = task.childNodes[0].childNodes[1];



      task.removeChild(task_tool);
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


    // remove from html view or whatevesss
    task.remove();

  }


