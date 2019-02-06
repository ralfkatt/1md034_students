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

  },
  methods: {
    order:function() {
      this.burgers = "" + burgerOrder();
      this.clicked = true;
    }
  }

})
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
