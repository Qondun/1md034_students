/*function menuItem(name,cal,glu,lac,img){
    this.name = name;
    this.calories = cal;
    this.gluten = glu;
    this.lactose = lac;
    this.img = img;
    this.burgerInfo = function() {
        return this.name + ', ' + this.calories + ' kCal. ';
    }
}

let fireBurger = new menuItem('The Fire Burger', '2000', 'Yes', 'Yes', 'https://wallpapershome.com/images/pages/pic_v/16604.jpg');

let turkeyBurger = new menuItem('Fried Turkey Burger', '500', 'No', 'Yes', 'https://d5dnlg5k9nac9.cloudfront.net/processed/thumbs/8ee5c88bc69f40691e73d9f68045b813c9268bef_r791_530.png');

let doubleCheese = new menuItem('A Double w/ Cheese', '1200', 'Yes', 'Yes', 'https://lh3.googleusercontent.com/Ele8gtDOd1tlQ4TebRJkf6XgpciDD2e57Jf5E3UwAzvfPs0kLhOXJLewZYsu1CFn9CPly0TLvrZUCqJnXMn0=s525');

let vegBurger = new menuItem('Vegan Burger', '300', 'No', 'No', 'https://sweetsimplevegan.com/wp-content/uploads/2019/06/Easy-5-Ingredient-Veggie-Burgers-Sweet-Simple-Vegan-thumbnail.jpg');

let baconBurger = new menuItem('Bacon Burger', '5000', 'Yes', 'Yes', 'https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_t9wcri33/def_height/2700/def_width/2700/version/100012/type/1');


let menu = [fireBurger, turkeyBurger, doubleCheese, vegBurger, baconBurger]; 

let target = document.getElementById("burgerList");
for(var burger of menu){
	  let listItem = document.createElement("div");
    let textNode = document.createElement("h4");
    let image = document.createElement("img");
    image.src = burger.img;

    let listValue = document.createTextNode(burger.burgerInfo());
    textNode.appendChild(document.createTextNode(burger.name));
    listItem.appendChild(textNode);
    listItem.appendChild(image);
    listItem.appendChild(listValue);

    if(burger.gluten == 'Yes'){
        let gluten = document.createTextNode('Contains gluten. ');
        listItem.appendChild(gluten);
    }
    if(burger.lactose == 'Yes'){
        let lactose = document.createTextNode('Contains lactose. ');
        listItem.appendChild(lactose);
    }
    target.appendChild(listItem);
    }*/

/*let submitFunc = function (){
    var full_name = document.getElementById('full_name').value;
    var at = document.getElementById('email').value.indexOf("@");
    var street = document.getElementById('street').value;
    var house = document.getElementById('house').value;
    
    var e = document.getElementById('recipient');
    var payMethod = e.options[e.selectedIndex].value;
    
    var radio = document.getElementsByName('gender');
    var radio_val;
    for(var i = 0; i < radio.length; i++){
        if(radio[i].checked){
            radio_val = radio[i].value;
        }
    }
    
    return [full_name, at, street, house, payMethod, radio_val];
}

let eventFunc = function (){
    console.log(submitFunc());
}
let myButton = document.getElementById('orderButton');
myButton.addEventListener("click", eventFunc);
*/
