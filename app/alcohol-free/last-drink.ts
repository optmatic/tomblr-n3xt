// Calculate the number of days I've been alcohol-free

// Get the current date
const today = new Date();

// Get the date of my last drink
const lastDrink = new Date("07/06/2022");

// Get the difference between the two dates, and convert to days
const days = Math.round((today.getTime() - lastDrink.getTime())/(1000*60*60*24));

export default days; 