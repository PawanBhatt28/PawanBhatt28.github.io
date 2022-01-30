

const title = document.querySelectorAll('#name');

console.log(title)
console.log(typeof title);

// title.forEach((element, index) => {
//     if((index + 1 )%2 == 0){
//         element.textContent = 'Even';
//     }else{
//         element.textContent = 'Odd';
//     }
// }); 

function filter() {
    const box = document.querySelectorAll('.box');
    console.log(box);
    console.log(typeof box);
    box.forEach((element, index) => {
        if ((index + 1) % 2 == 0) {
            element.style.display = 'none';
        }
    })

}
// box.textContent = "Hehehe!";
