from flask import Flask, render_template, request
from flask import jsonify
import warnings
import predict as pd

warnings.filterwarnings('ignore')

# top = {'General': 0, 'Retirement': 1, 'Children': 2, 'Vacation': 3}
data = []
# d = {}
app = Flask(__name__)


@app.route('/')
def home():
    return render_template('input.html')


@app.route('/agee', methods=['POST', 'GET'])
def agee():
    if request.method == 'POST':
        data.clear()
        age = request.json['agee']
        data.append(int(age))
        return age
    return 0


@app.route('/value', methods=['POST', 'GET'])
def value():
    if request.method == 'POST':
        val = request.json['value']
        data.append(int(val))
        return val
    return 0


@app.route('/predict', methods=['POST', 'GET'])
def predict():
    age, annual_income, duration, risk, plan, gender = 0, 0, 0, 0, 0, 0
    if request.method == 'POST':
        duration = int(request.json['years'])
        data.append(duration)
    age = data[0]
    gender = data[1]
    annual_income = data[2]
    plan = data[3]
    risk = data[4]

    lst = [{'current': risk}]
    for i in range(1, 11):
        equity, mutual_fund, debt, cash = pd.predict(age, annual_income, duration, i, plan, gender)
        lst.append({'risk': i, 'equity': equity, 'mutual_fund': mutual_fund, 'debt': debt, 'cash': cash})
    return jsonify(lst)


if __name__ == '__main__':
    app.run(debug=False)
    app.templates_auto_reload = True
