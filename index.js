// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName() {

    const upper = customerName.toUpperCase();
    delete customerName
    customerName = upper
    return customerName;

}

function setBestCustomer(){
    bestCustomer = "not bob"
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
}

const leastFavoriteCustomer = "Dan"

function changeLeastFavoriteCustomer(){

    leastFavoriteCustomer = "ken";
}