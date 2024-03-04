let restaurantCount=0;
let restaurants=document.querySelectorAll(".restaurant-col");
let nxtbtn=document.getElementById("nxt-btn");
let prebtn=document.getElementById("pre-btn");
showRestaurant(restaurantCount);

document.getElementById("user-log").addEventListener("click",function(){
    let x=document.querySelector(".dropdown");
    if(x.style.display=="none"){
        x.style.display="block";
    }else{
        x.style.display="none";
    }
})

prebtn.onclick= function(){
    
    if(restaurantCount==0){
        prebtn.addAttribute("disabled","disabled");
    }else{
        showRestaurant((restaurantCount -= 1));
        prebtn.removeAttribute("disabled");
    }
};

nxtbtn.onclick= function(){
    
    if(restaurantCount >= restaurants.length-3){
       nxtbtn.addAttribute("disabled","disabled");
    }else{
        nxtbtn.removeAttribute("disabled");
        showRestaurant((restaurantCount += 1));
    }
};


function showRestaurant(){
    for (let i=0 ; i<restaurants.length; i++){
        restaurants[i].style.display="none";
    } 
    restaurants[restaurantCount].style.display="block";
    restaurants[restaurantCount+1].style.display="block";
    restaurants[restaurantCount+2].style.display="block";
}



// Display hotels

let hotels=[
    {
        hotelId:"1",
        hotelname:"Subway",
        path:"images/restaurant1.avif",
        ratings:"4.3",
        timing:"15",
        variety:"Salads, Snacks, Desserts, Beverages",
        location:"Sholinganallur",
        priceRange:"below 300",
        category:"Non veg"
    },
    {
        hotelId:"2",
        hotelname:"French Loaf",
        path:"images/restaurant2.avif",
        ratings:"4.4",
        timing:"20",
        variety:"Desserts, Cakes and Pastries, Bakery, Snacks, Pizzas, Beverages",
        location:"Neelankarai",
        priceRange:"300 to 500",
        category:"Non veg"
    },
    {
        hotelId:"3",
        hotelname:"Namma Veedu Vasanta Bhavan",
        path:"images/restaurant3.avif",
        ratings:"4.0",
        timing:"32",
        variety:"South Indian",
        location:"Medavakkam",
        priceRange:"300 to 500",
        category:"Pure veg"
    },
    {
        hotelId:"4",
        hotelname:"Chai Kings",
        path:"images/restaurant4.avif",
        ratings:"4.5",
        timing:"25",
        variety:"Beverages, Snacks, Bakery",
        location:"Sri Sowdeswari Nagar",
        priceRange:"below 300",
        category:"Non veg"
    },
    {
        hotelId:"5",
        hotelname:"A2B - Adyar Ananda Bhavan",
        path:"images/restaurant5.avif",
        ratings:"4.4",
        timing:"41",
        variety:"South Indian, North Indian, Sweets, Chinese",
        location:"Pallikaranai",
        priceRange:"300 to 500",
        category:"Pure veg"
    },
    {
        hotelId:"6",
        hotelname:"Hot Chips",
        path:"images/restaurant6.avif",
        ratings:"3.5",
        timing:"30",
        variety:"North Indian, South Indian, Street Food",
        location:"Medavakkam",
        priceRange:"below 300",
        category:"Pure veg"
    },
    {
        hotelId:"7",
        hotelname:"JR Jana Veg Restaurant",
        path:"images/restaurant7.avif",
        ratings:"4.4",
        timing:"45",
        variety:"Chinese, Indian, South Indian",
        location:"Tambaram",
        priceRange:"300 to 500",
        category:"Pure veg"
    },
    {
        hotelId:"8",
        hotelname:"The Belgian Waffle Cafe",
        path:"images/restaurant8.avif",
        ratings:"4.5",
        timing:"60",
        variety:"Snacks, Desserts, Beverages",
        location:"Velachery",
        priceRange:"below 300",
        category:"Non veg"
    },
    {
        hotelId:"9",
        hotelname:"Hotel Saravana Bhavan",
        path:"images/restaurant9.avif",
        ratings:"4.5",
        timing:"48",
        variety:"South Indian, North Indian, Sweets",
        location:"Perungudi",
        priceRange:"300 to 500",
        category:"Pure veg"
    },
    {
        hotelId:"10",
        hotelname:"Murugan Idli Shop",
        path:"images/restaurant10.avif",
        ratings:"3.8",
        timing:"56",
        variety:"South Indian",
        location:"Velachery",
        priceRange:"below 300",
        category:"Pure veg"
    },
    {
        hotelId:"11",
        hotelname:"Barbeque Nation",
        path:"images/restaurant11.avif",
        ratings:"4.5",
        timing:"45",
        variety:"North Indian, Barbecue",
        location:"Thoraipakkam",
        priceRange:"300 to 500",
        category:"Non veg"
    },
    {
        hotelId:"12",
        hotelname:"Mani's Dum Biriyani",
        path:"images/restaurant12.avif",
        ratings:"4.5",
        timing:"32",
        variety:"Andhra, Biriyani",
        location:"Karappakam",
        priceRange:"300 to 500",
        category:"Non veg"
    }
];
let hotelDisplay=document.querySelector(".hotel-display");


let resArray=[];
function pushHotels(){
    hotels.forEach(function(e){
        resArray.push(e);
    })
}
pushHotels()

function showHotels(freshArray){
    let hotelColumn=document.querySelectorAll(".hotels-col");
    for(let i=0;i<hotelColumn.length;i++){
        hotelDisplay.removeChild(hotelColumn[i]);
    }

    for(let i=0;i<freshArray.length;i++){
        let hotelContainer=document.createElement("div");
        hotelDisplay.appendChild(hotelContainer);
        hotelContainer.classList.add("hotels-col");
        hotelNav=document.createElement("a");
        hotelNav.setAttribute("href","#product-section");
        hotelContainer.appendChild(hotelNav);
        hotelNav.classList.add("hotels-Nav");
    }
    freshArray.forEach(function(hotel,index){
        let hotelsList=document.querySelectorAll(".hotels-Nav");
        hotelsList[index].setAttribute("onClick",`storeFilter("${hotel.hotelname}")`);
        let hotelImg=document.createElement("img");
        hotelImg.setAttribute("src",hotel.path);
        let hotelNameele=document.createElement("h3");
        hotelNameele.innerHTML=hotel.hotelname;
        let hotelStar=document.createElement("span");
        let hotelRating=document.createElement("span");
        hotelStar.innerHTML="<i class='bi bi-star-fill'></i>";
        hotelStar.classList.add("star-rating")
        hotelRating.innerHTML=hotel.ratings;
        let hotelVariety=document.createElement("p");
        hotelVariety.innerHTML=hotel.variety;
        let hotelTiming=document.createElement("p");
        hotelTiming.innerHTML=hotel.timing + " mins";
        let hotelLocation=document.createElement("p");
        hotelLocation.innerHTML=hotel.location;
        hotelsList[index].appendChild(hotelImg);
        hotelsList[index].appendChild(hotelNameele);
        hotelsList[index].appendChild(hotelStar);
        hotelsList[index].appendChild(hotelRating);
        hotelsList[index].appendChild(hotelTiming);
        hotelsList[index].appendChild(hotelVariety);
        hotelsList[index].appendChild(hotelLocation);
    })
}
showHotels(hotels);

let resFilter=document.getElementById("resfilter");
let reshigh=document.getElementById("reshigh");
let reslow=document.getElementById("reslow");
let deltime=document.getElementById("deltime");
let vegRes=document.getElementById("vegres");
let nonVegRes=document.getElementById("non-vegres");
let clearRes=document.getElementById("clear-res");

resFilter.addEventListener("click",function(){
    reshigh.style.display="inline-block";
    reslow.style.display="inline-block";
    deltime.style.display="inline-block";
    vegRes.style.display="inline-block";
    nonVegRes.style.display="inline-block";
})

reshigh.addEventListener("click",function(){
    let hotelColumn=document.querySelectorAll(".hotels-col")
    clearRes.style.display="inline-block";
    for(let i=0;i<hotelColumn.length;i++){
        hotelDisplay.removeChild(hotelColumn[i]);
    }
    let descendingRes=hotels.sort(function(a,b){
        return b.ratings - a.ratings;
    });
    showHotels(descendingRes);
})

reslow.addEventListener("click",function(){
    let hotelColumn=document.querySelectorAll(".hotels-col")
    clearRes.style.display="inline-block";
    for(let i=0;i<hotelColumn.length;i++){
        hotelDisplay.removeChild(hotelColumn[i]);
    }
    let ascendingRes=hotels.sort(function(a,b){
        return a.ratings - b.ratings;
    });
    showHotels(ascendingRes);
})

deltime.addEventListener("click",function(){
    let hotelColumn=document.querySelectorAll(".hotels-col")
    clearRes.style.display="inline-block";
    for(let i=0;i<hotelColumn.length;i++){
        hotelDisplay.removeChild(hotelColumn[i]);
    }
    let delivery=hotels.sort(function(a,b){
        return a.timing - b.timing;
    });
    showHotels(delivery);
})

vegRes.addEventListener("click",function(){
    let hotelColumn=document.querySelectorAll(".hotels-col");
    for(let i=0;i<hotelColumn.length;i++){
        hotelDisplay.removeChild(hotelColumn[i]);
    }
    showHotels(hotels);
    hotels.forEach(function(hotel,index){
        let hotelColumn=document.querySelectorAll(".hotels-col");
        clearRes.style.display="inline-block";
        if(hotel.category=="Pure veg"){
            hotelColumn[index].style.display="flex";
        }
        else{
            hotelColumn[index].style.display="none";
        }
    }) 
})

