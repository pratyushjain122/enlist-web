import firebase_admin
from firebase_admin import credentials
from firebase_admin import  db
import random
import eel



cred=credentials.Certificate("firabase_enlist_sdk.json")

firebase_admin.initialize_app(cred,{

    'databaseURL':"https://enlist-duo.firebaseio.com/"

})

#user='bFdu73bKCrWUZISAz01gXMR46qE2'#'y920c43argQfQw6SM3CtlIUyyUC2'

eel.init('web')




'''
def Create(user,Class):

    ref=db.reference("To-Do-List/{}/{}".format(user, Class))
    #print(ref.get())

    val=random.randint(99999999,1000000000)
    Descrip=input("Discription : ")
    Tital=input("Title : ")
    chile_ref=ref.child("Task-{}".format(val))
    chile_ref.set({
        #"Task-{}".format(val):

                "description": Descrip, "key": val, "title": Tital

    })

    Sync(user,Class,val)
'''

@eel.expose
def Sync(Id,Batch,Key):

    Keyy="Task{}".format(Key)
    main_data=db.reference("To-Do-List/").get()
   # print("MAIN DATA IS : ")
   # print(main_data)
    #print("User List is : ")
    user_list = list(main_data.keys())
    #print(user_list)

    #print("Values: ",Id," ",Batch," ",Key)
    Add_Data = main_data[Id][Batch][Keyy]
    #print(Add_Data)

    for user in user_list:
        if user!=Id:
            #print("ID IS : ",user)
            key = list(main_data[user].keys())
            #print("\n###\n ",key)
            for batch in key:
                if Batch==batch:
                    #print("Batch : ",batch,"  user :",user)
                    ref=db.reference("To-Do-List/{}/{}".format(user,Batch))
                    # val = random.randint(99999999, 1000000000)
                    child_ref = ref.child(Keyy)
                    child_ref.set(Add_Data)
    return "Done"

#Sync(user,Class,"Task-1188341295")
'''
while(True):
    Class = input("Enter Class You want to add in : ")
    print("\n\n")
    Create()
'''


#import time

eel.start('hello.html',  mode='', port=90)