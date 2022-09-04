from flask import Flask
from flask import make_response
from flask import request

app = Flask(__name__)


@app.route("/")
def hello_world():
    resp = make_response("hello_world", 200)
    resp.headers["Access-Control-Allow-Origin"] = "http://localhost:4200"
    return resp


@app.get("/generate")
def data_test():
    freq = request.args['freq']
    duration = request.args['duration']
    scale_type = request.args['scaleType']
    print(freq, duration, scale_type)

    resp = make_response("hello_world", 200)
    resp.headers["Access-Control-Allow-Origin"] = "http://localhost:4200"
    return resp
