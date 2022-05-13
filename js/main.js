

function inputCheckFill2(){
        var $formControl = $('.forminput');
        var values = {};
        var validate = $formControl.each(function() {
                if($(this).val().length > 0){
                        $(this).closest('.animinput').addClass('filled');
                }
                else{
                        $(this).closest('.animinput').removeClass('filled');
                }
        });
}
function inputCheckFill(){
$('.forminput').focusout(function() {
			$('.animinput').removeClass('focus');
		});
		$('.forminput').focus(function() {
			$(this).closest('.animinput').addClass('focus');
		});
	
		/// Input Kepress Filled  Focus
		$('.forminput').keyup(function() {
			if($(this).val().length > 0){
				$(this).closest('.animinput').addClass('filled');
			}
	
			else{
				$(this).closest('.animinput').removeClass('filled');
			}
	   });
	   /// Input Check Filled Focus
    var $formControl = $('.forminput');
    var values = {};
    var validate =    $formControl.each(function() {
        if($(this).val().length > 0){
            $(this).closest('.animinput').addClass('filled');
        }
        else{
            $(this).closest('.animinput').removeClass('filled');
        }
    });

}

function textfildHeigh(){
	$('.textheight').focus(function() {
		$(this).addClass('active');
	});
	$('.textheight').focusout(function() {
		if($(this).val().length === 0){
			$(this).removeClass('active');
		}
	});
}
function popShow(){
	$('.js--rekl').click(function() {
		$('.popupfix-out').addClass('active');
		$('.popupfix').addClass('active');
	});
	$('.js--hidePop').click(function() {
		$('.popupfix').removeClass('active');
		setTimeout(function(){
			$('.popupfix-out').removeClass('active');
		},500);
	});
	$('.js--closeFBansw').click(function() {
		$(this).parents('.forms').find('.form-f').show();
		$(this).parents('.form-thx').hide();
		$(this).parents('.form-thx').find('.form-thx-status').hide();
		$(this).parents('.forms').find('input').val('');
		$(this).parents('.forms').find('textarea').val('')
	});
}

function aceptToggle(){
	$('.conts-aper > span').click(function() {
    	$(this).parents('.conts-aper').toggleClass('active').toggleClass("noflag");
		$(this).parents('.form-f').find('.submit-btn-wp').toggleClass('disable');
  	});
}


function plH(){
	if(window.innerWidth > 767 && window.innerWidth < 1000){
		var wh = $('#section01').height() - 240;
		var blH = $('.contacts-itemhalf').height();
		$('.contacts-itemhalf').addClass('scroll-block');
		//$('.contacts-itemhalf').css({'max-height' : wh});
		
	}else{
		$('.contacts-itemhalf').removeClass('scroll-block');
	}
}

function setEqualHeight(columns){
	if(window.innerWidth > 767){
	var tallestcolumn = 0;
	
	columns.css('height', '');
	columns.each(
		function(){
	currentHeight = $(this).outerHeight();
	if(currentHeight > tallestcolumn){
			tallestcolumn = currentHeight;
			}
		}
	);
	columns.height(tallestcolumn);
	}else{
		$('.main-item').removeAttr('style');	
	}
}

setTimeout(function(){
		$('#num-one').animateNumber({ number: 100 }, 2000);
		$('#num-two').animateNumber({ number: 300 }, 2000);
	}, 2900)
setTimeout(function(){
		$('#num-three').animateNumber({ number: 85 }, 2000);
		$('#num-four').animateNumber({ number: 1000 }, 2000);
		$('#num-five').animateNumber({ number: 15 }, 2000);
		$('#num-six').animateNumber({ number: 4 }, 2000);
	}, 3100)
setTimeout(function(){
		$('#num-seven').animateNumber({ number: 200 }, 2000);
		$('#num-eight').animateNumber({ number: 10 }, 2000);
	}, 3300)

function craeteFullPage(){
            $('#fullpage').fullpage({
              menu: '#menu',
			  keyboardScrolling: false,
			  anchors: ['main', 'contacts'],
				normalScrollElements: '.scroll-block',
				onLeave: function(index, nextIndex, direction){
				  //start video if scroll to section 1
				  if(nextIndex == 2){
				  	$('.header').addClass('-withlogo');
				  }else  if(nextIndex == 1){
				  	$('.header').removeClass('-withlogo');
				  }
				},
            });
	$.fn.fullpage.setMouseWheelScrolling(false);
    $.fn.fullpage.setAllowScrolling(false);
}

$('button[name="submit"]').click(function(){
	sendEmail.call($(this));
});

function sendEmail() {
	var subject = '';
	if ($(this).hasClass('btn-right')) {
		subject = 'СВЯЖИТЕСЬ С НАМИ';
	} else {
		subject = 'ЗАКАЗАЗАТЬ РЕКЛАМУ';
	}
	var form = $(this).parents('form');
	var formthx = $(this).parents('form');
	if (validateForm.call($(this).parents('form'))) {
		$.ajax({
	        type: 'POST',
	        async: false,
	        url: 'send_.php', // Обработчик формы отправки
	        data: form.serialize()+'&subject='+subject,
	        success: function (data) {
	        	form.children('.form-f').hide();
	        	formthx.children('.form-thx').show();
	        	formthx.children('.form-thx').find('.form-thx-true').show();
	        },
	        error: function (error) {
	        	form.children('.form-f').hide();
	        	formthx.children('.form-thx').show();
	        	formthx.children('.form-thx').find('.form-thx-true').show();
	        }
	    });
	}
}

