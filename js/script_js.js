// placeholder
$(document).ready(function(){
	//$("input, textarea").on("focus", function(){
	$("body").on("focus","input, textarea",function(){
		if($(this).attr("data") != ''){
			if($(this).val() == $(this).attr("data"))
				$(this).val("");
		}
	});
	//$("input, textarea").on("blur", function(){
	$("body").on("blur","input, textarea",function(){
		if($(this).attr("data") != ''){
			if($(this).val() == "")
				$(this).val($(this).attr("data"));
		}
	});
	
	$(".fancybox").fancybox();
	
	if($('.owl-carousel').length > 0){
        var owl = $('.owl-carousel');
        
        owl.owlCarousel({
            items: 1,
            margin: 10,
            autoHeight: true,
            dots: false,
            nav: true
        });
        
        owl.on('changed.owl.carousel', function(event){
            $('.preview .prev-item a').removeClass('active');
            $('.preview .prev-item a.item-' + event.item.index).addClass('active');
        });
        
        $('.preview .prev-item a').click(function(){
            $('.preview .prev-item a').removeClass('active');
            number = $(this).addClass('active').data('img');
            owl.trigger('to.owl.carousel', number);
            return false;
        });
    }
});

// fixed_nav
$(function(){
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        var height1 = $(document).height()-$(window).height()-100;   
        var result =  $(document).scrollTop();
        if (top < 98)
        {
        	$(".container_main").removeClass("container_main_act");
        }
        else
        {
        	$(".container_main").addClass("container_main_act");
        }
    });
});

$(function(){
    var
        dialogMarkup,
        formMarkup,
        defextra = $("#defextra"),
        section = $("#section"),
        markup = $("#markup"),

        armarkup = $("#armarkup"),
        
        dialogGuest,
        formGuest,
        pass = $("#pass");
 
    function sendMarkup(){
        $.post(
            "/include/actions/ajax.php",
            {
            	DEFEXTRA: defextra.val(),
              SECTION: section.val(),

              NEWEXTRA: markup.val(),
              ARMARKUP: armarkup.val(),
              ACTION: 'setNewExtra',
            },
            function(data){
                //console.log(data);
                dialogMarkup.dialog("close");
                location.reload();
            }
        );
        return true;
    }
    dialogMarkup = $("#markup-form").dialog({
        autoOpen: false,
        height: 220,
        width: 450,
        modal: true,
        buttons: {
            "ОК": sendMarkup,
            "Отмена": function(){
                dialogMarkup.dialog("close");
            }
        },
        close: function(){
            formMarkup[0].reset();
        }
    });
    formMarkup = dialogMarkup.find("form").on("submit", function(event){
        event.preventDefault();
        sendMarkup();
    });
    $("#edit-markup").button().on("click", function(){
        dialogMarkup.dialog("open");
    });
    $('.edit-markup.mobile').on("click", function(){
        dialogMarkup.dialog("open");
    });
});

// mask
$(document).ready(function(){
	$("body").on("click",".in_phone",function(){$(this).inputmask("9(999)9999999");});
});


// popup_open
$(document).ready(function(){

	$(".ht_btn_call, #pu_call .closeform, .fb_call").click(function(){
		$(".popup_rgba").fadeToggle(400);
		$("#pu_call").fadeToggle(700);
		$("body").toggleClass("overflow");
		return false;
	});


	$(".cm_podbor_mobile, .closefiltr").click(function(){
		$(".cm_left").toggleClass("cm_left_act");
		return false;
	});

	$(".nav_mobile, .mm_close").click(function(){
		$(".menu_mobile").toggleClass("menu_mobile_act");
		return false;
	});

});