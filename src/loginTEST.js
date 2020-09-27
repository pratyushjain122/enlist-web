alert('HEY');
let prnn = document.getElementById("prn");
let Email = document.getElementById("btechEmail");

let PRNlength = prnn.value.length;
console.log("function called");
//console.log(typeof(PRN));
console.log(Email);
//console.log(PRN);
console.log(prnn.value);


function signInWithGoogle(){
    //console.log(PRNlength);
    console.log(prnn.value);
    
    if(prnn.value === ''){
        alert("Please enter the PRN");
        // function signOut(){
        //     firebase.auth().signOut();
        //     console.log("lolllllllllllllllllllllll");
        //   }
        //PRN.focus();
    }
    else{
        console.log("else");
        if(prnn.value.length !== 3){
            alert("Please enter a 3 digit PRN");
            // function signOut(){
            //     firebase.auth().signOut();
            //     console.log("lolllllllllllllllllllllll");
            //   }

        }
        else{
            console.log("lenght is of 3");
            signIn();
              
        }
    }
}


function signIn(){

            console.log("asdf");
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function(result) {


                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                //console.log(user);
                // ...
                //console.log(Email.value);
                
                //console.log(btechEmail[1]);
                // This gives you a Google Access Token. You can use it to access the Google API.
                        
                        let btechEmail = user.email.split('@');
                        console.log(btechEmail);
                        console.log(btechEmail[1]);
                  if(btechEmail[1] === "sitpune.edu.in"){
                    console.log("abbbbbbbbbb11111111111111");
                        //let a = check();
                    let flag=0;

                        switch (prnn.value) {
        
                            case "126":if(btechEmail===("prakhar.agarwal.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "119":if(btechEmail===("aditya.padir.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "105":if(btechEmail===("akshay.mategaonkar.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "108":if(btechEmail===("amaan.mithani.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "102":if(btechEmail===("ashwin.mandilk.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "124":if(btechEmail===("deep.patoliya.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "073":if(btechEmail===("jashn.anand.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "074":if(btechEmail===("jatin.raghuvanshi.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "076":if(btechEmail===("joseph.anjilimoottil.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "077":if(btechEmail===("jugal.shroff.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "078":if(btechEmail===("kanishka.kataria.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "079":if(btechEmail===("kanishka.mishra.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "080":if(btechEmail===("kapish.pashine.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "081":if(btechEmail===("karan.samant.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "082":if(btechEmail===("kartik.mudaliar.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "087":if(btechEmail===("kashif.ahmed.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "084":if(btechEmail===("kashif.dar.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "085":if(btechEmail===("kavan.batavia.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "086":if(btechEmail===("kenil.patwa.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "122":if(btechEmail===("keny.patel.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "089":if(btechEmail===("komal.gandhi.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "090":if(btechEmail===("komil.singhal.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "133":if(btechEmail===("rachita.sinha.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "134":if(user.email.value===("rahul.mansharamani.btech2019@sitpune.edu.in")){
                                console.log("aaaaaaaaaaaaaa");
                                // return true;
                                flag =1; break;
                            }
                            case "083":if(btechEmail===("raja.kartik.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "135":if(btechEmail===("rajveer.singh.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "136":if(btechEmail===("rashmi.meena.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "137":if(btechEmail===("ratnesh.jain.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "138":if(btechEmail===("reva.chinchalkar.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "139":if(btechEmail===("riya.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "141":if(btechEmail===("rohit.raj.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "100":if(btechEmail===("ronak.malkan.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "142":if(btechEmail===("rubhav.mahendru.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "116":if(btechEmail===("rushin.nemlawala.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "143":if(btechEmail===("s.easwaran.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "145":if(btechEmail===("sai.ventrapragada.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "094":if(btechEmail===("sameer.kumar.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "121":if(btechEmail===("saumya.paramar.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "075":if(btechEmail===("saurabh.jawanjal.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "112":if(btechEmail===("shobhit.mudkhedkar.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "120":if(btechEmail===("sudhanshu.pandey.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "088":if(btechEmail===("suprit.kolse.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "125":if(btechEmail===("suyash.phatak.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "123":if(btechEmail===("yash.patil.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "091":if(btechEmail===("kothari.devendra.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "092":if(btechEmail===("kshitij.tripathi.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "093":if(btechEmail===("kumar.himanshu.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "095":if(btechEmail===("kushagra.maheshwari.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "096":if(btechEmail===("kushal.limdi.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "097":if(btechEmail===("lisanne.dlima.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "098":if(btechEmail===("maanav.bhavsar.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "099":if(btechEmail===("mahamat.chamchadine.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "101":if(btechEmail===("manasi.seta.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "103":if(btechEmail===("manish.kumar.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "104":if(btechEmail===("mannya.sharma.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "106":if(btechEmail===("mebanphira.cajee.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "107":if(btechEmail===("midhushi.tiwari.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "109":if(btechEmail===("mohammad.ahmadi.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "110":if(btechEmail===("mouzou.essowazam.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "113":if(btechEmail===("naman.pandya.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "114":if(btechEmail===("nazia.malik.btech201@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "115":if(btechEmail===("neeraj.chouhan.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "117":if(btechEmail===("nishita.agrawal.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "118":if(btechEmail===("nitya.mehta.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "127":if(btechEmail===("prakhar.patel.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "128":if(btechEmail===("prasanna.jain.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "129":if(btechEmail===("pratyush.jain.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "130":if(btechEmail===("pratyush.sinha.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "131":if(btechEmail===("pratyush.vats.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "132":if(btechEmail===("preksha.asati.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            // default : alert("Enter valid PRN");
                    
                        }

                        
                        console.log("abbbbbbbbbb");
                        //console.log(a);
                      if(flag=1){
                        
                        console.log("yupiii");
                        window.location.assign('./home.html');

                      }else{
                          alert("Please enter you PRN");
                      }



                  }else{
                    alert("Enter btech email");
                    function signOut(){
                        firebase.auth().signOut();
                        console.log("lolllllllllllllllllllllll");
                      }

                    }


            }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });


                   
}






