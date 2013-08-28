$(document).ready(function(){ 
    // executes when HTML-Document is loaded and DOM is ready

    //FUNCION CART HEADER
    $('.cart, .botones .close').click(function(){
        $('.cart_summary').slideToggle();
        return false;
    })


    //LISTADO TIPS INGREDIENTES
    $('.tip_ingrediente a').click(function(){
        $(this).parent().parent().find('ul').slideToggle(500);
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

      //RANDOM LOAD PROMO FANATICOS 
        var list = $("#promo_fanaticos li").toArray();
        var elemlength = list.length;
        var randomnum = Math.floor(Math.random()*elemlength);
        var randomitem = list[randomnum];
        $(randomitem).css("display", "block");

      // SEARCH RESULTS ADD CLASS TO COLUMNS
      $('.results_content .post.three.columns:nth-child(3n)').addClass('last');


      //ACCORDION
      $('.accordion .accordion_header').click(function(){
        if($(this).hasClass('show'))
        {
            $(this).removeClass('show');
            $(this).next('.accordion_content').slideUp('fast');
        }
        else
        {
            $(this).addClass('show');
            $(this).next('.accordion_content').slideDown('fast');
        }
        return false;
      });

      //FUNCIOANLIDADES DRAGGABLE & DROPPABLE + MENU OCASION
      $( ".draggable .post_result" ).draggable({ 
        revert: "invalid",
        helper: "clone" 
      });
      $( ".droppable .box" ).droppable({
        activeClass: "ui-state-active",
        drop: function( event, ui ) {
          $("<div class='post_save'></div>").append(ui.draggable.contents().clone()).appendTo(this);
          $('.overlay').click(function(){
              $(this).parent().parent().remove();
          });
        }
      });
      $('.overlay').click(function(){
        $(this).parent().parent().remove();
      });
      $("#lista_mercado .checkSkin").change(function() {
        $(this).parent().find('label.checkSkin').toggleClass("selected", this.checked);
        $(this).parent().toggleClass('select', this.checked);
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