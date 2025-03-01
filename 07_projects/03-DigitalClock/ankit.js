// we have to select the clock div/element where the time needs to show

// there should be a funcuion which render/update the time after every second
// we have a functionality : setInterval( function(){}, 1000)
//                      it gives us a function for after every interval (1000 = 1 sec)



// const clock = document.querySelector('#clock')
const clock = document.getElementById('clock')

setInterval( function(){

    let date = new Date();
    
    // console.log(date.toLocaleTimeString());

    clock.innerHTML = date.toLocaleTimeString();
    

}, 1000)