const root = new Vue(
    {
        el: '#root',

        

        data:{
            input: "",

            done: false,

            items: ["Alzarsi", "Fare colazione", "Studiare"]
        },

        methods: {
            addTask: function(){
                if(this.input != ""){
                    this.items.push(this.input);
                    this.input = "";  
                }                
            },

            removeTask: function(index){
                this.items.splice(index, 1);
            },

            textLine: function(index){

                this.done = true;
                
            }

           
        }
    }
)