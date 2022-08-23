from flask import Flask
from flask import make_response

app = Flask(__name__)


@app.route("/")
def hello_world():
    resp = make_response("hello_world", 200)
    resp.headers["Access-Control-Allow-Origin"] = "http://localhost:4200"
    return resp
