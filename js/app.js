'use strict';
let allEmployee=[];
let fullNameForm;
let departmentForm;
let levelForm;
let imageURLForm;
let form = document.getElementById("form");
let formID=document.getElementById("showEmployee");
let btn = document.getElementById("submit");
function Employee (fullName,department,level,imageURL) {
   // this.employeeID=employeeID;
    this.generateUniqueID();
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageURL=imageURL;
    allEmployee.push(this);
    this.calculateRandomSalary();
    this.calculateNetSalary();
    this.showData();
}
Employee.prototype.calculateRandomSalary = function(){
    switch (this.level) {
        case "Junior":
            this.salary=(Math.floor(Math.random() * 500)+500);
            break;
        case "Mid-Senior":
            this.salary=(Math.floor(Math.random() * 500)+1000);
            break;
        case "Senior":
            this.salary=(Math.floor(Math.random() * 500)+1500);
            break;
    
        default:
            break;
    }
}
Employee.prototype.calculateNetSalary =function(){
this.netSalary=this.salary- (this.salary * (7.5 / 100));
}
Employee.prototype.render=function () {
    document.write(`<h1>Employee ID : ${this.employeeID} || Employee name : ${this.fullName}  || Employee salary : ${this.salary}</h1><br>`);
}
Employee.prototype.generateUniqueID=function(){
if (Array.isArray(allEmployee) && allEmployee.length==0) {
    this.employeeID = 1000 ;
}
else{
    let indexID=allEmployee.length-1;
    this.employeeID= (allEmployee[indexID].employeeID)+1;
    
}
}
Employee.prototype.showData=function(){

let divToShow =document.createElement("div");
divToShow.id="Show";
let imageE=document.createElement("img");
 imageE.setAttribute("src",this.imageURL);
 divToShow.appendChild(imageE); 
let title = document.createElement("h3");
 title.textContent="Name :"+this.fullName;
 divToShow.appendChild(title);
 let title1=document.createElement("h3");
 title1.textContent="ID :"+this.employeeID;
 divToShow.appendChild(title1);
 let title2=document.createElement("h3");
 title2.textContent="Department :"+this.department;
 divToShow.appendChild(title2);
 let title3=document.createElement("h3");
 title3.textContent="level :"+this.level;
 divToShow.appendChild(title3);
 
 
 formID.appendChild(divToShow);

}
form.addEventListener("submit", handelSubmit);
function handelSubmit(event){
   // event.stopImmediatePropagation();
    event.preventDefault();
    fullNameForm = event.target.name.value;
    imageURLForm = event.target.image.value;
    departmentForm=event.target.department.value;
    levelForm=event.target.level.value;
    imageURLForm=event.target.image.value;
    let newEmployee=new Employee(fullNameForm,departmentForm,levelForm,imageURLForm);
    //departmentForm = event.target.department.selected;
    form.reset();
}
//Remember that Department and Level must be the same as in the following two arrays:
// let department=["Administration","Marketing","Development","Finance"];
// let level=["Junior","Mid-Senior","Senior"];
let ghazi  =new Employee("Ghazi Samer","Administration","Senior","./Photos/1.jpg");
let lana  =new Employee("Lana Ali","Finance","Senior","./Photos/3.jpg");
let tamara  =new Employee("Tamara Ayoub","Marketing","Senior","./Photos/5.jpg");
let safi  =new Employee("Safi Walid","Administration","Mid-Senior","./Photos/4.jpg");
let omar  =new Employee("Omar Zaid","Development","Senior","./Photos/6.jpg");
let rana  =new Employee("Rana Saleh","Development","Junior","./Photos/5.jpg");
let hadi  =new Employee("Hadi Ahmad","Finance","Mid-Senior","./Photos/6.jpg");

console.log(allEmployee);