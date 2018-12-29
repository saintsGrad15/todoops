export default {
    name: "todoop-category",

    config: {
        template: $("#todoopCategory").html(),

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
                    this.items.splice(index, 1);
                }
                else
                {
                    this.items[index] = newName;
                }

                this.$emit("update:items", this.items);

                if (index === this.items.length)
                {
                    $(input).siblings().slice(-1).focus();
                }
            },

            addNewItem(newItemInput)
            {
                const newItemName = newItemInput.value;

                this.items.push(newItemName);

                this.$emit("update:items", this.items);

                this.$root.$nextTick(() => {
                    const jQNewItemInput = $(newItemInput);
                    const jQNewlyCreatedItemInput = jQNewItemInput.siblings().slice(-1);

                    jQNewlyCreatedItemInput.focus();
                    jQNewItemInput.val("");
                });
            }
        }
    }
};