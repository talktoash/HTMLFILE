const form =document.querySelector('form');
const fruits =document.querySelector('.fruits');

form.addEventListener('submit',function(event){
    event.preventDefault();
    //selected the input element
   const  fruitToAdd=document.getElementById('fruit-to-add');
   //create the li element
   const newLi=document.createElement('li');
   //this is short method
   newLi.innerHTML=fruitToAdd.value + '<button class="delete-btn">x</button>';


  //'' this is long method ''

//    const newLiText=document.createTextNode(fruitToAdd.value);
//    newLi.appendChild(newLiText);
//    newLi.className='fruit';

//    //''created delete button to be added inside li''

//    const deleteBtn=document.createElement('button');
//    const deleteBtnText=document.createTextNode('x');
//    deleteBtn.appendChild(deleteBtnText);
//    deleteBtn.className='delete-btn';
//    newLi.appendChild(deleteBtn);

   //''adding li as the last element of unoerdered list''

   fruits.appendChild(newLi);


})
fruits.addEventListener('click',function(event){
    if(event.target.classList.contains('delete-btn')){
        const fruitToDelete=event.target.parentElement;
        fruits.removeChild(fruitToDelete);

    }
})
