const root = new Vue(
    {
        el: '#root',

        

        data:{
            input: "",

           

            items: [
                {
                    testo:"Alzarsi",
                    done: false
                },

                {
                    testo:"Fare colazione",
                    done: false
                },

                {
                    testo:"Studiare",
                    done: false
                }
            ]
        },

        methods: {
            addTask: function(){

                if(this.input != ""){

                    const newObject = {
                        testo: this.input,
                        done: false
                    }

                
                    this.items.push(newObject);
                    this.input = "";  
                }                
            },

            removeTask: function(index){
                this.items.splice(index, 1);
            },

            textLine: function(index){

               if(this.items[index].done == true){
                    this.items[index].done = false;
               }
               else{
                    this.items[index].done = true;
               }
            }

           
        }
    }
)