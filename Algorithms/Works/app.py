from flask import Flask

app=Flask(__name__)

@app.route('/')
def index():
    return 'Salam heci naberrrrr'


app.run(debug=True)