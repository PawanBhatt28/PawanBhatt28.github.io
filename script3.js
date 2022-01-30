
// const byClassName = document.getElementsByClassName('result');  // HTML Collection - Array like objects, have length and indexing
// console.log(byClassName);


// for(let i=0; i<byClassName.length ;i++){
//     byClassName[i].style.backgroundColor = 'lightgreen';
// }

// const byQueryAll = document.querySelectorAll('.result');        // NODE List - Array like objects
// console.log(byQueryAll);


// const title = document.querySelector('.result a')
// console.log(title);


// const titleParent = title.parentNode;

// titleParent.style.backgroundColor = 'lightpink';

// console.log(titleParent); 


function dark(){
    const body = document.body;
    body.classList.toggle('dark-body');

    const resultCards = document.body.children[1].children[2].children[1].querySelectorAll('.result');   
    resultCards.forEach((ele) => {
        ele.classList.toggle('dark-card');
    })

    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('dark-card');
    const filter = document.querySelector('#filter-section');
    console.log(filter);
    filter.classList.toggle('dark-card');

}













// let result = document.querySelectorAll(".result");

// console.log(result) ;
// console.dir(result);


// result.forEach((ele,index) =>{
//     if(index % 2==0){
//         ele.style.backgroundColor = 'white';
//     }else{
//         ele.style.backgroundColor = 'lightblue';
//     }

// })

// let allLinks = [] ;
// result = Array.from(result);

// result.slice(0,2).forEach((ele) => {
//     console.log(ele.querySelector('a'));
//     const attr = ele.querySelector('a').getAttribute('href') ;
//     allLinks.push(attr);
// })

// console.log(allLinks);

// result.slice(0,2).forEach((ele) => {
//     ele.querySelector('a').setAttribute('href','index.html');
// })

// function sorted() {
// const result = document.querySelectorAll('#courseResult .result');

// console.log(result);
// let ratings = [];

// result.forEach((element) => {
//     element.style.display = 'none';
//     let rating = element.querySelector('.rating').innerHTML ;
//     ratings.push(Number(rating));
// }) ;

// ratings.sort((a,b) => b-a);
// console.log(ratings);


// for(let i=0; i < result.length; i++){
//     for(let j=0; j < result.length; j++){
//         let r = result[j].querySelector('.rating').innerHTML;
//         r = Number(r);
//         if(r > 1000){
//             result[j].style.display = 'flex';
//         }
//     }
// }
// }
