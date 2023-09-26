from flask import Flask, render_template, jsonify
import sqlite3

app = Flask(__name__)

@app.route('/api/data', methods=['GET'])  
def index():
    con = sqlite3.connect('main.db')
    cursorObj = con.cursor()

    cursorObj.execute("INSERT INTO employees VALUES ( 'A', '小明', '廚房')")
    con.commit()

    cursorObj.execute("SELECT * FROM employees")
    data = cursorObj.fetchall()

    con.close()

    return jsonify(data=data)

@app.route('/')
def home():
    return "Welcome to the home page!"

if __name__ == '__main__':
    app.run(debug=True)