nonVegRes.addEventListener("click",function(){
    let hotelColumn=document.querySelectorAll(".hotels-col");
    for(let i=0;i<hotelColumn.length;i++){
        hotelDisplay.removeChild(hotelColumn[i]);
    }
    showHotels(hotels);
    hotels.forEach(function(hotel,index){
        let hotelColumn=document.querySelectorAll(".hotels-col");
        clearRes.style.display="inline-block";
        if(hotel.category=="Non veg"){
            hotelColumn[index].style.display="flex";
        }
        else{
            hotelColumn[index].style.display="none";
        }
    }) 
})

clearRes.addEventListener("click",function(){
    let hotelColumn=document.querySelectorAll(".hotels-col")
    for(let i=0;i<hotelColumn.length;i++){
        hotelDisplay.removeChild(hotelColumn[i]);
    }
    showHotels(resArray);
    clearRes.style.display="none";
    reshigh.style.display="none";
    reslow.style.display="none";
    nonVegRes.style.display="none";
    vegRes.style.display="none";
    deltime.style.display="none";
})





// food product list


let dishes=[
    {
        dishId:"1",
        dishName:"Aloo Patty Sandwich",
        imagePath:"images/sandwich1.avif",
        price:"249",
        description:"Serves 1 | Aloo patty seasoned with special herbs and spices, paired with your choice of nutritious veggies, on a freshly baked bread. Serving size : 15 cm - 219 g / 337 kcal , 30 cm - 438 g / 674 kcal , Allergens - Contains wheat, rye, barley, oats. Values include multigrain bread, lettuce, tomatoes, onions, green peppers and cucumbers.",
        storeName:"Subway",
        storeLocation:"Sholinganallur",
        ratings:"4.3",
        timing:"15 mins",
        variety:"Salads, Snacks, Desserts, Beverages",
        storeImage:"images/restaurant1.avif",
        dishCategory:"Pure veg",
        dishType:"Sandwich"
    },
    {
        dishId:"2",
        dishName:"Corn & Peas Sandwich",
        imagePath:"images/sandwich2.avif",
        price:"224",
        description:"Serves 1 | A delicious assortment of green peas, golden corn and diced carrots, dressed with a creamy mixture of eggless mayo sauce, and served on your favourite bread. Serving size : 15 cm - 219 g / 359 kcal , 30 cm - 438 g / 718 kcal. Allergens - Contains wheat, rye, barley, oats, milk. Values include multigrain bread, lettuce, tomatoes, onions, green peppers and cucumbers.",
        storeName:"Subway",
        storeLocation:"Sholinganallur",
        ratings:"4.3",
        timing:"15 mins",
        variety:"Salads, Snacks, Desserts, Beverages",
        storeImage:"images/restaurant1.avif",
        dishCategory:"Pure veg",
        dishType:"Sandwich"
    },
    {
        dishId:"3",
        dishName:"Tangy Paneer Tikka Sandwich",
        imagePath:"images/sandwich3.avif",
        price:"249",
        description:"Serves 1 | Your favourite cheese cubes marinated with tandoori sauce, spices and condiments, cooked in an oven to give a smoky taste. Served with a choice of nutritious veggies and a freshly baked bread. Serving size : 15 cm - 224 g / 410 kcal , 30 cm - 448 g / 820 kcal. Allergens - Contains wheat, rye, barley, oats, milk, soy. Values include multigrain bread, lettuce, tomatoes, onions, green peppers and cucumbers.",
        storeName:"Subway",
        storeLocation:"Sholinganallur",
        ratings:"4.3",
        timing:"15 mins",
        variety:"Salads, Snacks, Desserts, Beverages",
        storeImage:"images/restaurant1.avif",
        dishCategory:"Pure veg",
        dishType:"Sandwich"
    },
    {   
        dishId:"4",
        dishName:"Veg Shammi Sandwich",
        imagePath:"images/sandwich4.avif",
        price:"228",
        description:"Serves 1 | Experience authentic flavours with kebab made of lentils and enriched with mouth-watering hints of garlic and onion accompanied by nutritious veggies, in your favourite bread. Serving size : 15 cm - 224 g / 365 kcal , 30 cm - 448 g / 730 kcal. Allergens - Contains wheat, rye, barley, oats, soy. Values include multigrain bread, lettuce, tomatoes, onions, green peppers and cucumbers.",
        storeName:"Subway",
        storeLocation:"Sholinganallur",
        ratings:"4.3",
        timing:"15 mins",
        variety:"Salads, Snacks, Desserts, Beverages",
        storeImage:"images/restaurant1.avif",
        dishCategory:"Pure veg",
        dishType:"Sandwich"
    },
    {
        dishId:"5",
        dishName:"Veggie Delite? Sandwich",
        imagePath:"images/sandwich5.avif",
        price:"207",
        description:"Serves 1 | Delicious combination of fresh lettuce, tomatoes, green peppers, cucumbers, onions, olives and pickles served on a freshly baked bread. Serving size : 15 cm - 164 g / 242 kcal , 30 cm - 328 g / 484 kcal. Allergens - Contains wheat, rye, barley, oats. Values include multigrain bread, lettuce, tomatoes, onions, green peppers and cucumbers.",
        storeName:"Subway",
        storeLocation:"Sholinganallur",
        ratings:"4.3",
        timing:"15 mins",
        variety:"Salads, Snacks, Desserts, Beverages",
        storeImage:"images/restaurant1.avif",
        dishCategory:"Pure veg",
        dishType:"Sandwich"
    },
    {
        dishId:"6",
        dishName:"Chicken Kofta Sandwich",
        imagePath:"images/sandwich6.avif",
        price:"262",
        description:"Serves 1 | Authentic indian meatballs perfectly seasoned and spiced served along with wholesome veggies and packed in your choice of freshly baked bread. Serving size : 15 cm - 224 g / 379 kcal , 30 cm - 448 g / 758 kcal. Allergens - Contains wheat, rye, barley, oats, soy, milk. Values include multigrain bread, lettuce, tomatoes, onions, green peppers and cucumbers.",
        storeName:"Subway",
        storeLocation:"Sholinganallur",
        ratings:"4.3",
        timing:"15 mins",
        variety:"Salads, Snacks, Desserts, Beverages",
        storeImage:"images/restaurant1.avif",
        dishCategory:"Non veg",
        dishType:"Sandwich"
    },
    {
        dishId:"7",
        dishName:"Chicken Slice Sandwich",
        imagePath:"images/sandwich7.avif",
        price:"262",
        description:"Serves 1 | Sliced smoked chicken with your choice of nutritious vegetables, served on a freshly baked bread. Serving size : 15 cm - 209 g / 290 kcal , 30 cm - 418 g / 580 kcal. Allergens - Contains wheat, rye, barley, oats, soy. Values include multigrain bread, lettuce, tomatoes, onions, green peppers and cucumbers.",
        storeName:"Subway",
        storeLocation:"Sholinganallur",
        ratings:"4.3",
        timing:"15 mins",
        variety:"Salads, Snacks, Desserts, Beverages",
        storeImage:"images/restaurant1.avif",
        dishCategory:"Non veg",
        dishType:"Sandwich"
    },
    {
        dishId:"8",
        dishName:"Chicken Teriyaki Sandwich",
        imagePath:"images/sandwich8.avif",
        price:"271",
        description:"Serves 1 | Chicken strips glazed with teriyaki sauce, combined with your favourite veggies and topped with our signature sweet onion sauce served hot in a freshly baked bread of your choice. Serving size : 15 cm - 224 g / 311 kcal , 30 cm - 448 g / 622 kcal. Allergens - Contains wheat, rye, barley, oats, soy. Values include multigrain bread, lettuce, tomatoes, onions, green peppers and cucumbers.",
        storeName:"Subway",
        storeLocation:"Sholinganallur",
        ratings:"4.3",
        timing:"15 mins",
        variety:"Salads, Snacks, Desserts, Beverages",
        storeImage:"images/restaurant1.avif",
        dishCategory:"Non veg",
        dishType:"Sandwich"
    },
    {
        dishId:"9",
        dishName:"New B.M.T Sandwich",
        imagePath:"images/sandwich9.avif",
        price:"275",
        description:"Serves 1 | Protein-enriched classic Italian B.M.T. sub with a mix of tasty chicken pepperoni, smoked chicken slice topped with your fav sauce to deliver a flavour burst that is served in your choice of freshly baked bread. Serving size : 15 cm - 251 g / 349 kcal , 30 cm - 502 g / 698 kcal. Allergens - Contains wheat, rye, barley, oats, soy. Values include multigrain bread, lettuce, tomatoes, onions, green peppers and cucumbers.",
        storeName:"Subway",
        storeLocation:"Sholinganallur",
        ratings:"4.3",
        timing:"15 mins",
        variety:"Salads, Snacks, Desserts, Beverages",
        storeImage:"images/restaurant1.avif",
        dishCategory:"Non veg",
        dishType:"Sandwich"
    },
    {
        dishId:"10",
        dishName:"New Peri Peri Chicken Sandwich",
        imagePath:"images/sandwich10.avif",
        price:"271",
        description:"Serves 1 | Let your tastebuds travel the world with African peri-peri flavoured chicken served with nutritious veggies and packaged in your favourite bread of choice. Serving size : 15 cm - 230 g / 383 kcal , 30 cm - 460 g / 766 kcal. Allergens - Contains wheat, rye, barley, oats, soy. Values include multigrain bread, lettuce, tomatoes, onions, green peppers and cucumbers.",
        storeName:"Subway",
        storeLocation:"Sholinganallur",
        ratings:"4.3",
        timing:"15 mins",
        variety:"Salads, Snacks, Desserts, Beverages",
        storeImage:"images/restaurant1.avif",
        dishCategory:"Non veg",
        dishType:"Sandwich"
    },
    {
        dishId:"11",
        dishName:"Chocolate Truffle [1 Kg]",
        imagePath:"images/cake1.avif",
        price:"1330",
        description:"Soft Chocolate Cake Layered With Rich Chocolate Ganache And Glazed With Tasty Dark Chocolate Truffle.",
        storeName:"French Loaf",
        storeLocation:"Neelankarai",
        ratings:"4.4",
        timing:"20 mins",
        variety:"Desserts, Cakes and Pastries, Bakery, Snacks, Pizzas, Beverages",
        storeImage:"images/restaurant2.avif",
        dishCategory:"Non veg",
        dishType:"Cake"
    },
    {
        dishId:"12",
        dishName:"Butterscotch Dolce Latte Cake [1 kg]",
        imagePath:"images/cake2.avif",
        price:"1130",
        description:"Vanilla Sponge With Egg, Topped With Dolce Late Flavoured Cream . Garnished With Butterscotch Drops.",
        storeName:"French Loaf",
        storeLocation:"Neelankarai",
        ratings:"4.4",
        timing:"20 mins",
        variety:"Desserts, Cakes and Pastries, Bakery, Snacks, Pizzas, Beverages",
        storeImage:"images/restaurant2.avif",
        dishCategory:"Non veg",
        dishType:"Cake"
    },
    {
        dishId:"13",
        dishName:"Black Forest Cake [1 Kg]",
        imagePath:"images/cake3.avif",
        price:"1250",
        description:"Three Layered With Whipped Cream Drops On One Layer And Chocolate Cream Drops On Other Layer. Topped With Chocolate Ganache & Garnished With Gold Coated Choco Dipped Cherry.",
        storeName:"French Loaf",
        storeLocation:"Neelankarai",
        ratings:"4.4",
        timing:"20 mins",
        variety:"Desserts, Cakes and Pastries, Bakery, Snacks, Pizzas, Beverages",
        storeImage:"images/restaurant2.avif",
        dishCategory:"Pure veg",
        dishType:"Cake"
    },
    {
        dishId:"14",
        dishName:"Blueberry Cake [1 Kg]",
        imagePath:"images/cake4.avif",
        price:"950",
        description:"Vanilla Sponge Containing Egg, Layered With Blueberry Filling . Coated With Blueberry Flavoured Glaze And Topped With Blueberry Flavoured Gel.",
        storeName:"French Loaf",
        storeLocation:"Neelankarai",
        ratings:"4.4",
        timing:"20 mins",
        variety:"Desserts, Cakes and Pastries, Bakery, Snacks, Pizzas, Beverages",
        storeImage:"images/restaurant2.avif",
        dishCategory:"Non veg",
        dishType:"Cake"
    },
    {
        dishId:"15",
        dishName:"Chocolate Truffle [1/2 Kg]",
        imagePath:"images/cake5.avif",
        price:"720",
        description:"Round Shaped Chocolate Sponge Contains Egg , Layered And Covered With Truffle Cream . Garnished With 3 Pieces Chocolate Slab.",
        storeName:"French Loaf",
        storeLocation:"Neelankarai",
        ratings:"4.4",
        timing:"20 mins",
        variety:"Desserts, Cakes and Pastries, Bakery, Snacks, Pizzas, Beverages",
        storeImage:"images/restaurant2.avif",
        dishCategory:"Non veg",
        dishType:"Cake"
    },
    {
        dishId:"16",
        dishName:"Mini Podi Idly [14 Pcs]",
        imagePath:"images/idli1.avif",
        price:"125",
        description:"Idlies are steamed cut to cubes and well mixed with idli podi and ghee or sesame oil to make Mini Podi Idly",
        storeName:"Namma Veedu Vasanta Bhavan",
        storeLocation:"Medavakkam",
        ratings:"4.0",
        timing:"32 mins",
        variety:"South Indian",
        storeImage:"images/restaurant3.avif",
        dishCategory:"Pure veg",
        dishType:"Idli"
    },
    {
        dishId:"17",
        dishName:"Nvvb Special - Sodhi Idly",
        imagePath:"images/idli2.avif",
        price:"140",
        description:"Sodhi is the southern version of a vegetable stew where addition of lentils and drumstick makes this sodhi a sublime one",
        storeName:"Namma Veedu Vasanta Bhavan",
        storeLocation:"Medavakkam",
        ratings:"4.0",
        timing:"32 mins",
        variety:"South Indian",
        storeImage:"images/restaurant3.avif",
        dishCategory:"Pure veg",
        dishType:"Idli"
    },
    {
        dishId:"18",
        dishName:"Poori With Potato Masala [3 Pcs]",
        imagePath:"images/poori1.avif",
        price:"125",
        description:"South Indian style potato masala made with boiled, crumbled potatoes in mild, flavorful gravy. It is served with hot Poori which is a deep-fried bread made from unleavened whole-wheat flour",
        storeName:"Namma Veedu Vasanta Bhavan",
        storeLocation:"Medavakkam",
        ratings:"4.0",
        timing:"32 mins",
        variety:"South Indian",
        storeImage:"images/restaurant3.avif",
        dishCategory:"Pure veg",
        dishType:"Poori"
    },
    {
        dishId:"19",
        dishName:"Sambar Idly [2 Pcs]",
        imagePath:"images/idli3.avif",
        price:"125",
        description:"Hearty, satisfying, comforting and a healthy meal of soft fluffy idlis served with savory, spiced and lightly tangy sambar",
        storeName:"Namma Veedu Vasanta Bhavan",
        storeLocation:"Medavakkam",
        ratings:"4.0",
        timing:"32 mins",
        variety:"South Indian",
        storeImage:"images/restaurant3.avif",
        dishCategory:"Pure veg",
        dishType:"Idli"
    },
    {
        dishId:"20",
        dishName:"Chilly Gobi",
        imagePath:"images/chinese1.avif",
        price:"330",
        description:"Truly delicious Indian snack which has crispy texture with a spicy, sweet and sour taste",
        storeName:"Namma Veedu Vasanta Bhavan",
        storeLocation:"Medavakkam",
        ratings:"4.0",
        timing:"32 mins",
        variety:"South Indian",
        storeImage:"images/restaurant3.avif",
        dishCategory:"Pure veg",
        dishType:"Chinese"
    },
    {
        dishId:"21",
        dishName:"Chilly Paneer",
        imagePath:"images/chinese2.avif",
        price:"350",
        description:"An appetizer where crisp batter fried paneer is tossed in slightly sweet, spicy, hot and sour Chilli Sauce",
        storeName:"Namma Veedu Vasanta Bhavan",
        storeLocation:"Medavakkam",
        ratings:"4.0",
        timing:"32 mins",
        variety:"South Indian",
        storeImage:"images/restaurant3.avif",
        dishCategory:"Pure veg",
        dishType:"Chinese"
    },
    {
        dishId:"22",
        dishName:"Gobi Manchurian Dry",
        imagePath:"images/chinese3.avif",
        price:"300",
        description:"Indo Chinese appetizer made with cauliflower, corn flour, soya sauce, vinegar, chilli sauce, ginger & garlic",
        storeName:"Namma Veedu Vasanta Bhavan",
        storeLocation:"Medavakkam",
        ratings:"4.0",
        timing:"32 mins",
        variety:"South Indian",
        storeImage:"images/restaurant3.avif",
        dishCategory:"Pure veg",
        dishType:"Chinese"
    },
    {
        dishId:"23",
        dishName:"Mushroom Manchurian Dry",
        imagePath:"images/chinese4.avif",
        price:"330",
        description:"Indo-Chinese appetizer made by tossing crisp fried mushrooms in a delicious sweet, spicy and umami tasting manchurian sauce",
        storeName:"Namma Veedu Vasanta Bhavan",
        storeLocation:"Medavakkam",
        ratings:"4.0",
        timing:"32 mins",
        variety:"South Indian",
        storeImage:"images/restaurant3.avif",
        dishCategory:"Pure veg",
        dishType:"Chinese"
    },
    {
        dishId:"24",
        dishName:"Butter Dosai",
        imagePath:"images/dosa1.avif",
        price:"175",
        description:"Butter Dosa is just one of the many varieties prevalent in the South Indian cuisine; it has a thick base yet is thin and crispy with the butter",
        storeName:"Namma Veedu Vasanta Bhavan",
        storeLocation:"Medavakkam",
        ratings:"4.0",
        timing:"32 mins",
        variety:"South Indian",
        storeImage:"images/restaurant3.avif",
        dishCategory:"Pure veg",
        dishType:"Dosa"
    },
    {
        dishId:"25",
        dishName:"Ghee Masala Dosai",
        imagePath:"images/dosa2.avif",
        price:"330",
        description:"A delicious variant of dosa, prepared from the usual dosa batter and Tangy filling of Masala where ghee is poured on the batter after spreading along with Masala.",
        storeName:"Namma Veedu Vasanta Bhavan",
        storeLocation:"Medavakkam",
        ratings:"4.0",
        timing:"32 mins",
        variety:"South Indian",
        storeImage:"images/restaurant3.avif",
        dishCategory:"Pure veg",
        dishType:"Dosa"
    },
    {
        dishId:"26",
        dishName:"Dark Chocolate Coffee - 50gms",
        imagePath:"images/coffee1.avif",
        price:"150",
        description:"Serves-1, Deliciuos coffee with hot chocolate blend",
        storeName:"Chai Kings",
        storeLocation:"Sri Sodeswari Nagar",
        ratings:"4.5",
        timing:"25 mins",
        variety:"Beverages, Snacks, Bakery",
        storeImage:"images/restaurant4.avif",
        dishCategory:"Pure veg",
        dishType:"Coffee"
    },
    {
        dishId:"27",
        dishName:"Sulaimani Chai (500 ML) with 2 Honey Packets",
        imagePath:"images/tea1.avif",
        price:"180",
        description:"Serves 5 | Cloves are rich in anti-oxidants while lemon strengthens your immune system and helps fight the common cold. The goodness of cardamom, clove, and cinnamon pounded and infused with fresh lemon juice and the finest tea leaves for a refreshing edge to your favorite beverage.",
        storeName:"Chai Kings",
        storeLocation:"Sri Sodeswari Nagar",
        ratings:"4.5",
        timing:"25 mins",
        variety:"Beverages, Snacks, Bakery",
        storeImage:"images/restaurant4.avif",
        dishCategory:"Pure veg",
        dishType:"Tea"
    },
    {
        dishId:"28",
        dishName:"Hazelnut Iced Coffee",
        imagePath:"images/coffee2.avif",
        price:"150",
        description:"Serves 1 | Hazelnut Iced Coffee that has a nutty, slightly sweet, and rich flavor.",
        storeName:"Chai Kings",
        storeLocation:"Sri Sodeswari Nagar",
        ratings:"4.5",
        timing:"25 mins",
        variety:"Beverages, Snacks, Bakery",
        storeImage:"images/restaurant4.avif",
        dishCategory:"Pure veg",
        dishType:"Coffee"
    },
    {
        dishId:"29",
        dishName:"Hazelnut Iced CoffeeMini Coffee Flask & Special Maggi",
        imagePath:"images/coffee3.avif",
        price:"185",
        description:"Serves 2 | Mini Coffee Flask with a Special Maggi of your choice",
        storeName:"Chai Kings",
        storeLocation:"Sri Sodeswari Nagar",
        ratings:"4.5",
        timing:"25 mins",
        variety:"Beverages, Snacks, Bakery",
        storeImage:"images/restaurant4.avif",
        dishCategory:"Pure veg",
        dishType:"Coffee"
    },
    {
        dishId:"30",
        dishName:"Chilli Cheese Maggi",
        imagePath:"images/chinese5.avif",
        price:"150",
        description:"Serves 1 | Classic Maggi cooked with red chilli flakes and lots of cheese",
        storeName:"Chai Kings",
        storeLocation:"Sri Sodeswari Nagar",
        ratings:"4.5",
        timing:"25 mins",
        variety:"Beverages, Snacks, Bakery",
        storeImage:"images/restaurant4.avif",
        dishCategory:"Pure veg",
        dishType:"Chinese"
    },
    {
        dishId:"31",
        dishName:"Masala Dosai",
        imagePath:"images/dosa3.avif",
        price:"150",
        description:"Serves 1 | An appetizing circular crisply fried dosa with a fragrant spiced mashed potato and onion filling, served with South Indian sambar and chutneys",
        storeName:"A2B - Adyar Ananda Bhavan",
        storeLocation:"Pallikaranai",
        ratings:"4.4",
        timing:"41 mins",
        variety:"South Indian, North Indian, Sweets, Chinese",
        storeImage:"images/restaurant5.avif",
        dishCategory:"Pure veg",
        dishType:"Dosa"
    },
    {
        dishId:"32",
        dishName:"Onion Rava Dosai",
        imagePath:"images/dosa4.avif",
        price:"140",
        description:"Serves 1 | A crisp fried dosa made of all-purpose flour, rice, and semolina batter topped with finely chopped onions, ginger, chilies, and coriander served with chutneys & sambar",
        storeName:"A2B - Adyar Ananda Bhavan",
        storeLocation:"Pallikaranai",
        ratings:"4.4",
        timing:"41 mins",
        variety:"South Indian, North Indian, Sweets, Chinese",
        storeImage:"images/restaurant5.avif",
        dishCategory:"Pure veg",
        dishType:"Dosa"
    },
    {
        dishId:"33",
        dishName:"Ghee Pongal",
        imagePath:"images/pongal1.avif",
        price:"150",
        description:"Serves 1 | A savory dish made of cooked rice and green gram blended with clarified butter,mildly tempered with spices, garnished with cashews and servedhot",
        storeName:"A2B - Adyar Ananda Bhavan",
        storeLocation:"Pallikaranai",
        ratings:"4.4",
        timing:"41 mins",
        variety:"South Indian, North Indian, Sweets, Chinese",
        storeImage:"images/restaurant5.avif",
        dishCategory:"Pure veg",
        dishType:"Pongal"
    },
    {
        dishId:"34",
        dishName:"Uttapam",
        imagePath:"images/dosa5.avif",
        price:"120",
        description:"Serves 1 | A delicious spicy South Indian crisp fried dosa made of rice, lentil, and served with a chutney",
        storeName:"A2B - Adyar Ananda Bhavan",
        storeLocation:"Pallikaranai",
        ratings:"4.4",
        timing:"41 mins",
        variety:"South Indian, North Indian, Sweets, Chinese",
        storeImage:"images/restaurant5.avif",
        dishCategory:"Pure veg",
        dishType:"Dosa"
    },
    {
        dishId:"35",
        dishName:"Onion Uttapam",
        imagePath:"images/dosa6.avif",
        price:"140",
        description:"Serves 1 | A delectable thickish South Indian fried dosa made of rice flour batter with a generous topping of thinly sliced onions, green chilies, coriander and ground whole spices",
        storeName:"A2B - Adyar Ananda Bhavan",
        storeLocation:"Pallikaranai",
        ratings:"4.4",
        timing:"41 mins",
        variety:"South Indian, North Indian, Sweets, Chinese",
        storeImage:"images/restaurant5.avif",
        dishCategory:"Pure veg",
        dishType:"Dosa"
    },
    {
        dishId:"36",
        dishName:"Mini Meals",
        imagePath:"images/meals1.avif",
        price:"162",
        description:"Serves 1 | Serves 1(variety rice+sambar rice+curd rice + chapati (1 nos) +veg korma+poriyal+apalam+pickle+sweet)",
        storeName:"Hot Chips",
        storeLocation:"Medavakam",
        ratings:"3.5",
        timing:"30 mins",
        variety:"North Indian, South Indian, Street Food",
        storeImage:"images/restaurant6.avif",
        dishCategory:"Pure veg",
        dishType:"Meals"
    },
    {
        dishId:"37",
        dishName:"Special Tanjore Meals",
        imagePath:"images/meals2.avif",
        price:"162",
        description:"Serves 1 | ( sweet (1pc),white rice, sambar, rasam, karakolzhambu, kootu, poriyal, curd, appalam )",
        storeName:"Hot Chips",
        storeLocation:"Medavakam",
        ratings:"3.5",
        timing:"30 mins",
        variety:"North Indian, South Indian, Street Food",
        storeImage:"images/restaurant6.avif",
        dishCategory:"Pure veg",
        dishType:"Meals"
    },
    {
        dishId:"38",
        dishName:"Bombay Meals",
        imagePath:"images/meals1.avif",
        price:"198",
        description:"Serves 1 | Phulka (1 pc) or chapathi (1 pc), veg biryani or veg fried rice, paneer butter, gobi manchurian dry, curd rice or jeera rice , sweet",
        storeName:"Hot Chips",
        storeLocation:"Medavakam",
        ratings:"3.5",
        timing:"30 mins",
        variety:"North Indian, South Indian, Street Food",
        storeImage:"images/restaurant6.avif",
        dishCategory:"Pure veg",
        dishType:"Meals"
    },
    {
        dishId:"39",
        dishName:"Chinese Combo",
        imagePath:"images/chinese6.avif",
        price:"145",
        description:"Serves 1 | Veg Fried Rice + Gobi Manchurian Dry (Serves 1)",
        storeName:"Hot Chips",
        storeLocation:"Medavakam",
        ratings:"3.5",
        timing:"30 mins",
        variety:"North Indian, South Indian, Street Food",
        storeImage:"images/restaurant6.avif",
        dishCategory:"Pure veg",
        dishType:"Chinese"
    },
    {
        dishId:"40",
        dishName:"Chilli Parotta",
        imagePath:"images/meals1.avif",
        price:"198",
        description:"Serves 1 | A simple, yet wholesome combo juicy chilli parotta made in a traditional manner.",
        storeName:"Hot Chips",
        storeLocation:"Medavakam",
        ratings:"3.5",
        timing:"30 mins",
        variety:"North Indian, South Indian, Street Food",
        storeImage:"images/restaurant6.avif",
        dishCategory:"Pure veg",
        dishType:"Chinese"
    },
    {
        dishId:"41",
        dishName:"Veg Noodles",
        imagePath:"images/noodles1.avif",
        price:"198",
        description:"A deliciously aromatic and flavorful dish made from perfectly cooked noodles and stir-fried vegetables.(Serves 1)",
        storeName:"JR Jana Veg Restaurant",
        storeLocation:"Tambaram",
        storeImage:"images/restaurant7.avif",
        dishCategory:"Pure veg",
        dishType:"Noodles" 
    },
    {
        dishId:"42",
        dishName:"Veg Schezwan Noodles",
        imagePath:"images/noodles2.avif",
        price:"220",
        description:"A hot and spicy combo of hot and fiery vegetable schezwan gravy served with flavored noodles.(Serves 1)",
        storeName:"JR Jana Veg Restaurant",
        storeLocation:"Tambaram",
        storeImage:"images/restaurant7.avif",
        dishCategory:"Pure veg",
        dishType:"Noodles" 
    },
    {
        dishId:"43",
        dishName:"Manchow Noodles",
        imagePath:"images/noodles3.avif",
        price:"230",
        description:"A deliciously aromatic and flavorful dish made from perfectly cooked noodles and stir-fried vegetables.(Serves 1)",
        storeName:"JR Jana Veg Restaurant",
        storeLocation:"Tambaram",
        ratings:"4.4",
        timing:"45 mins",
        variety:"Chinese, Indian, South Indian",
        storeImage:"images/restaurant7.avif",
        dishCategory:"Pure veg",
        dishType:"Noodles" 
    },
    {
        dishId:"44",
        dishName:"Mushroom Biryani",
        imagePath:"images/biriyani1.avif",
        price:"190",
        description:"Slow-cooked rice and meaty mushrooms slow cooked in a perfect blend Indian masala seasoned with whole spices.",
        storeName:"JR Jana Veg Restaurant",
        storeLocation:"Tambaram",
        ratings:"4.4",
        timing:"45 mins",
        variety:"Chinese, Indian, South Indian",
        storeImage:"images/restaurant7.avif",
        dishCategory:"Pure veg",
        dishType:"Biriyani" 
    },
    {
        dishId:"45",
        dishName:"Veg Biryani",
        imagePath:"images/biriyani2.avif",
        price:"190",
        description:"Medium Spicy | A flavorful combination of rice and assorted veggies cooked in a fragrant and flavorful masala seasoned with Indian whole spices.",
        storeName:"JR Jana Veg Restaurant",
        storeLocation:"Tambaram",
        ratings:"4.4",
        timing:"45 mins",
        variety:"Chinese, Indian, South Indian",
        storeImage:"images/restaurant7.avif",
        dishCategory:"Pure veg",
        dishType:"Biriyani" 
    },
    {
        dishId:"46",
        dishName:"Strawberry with Belgian dark Chocolate Cake",
        imagePath:"images/cake6.avif",
        price:"599",
        description:"Serves 1 | Double or triple classic waffle layered with melted strawberries and belgian dark chocolate spread and topped with Chocolate Sauce. (A customized message can be handwritten on the box)",
        storeName:"The Belgian Waffle Cafe",
        storeLocation:"Velachery",
        ratings:"4.5",
        timing:"60 mins",
        variety:"Snacks, Desserts, Beverages",
        storeImage:"images/restaurant8.avif",
        dishCategory:"Pure veg",
        dishType:"Cake" 
    },
    {
        dishId:"47",
        dishName:"Strawberry Cream Cheese Cake",
        imagePath:"images/cake7.avif",
        price:"499",
        description:"Serves 1 | Double or triple classic waffle layered with melted cheese and strawberry spread (A customized message can be handwritten on the box)",
        storeName:"The Belgian Waffle Cafe",
        storeLocation:"Velachery",
        ratings:"4.5",
        timing:"60 mins",
        variety:"Snacks, Desserts, Beverages",
        storeImage:"images/restaurant8.avif",
        dishCategory:"Pure veg",
        dishType:"Cake" 
    },
    {
        dishId:"48",
        dishName:"Oreo White Chocolate Waffle",
        imagePath:"images/waffle1.avif",
        price:"199",
        description:"Serves 1 | 2 Slices of waffles of your choice layered with white chocolate and oreo biscuits and topped with oreo powder.",
        storeName:"The Belgian Waffle Cafe",
        storeLocation:"Velachery",
        ratings:"4.5",
        timing:"60 mins",
        variety:"Snacks, Desserts, Beverages",
        storeImage:"images/restaurant8.avif",
        dishCategory:"Pure veg",
        dishType:"Waffle" 
    },
    {
        dishId:"49",
        dishName:"Triple Chocolate Waffle",
        imagePath:"images/waffle2.avif",
        price:"199",
        description:"Serves 1 | 2 slices of Chocolate waffles sandwiched with white, milk and dark chocolate spreads and topped with caramel sauce.",
        storeName:"The Belgian Waffle Cafe",
        storeLocation:"Velachery",
        ratings:"4.5",
        timing:"60 mins",
        variety:"Snacks, Desserts, Beverages",
        storeImage:"images/restaurant8.avif",
        dishCategory:"Pure veg",
        dishType:"Waffle" 
    },
    {
        dishId:"50",
        dishName:"KitKat Waffle",
        imagePath:"images/waffle3.avif",
        price:"179",
        description:"Serves 1 | 2 Slices of waffles of your choice layered with milk chocolate and Kitkat chocolate",
        storeName:"The Belgian Waffle Cafe",
        storeLocation:"Velachery",
        ratings:"4.5",
        timing:"60 mins",
        variety:"Snacks, Desserts, Beverages",
        storeImage:"images/restaurant8.avif",
        dishCategory:"Pure veg",
        dishType:"Waffle" 
    },
    {
        dishId:"51",
        dishName:"Spl Onion Rava Masala Dosa",
        imagePath:"images/dosa7.avif",
        price:"179",
        description:"Serves 1 | Served with Sambar & 2types of Chutney",
        storeName:"Hotel Saravana Bhavan",
        storeLocation:"Perungudi",
        ratings:"4.5",
        timing:"48 mins",
        variety:"South Indian, North Indian, Sweets",
        storeImage:"images/restaurant9.avif",
        dishCategory:"Pure veg",
        dishType:"Dosa" 
    },
    {
        dishId:"52",
        dishName:"Mini Tiffin",
        imagePath:"images/pongal2.avif",
        price:"185",
        description:"Serves 1 | Rava Kesari, Ghee Pongal, Medhu Vadai, Mini Idly(5), Mini Masala Dosai, Sambar & two types of Chutney",
        storeName:"Hotel Saravana Bhavan",
        storeLocation:"Perungudi",
        ratings:"4.5",
        timing:"48 mins",
        variety:"South Indian, North Indian, Sweets",
        storeImage:"images/restaurant9.avif",
        dishCategory:"Pure veg",
        dishType:"Pongal" 
    },
    {
        dishId:"53",
        dishName:"Hot Idly (3)",
        imagePath:"images/idli4.avif",
        price:"95",
        description:"Serves 1 | SouthIndian steamed rice cakes served With Sambar & two types Of Chutney",
        storeName:"Hotel Saravana Bhavan",
        storeLocation:"Perungudi",
        ratings:"4.5",
        timing:"48 mins",
        variety:"South Indian, North Indian, Sweets",
        storeImage:"images/restaurant9.avif",
        dishCategory:"Pure veg",
        dishType:"Idli" 
    },
    {
        dishId:"54",
        dishName:"Poori (3pc)",
        imagePath:"images/poori2.avif",
        price:"250",
        description:"Serves 1 | Poori (2pcs) + Sambar Vada (1pc) + Ghee Rava Kesari + Potato Masala",
        storeName:"Hotel Saravana Bhavan",
        storeLocation:"Perungudi",
        ratings:"4.5",
        timing:"48 mins",
        variety:"South Indian, North Indian, Sweets",
        storeImage:"images/restaurant9.avif",
        dishCategory:"Pure veg",
        dishType:"Poori" 
    },
    {
        dishId:"55",
        dishName:"Rava Masala Dosa",
        imagePath:"images/dosa8.avif",
        price:"250",
        description:"Serves 1 | Spl Rava Dosa + Sambar vada (1pc) + Ghee Rava Kesari + Sambar & 2types of Chutney",
        storeName:"Hotel Saravana Bhavan",
        storeLocation:"Perungudi",
        ratings:"4.5",
        timing:"48 mins",
        variety:"South Indian, North Indian, Sweets",
        storeImage:"images/restaurant9.avif",
        dishCategory:"Pure veg",
        dishType:"Dosa" 
    },
    {
        dishId:"56",
        dishName:"Rava Dosa",
        imagePath:"images/dosa9.avif",
        price:"99",
        description:"Serves 1 | Spl Rava Dosa + Sambar & 2types of Chutney",
        storeName:"Murugan Idli Shop",
        storeLocation:"Velachery",
        ratings:"3.8",
        timing:"56 mins",
        variety:"South Indian",
        storeImage:"images/restaurant10.avif",
        dishCategory:"Pure veg",
        dishType:"Dosa" 
    },
    {
        dishId:"57",
        dishName:"Ghee Dosai",
        imagePath:"images/dosa10.avif",
        price:"130",
        description:"Serves 1 | Dosa + Sambar & 2types of Chutney",
        storeName:"Murugan Idli Shop",
        storeLocation:"Velachery",
        ratings:"3.8",
        timing:"56 mins",
        variety:"South Indian",
        storeImage:"images/restaurant10.avif",
        dishCategory:"Pure veg",
        dishType:"Dosa" 
    },
    {
        dishId:"58",
        dishName:"Ghee Onion Uthappam",
        imagePath:"images/dosa11.avif",
        price:"130",
        description:"Serves 1 | Thick rice & lentil pancakes topped with shallots cooked in ghee",
        storeName:"Murugan Idli Shop",
        storeLocation:"Velachery",
        ratings:"3.8",
        timing:"56 mins",
        variety:"South Indian",
        storeImage:"images/restaurant10.avif",
        dishCategory:"Pure veg",
        dishType:"Dosa" 
    },
    {
        dishId:"59",
        dishName:"Ghee pongal",
        imagePath:"images/pongal3.avif",
        price:"140",
        description:"Serves 1 | Spl Ghee pongal + Sambar & 2types of Chutney",
        storeName:"Murugan Idli Shop",
        storeLocation:"Velachery",
        ratings:"3.8",
        timing:"56 mins",
        variety:"South Indian",
        storeImage:"images/restaurant10.avif",
        dishCategory:"Pure veg",
        dishType:"Pongal" 
    },
    {
        dishId:"60",
        dishName:"Medhu Vadai",
        imagePath:"images/vada1.avif",
        price:"80",
        description:"Serves 1 | 2 vada & 2types of Chutney",
        storeName:"Murugan Idli Shop",
        storeLocation:"Velachery",
        ratings:"3.8",
        timing:"56 mins",
        variety:"South Indian",
        storeImage:"images/restaurant10.avif",
        dishCategory:"Pure veg",
        dishType:"Vada" 
    },
    {
        dishId:"61",
        dishName:"Barbeque in a Box (Non Veg) Premium",
        imagePath:"images/barbeque1.avif",
        price:"1200",
        description:"Serves 3 | [Six Starters] Chicken Tikka (6 Pcs) + Reshmi Chicken Wings (6 Pcs) + Fish Tikka (6 Pcs) + Veg Rolls (6 Pcs) + Veg Kebabs (6 Pcs) + Chicken Seekh Kebab (6 Pcs). [Main Course] - Chicken Butter Masala + Egg Curry + Dal Makhani + Chicken Dum Biryani + Paratha (3 Pcs) [Three Desserts] - Angoori Gulab Jamun (8Pcs) + Brownie + Moong Dal Halwa. Accompanied with Mint Chutney, Salan, Dips & Salad. Barbeque Nation Buffet served at Home.",
        storeName:"Barbeque Nation",
        storeLocation:"Thoraipakkam",
        ratings:"4.5",
        timing:"45 mins",
        variety:"North Indian, Barbecue",
        storeImage:"images/restaurant11.avif",
        dishCategory:"Non veg",
        dishType:"Chicken" 
    },
    {
        dishId:"62",
        dishName:"Barbeque in a Box (Non Veg) Premium (With Prawns and Mutton)",
        imagePath:"images/barbeque2.avif",
        price:"1400",
        description:"Serves 3 | [Six Starters] - Chilly Garlic Prawns (6 Pcs) + Chicken Tikka (6 Pcs) + Chicken Wings (6 Pcs) + Fish Tikka (6 Pcs) + Veg Kebabs (6 Pcs) + Veg Rolls (6 Pcs) [Main Course] - Butter Chicken + Mutton Rogan Josh + Dal Makhani + Chicken Dum Biryani + Parathas (3 Nos) [Three Desserts] - Angoori Jamun (8 Pcs) + Moong Dal Halwa + Brownie - Accompanied with Mint Chutney, Salan, Dips & Salad. A premium Barbeque Nation buffet served at home.",
        storeName:"Barbeque Nation",
        storeLocation:"Thoraipakkam",
        ratings:"4.5",
        timing:"45 mins",
        variety:"North Indian, Barbecue",
        storeImage:"images/restaurant11.avif",
        dishCategory:"Non veg",
        dishType:"Chicken" 
    },
    {
        dishId:"63",
        dishName:"Butter Chicken & Dal Makhani Meal",
        imagePath:"images/chicken1.avif",
        price:"550",
        description:"Serves 1 | Wholesome meal of Butter Chicken (boneless 4-5 Pcs) and Dal Makhani. Served with your choice of Flavoured Rice OR Parathas (2Nos). Kcal - 1767",
        storeName:"Barbeque Nation",
        storeLocation:"Thoraipakkam",
        ratings:"4.5",
        timing:"45 mins",
        variety:"North Indian, Barbecue",
        storeImage:"images/restaurant11.avif",
        dishCategory:"Non veg",
        dishType:"Chicken" 
    },
    {
        dishId:"64",
        dishName:"Kebabs in a Box (Non Veg Overload)",
        imagePath:"images/chicken2.avif",
        price:"1200",
        description:"Serves 2 | Chilly Garlic Prawns (6 Pcs) + Chicken Tikka (6 Pcs) + Chicken Wings (6 Pcs) + Tandoori Tangadi (2Pcs) + Fish Tikka (6 Pcs) + Angoori Jamun (8 Pcs). Accompanied with Dips & Salad. Non Veg Overload in a Box.",
        storeName:"Barbeque Nation",
        storeLocation:"Thoraipakkam",
        ratings:"4.5",
        timing:"45 mins",
        variety:"North Indian, Barbecue",
        storeImage:"images/restaurant11.avif",
        dishCategory:"Non veg",
        dishType:"Chicken" 
    },
    {
        dishId:"65",
        dishName:"Chicken Tikka (Boneless)",
        imagePath:"images/chicken3.avif",
        price:"1200",
        description:"Serves 1 | Boneless Chicken chunks marinated in authentic tikka masala and grilled on skewers, one of India's most popular dishes. Kcal - 615",
        storeName:"Barbeque Nation",
        storeLocation:"Thoraipakkam",
        ratings:"4.5",
        timing:"45 mins",
        variety:"North Indian, Barbecue",
        storeImage:"images/restaurant11.avif",
        dishCategory:"Non veg",
        dishType:"Chicken" 
    },
    {
        dishId:"66",
        dishName:"Chicken Biryani (Jeera Samba)",
        imagePath:"images/biriyani3.avif",
        price:"360",
        description:"Dum biryani with 3 pieces of chicken (with bone), 1 boiled egg, raita. Nutritional information (per 100 gms) : energy - 191. 47 kcal, protein - 8. 9 g, carbs - 27. 74 g , fats - 4. 99 g, allergens: milk, egg. Serving size: 540 gms",
        storeName:"Mani's Dum Biriyani",
        storeLocation:"Karapakkam",
        ratings:"4.5",
        timing:"32 mins",
        variety:"Andhra, Biriyani",
        storeImage:"images/restaurant12.avif",
        dishCategory:"Non veg",
        dishType:"Biriyani" 
    },
    {
        dishId:"67",
        dishName:"Chicken Kabab Biryani (Jeera Samba)",
        imagePath:"images/biriyani4.avif",
        price:"379",
        description:"Jeera samba dum biryani rice topped with chef's special boneless chicken, 1 boiled egg, raita. Nutritional information (per 100 gms) : energy - 210. 95 kcal, protein - 8. 9 g, carbs - 30 g , fats - 5. 95 g, allergens: milk, egg. Serving size: 640 gms",
        storeName:"Mani's Dum Biriyani",
        storeLocation:"Karapakkam",
        ratings:"4.5",
        timing:"32 mins",
        variety:"Andhra, Biriyani",
        storeImage:"images/restaurant12.avif",
        dishCategory:"Non veg",
        dishType:"Biriyani" 
    },
    {
        dishId:"68",
        dishName:"Fish Biryani (Jeera Samba)",
        imagePath:"images/biriyani5.avif",
        price:"380",
        description:"Jeera samba dum biryani rice with 10/12 small cubes of boneless fish, raita. Nutritional information (per 100 gms) : energy - 174. 47 kcal, protein - 7. 9 g, carbs - 26. 74 g , fats - 3. 99 g, allergens: milk, egg. Serving size: 640 gms",
        storeName:"Mani's Dum Biriyani",
        storeLocation:"Karapakkam",
        ratings:"4.5",
        timing:"32 mins",
        variety:"Andhra, Biriyani",
        storeImage:"images/restaurant12.avif",
        dishCategory:"Non veg",
        dishType:"Biriyani" 
    },
    {
        dishId:"69",
        dishName:"Egg Biryani (Jeera Samba)",
        imagePath:"images/biriyani6.avif",
        price:"240",
        description:"Jeera samba dum biryani with 2 boiled eggs, raita. Nutritional information (per 100 gms) : energy - 163. 9 kcal, protein - 8. 9 g, carbs - 24. 2 g , fats - 3. 5 g, allergens: milk, egg. Serving size: 640 gms",
        storeName:"Mani's Dum Biriyani",
        storeLocation:"Karapakkam",
        ratings:"4.5",
        timing:"32 mins",
        variety:"Andhra, Biriyani",
        storeImage:"images/restaurant12.avif",
        dishCategory:"Non veg",
        dishType:"Biriyani" 
    },
    {
        dishId:"70",
        dishName:"Mutton Kushka (Jeera Samba)",
        imagePath:"images/biriyani7.avif",
        price:"120",
        description:"Our jeeraga samba mutton dum biryani rice with 1 boiled egg served along with a small portion of plain mutton gravy and raita",
        storeName:"Mani's Dum Biriyani",
        storeLocation:"Karapakkam",
        ratings:"4.5",
        timing:"32 mins",
        variety:"Andhra, Biriyani",
        storeImage:"images/restaurant12.avif",
        dishCategory:"Non veg",
        dishType:"Biriyani" 
    }
    
];

