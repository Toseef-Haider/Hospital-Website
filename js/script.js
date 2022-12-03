$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times')
        $('.nav').toggleClass('nav-toggle')
    })

    $(window).on('load scroll' , function(){
        $('.fa-bars').removeClass('fa-times')
        $('.nav').removeClass('nav-toggle')

        if($(window).scrollTop() > 10){
            $('header').addClass('header-active')
        }else{
            $('header').removeClass('header-active')
        }
    });

    $('.facility').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
            enabled:true
        }
    })
    
})

// ----- Form script code----
const form = document.querySelector("#form")
const userName = document.querySelector("#username")
const errorElement = document.querySelector("#error")


form.addEventListener("submit", e => {
  let messages = []
   
  if(userName.value === '' || userName.value== null){
    messages.push("Name is required")
  }

  if(messages.length>0){
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
   
})

