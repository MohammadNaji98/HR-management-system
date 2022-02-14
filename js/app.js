'use strict';
let allEmployee=[];
function Employee (employeeID,fullName,department,level,imageURL) {
    this.employeeID=employeeID;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageURL=imageURL;
    allEmployee.push(this);
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
    document.write(`<h1>Employee name : ${this.fullName}  || Employee salary : ${this.salary}</h1><br>`);
}
//Remember that Department and Level must be the same as in the following two arrays:
// let department=["Administration","Marketing","Development","Finance"];
// let level=["Junior","Mid-Senior","Senior"];
let ghazi  =new Employee(1000,"Ghazi Samer","Administration","Senior",1);
let lana  =new Employee(1001,"Lana Ali","Finance","Senior",1);
let tamara  =new Employee(1002,"Tamara Ayoub","Marketing","Senior",1);
let safi  =new Employee(1003,"Safi Walid","Administration","Mid-Senior",1);
let omar  =new Employee(1004,"Omar Zaid","Development","Senior",1);
let rana  =new Employee(1005,"Rana Saleh","Development","Junior",1);
let hadi  =new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior",1);
for (let i = 0; i < allEmployee.length; i++) {
    allEmployee[i].calculateRandomSalary();
    allEmployee[i].calculateNetSalary();
    allEmployee[i].render();

}
