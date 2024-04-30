from flask import Flask, jsonify, render_template
import os
import ConsoleApp

app = Flask(__name__)

@app.route('/run-schedule', methods=['GET'])
def run_schedule():
    result = ConsoleApp.run_schedule()
   # return result
   # data=render_template("report.html", chart_data=result)
    #os.startfile(data)
    return result
    

if __name__ == '__main__':
    app.run(debug=True, port=5000)