let productContainer=document.getElementById("product-containerid");
let productDisplay=document.createElement("div");
productDisplay.classList.add("product-display");
productContainer.appendChild(productDisplay)


    

function showProduct(array){
    for(let i=0;i<array.length;i++){
        let productCol=document.createElement("div");
        productCol.classList.add("product-col");    
        productDisplay.appendChild(productCol); 
    }

    array.forEach(function(dish,index){
        let productColumn=document.querySelectorAll(".product-col");
        let productDescription=document.createElement("div");
        productDescription.classList.add("product-description");
        productColumn[index].appendChild(productDescription);
        let productImage=document.createElement("div");
        productImage.classList.add("product-img");
        productColumn[index].appendChild(productImage);
        let productDisplayName=document.createElement("h4");
        let storeDisplayName=document.createElement("h4");
        let storeDisplayLocation=document.createElement("p");
        let storeStar=document.createElement("span");
        storeStar.classList.add("star-rating")
        let storeRating=document.createElement("span");
        let storeVariety=document.createElement("p");
        let storeTime=document.createElement("p");
        storeStar.innerHTML="<i class='bi bi-star-fill'></i>"
        storeRating.innerHTML=dish.ratings;
        storeVariety.innerText=dish.variety;
        storeTime.innerText=dish.timing;
        storeDisplayLocation.innerText=dish.storeLocation;
        storeDisplayName.innerText=dish.storeName;
        productDisplayName.innerText=dish.dishName;
        let productRate=document.createElement("p");
        productRate.innerHTML="<i class='bi bi-currency-rupee'></i>"+dish.price;
        let productDes=document.createElement("p");
        productDes.setAttribute("class","descrip")
        productDes.innerText=dish.description;
        productDescription.appendChild(productDisplayName);
        productDescription.appendChild(productRate);
        productDescription.appendChild(productDes);
        productDescription.appendChild(storeDisplayName);
        productDescription.appendChild(storeStar);
        productDescription.appendChild(storeRating);
        productDescription.appendChild(storeTime);
        productDescription.appendChild(storeVariety);
        productDescription.appendChild(storeDisplayLocation);
        let productEle=document.createElement("img");
        productEle.setAttribute("src",dish.imagePath);
        let cartButton=document.createElement("div")
        cartButton.classList.add("cart-btn");
        productImage.appendChild(productEle);
        productImage.appendChild(cartButton);
        let addButton=document.createElement("button");
        addButton.setAttribute("class","add-btn");
        addButton.setAttribute("onclick",`addToCart(dishes[${dish.dishId-1}])`);
        addButton.innerText="ADD";
        cartButton.appendChild(addButton); 
    })   
}

