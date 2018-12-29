export default {
    template: $("#newTodoopViewTemplate").html(),
    name: "newTodoopView",

    data()
    {
        return {
            name: "",
            categories: [
                {
                    name: "Cat1",
                    items: [
                        "item1",
                        "item2"
                    ]
                },
                {
                    name: "Cat2",
                    items: [
                        "item1",
                        "item2"
                    ]
                }
            ]
        }
    },

    mounted()
    {
        $("#newTodoopNameInput").focus();
    }
};