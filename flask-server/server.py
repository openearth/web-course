import numpy as np
import time

import flask
from flask_cors import CORS



app = flask.Flask(__name__)
CORS(app)

@app.route("/")
def hello():

    radius = 30
    period = 5
    feature = {
        "geometry": {
            "type": "Point",
            "coordinates": [
                np.cos(time.time() / period) * radius, np.sin(time.time() / period) * radius
            ]},
        "type": "Feature",
        "properties": {}
    }

    return flask.jsonify(feature)
