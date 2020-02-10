/*function menuItem(name,cal,glu,lac,img){
    this.name = name;
    this.calories = cal;
    this.gluten = glu;
    this.lactose = lac;
    this.img = img;
    this.burgerInfo = function() {
        return 'Name: ' + this.name + ', kCal: ' + this.calories;
    }
}

let fireBurger = new menuItem('The Fire Burger', '2000', 'Yes', 'Yes', 'https://wallpapershome.com/images/pages/pic_v/16604.jpg');

let turkeyBurger = new menuItem('Fried Turkey Burger', '500', 'No', 'Yes', 'https://d5dnlg5k9nac9.cloudfront.net/processed/thumbs/8ee5c88bc69f40691e73d9f68045b813c9268bef_r791_530.png');

let doubleCheese = new menuItem('A Double w/ Cheese', '1200', 'Yes', 'Yes', 'https://lh3.googleusercontent.com/Ele8gtDOd1tlQ4TebRJkf6XgpciDD2e57Jf5E3UwAzvfPs0kLhOXJLewZYsu1CFn9CPly0TLvrZUCqJnXMn0=s525');

let vegBurger = new menuItem('Vegan Burger', '300', 'No', 'No', 'https://sweetsimplevegan.com/wp-content/uploads/2019/06/Easy-5-Ingredient-Veggie-Burgers-Sweet-Simple-Vegan-thumbnail.jpg');

let baconBurger = new menuItem('Bacon Burger', '5000', 'Yes', 'Yes', 'https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_t9wcri33/def_height/2700/def_width/2700/version/100012/type/1');

let menu = [fireBurger, turkeyBurger, doubleCheese, vegBurger, baconBurger];
*/

'use strict';
const socket = io();

const vm = new Vue({
	el: '#burgerList',
  data: {
      menu: food
      //menu: menu
  }
})

const vm2 = new Vue({
    el: '#info_box',
    data: {
        orders: {},
        
        submitted: false,
        burgerArray: [],
        fullname: '',
        email: '',
        street: '',
        house: '',
        picked: 'Not provided',
        selected: 'Credit card',
        options: [
            {text: 'Credit card', value: 'Credit card'},
            {text: 'Swish', value: 'Swish'},
            {text: 'Cash', value: 'Cash'},
            {text: 'Coupon', value: 'Coupon'}
        ]
    },
    created: function() {
        /* When the page is loaded, get the current orders stored on the server.
         * (the server's code is in app.js) */
        socket.on('initialize', function(data) {
            this.orders = data.orders;
        }.bind(this));
        
        /* Whenever an addOrder is emitted by a client (every open map.html is
         * a client), the server responds with a currentQueue message (this is
         * defined in app.js). The message's data payload is the entire updated
         * order object. Here we define what the client should do with it.
         * Spoiler: We replace the current local order object with the new one. */
        socket.on('currentQueue', function(data) {
            this.orders = data.orders;
        }.bind(this));
    },
    methods: {
        getFormValues () {
            this.submitted = true;
            this.getBurgers();
        },
        getBurgers () {
            let burgerBoxes = document.getElementsByName('selectBurger');
            for(var box of burgerBoxes){
                if(box.checked){
                    this.burgerArray.push(box.value);
                }
            }
        },
        getNext: function() {
      /* This function returns the next available key (order number) in
       * the orders object, it works under the assumptions that all keys
       * are integers. */
      let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function(event) {
      /* When you click in the map, a click event object is sent as parameter
       * to the function designated in v-on:click (i.e. this one).
       * The click event object contains among other things different
       * coordinates that we need when calculating where in the map the click
       * actually happened. */
      let offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top,
      };
      socket.emit('addOrder', {
        orderId: this.getNext(),
        details: {
          x: event.clientX - 10 - offset.x,
          y: event.clientY - 10 - offset.y,
        },
        orderItems: ['Beans', 'Curry'],
      });
    },
    }
})
