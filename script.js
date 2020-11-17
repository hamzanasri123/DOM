var btnplus=document.querySelectorAll('#btn_plus');
var btnmoin=document.querySelectorAll('#btn_moin');
var input=document.querySelectorAll('#input');
var price=document.querySelectorAll('.price')
var totl=document.querySelector(".totl_price")

for (let i=0;i <btnplus.length;i++){
 
    btnplus[i].addEventListener("click",function(){
        btnplus[i].previousElementSibling.innerHTML++;
        totalPrice()
    })
    
}

for (let i=0;i <btnmoin.length;i++){
 
    btnmoin[i].addEventListener("click",function(){
        if(btnmoin[i].nextElementSibling.innerHTML > 0){
            btnmoin[i].nextElementSibling.innerHTML--;
        }

        totalPrice()
    })

}


function totalPrice(){
    let sum=0;
    let price=document.getElementsByClassName('price');
    let input=document.querySelectorAll('#input');

    for(let i=0; i < price.length;i++){
      sum+= price[i].innerText * input[i].innerText;
    }
    totl.innerText=sum;
    }

   var deleteBtn=document.querySelectorAll('.delt_icon')

    for (let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener('click', function () {
          deleteBtn[i].parentElement.remove();
      
          // Update the total price
          totalPrice();
        });
      }

      let likeBtn = document.querySelectorAll('.icon');
// Get the heart icon

for (let i = 0; i < likeBtn.length; i++) {
  likeBtn[i].addEventListener('click', function () {
   likeBtn[i].style.fill ==='red'
      
  });
}



