function resetTimer(contextTimer){
    Date.prototype.addDays = function(days){
    var day = this.getDate()+days;
    this.setDate(day);
    }
    
    console.log(contextTimer);

    // var myDate = 

    myDate.addDays(2);

    

}