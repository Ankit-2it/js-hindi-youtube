// we have to select two elements :
//   1. buttons
//   2. body
//  on clicking these buttons body - ka color will change

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

// we have to look for events... events of clicking on these buttons

buttons.forEach(function (button) {          //buttons gives NodeLists: forEach can apply
    // console.log(button);

    //add event listner for click event
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        console.log(e.target.id);
        // if (e.target.id === 'grey') {
        //     body.style.backgroundColor = e.target.id
        // }
        // if (e.target.id === 'white') {
        //     body.style.backgroundColor = e.target.id
        // }
        // if (e.target.id === 'blue') {
        //     body.style.backgroundColor = e.target.id
        // }
        // if (e.target.id === 'yellow') {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'purple') {
        //     body.style.backgroundColor = e.target.id;
        // }


// doing the same thing with switch statement
        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = e.target.id
                break;

            case 'white':
                body.style.backgroundColor = e.target.id
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id
                break;
            case 'purple':
                body.style.backgroundColor = e.target.id
                break;

            default:
                break;
        }
    })

})