function validateForm() {
	var field = new Array("name", "tel", "messege");
    var error=0;
	var reg = /^[а-яА-ЯёЁІіЇїa-zA-Z-\s]{2,30}$/;
	var regText = /^[0-9А-яЁёІіЇїA-z\s.;,!?%$()"':]{2,500}$/;
    $(this).find(":input").each(function() {
        for(var i=0;i<field.length;i++){
            if($(this).attr("name")==field[i]){
                if(!$(this).val()){
                    $(this).addClass('error').parents('.animinput').addClass('error');
                    error=1;    
                }else{
                    $(this).removeClass('error').parents('.animinput').removeClass('error');
					
                }
            }                       
        } 
		              
   });
   $(this).find(".namefield").each(function() {
        for(var i=0;i<field.length;i++){
            if($(this).attr("name")==field[i]){
				var r=$(this).val();
                if (!reg.test(r)) {
					$(this).addClass('error').parents('.animinput').addClass('error');
                    error=1;
				}else{
                    $(this).removeClass('error');
                }
            }                       
        } 
		              
   });
   $(this).find(".textfield").each(function() {
        for(var i=0;i<field.length;i++){
            if($(this).attr("name")==field[i]){
				var r=$(this).val();
                if (!regText.test(r)) {
					$(this).addClass('error').parents('.animinput').addClass('error');
                    error=1;
				}else{
                    $(this).removeClass('error').parents('.animinput').removeClass('error');
                }
            }                       
        } 
		              
   }); 
   if($(this).find(".conts-aper").hasClass('noflag')){
	  error=1; 
   }
   
    if(error==0){
    return true;
    }else{
    var err_text = ""; 
    return false;
    }
}

/*========================Якорь вверх=========================*/
(function($) {
$(function() {

  $('.js--scrolltop').click(function() {
    $('html, body').animate({scrollTop: 0},500);
    return false;
  })

})
})(jQuery);

/*function frmotpr(){
	sendEmail.call($(this));
        var field = new Array("name", "tel", "messege");
        $(".forms").submit(function() {
        	return false;
            var error=0;
			var reg = /^[а-яА-ЯёЁІіЇїa-zA-Z-\s]{2,30}$/;
			var regText = /^[0-9А-яЁёІіЇїA-z\s.;,!?%$()"':]{2,500}$/;
            $(this).find(":input").each(function() {
                for(var i=0;i<field.length;i++){
                    if($(this).attr("name")==field[i]){
                        if(!$(this).val()){
                            $(this).addClass('error').parents('.animinput').addClass('error');
                            error=1;    
                        }else{
                            $(this).removeClass('error').parents('.animinput').removeClass('error');
							
                        }
                    }                       
                } 
				              
           });
		   $(this).find(".namefield").each(function() {
                for(var i=0;i<field.length;i++){
                    if($(this).attr("name")==field[i]){
						var r=$(this).val();
                        if (!reg.test(r)) {
							$(this).addClass('error').parents('.animinput').addClass('error');
                            error=1;
						}else{
                            $(this).removeClass('error');
                        }
                    }                       
                } 
				              
           });
		   $(this).find(".textfield").each(function() {
                for(var i=0;i<field.length;i++){
                    if($(this).attr("name")==field[i]){
						var r=$(this).val();
                        if (!regText.test(r)) {
							$(this).addClass('error').parents('.animinput').addClass('error');
                            error=1;
						}else{
                            $(this).removeClass('error').parents('.animinput').removeClass('error');
                        }
                    }                       
                } 
				              
           }); 
		   if($(this).find(".conts-aper").hasClass('noflag')){
			  error=1; 
		   }
		   
            if(error==0){
           	sendEmail.call($(this));
            return false;
            }else{
            var err_text = ""; 
            return false;
            }
        })
    };*/

/*========================Стилизации елементов форм=========================*/




$('document').ready(function(){
	inputCheckFill();
	inputCheckFill2();
	aceptToggle();
	setEqualHeight($(".main-item"));
	plH();
	textfildHeigh();
	popShow();
	
	
	if ($(window).width() > 767 && ($(window).height() > 750)) {
		   craeteFullPage();
	   }
		$(document).on('click', '.js--conts', function(e){
			if ($(window).width() > 767 && ($(window).height() > 750)) {
				$.fn.fullpage.moveSectionDown();
			}else{
				e.preventDefault();
				var scrC = $('#section02');
					$('html, body').stop().animate({'scrollTop': scrC.offset().top }, 1000, 'swing', function () {
				});
			}
		});
	
		$(document).on('click', '.js--top', function(e){
			if ($(window).width() > 767 && ($(window).height() > 750)) {
				$.fn.fullpage.moveSectionUp();
			}else{
				e.preventDefault();
				$('html, body').stop().animate({'scrollTop': 0 }, 1000, 'swing', function () {});
			}
		});
		
		$(document).on('click', '.js--scrollBottom', function(){
	  		$.fn.fullpage.moveSectionUp();
		});
		$(document).on('click', '.js--scrollTop', function(){
			$.fn.fullpage.moveSectionDown();
		});
	/*========================Placeholder for old browsers=========================*/
	jQuery('input,textarea').placeholder();
});

$(window).resize(function () {
	plH();
	setEqualHeight($(".main-item"));
	
	if ($(window).width() < 768) {
			$.fn.fullpage.destroy('all');
		}
		if($(window).height() < 751) {
			$.fn.fullpage.destroy('all');
		}
		if ($(window).width() > 767 && ($(window).height() > 750)) {
		   craeteFullPage();
	   }

 });
