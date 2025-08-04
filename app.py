import json
from flask import Flask, render_template
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/wifi-scan')
def wifi_scan():
    # Mock data for WiFi channels
    channels = []
    for i in range(1, 15):
        channels.append({
            "channel": i,
            "frequency": 2412 + (i-1)*5,
            "signal_strength": random.randint(-90, -30)
        })

    return json.dumps(channels)

if __name__ == '__main__':
    app.run(debug=True, port=8080)
