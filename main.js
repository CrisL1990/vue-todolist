const root = new Vue(
    {
        el: '#root',

        data:{
            input: "",
            items: ["Alzarsi", "Fare colazione", "Studiare"]
        },

        methods: {
            addTask: function(){
                this.items.push(this.input);
                this.input = "";        
            }
        }
    }
)