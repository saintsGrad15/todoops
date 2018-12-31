import homeView from "./viewComponents/homeView.js";
import newTodoopView from "./viewComponents/newTodoopView.js";
import notFoundView from "./viewComponents/notFoundView.js";

import todoopCategory from "./functionalComponents/todoopCategory.js";

(function foo()
{
    Vue.options.delimiters = ["[[", "]]"];

    Vue.component(todoopCategory.name, todoopCategory.config);

    const router = new VueRouter({
        routes: [
            {
                path: "/",
                component: homeView,
                props: true
            },
            {
                path: "/newTodoop",
                component: newTodoopView
            },
            {
                path: "*",
                component: notFoundView
            }
        ]
    });

    new Vue({
        el: "#mainApp",
        name: "Main App",
        data: {
            dragging: false
        },
        router
    });
})();

