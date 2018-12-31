// TODO Figure out tab index ordering

export default {
    template: $("#newTodoopViewTemplate").html(),
    name: "newTodoopView",

    data()
    {
        return {
            todoop: {
                name: "",
                categories: [
                    {
                        name: "Cat4",
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
                    },
                    {
                        name: "Cat3",
                        items: [
                            "item1",
                            "item2"
                        ]
                    }
                ]
            },

            // Options controlling draggable behavior
            categoryDraggableOptions: {
                handle: ".categoryDragHandle",
                animation: 150
            }
        }
    },

    mounted()
    {
        $("#newTodoopNameInput").focus();
    }
};