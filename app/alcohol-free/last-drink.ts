
const today = new Date();
const lastDrink = new Date("07/06/2022");
const days = Math.round((today.getTime() - lastDrink.getTime())/(1000*60*60*24));


export default days; 