//      let count=0;
//      for (let x = "come"; x.length() < 20; x += "a") {
//      System.out.println(x);
//      count++;
//      System.out.println("i run "+count+ " times");
//      System.out.println("i have "+x.length()+" characters");
//      
//      }
//

//const board =  ["hey", "hi", "hello","niaje","bonjour"]
//  board[0][1]="happy"
//  //console.log(board[0][0])
//  console.log(board)
//  board[0][2]="happily"
//  //console.log(board[0][0])
//  console.log(board)
//copyboard=board.slice()
//copyboard.unshift("niaje")
//copyboard.pop()
//console.log(copyboard.pop())
//copyboard.push("bojour")
//console.log(copyboard)
//
// //copyboard2=[...board]
// //copyboard2.push("niaje")
// //console.log(copyboard2)
// //console.log(board.splice(-3))
// //console.log(board)


// //let schools={
// //            name:{  name2: "kabianga",
// //                    year: 1996,
// //                    head: "waweru",
// //                    grade: "A",
// //                    students: {student: function (name,age){
// //                                                    x=String(name)
// //                                                    y=String(age)
// //                                                    return x+" "+y;},
// //                                happy: {
// //                                    smilling: "yessir",
// //                                    laughing: true,
// //                                }
// //
// //                            }
// //
// //                  }
// //                }
// //console.log(typeof (schools.name.students))
// ////console.log(schools.name.students.student("james","karanja"))

// let inventory={
//         book1:{
//             title: "Game of thrones",
//             author: "kalessi",
//             genre: "drama",
//             happy: true,
//             quantity:4,
//             }}            
// const addbook={
//         title:0,
//         author:0,
//         genre:0,
//         price:0,
//         quantity:0
//             };
// function bookadd(a,b,c,d,e){
//     addbook.title=a;
//     addbook.author=b;
//     addbook.genre=c;
//     addbook.price=d;
//     addbook.quantity=e;
//     inventory.book2=addbook}

// bookadd("happy","king james","adventure",200,8)
// function order(customer,name,pieces){
//             if (inventory.book1.title===name){
//                 x=console.log("there were "+inventory.book1.quantity+" pieces of "+inventory.book1.title+" originally");
//                 inventory.book1.quantity-=pieces;
//                 z=console.log("Dear "+customer+" You have successfully completed an order of "+pieces+" pieces of "+inventory.book1.title+". Thank you for shopping with us")
//                 y=console.log("there are "+inventory.book1.quantity+" pieces of "+inventory.book1.title+" left. Would you love to purchase more?");
//                 return z,x;
//             }
//             else if (inventory.book2.title===name){
//                 console.log("there were "+inventory.book2.quantity+" pieces of "+inventory.book2.title+" originally");
//                 return inventory.book2.quantity-=pieces;
                
//             }
//             else if (inventory.book2.quantity===0){
//                 return delete inventory.book2;
//             }
//             else if (inventory.book1.quantity===0){
//                 return delete inventory.book1;
//             }
//             else console.log("we dont have that book in stock");

// }


// function displayInventory(){
//             return inventory
// }

// const book1Value=inventory.book2.quantity * inventory.book2.price;
// const book2Value=inventory.book1.quantity * inventory.book1.price;
// const totalValue2= (book1Value + book2Value);
// function totalValue(stock){
    
//         if(stock==inventory.book1){
//         return "The total value of "+stock.title+" is: "+book1Value}
//         else if (stock==inventory.book2){  
//         return "The total value of "+stock.title+" is: "+book1Value}
//         else if (stock===inventory){  
//         console.log("The total value of inventory in stock is: "+ totalValue2)}
//         else return "i currently dont have that in stock. Please copy and paste either of the following: "
//                             +"book1 +book2+inventory";
//         }

// function serchfunction(item2){
//     for(let i =0; i<inventory.length();i++){
//         if (inventory[i]===item2){
//             console.log(inventory[i]);
//             return inventory[i];
//         }
//     }
// }





// order("james bond","Game of thrones","2")
// //console.log(inventory.book1)
// console.log(inventory);
// console.log(totalValue2);
// totalValue(inventory)
// serchfunction("book1")




// fetch("https://api.npoint.io/b2304e266e10e28446f5")
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

// const updatedData = {
//   // Replace these placeholders with your actual updated data
//   "id": 1,
//   "name": "New Item Name",
//   "description": "This is an updated description",
//   // Add more properties as needed for your data structure
// };

// fetch("https://api.npoint.io/1fb9b9d66e7c157ff478", {
//   method: "PUT", // Specify PUT method for updating data
//   headers: {
//     "Content-Type": "application/json", // Set content type to JSON
//   },
//   body: JSON.stringify(updatedData), // Convert updated data to JSON string
// })
//   .then((response) => response.json()) // Parse response as JSON
//   .then((data) => console.log("Data updated successfully:", data))
//   .catch((error) => console.error("Error updating data:", error));


  //     const testCurrencies = ["EUR", "GBP", "JPY", "CHF", "AUD", "CAD"];
  
  //     for (const testCurrency of testCurrencies) {
  //         const options = {method: 'GET', headers: {accept: 'application/json'}};
  let app="DFK60BZLZC43PR6D"
          fetch(`https://www.reddit.com/r/sheets/s/SvkJVb1cwd`)
            
          .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
