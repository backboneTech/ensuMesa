$(document).ready(function(){ 
    // executes when HTML-Document is loaded and DOM is ready

    //FUNCION CART HEADER
    $('.cart, .botones .close').click(function(){
        $('.cart_summary').slideToggle();
        return false;
    })

    // MENU **********************************************************************
      $(".main_nav li:has(div)").addClass("menu-level");
      $('.main_nav a.menu').mouseenter(function(){
        $('.level-2').hide();
        $('li.menu-level a.menu').removeClass('over');
      });

      $('a.menu').mouseover(function(){
        if($(this).hasClass('over'))
        {

        }
        else
        {
          $(this).addClass('over')
          $(this).next('.level-2').show();
        }
      });
      $('.level-2').mouseleave(function(){
        $('.level-2').hide();
        $('li.menu-level a.menu').removeClass('over');
      });
});
$(window).load(function(){ 
    // executes when complete page is fully loaded, including all frames, objects and images
});

//PLACEHOLDER FIX FOR IE
function hasPlaceholderSupport() {
  var input = document.createElement('input');
  return ('placeholder' in input);
}

if(!hasPlaceholderSupport()){
    var inputs = document.getElementsByTagName('input');
    for(var i=0,  count = inputs.length;i<count;i++){
        if(inputs[i].getAttribute('placeholder')){
            inputs[i].style.cssText = "color:#939393;font-style:italic;"
            inputs[i].value = inputs[i].getAttribute("placeholder");
            inputs[i].onclick = function(){
                if(this.value == this.getAttribute("placeholder")){
                    this.value = '';
                    this.style.cssText = "color:#000;font-style:normal;"
                }
            }
            inputs[i].onblur = function(){
                if(this.value == ''){
                    this.value = this.getAttribute("placeholder");
                    this.style.cssText = "color:#939393;font-style:italic;"
                }
            }
        }
    }
};