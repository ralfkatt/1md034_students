/*function MenuItem(name, kcal, laktos, gluten, img) {
    this.name = name; // The this keyword refers to the object itself
    this.kcal = kcal;
    this.laktos = laktos;
    this.gluten = gluten;
    this.img = img;
    this.nameAndKcal = function() {
        return this.name + ' ' + this.kcal;
    };
}
var meny1 = new MenuItem("god", 3000, true, false,  "https://www.chatelaine.com/wp-content/uploads/2017/05/Bibimbap-homemade-burgers.jpg");
var meny2 = new MenuItem("stor", 2000, true, false, "https://www.thecookierookie.com/wp-content/uploads/2018/07/butter-burgers-recipe-8-of-8.jpg");
var meny3 = new MenuItem("liten", 1000, true, false, "https://images.ricardocuisine.com/services/recipes/5408.jpg");
var meny4 = new MenuItem("god", 3000, true, false, "https://www.chatelaine.com/wp-content/uploads/2017/05/Bibimbap-homemade-burgers.jpg");
var meny5 = new MenuItem("liten", 1000, true, false, "https://images.ricardocuisine.com/services/recipes/5408.jpg");
var meny6 = new MenuItem("liten", 1000, true, false, "https://images.ricardocuisine.com/services/recipes/5408.jpg");

var menues = [ meny1, meny2, meny3, meny4, meny5, meny6];
*/
'use strict';
var socket = io();

new Vue({
  el: '#allt',
  data: {
    menues: food,
    namn: '',
    email: '',
    gatuadress: '',
    nummer: '',
    betalmetod: '',
    gender: '',
    clicked: false,
    burgers: '',
    orders: {},
    orderId: 0,
    details: {x: -1, y: -1},
    orderItems: [],

  },
  methods: {
    order:function() {
      this.burgers = "" + burgerOrder();
      this.orderItems = burgerOrder();
      this.clicked = true;
      this.addOrder();

  },
  getNext: function () {
  var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
    return Math.max(last, next);
  }, 0);
  return lastOrder + 1;
},
displayOrder: function (event) {
  var offset = {x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top};
  this.details.x = event.clientX - 10 - offset.x;
  this.details.y = event.clientY - 10 - offset.y;
  this.orderId += 1;
  this.getNext();
  console.log(this.details.x, this.details.y);
},
addOrder: function (event) {
  socket.emit("addOrder", { orderId: this.orderId,
                            details: this.details,
                            orderItems: this.orderItems,
                            name: this.namn,
                            email: this.email,
                            paymentMethod: this.betalmetod,
                            gender: this.gender,
                          });
}
}
});





/*
new Vue({
  el: '#kundinfo',
  data: {
    namn: '',
    email: '',
    gatuadress: '',
    nummer: '',
    betalmetod: '',
    gender: '',
    clicked: false
  }

})
*/
