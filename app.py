from flask import (Flask,
                   render_template)

application = Flask(__name__)


@application.route("/")
def home():
    with open("./VERSION", "r") as fp:
        version = fp.read().strip()

        return render_template("todoops.html",
                               version=version)


def main():
    application.run(host='localhost',
                    debug=True,
                    port=9000,
                    use_reloader=True
                    )


if __name__ == "__main__":
    main()
