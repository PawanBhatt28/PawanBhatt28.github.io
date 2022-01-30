

function searchResult(){

    const search = document.querySelector('#search').value.toLowerCase();
    const allboxes = document.querySelector('.main-body').children;

    console.log(`Search input : ${search}`);


    for(let box of allboxes){
        const title = box.querySelector('#name p').textContent.toLowerCase();
        console.log(`Title : ${title}`);
        if(title.includes(search)){
            box.classList.remove('hideIt');
        }else{
            box.classList.add('hideIt');
        }
    }
    
}