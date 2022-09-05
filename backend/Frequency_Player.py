import pyaudio
import numpy as np


def sample_maker(frequency, volume, fs=44100, duration=5.0):
    """
    Makes a numpy.ndarray for a sine wave of the given frequency
    """
    samples = (np.sin(2 * np.pi * np.arange(fs * duration) * frequency / fs)).astype(np.float32)
    return samples * volume


def stream_player(samples, volume, fs=44100, duration=5.0):
    p = pyaudio.PyAudio()
    # for paFloat32 sample values must be in range [-1.0, 1.0]
    stream = p.open(format=pyaudio.paFloat32,
                    channels=1,
                    rate=fs,
                    output=True)

    # play. May repeat with different volume values (if done interactively)
    stream.write(volume * samples)

    stream.stop_stream()
    stream.close()

    p.terminate()
