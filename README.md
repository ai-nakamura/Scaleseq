# Scaleseq
Website that generates a custom twelve-tone equal temperament scale
according to a given frequency

### Current functionality
There are a set of controllers that allow you to choose a frequency, scale type, and duration.

When you click the card titled 'Scaleseq':
- Logs will be printed in the console of the inspect panel
- A text box shows with the chosen frequency, scale type, and duration
- A tone is generated where the backend is being served

## To run
Dependencies: Python3, Flask, numpy, pyAudio, C compiler


#### Backend
1. Navigate to `/backend` folder.
2. Create venv by running `python3 -m venv venv`
3. Active the venv by running `source venv/bin/activate`
4. Install dependencies in venv by running `pip install -r requirements.txt`
5. Run the following commands

```
source venv/bin/activate  # skip if you've already activated the venv
flask --app server run
```
This will run the Python Flask server on port `5000`


#### Frontend
Navigate to `/frontend` folder and run the following command.
Must have Angular CLI installed.
```
npm start
```
This will run the Angular server on port `4200`

#### View website
Go to `http://localhost:4200` on your favorite browser


## To deploy prod
If running Ubuntu 22.04, run `apt install gcc python3-dev portaudio19-dev`

#### Backend
1. Run `git clone https://github.com/ai-nakamura/Scaleseq.git`
2. Navigate to `/backend` folder.
3. Create venv by running `python3 -m venv venv`
4. Active the venv by running `source venv/bin/activate`
5. Install dependencies in venv by running `pip install -r requirements.txt`
6. Run the following commands

```
source venv/bin/activate  # skip if you've already activated the venv

# replace <hostname> with your own server
export CORS_ORIGIN=http://<hostname>:80 
flask --app server run --host <hostname>
```
This will run the Python Flask server on port `5000`

#### Frontend
1. Build `dist` folder by running `ng build` in the frontend directory
2. Copy contents of `dist/Scaleseq` to appropriate folder on web server
