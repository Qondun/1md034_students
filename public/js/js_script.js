function menuItem(name,cal,glu,lac,img){
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

document.getElementById("fire").innerHTML = fireBurger.burgerInfo();
document.getElementById("turkey").innerHTML = turkeyBurger.burgerInfo();
document.getElementById("cheese").innerHTML = doubleCheese.burgerInfo();
document.getElementById("veg").innerHTML = vegBurger.burgerInfo();
document.getElementById("bacon").innerHTML = baconBurger.burgerInfo();
