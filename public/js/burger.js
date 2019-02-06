var vm = new Vue({
    //Here comes the optional elements of the Vue object
})


function MenuItem(name, kcal, allergi) {
    this.name = name; // The this keyword refers to the object itself
    this.kcal = kcal;
    this.allergi = allergi;
    this.nameAndKcal = function() {
        return this.name + ' ' + this.kcal;
    };
}
function burgerOrder(name, amount, drink) {
  this.name = name;
  this.amount = amount;
  this.drink = drink;
  this.order = function() {
    return this.amount + 'st' + ' ' + this.name + ' ' + 'med' + ' ' + this.drink;
  }
}
var meny = new MenuItem("god", 3000, "gluten");
console.log(meny.nameAndKcal());

var best = new burgerOrder("goda burgare", 3, "Cola Zero");
console.log(best.order());
