import logging

from flask import (Flask,
                   render_template)

app = application = Flask(__name__)

logging.basicConfig(level=logging.DEBUG)

app.logger = logger = logging.getLogger(__name__)
app.secret_key = '_5#y2L"F4Q8z\n\xec]/'  # NOT SECRET!


@app.route("/")
def home():
    try:
        with open("./VERSION", "r") as fp:
            version = fp.read().strip()
    except Exception as e:
        logger.error("Unable to load VERSION file.")
        logger.exception(e)

        version = None
    else:
        logger.info("Serving main page with version {}".format(version))

    return render_template("todoops.html",
                           version=version)


def main():
    app.run(host='localhost',
            debug=True,
            port=9000,
            use_reloader=True
            )


if __name__ == "__main__":
    main()