let cartItem=[];
let cartRow=document.querySelector(".cart-row");
let cartNumber=document.getElementById("cart-number");
let itemsNumber=document.getElementById("items-number");
let units=1;

function addToCart(product){
    itemTotal=[];
    if(cartItem.length==0){
        cartItem.push(product);
        product.quantity=units;
        checkoutButton.style.display="block";
    }
    else{

        const existingProduct=cartItem.find(function(item){
            return item.dishId===product.dishId;
        });
    
        if(!existingProduct){
            cartItem.push(product);
            product.quantity=units;
        }else{
            product.quantity+=1;
        }
    }
    
    let cartColumn=document.querySelectorAll(".cart-col")
    for(let i=0;i<cartColumn.length;i++){
        cartRow.removeChild(cartColumn[i]);
    }
    let deliveryCharges=document.getElementById("delivery-charges");
    deliveryCharges.innerText= 50;
    cartNumber.innerHTML=cartItem.length;
    itemsNumber.innerHTML=cartItem.length;
    displayCart();
    updateItemTotal();
}


let itemTotal=[];

function updateItemTotal(){
    if(itemTotal.length>0){

        let sum=Number(itemTotal.reduce(function(acc,currentValue){
           return Number(acc)+Number(currentValue);
        }));
        let itemTotalEle=document.getElementById("item-total");
        itemTotalEle.innerText=sum;
        
        let gstTax= Number((sum*(18/100)).toFixed(2));
        let taxupdate=document.getElementById("item-tax");
        taxupdate.innerText=gstTax;
    
        let totalCost=sum+50+gstTax;
        let totalPay=document.getElementById("total-pay");
        totalPay.innerText=totalCost;
    }
    else{
        resetItemTotal();
    }
}

