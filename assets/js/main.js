var btn_l = document.getElementById("btn-left")
var btn_r = document.getElementById("btn-right")
var first =document.querySelector('.first')
var count =0
btn_l.addEventListener('click',()=>
{  count-=(-14)
    if(count ==14)
    { count= -70
    first.style.marginLeft =`${count}%`
    }
    else
    {
        first.style.marginLeft =`${count}%`
       
    }
    
})
btn_r.addEventListener('click',()=>
{   count +=(-14)
    if(count == -84)
    { count= 0
    first.style.marginLeft =`${count}%`
 
    }
    else
    {
        first.style.marginLeft =`${count}%`
     
    }
    
    
})