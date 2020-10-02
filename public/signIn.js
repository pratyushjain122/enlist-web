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


var prnn = document.getElementById("prn");
let PRNlength = prnn.value.length;
var favoritemovie;


function signInWithGoogle(){
    
    favoritemovie = prnn.value;
    sessionStorage.setItem("favoriteMovie", favoritemovie);
    
    if(prnn.value === ''){
        alert("Please enter the PRN"); 
    }
    else{
        
        if(prnn.value.length !== 3){
            alert("Please enter a 3 digit PRN");
        }
        else{
            
            signIn();
              
        }
    }
}


function signIn(){

            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function(result) {

                var token = result.credential.accessToken;
                var user = result.user;
                
                let btechEmail = user.email.split('@');
                if(btechEmail[1] === "sitpune.edu.in"){

                        let flag=0;
                            
                            switch ((prnn.value)) {
                                
                                case "126":if(user.email===("prakhar.agarwal.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }
                                break;
                                case "119":if(user.email===("aditya.padir.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "105":if(user.email===("akshay.mategaonkar.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "108":if(user.email===("amaan.mithani.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "102":if(user.email===("ashwin.mandilk.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "124":if(user.email===("deep.patoliya.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "073":if(user.email===("jashn.anand.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "074":if(user.email===("jatin.raghuvanshi.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "076":if(user.email===("joseph.anjilimoottil.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "077":if(user.email===("jugal.shroff.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "078":if(user.email===("kanishka.kataria.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "079":if(user.email===("kanishka.mishra.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "080":if(user.email===("kapish.pashine.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "081":if(user.email===("karan.samant.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "082":if(user.email===("kartik.mudaliar.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "087":if(user.email===("kashif.ahmed.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "084":if(user.email===("kashif.dar.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "085":if(user.email===("kavan.batavia.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "086":if(user.email===("kenil.patwa.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "122":if(user.email===("keny.patel.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "089":if(user.email===("komal.gandhi.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "090":if(user.email===("komil.singhal.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "133":if(user.email===("rachita.sinha.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "134":if(user.email===("rahul.mansharamani.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "083":if(user.email===("raja.kartik.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "135":if(user.email===("rajveer.singh.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "136":if(user.email===("rashmi.meena.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "137":if(user.email===("ratnesh.jain.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "138":if(user.email===("reva.chinchalkar.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "139":if(user.email===("riya.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "141":if(user.email===("rohit.raj.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "100":if(user.email===("ronak.malkan.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "142":if(user.email===("rubhav.mahendru.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "116":if(user.email===("rushin.nemlawala.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "143":if(user.email===("s.easwaran.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "145":if(user.email===("sai.ventrapragada.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "094":if(user.email===("sameer.kumar.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "121":if(user.email===("saumya.paramar.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "075":if(user.email===("saurabh.jawanjal.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "112":if(user.email===("shobhit.mudkhedkar.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "120":if(user.email===("sudhanshu.pandey.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "088":if(user.email===("suprit.kolse.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "125":if(user.email===("suyash.phatak.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "123":if(user.email===("yash.patil.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "091":if(user.email===("kothari.devendra.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "092":if(user.email===("kshitij.tripathi.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "093":if(user.email===("kumar.himanshu.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "095":if(user.email===("kushagra.maheshwari.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "096":if(user.email===("kushal.limdi.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "097":if(user.email===("lisanne.dlima.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "098":if(user.email===("maanav.bhavsar.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "099":if(user.email===("mahamat.chamchadine.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "101":if(user.email===("manasi.seta.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "103":if(user.email===("manish.kumar.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "104":if(user.email===("mannya.sharma.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "106":if(user.email===("mebanphira.cajee.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "107":if(user.email===("midhushi.tiwari.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "109":if(user.email===("mohammad.ahmadi.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "110":if(user.email===("mouzou.essowazam.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "113":if(user.email===("naman.pandya.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "114":if(user.email===("nazia.malik.btech201@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "115":if(user.email===("neeraj.chouhan.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "117":if(user.email===("nishita.agrawal.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "118":if(user.email===("nitya.mehta.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "127":if(user.email===("prakhar.patel.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "128":if(user.email===("prasanna.jain.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "129":if(user.email===("pratyush.jain.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "130":if(user.email===("pratyush.sinha.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "131":if(user.email===("pratyush.vats.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                case "132":if(user.email===("preksha.asati.btech2019@sitpune.edu.in")){
                                    flag =1; 
                                }break;
                                default : 
                                    alert("Enter valid PRN");
                                    flag=0; 

                        
                            }

                      if(flag===1){
                        
        
                        window.location.assign('./home.html');

                      }else{
                          alert("Please enter you PRN");
                      }

                        }
                        else{
                    alert("Enter btech email");
                    function signOut(){
                        firebase.auth().signOut();
                        
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






