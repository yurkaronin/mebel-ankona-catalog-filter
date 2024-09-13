$(document).ready(function(){

    var getUrlParameter = function getUrlParameter(sParam) {
	    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
	        sURLVariables = sPageURL.split('&'),
	        sParameterName,
	        i;
	    for (i = 0; i < sURLVariables.length; i++) {
	        sParameterName = sURLVariables[i].split('=');
	        if (sParameterName[0] === sParam) {
	            return sParameterName[1] === undefined ? true : sParameterName[1];
	        }
	    }
	};
	
	//alert(getUrlParameter('tab'));
	
	$(function() {
        $( ".accordion .accordion-wrap.notactivated" ).accordion({
            header: "h3",
            active: false,
        	collapsible: true
        });
        $( ".accordion .accordion-wrap.activated" ).accordion({
            header: "h3",
            active: 0,
        	collapsible: true
        });
    });
    
    $('.i-numb').on('input', function() {
        $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
    });
    
});