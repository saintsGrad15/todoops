// Variables
// import {myVar} from "/static/js/module.js"

// Functions
import {
    // Variables
    myVar,

    // Functions
    bar
} from "/static/js/module.js";

(function foo()
{
    console.log("FOO!");
    console.log(myVar);

    bar();
    window.bar = bar;
})();

