from flask import Flask, render_template
from datetime import datetime
import pytz

app = Flask(__name__)

@app.route('/')
def reloj():
    tz = pytz.timezone('Europe/Madrid')  # Zona horaria de España
    hora_actual = datetime.now(tz).strftime('%H:%M:%S')
    return render_template('reloj.html', hora=hora_actual)

if __name__ == '__main__':
    app.run(debug=True)
