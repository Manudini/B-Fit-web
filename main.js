let carts =[]; //onClick the elemnts will add into the arr.

//dumbellOnClick Functions 
function dumbell1(){
    
    let cart = {
        "name": "pro-dumbells",
        "price": 12500,
       "quantity": 1 
    }
    
    updateQunatity(cart);
    }
    


function dumbell2(){
    let cart ={
        "name": "adidas dumbell",
        "price": 5600,
        "quantity":1
       
    }
    updateQunatity(cart);
    }

function dumbell3(){
    let cart ={
        "name": "Dumbell pole",
         "price": 4500,
         "quantity":1 
       
        
    }
    updateQunatity(cart);
}

function dumbell4(){
    let cart ={
        "name": "Dumbell Rack",
         "price": 45000,
         "quantity":1 
    
        
    }
    updateQunatity(cart);
}
//BenchOnClick functions
function bench1(){
    let cart ={
        "name": "Basic Bench",
        "price": 6500,
        "quantity":1 
     
        
    }
    updateQunatity(cart);
}

function bench2(){
    let cart ={
        "name": "Adjustable Bench",
        "price": 14200,
        "quantity":1
        
        
    }
    updateQunatity(cart);
}
let totaItems = 0;
function bench3(){
    let cart ={
        "name": "Adjustable Bench",
        "price": 36500,
        "quantity":1 
      
        
    }
    updateQunatity(cart);
}

function bench4(){
    let cart ={
        "name": "Rouge bench",
        "price": 18500,
        "quantity":1 
        
    }
    updateQunatity(cart);
}

//accesories
function accesories1(){
    let cart ={
        "name": "Skipping Rope",
        "price": 4500,
        "quantity":1 
        
    }
    updateQunatity(cart);
}

function accesories2(){
    let cart ={
        "name": "Form Roller",
        "price": 6500,
        "quantity":1
        
        
    }
    updateQunatity(cart);
}


function accesories3(){
    let cart ={
        "name": "Everlast gloves",
        "price": 2500,
        "quantity":1 
        
        
    }
    updateQunatity(cart);
}

function accesories4(){
    let cart ={
        "name": "Yoga Mat",
        "price": 1500,
        "quantity":1 
    }
    
    updateQunatity(cart);
}
//this function will add items to the cart
function printArray(){
    let totalprice = 0 ;
    let table= document.getElementById('productCart');
    for(var  i = 0; i < carts.length; i++){
        let currentItem = carts[i];
        let row = table.insertRow();
        let nameCell = row.insertCell();
        let priceCell =row.insertCell();
        let quantityCell = row.insertCell();
        let itemTotalCell = row.insertCell();
        let nametxt = document.createTextNode(currentItem.name);
        let pricetxt = document.createTextNode(currentItem.price);
        let quantitytxt = document.createTextNode(currentItem.quantity);
        let itemTotaltxt = document.createTextNode( currentItem.price * currentItem.quantity);
        nameCell.appendChild(nametxt);
        priceCell.appendChild(pricetxt);
        quantityCell.appendChild(quantitytxt);
        itemTotalCell.appendChild(itemTotaltxt);
        
         totalprice = totalprice + currentItem.price * currentItem.quantity;
    }
        let row = table.insertRow();
        let nameCell = row.insertCell();
        let cell = row.insertCell();
        let cell2 = row.insertCell();
        let priceCell =row.insertCell();
        let nametxt = document.createTextNode("Total Price");
        let pricetxt = document.createTextNode(totalprice);
        let celltxt = document.createTextNode("--")
        let celltxt2 = document.createTextNode("--")
        nameCell.appendChild(nametxt);
        cell.appendChild(celltxt);
        cell2.appendChild(celltxt2);
        priceCell.appendChild(pricetxt);
  

}

//update quantity
function updateQunatity(item){
    
    //console.log("updateQunatitys1");
     var matchingItem = null;
    for(var i =0; i < carts.length; i++){
       var currenItem = carts[i];
        console.log(currenItem.name);
       
        if (currenItem.name == item.name){
            matchingItem = currenItem;
            
            //console.log("updateQunatitys2");

        }
       //console.log("updateQunatitys3");
    }
    if (matchingItem == null){
        carts.push(item);
    }else{
        matchingItem.quantity++;
    }
}



function check(){
if( quantity != 1){
    quantity+=1;
}else{
  carts.push(cart);
  quantity = quantity + 1;
  console.log("caling dumbel1");
}
}




function end(){    
    var fname = document.getElementById("Cname").value;
    var email = document.getElementById("email").value;
    var totalprice = 0;
    for(var i =0; i < carts.length; i++){
        var currenItem = carts[i];
        var currenItemQuantity = carts[i].quantity;
        totalprice = totalprice + currenItem.price * currenItemQuantity;
    }
     
    if (fname == "" || email == "" ){
       alert("Please enter values to the form.");
       
   }else{
        let finaltext = "HY! " + fname + ". your total is " + "Rs." + totalprice + ". Verification will be sent to your mail " + email
        + " Thank you. Have a nice day."
                        
                       

    document.getElementById('detailsOfProducts').innerHTML = finaltext;
   }
   
   
}   
    



