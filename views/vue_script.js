function MenuItem(name, kcal, allergi) {
    this.name = name; // The this keyword refers to the object itself
    this.kcal = kcal;
    this.allergi = allergi;
    this.nameAndKcal = function() {
        return this.name + ' ' + this.kcal;
    };
}
var meny1 = new MenuItem("god", 3000, "gluten");
var meny2 = new MenuItem("stor", 2000, "gluten");
var meny3 = new MenuItem("liten", 1000, "gluten");
var meny4 = new MenuItem("god", 3000, "gluten");
var meny5 = new MenuItem("liten", 1000, "gluten");

var menues = [ {meny1}, {meny2}, {meny3}, {meny4}, {meny5}];

var returnMeny1 = meny1.nameAndKcal()
var returnMeny2 = meny2.nameAndKcal()
var returnMeny3 = meny3.nameAndKcal()
var returnMeny4 = meny4.nameAndKcal()
var returnMeny5 = meny5.nameAndKcal()

var returnMenues = [  {name :returnMeny1}, {name:returnMeny2},  {name: returnMeny3}, {name: returnMeny4}, {name:returnMeny5}];






var vm = new Vue({
  el: '#boxA',
  data: {
    menues: returnMenues

  }


})
