

function searchResult(){

    const search = document.querySelector('#search').value;
    const allboxes = document.querySelector('.main-body').children;

    console.log(search);


    for(let box of allboxes){
        const title = box.querySelector('#name p').textContent.toLowerCase();
        
        if(title.includes(search)){
            box.classList.remove('hideIt');
        }else{
            box.classList.add('hideIt');
        }
    }
}