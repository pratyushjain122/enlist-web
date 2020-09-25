import eel
#import time


eel.init('web')

print("Python is Called")
@eel.expose
def getTime():
    return "Hello World"#time.strftime('%c')

eel.start('hello.html',  mode='', port=80)

'''
my_options = {
    #'mode': "chrome", #or "chrome-app",
    'host': 'localhost',
    'port': 8080,
    #'chromeFlags': ["--start-fullscreen", "--browser-startup-dialog"]
}

eel.start('hello.html',   mode='', port=8080)
'''

######               eel.start('hello.html',  mode='', port=80)