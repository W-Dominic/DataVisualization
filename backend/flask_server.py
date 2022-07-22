from flask import Flask
from flask import jsonify
import datetime

app=Flask(__name__)

@app.route('/api/stonksdata', methods=['GET'])
def get_data():
    data = [
        {"Day": 1, "AccountValue": 0.0, "NetProfit": 0},
        {"Day": 2, "AccountValue": 100.0, "NetProfit": 0},
        {"Day": 3, "AccountValue": 150.0, "NetProfit": 50},
        {"Day": 4, "AccountValue": 140.0, "NetProfit": 40},
        {"Day": 5, "AccountValue": 80.0, "NetProfit": -20},
        {"Day": 6, "AccountValue": 110.0, "NetProfit": 10},
        ]
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)