function resetItemTotal(){
    let itemTotalEle=document.getElementById("item-total");
    itemTotalEle.innerText=0;
    let taxupdate=document.getElementById("item-tax");
    taxupdate.innerText=0;
    let totalPay=document.getElementById("total-pay");
    totalPay.innerText=0;
    let deliveryCharges=document.getElementById("delivery-charges");
    deliveryCharges.innerText=0;
    checkoutButton.style.display="none";
}


function displayCart(){
    cartItem.forEach(function(value,index){
        let cartColumn=document.createElement("div");
        cartColumn.classList.add("cart-col");
        cartRow.appendChild(cartColumn);
        let proDetails=document.createElement("div");
        proDetails.classList.add("product-details");
        cartColumn.appendChild(proDetails);

        let proImageDiv=document.createElement("div");
        proImageDiv.classList.add("item-image");
        let proImage=document.createElement("img");
        proImage.setAttribute("src",value.imagePath);
        proImageDiv.appendChild(proImage);
        proDetails.appendChild(proImageDiv);

        let itemDetails=document.createElement("div");
        itemDetails.classList.add("item-details");
        let foodName=document.createElement("h4");
        foodName.innerText=value.dishName;
        let foodStore=document.createElement("p");
        foodStore.innerText=value.storeName;
        let storeStar=document.createElement("span");
        storeStar.classList.add("star-rating")
        storeStar.innerHTML="<i class='bi bi-star-fill'></i>";
        let foodStoreRating=document.createElement("p");
        foodStoreRating.appendChild(storeStar);
        let storeRate=document.createElement("span");
        storeRate.innerText="  "+value.ratings;
        foodStoreRating.appendChild(storeRate);
        let removeBtn=document.createElement("button");
        removeBtn.innerText="Remove";
        removeBtn.setAttribute("onclick",`removeCartItem(${index})`);
        itemDetails.appendChild(foodName);
        itemDetails.appendChild(foodStore);
        itemDetails.appendChild(foodStoreRating);
        itemDetails.appendChild(removeBtn);
        proDetails.appendChild(itemDetails);

        let proQuantity=document.createElement("div");
        proQuantity.classList.add("product-quantity");
        let quantityBtns=document.createElement("div");
        quantityBtns.classList.add("quantity-btns");
        proQuantity.appendChild(quantityBtns);
        let lessBtn=document.createElement("button");
        lessBtn.setAttribute("onclick",`decreaseQuantity(${index})`)
        lessBtn.innerText="-";
        quantityBtns.appendChild(lessBtn);
        let inputQty=document.createElement("input");
        inputQty.setAttribute("type","number");
        inputQty.setAttribute("readonly","readonly");
        inputQty.setAttribute("value",value.quantity);
        quantityBtns.appendChild(inputQty);
        let moreBtn=document.createElement("button");
        moreBtn.innerText="+";
        moreBtn.setAttribute("onclick",`increaseQuantity(${index})`)
        quantityBtns.appendChild(moreBtn);
        cartColumn.appendChild(proQuantity);

        let proPrice=document.createElement("div");
        proPrice.classList.add("product-price");
        let priceOfPro=document.createElement("p");
        priceOfPro.innerHTML="<i class='bi bi-currency-rupee'></i>"+value.price;
        proPrice.appendChild(priceOfPro);
        cartColumn.appendChild(proPrice);

        let proTotal=document.createElement("div");
        proTotal.classList.add("product-total");
        let totalPrice=document.createElement("p");
        totalPrice.innerHTML="<i class='bi bi-currency-rupee'></i>"+(value.price*value.quantity).toFixed(2);
        itemTotal.push((value.price*value.quantity).toFixed(2));
        proTotal.appendChild(totalPrice);
        cartColumn.appendChild(proTotal);
    })
    
}

