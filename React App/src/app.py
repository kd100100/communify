from logging import debug
from flask import Flask
from flask_cors import CORS
import tensorflow as tf
model = tf.keras.models.load_model('parking_slot.h5')

app = Flask(__name__)
CORS(app)

@app.route('/get_predict/<hour>/<minute>/<day>/')
def predict(hour, minute, day):
    
    x = model.predict([[int(hour),int(minute),int(day)]])
    return str(int(x[0][0]))

app.run(debug=True)