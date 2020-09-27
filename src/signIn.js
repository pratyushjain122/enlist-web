alert('HEY');
let prnn = document.getElementById("prn");
//let Email = document.getElementById("user.email.value");
let a = 2+2;
console.log(typeof(a));

let PRNlength = prnn.value.length;
console.log("function called");
console.log(prnn);
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
                    console.log(prnn.value);
                    console.log(typeof(user.email));
                    console.log(typeof(Number(prnn.value)));
                    alert("rukh jao");
                        switch (Number(prnn.value)) {
                            
                            case "126":if(user.email.value===("prakhar.agarwal.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "119":if(user.email.value===("aditya.padir.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "105":if(user.email.value===("akshay.mategaonkar.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "108":if(user.email.value===("amaan.mithani.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "102":if(user.email.value===("ashwin.mandilk.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "124":if(user.email.value===("deep.patoliya.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "073":if(user.email.value===("jashn.anand.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "074":if(user.email.value===("jatin.raghuvanshi.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "076":if(user.email.value===("joseph.anjilimoottil.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "077":if(user.email.value===("jugal.shroff.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "078":if(user.email.value===("kanishka.kataria.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "079":if(user.email.value===("kanishka.mishra.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "080":if(user.email.value===("kapish.pashine.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "081":if(user.email.value===("karan.samant.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "082":if(user.email.value===("kartik.mudaliar.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "087":if(user.email.value===("kashif.ahmed.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "084":if(user.email.value===("kashif.dar.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "085":if(user.email.value===("kavan.batavia.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "086":if(user.email.value===("kenil.patwa.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "122":if(user.email.value===("keny.patel.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "089":if(user.email.value===("komal.gandhi.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "090":if(user.email.value===("komil.singhal.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "133":if(user.email.value===("rachita.sinha.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case 134:
                                console.log("mai guss gaya");
                            if(user.email.value===("rahul.mansharamani.btech2019@sitpune.edu.in")){
                                console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
                                // return true;

                                flag =1; break;
                            }else{
                                console.log("why not working");
                            }
                            case "083":if(user.email.value===("raja.kartik.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "135":if(user.email.value===("rajveer.singh.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "136":if(user.email.value===("rashmi.meena.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "137":if(user.email.value===("ratnesh.jain.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "138":if(user.email.value===("reva.chinchalkar.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "139":if(user.email.value===("riya.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "141":if(user.email.value===("rohit.raj.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "100":if(user.email.value===("ronak.malkan.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "142":if(user.email.value===("rubhav.mahendru.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "116":if(user.email.value===("rushin.nemlawala.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "143":if(user.email.value===("s.easwaran.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "145":if(user.email.value===("sai.ventrapragada.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "094":if(user.email.value===("sameer.kumar.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "121":if(user.email.value===("saumya.paramar.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "075":if(user.email.value===("saurabh.jawanjal.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "112":if(user.email.value===("shobhit.mudkhedkar.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "120":if(user.email.value===("sudhanshu.pandey.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "088":if(user.email.value===("suprit.kolse.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "125":if(user.email.value===("suyash.phatak.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "123":if(user.email.value===("yash.patil.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "091":if(user.email.value===("kothari.devendra.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "092":if(user.email.value===("kshitij.tripathi.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "093":if(user.email.value===("kumar.himanshu.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "095":if(user.email.value===("kushagra.maheshwari.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "096":if(user.email.value===("kushal.limdi.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "097":if(user.email.value===("lisanne.dlima.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "098":if(user.email.value===("maanav.bhavsar.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "099":if(user.email.value===("mahamat.chamchadine.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "101":if(user.email.value===("manasi.seta.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "103":if(user.email.value===("manish.kumar.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "104":if(user.email.value===("mannya.sharma.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "106":if(user.email.value===("mebanphira.cajee.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "107":if(user.email.value===("midhushi.tiwari.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "109":if(user.email.value===("mohammad.ahmadi.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "110":if(user.email.value===("mouzou.essowazam.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "113":if(user.email.value===("naman.pandya.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "114":if(user.email.value===("nazia.malik.btech201@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "115":if(user.email.value===("neeraj.chouhan.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "117":if(user.email.value===("nishita.agrawal.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "118":if(user.email.value===("nitya.mehta.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "127":if(user.email.value===("prakhar.patel.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "128":if(user.email.value===("prasanna.jain.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "129":if(user.email.value===("pratyush.jain.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "130":if(user.email.value===("pratyush.sinha.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "131":if(user.email.value===("pratyush.vats.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            case "132":if(user.email.value===("preksha.asati.btech2019@sitpune.edu.in")){
                                flag =1; break;
                            }
                            // default : 
                            //     alert("Enter valid PRN");
                            //     break;

                    
                        }

                        
                        console.log("abbbbbbbbbb");
                        //console.log(a);
                      if(flag=1){
                        
                        console.log("yupiii");
                        window.location.assign('');

                      }else{
                          alert("Please enter you PRN");
                      }



                  }else{
                    alert("Enter btech email");
                    // function signOut(){
                    //     firebase.auth().signOut();
                    //     console.log("lolllllllllllllllllllllll");
                    //   }

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






