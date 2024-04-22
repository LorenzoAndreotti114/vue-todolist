const { createApp } = Vue

  createApp({
    data() {
      return {
        
        todoElements: [

            {
                text: "Shampo",
                done: true,  
            },

            {
                text: "Cucchiaio",
                done: false,  
            },

            {
                text: "cassetta delle lettere",
                done: false,  
            },

            {
                text: "maria",
                done: true,  
            },

        ]

      }
    },

    methods: {

        addElements: function() {

            let newElementInput = document.getElementById("elementInput");
            let newElement = newElementInput.value;

            newElement = newElement.trim();

            console.log(newElement);

            if (newElement === "") {

            }
            else {

                this.todoElements.push ({text: `${newElement}`, done:false})

            };

            newElementInput.value = "";
        },

        invertCheck: function(index) {

            if (this.todoElements[index].done === true) {
                this.todoElements[index].done = false
            }
            else {
                this.todoElements[index].done = true
            }

        },

        deleteElement: function(clickedIndex) {
            this.todoElements.splice(clickedIndex, 1);
        }

    },
  }).mount('#app')