function increaseQuantity(index){
    cartItem[index].quantity+=1;
    cartNumber.innerHTML=cartItem.length;
    itemsNumber.innerHTML=cartItem.length;
    itemTotal=[];
    let cartColumn=document.querySelectorAll(".cart-col")
    for(let i=0;i<cartColumn.length;i++){
        cartRow.removeChild(cartColumn[i]);
    }
    displayCart();
    updateItemTotal();
}

function decreaseQuantity(index){
    
    cartItem[index].quantity-=1;
    if(cartItem[index].quantity==0){
        removeCartItem(index);
    }    
    let cartColumn=document.querySelectorAll(".cart-col")
    for(let i=0;i<cartColumn.length;i++){
        cartRow.removeChild(cartColumn[i]);
    }
    itemTotal=[];
    cartNumber.innerHTML=cartItem.length;
    itemsNumber.innerHTML=cartItem.length;
    displayCart();
    updateItemTotal();
}

function removeCartItem(index){
    let cartColumn=document.querySelectorAll(".cart-col");
    for(let i=0;i<cartColumn.length;i++){
        cartRow.removeChild(cartColumn[i]);
    }
    if(index==0){
        cartItem.splice(index,index+1);
    }else{
        cartItem.splice(index,index);
    }

    itemTotal=[];
    cartNumber.innerHTML=cartItem.length;
    itemsNumber.innerHTML=cartItem.length;
    
    displayCart()
    updateItemTotal();
}

