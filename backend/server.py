from flask import Flask
from flask import make_response
from flask import request

from FrequencyMaker import FrequencyMaker
import Frequency_Player

app = Flask(__name__)

major_scale = (0, 2, 4, 5, 7, 9, 11, 12)
minor_scale = (0, 2, 3, 5, 7, 8, 10, 12)


@app.route("/")
def hello_world():
    resp = make_response("hello_world", 200)
    resp.headers["Access-Control-Allow-Origin"] = "http://localhost:4200"
    return resp


@app.get("/generate")
def data_test():
    resp = make_response("hello_world", 200)
    resp.headers["Access-Control-Allow-Origin"] = "http://localhost:4200"

    tonic = float(request.args['freq'])
    duration = float(request.args['duration'])
    scale_type = major_scale if request.args['scaleType'] == 'major' else minor_scale
    print(tonic, duration, scale_type)

    fm = FrequencyMaker(tonic, scale_type, duration=duration)
    fm.change_tonic(tonic)
    test_chord = fm.chord_stacker(0)
    test_chord_sine_waves = [Frequency_Player.sample_maker(note, volume=0.5, duration=duration) for note in test_chord]

    for wave in test_chord_sine_waves:
        Frequency_Player.stream_player(wave, volume=0.5, duration=duration)

    # to_play = fp.sample_maker(note, volume, fs, duration)
    # fp.stream_player(to_play, volume, fs, duration)



    return resp
