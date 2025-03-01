// firstly we have to select the form
// then check for the event of 'submit'

// whenever form get submitted / event occurs:: all the data goes to the server either {get/post method} 
// we will stop/prevent this default function :: e.preventDefault()

const form = document.querySelector('form')

// const height = parseInt(document.querySelector('#height').value)
// this usecase will give us empty

form.addEventListener('submit', function(e){ 
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    console.log(results);
    
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML=`Please enter a valid height ${height}`;
    }
    else if(weight === ' ' || weight < 0 || isNaN(weight)){
        results.innerHTML=`Please enter a valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        // results.innerHTML = `<span>${bmi}</span>`;
        
        if (bmi < 18.6) {
            results.innerHTML = `<span>${bmi}</span> <p>You are Under Weight</p>`
        }else if(18.6 <= bmi && bmi <= 24.9){
            results.innerHTML = `<span>${bmi}</span> <p>You are in Normal Range</p>`
        }else{
            results.innerHTML = `<span>${bmi}</span> <p>You are Overweight</p>`
        }
    }

})