let checkoutButton=document.getElementById("check-out");
checkoutButton.addEventListener("click",function(){
    checkoutButton.style.display="none";
    let cartSection=document.querySelector(".shopping-cart");
    let checkOutContainer=document.querySelector(".checkout-container")
    cartSection.style.display="none";
    checkOutContainer.style.display="block";
})

let backToCart=document.getElementById("cart-back");
backToCart.addEventListener("click",function(){
    checkoutButton.style.display="block";
    let cartSection=document.querySelector(".shopping-cart");
    let checkOutContainer=document.querySelector(".checkout-container")
    cartSection.style.display="block";
    checkOutContainer.style.display="none";
})


let openCart=document.getElementById("open-cart");
let closeCart=document.getElementById("close-cart");
let cartContainer = document.querySelector(".cart-container");

openCart.addEventListener("click", function(){
        cartContainer.classList.add("open-modal");
        cartContainer.classList.remove("close-modal");
        cartContainer.style.display="flex";
});

closeCart.addEventListener("click",function(){
   cartContainer.classList.remove("open-modal");
   cartContainer.classList.add("close-modal");
   setTimeout(hiddenDisplay, 1000);
});
function hiddenDisplay(){
    cartContainer.style.display="none";
    clearInterval();
}

let paymentBtn=document.getElementById("payment-btn");
let checkoutForm=document.getElementById("checkout-form");

