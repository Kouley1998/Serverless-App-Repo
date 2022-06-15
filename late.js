// start coding your function here!

//Create a function running_late(date)
// in JavaScript that returns It is late! 
//if the time is at or after 10:00 PM, and 
//It is still early! if it is not.



function running_late(date){
    const date = new Date(date)
    const hours= date.getHours();
    const minutes= date.get.Minutes();
    const seconds= date.get.Seconds();

    if (hours > 21){
        return "It is Late"
    }
    else{
        return "It is still early!"
    }

  
}

exports.running_late = running_late; 
