function greet(){
    const FirstName = prompt(`Enter First Name`);
    const lastName = prompt(`Enter last Name`);
    const add = FirstName + ' ' +  lastName;
    alert(`Thanks for visiting ${add}`);
}
greet()