

function MenuItem(name, kcal, laktos, gluten, img) {
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


var myElement = document.getElementById("wrapper");


for(meny in food) {
    var listItem = document.createElement("div");
    var namn = document.createElement("h2");
    namn.appendChild(document.createTextNode(food[meny].name));
    listItem.appendChild(namn);

    var img = document.createElement("img");
    img.src = food[meny].img;
    img.style.height = "400px";
    img.style.width = "400px";

    listItem.appendChild(img);
    if((food[meny].laktos)) {
      var laktos = document.createElement("li");
      laktos.appendChild(document.createTextNode("Laktos"));
      laktos.style.color = "#FF7F50";
      listItem.appendChild(laktos);

    }
    if((food[meny].gluten)) {
      var gluten = document.createElement("li");
      gluten.appendChild(document.createTextNode("Gluten"));
      gluten.style.color = "#FF7F50";
      listItem.appendChild(gluten);

    }
    var kcal = document.createElement("li");
    kcal.appendChild(document.createTextNode(food[meny].kcal));
    listItem.appendChild(kcal);

    var check = document.createElement("p");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = food[meny].name;
    checkbox.name = "ordered"
    check.appendChild(checkbox);
    listItem.appendChild(check);

    myElement.appendChild(listItem);

}


function burgerOrder() {
  var allBurgers = document.getElementsByName("ordered");
  var selectedBurgers = [];

  for(var i = 0; i < allBurgers.length; ++i) {
    if(allBurgers[i].checked) {
      selectedBurgers.push(allBurgers[i].id);
    }
  }
  return selectedBurgers;
}

function getInfo() {
  var name = document.getElementsByName("fn")[0].value;
  var email = document.getElementsByName("em")[0].value;
  var gatuadress = document.getElementsByName("gaddress")[0].value;
  var husnummer = document.getElementsByName("nummer")[0].value;
  var betalmetod = document.getElementsByName("Betalmetod")[0].value;

  var genderArray = document.getElementsByName("kön");
  //var gender = genderArray[0].value;

  for(var i = 0; i < genderArray.length; ++i) {
    if(genderArray[i].checked) {
      var gender = genderArray[i].value;
    }
  }


  var burgers = burgerOrder();
  var allInfo = [name, email, gatuadress, husnummer, betalmetod, gender, burgers];
  console.log(allInfo);
  return allInfo;
}

function printOrder() {
  document.getElementById("jsbekr").innerHTML = "";

  var info = getInfo();
  var order = document.getElementById("jsbekr");

  order.appendChild(document.createElement("h3").appendChild(document.createTextNode("Orderbekräftelse (with  pure JS)")));
  var name = document.createElement("p");
  name.appendChild(document.createTextNode(info[0]));
  order.appendChild(name);

  var email = document.createElement("p");
  email.appendChild(document.createTextNode(info[1]));
  order.appendChild(email);

  var gatuadress = document.createElement("p");
  gatuadress.appendChild(document.createTextNode(info[2]));
  order.appendChild(gatuadress);

  var husnummer = document.createElement("p");
  husnummer.appendChild(document.createTextNode(info[3]));
  order.appendChild(husnummer);

  var betalmetod = document.createElement("p");
  betalmetod.appendChild(document.createTextNode(info[4]));
  order.appendChild(betalmetod);

  var gender = document.createElement("p");
  gender.appendChild(document.createTextNode(info[5]));
  order.appendChild(gender);

  var burgers = document.createElement("p");
  burgers.appendChild(document.createTextNode(info[6]));
  order.appendChild(burgers);





}
