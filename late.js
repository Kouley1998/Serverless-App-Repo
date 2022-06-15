// start coding your function here!

//Create a function running_late(date)
// in JavaScript that returns It is late! 
//if the time is at or after 10:00 PM, and 
//It is still early! if it is not.



function running_late(){
    const date = new Date()
    console.log(date + "Its too early")
  
}

running_late()

module.exports = running_late
