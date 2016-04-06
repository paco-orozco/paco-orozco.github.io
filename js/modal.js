$(function() {
	//conditional for fields to have a value
	$('#submit').click(function(event) { 
		event.preventDefault();
		if ($('input[name="name"]').val() == "" || $('input[name="email"]').val() == "") {
			alert('Please fill Fields');	
		}
		else {
			// form is successful
			add_block_page();
			add_modal();
			add_styles();
			
			$('.modal').fadeIn();
		}
	})
	
	function add_block_page(){
		var block_page = $('<div class="block"></div>');				
		$(block_page).appendTo('body');
	}
	
	function add_styles(){			
        /*Block page overlay*/
		var pageHeight = $(document).height();
		var pageWidth = $(window).width();
	
		$('.block').css({
			'position':'absolute',
			'top':'0',
			'left':'0',
			'background-color':'rgba(0,0,0,0.6)',
			'height':pageHeight,
			'width':pageWidth,
			'z-index':'10'
		});	
	}
	
	function add_modal(){
		var pop_up = $('<div class="modal text-align-center">' +
								"<h2>You've signed up<br/>for a demo!</h2>"+
								'<p>Thanks for signing up. Someone from our Datanyze Success team will contact you shortly to get your demo started. Please check your email for confirmation.</p>'+
								'<br/>'+
								'<a class="modal_close" href="#">Thanks</a>'+
						'</div>');
		$(pop_up).appendTo('.block');
							 
		$('.modal_close').click(function(){
				$('.block').fadeOut().remove();		
				$(this).parent().fadeOut().remove();					 
		});
	}
	
});