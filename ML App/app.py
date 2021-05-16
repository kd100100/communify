xfrom logging import debug
from flask import Flask
from flask_cors import CORS
import tensorflow as tf
import pandas as pd
model = tf.keras.models.load_model('parking_slot.h5')
weather_data = pd.read_csv('weather_new.csv')


idli = tf.keras.models.load_model('idli.h5')
dosa = tf.keras.models.load_model('dosa.h5')
samosa = tf.keras.models.load_model('samosa.h5')
cutlet = tf.keras.models.load_model('cutlet.h5')

app = Flask(__name__)
CORS(app)

@app.route('/get_predict/<hour>/<minute>/<day>/')
def predict(hour, minute, day):    
    x = model.predict([[int(hour),int(minute),int(day)]])
    return str(int(x[0][0]))


@app.route('/get_weather/<day>/<month>/<year>')
def predict_weather(day, month, year):
    s = day + "-" + month + "-" + year
    l_date = list(weather_data['date'])
    z = l_date.index(s)
    l_weather = list(weather_data['climate'])
    return str(l_weather[z])

@app.route('/get_temperature/<day>/<month>/<year>')
def predict_temp(day, month, year):
    s = day + "-" + month + "-" + year
    l_date = list(weather_data['date'])
    z = l_date.index(s)
    l_temperature = list(weather_data['temp'])
    return str(l_temperature[z])



@app.route('/get_idli/<day>/<month>')
def predict_idli(day,month):    
    x = idli.predict([[int(day),int(month)]])
    return str(int(x[0][0]))

@app.route('/get_dosa/<day>/<month>')
def predict_dosa(day,month):    
    x = dosa.predict([[int(day),int(month)]])
    return str(int(x[0][0]))

@app.route('/get_samosa/<day>/<month>')
def predict_samosa(day,month):    
    x = samosa.predict([[int(day),int(month)]])
    return str(int(x[0][0]))

@app.route('/get_cutlet/<day>/<month>')
def predict_cutlet(day,month):    
    x = cutlet.predict([[int(day),int(month)]])
    return str(int(x[0][0]))

app.run(debug=True)