checkoutForm.addEventListener("submit",function(event){
    event.preventDefault()
    document.querySelector(".order-confirmation-modal").classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hidden"); 
    document.querySelector(".confirm-icon").classList.add("confirmation-icon-animation");   
})

function backToHome(){
    document.querySelector(".order-confirmation-modal").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden"); 
    document.querySelector(".confirm-icon").classList.remove("confirmation-icon-animation");   
    let cartColumn=document.querySelectorAll(".cart-col")
    for(let i=0;i<cartColumn.length;i++){
        cartRow.removeChild(cartColumn[i]);
    }
    cartItem=[];
    itemTotal=[];
    let cartSection=document.querySelector(".shopping-cart");
    let checkOutContainer=document.querySelector(".checkout-container")
    cartSection.style.display="block";
    checkOutContainer.style.display="none";
    cartNumber.innerHTML=cartItem.length;
    itemsNumber.innerHTML=cartItem.length;
    resetItemTotal();
    cartContainer.classList.remove("open-modal");
    cartContainer.classList.add("close-modal");
    hiddenDisplay();
    checkoutForm.reset();
}







let productSection=document.getElementById("product-section");
let hotelHead=document.querySelector(".hotel-head");
let storePhoto= document.getElementById("store-photo");
let storeHeadName=document.getElementById("store-name");
let storeHeadRate=document.getElementById("hotel-rate");
let storeHeadTime=document.getElementById("store-time");
let storeHeadDetails=document.getElementById("store-details");
let storeHeadLocation=document.getElementById("store-location");
let storeArray=[];

function storeFilter(store){
    let productColumn=document.querySelectorAll(".product-col");
    for(let i=0;i<productColumn.length;i++){
        productDisplay.removeChild(productColumn[i]);
    }
    showProduct(dishes);
    productSection.classList.add("hidden");
    filterButton.style.display="none";
    if(storeArray==[]){
        dishes.forEach(function(ele,index){
            let productColumn=document.querySelectorAll(".product-col")
            productSection.classList.remove("hidden");
            hotelHead.style.display="flex";
            if(ele.storeName==store){
                storeArray.push(ele)
                
                productColumn[index].style.display="flex";
                storePhoto.setAttribute("src",ele.storeImage);
                storeHeadName.innerText=ele.storeName;
                storeHeadRate.innerText=ele.ratings;
                storeHeadTime.innerText=ele.timing;
                storeHeadDetails.innerText=ele.variety;
                storeHeadLocation.innerText=ele.storeLocation;
            }else{
                productColumn[index].style.display="none"; 
            }
            
        })
    }else{
        storeArray=[];
        dishes.forEach(function(ele,index){
            let productColumn=document.querySelectorAll(".product-col")
            productSection.classList.remove("hidden");
            hotelHead.style.display="flex";
            if(ele.storeName==store){
                storeArray.push(ele)
                
                productColumn[index].style.display="flex";
                storePhoto.setAttribute("src",ele.storeImage);
                storeHeadName.innerText=ele.storeName;
                storeHeadRate.innerText=ele.ratings;
                storeHeadTime.innerText=ele.timing;
                storeHeadDetails.innerText=ele.variety;
                storeHeadLocation.innerText=ele.storeLocation;
            }else{
                productColumn[index].style.display="none"; 
            }
            
        })
    }
    
    
}


let categoryArray=[];
let categoryArray2=[];
function categoryFilter(type){
    let productColumn=document.querySelectorAll(".product-col");
    for(let i=0;i<productColumn.length;i++){
        productDisplay.removeChild(productColumn[i]);
    }
    showProduct(dishes);
    productSection.classList.add("hidden");
    filterButton.style.display="inline-block";
    if(categoryArray==[]&&categoryArray2==[]){
        dishes.forEach(function(food,index){
            let productColumn=document.querySelectorAll(".product-col")
            productSection.classList.remove("hidden");
            hotelHead.style.display="none";
            if(food.dishType==type){
                categoryArray.push(food);
                categoryArray2.push(food);                
                productColumn[index].style.display="flex";
            }else{
                productColumn[index].style.display="none"; 
            }
            
        })
    }else{
        categoryArray=[];
        categoryArray2=[];
        dishes.forEach(function(food,index){
            let productColumn=document.querySelectorAll(".product-col")
            productSection.classList.remove("hidden");
            hotelHead.style.display="none";
            if(food.dishType==type){
                categoryArray.push(food);
                categoryArray2.push(food);                
                productColumn[index].style.display="flex";
            }else{
                productColumn[index].style.display="none"; 
            }
            
        })
    }
}


let filterButton=document.getElementById("filter");
let clearFilter=document.getElementById("clear-filter");
let highRating=document.getElementById("gt4");
let lowRating=document.getElementById("vlt4");
let pureVeg=document.getElementById("veg");
let nonVeg=document.getElementById("non-veg");
let lowToHigh=document.getElementById("lth");
let highToLow=document.getElementById("htl");

filterButton.addEventListener("click",function(){
    highRating.style.display="inline-block";
    lowRating.style.display="inline-block";
    nonVeg.style.display="inline-block";
    pureVeg.style.display="inline-block";
    lowToHigh.style.display="inline-block";
    highToLow.style.display="inline-block";
    
});

pureVeg.addEventListener("click",function(){
    let productColumn=document.querySelectorAll(".product-col");
    for(let i=0;i<productColumn.length;i++){
        productDisplay.removeChild(productColumn[i]);
    }
    let newCategory=categoryArray
    showProduct(newCategory);
    newCategory.forEach(function(ele,index){
        let productColumn=document.querySelectorAll(".product-col")
        clearFilter.style.display="inline-block";
        productSection.classList.remove("hidden");
        hotelHead.style.display="none";
        if(ele.dishCategory=="Pure veg"){            
            productColumn[index].style.display="flex";
            storePhoto.setAttribute("src",ele.storeImage);
            storeHeadName.innerText=ele.storeName;
            storeHeadRate.innerText=ele.ratings;
            storeHeadTime.innerText=ele.timing;
            storeHeadDetails.innerText=ele.variety;
            storeHeadLocation.innerText=ele.storeLocation;
        }else{
            productColumn[index].style.display="none"; 
        }
        
    })
})

lowToHigh.addEventListener("click",function(){
        clearFilter.style.display="inline-block";
        let productColumn=document.querySelectorAll(".product-col");
    for(let i=0;i<productColumn.length;i++){
        productDisplay.removeChild(productColumn[i]);
    }let newCategory=categoryArray
    let ascendingArray=newCategory.sort(function(a,b){
        return a.price -b.price;
    })
    showProduct(ascendingArray);
})

highToLow.addEventListener("click",function(){
        clearFilter.style.display="inline-block";
        let productColumn=document.querySelectorAll(".product-col");
    for(let i=0;i<productColumn.length;i++){
        productDisplay.removeChild(productColumn[i]);
    }
    let newCategory=categoryArray
    let descendingArray=newCategory.sort(function(a,b){
        return b.price -a.price;
    })
    showProduct(descendingArray);
})

nonVeg.addEventListener("click",function(){
    let productColumn=document.querySelectorAll(".product-col");
    for(let i=0;i<productColumn.length;i++){
        productDisplay.removeChild(productColumn[i]);
    }
    let newCategory=categoryArray
    showProduct(newCategory);
    newCategory.forEach(function(ele,index){
        let productColumn=document.querySelectorAll(".product-col")
        clearFilter.style.display="inline-block";
        productSection.classList.remove("hidden");
        hotelHead.style.display="none";
        if(ele.dishCategory=="Non veg"){            
            productColumn[index].style.display="flex";
            storePhoto.setAttribute("src",ele.storeImage);
            storeHeadName.innerText=ele.storeName;
            storeHeadRate.innerText=ele.ratings;
            storeHeadTime.innerText=ele.timing;
            storeHeadDetails.innerText=ele.variety;
            storeHeadLocation.innerText=ele.storeLocation;
        }else{
            productColumn[index].style.display="none"; 
        }
        
    })
})

highRating.addEventListener("click",function(){
        clearFilter.style.display="inline-block";
        let productColumn=document.querySelectorAll(".product-col");
    for(let i=0;i<productColumn.length;i++){
        productDisplay.removeChild(productColumn[i]);
    }
    let newCategory=categoryArray
        let highRatingArray=newCategory.sort(function(a,b){
            return b.ratings - a.ratings;
        })
        showProduct(highRatingArray);
})

lowRating.addEventListener("click",function(){
        clearFilter.style.display="inline-block";
        let productColumn=document.querySelectorAll(".product-col");
    for(let i=0;i<productColumn.length;i++){
        productDisplay.removeChild(productColumn[i]);
    }
    let newCategory=categoryArray
        let lowRatingArray=newCategory.sort(function(a,b){
            return a.ratings - b.ratings;
        })
        showProduct(lowRatingArray);
})

clearFilter.addEventListener("click",function(){
    let productColumn=document.querySelectorAll(".product-col");
    for(let i=0;i<productColumn.length;i++){
        productDisplay.removeChild(productColumn[i]);
    }
    showProduct(categoryArray2);
    clearFilter.style.display="none";
    highRating.style.display="none";
    lowRating.style.display="none";
    nonVeg.style.display="none";
    pureVeg.style.display="none";
    lowToHigh.style.display="none";
    highToLow.style.display="none";
});






