import {getNewJQElement} from "/static/js/util.js";

export default {
    name: "todoop-category",

    config: {
        template: $("#todoopCategory").html(),

        data()
        {
            return {
                dragging: false,
                itemDraggableOptions: {
                    group: "items",
                    animation: 150
                },
                itemsClone: this.items
            }
        },

        props: ["name", "items"],
        methods: {
            updateName(newName)
            {
                this.$emit('update:name', newName);
            },

            updateItem(index, input)
            {
                /**
                 * Update the name of a todoop category's item
                 *
                 * :param: index: (int) The 0-based index of the item being updated.
                 *
                 * :param: input: (HTMLElement) The element
                 *
                 * :return: None
                 */

                const newName = input.value;

                if (newName.length < 1)
                {
                    this.deleteItem(index);
                }
                else
                {
                    this.items[index] = newName;
                }

                this.$emit("update:items", this.items);

                if (index === this.items.length)
                {
                    $(input)
                        .parent()
                        .siblings().slice(-1)
                        .find("input")
                        .focus();
                }
            },

            deleteItem(index)
            {
                // TODO Add deletion to undo crawl
                this.items.splice(index, 1);
            },

            addNewItem(newItemInput)
            {
                const newItemName = newItemInput.value;

                this.items.push(newItemName);

                this.$emit("update:items", this.items);

                this.$root.$nextTick(() => {
                    const jQNewItemInput = $(newItemInput);
                    const jQNewlyCreatedItemInput = jQNewItemInput
                        .parent()
                        .siblings().slice(-1)
                        .children().slice(-1)
                        .focus();

                    jQNewlyCreatedItemInput.focus();
                    jQNewItemInput.val("");
                });
            },
        },

        watch: {
            itemsClone()
            {
                this.$emit("update:items", this.itemsClone);
            }
        }
    }
};