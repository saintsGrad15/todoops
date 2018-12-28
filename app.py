from flask import (Flask,
                   render_template)

application = Flask(__name__)


@application.route("/")
def home():
    return render_template("todoops.html")


def main():
    application.run(host='localhost',
                    debug=True,
                    port=9000,
                    use_reloader=True
                    )


if __name__ == "__main__":
    main()
