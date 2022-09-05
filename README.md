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

#### Backend
Navigate to `/backend` folder and run the following command.

Dependencies: Python3, Flask, numpy, pyAudio
```
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
