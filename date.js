

module.exports.getDate= function() {
    let today=new Date();
    
    let options={
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    // if(today.getDay()===0 || today.getDay()===6){
    //     day="Weekend"
    // }
    // else{
    //     day="Weekday"
    // }

    return today.toLocaleString("en-US",options)
}

module.exports.getDay= function(){
    let today=new Date();
    
    let options={
        weekday: "long",
    };

    return today.toLocaleString("en-US",options);
}
