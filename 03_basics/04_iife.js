//      IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)


// function chai(){
//     console.log("DB connected");
    
// }
// chai()



(function chai(){       
    // named IIFI                  //IIFE: -> Jo function immediate execute ho jaye
    console.log("DB connected");          //      -> Global scope k polution se bachne k liye apna local environment bnate hai
                                          //      -> polution = variables declared
})();

// ()()  // FIRST () for : function | SECOND () for : execution



( () => {    
    // unnamed IIFI                        // again if we use another IIFE, it will throw an error
    console.log("DB connected again");     // as the 1st IIFE doesn't know where to stop its context

})();
// we can solve this by simply applying ; after the first IIFE



// if we want to pass a parameter
( (name) => {                         
    console.log(`DB connected again ${name}`);     
})("Ankit")         
                // we can simply pass the argument in 2nd ()