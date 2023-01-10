let name = {
  firstName: "Akshay",
  lastName: "Saini",
  // printfulNmae:function (){
  //     console.log(this.firstName+""+this.lastName);
};
printfulNmae = function () {
  console.log(this.firstName + "" + this.lastName);
};
//  name.printfulNmae();
printfulNmae.call(name);

let name2 = {
  firstName: "sachin",
  lastName: "Tendulkar",
};
//function borrowing
printfulNmae.call(name2);
