$(document).ready(function(){

	var desc = $('#desc');
	var img = $('#image');

	$('li, a').on('mouseover', function(){
			image = $(this).attr('image')
			text = $(this).attr('desc')

			if (!text) {
				clear();
			} else {
				img.css({
					'background' : 'url('+image+') no-repeat center',
					'background-size': 'contain'
				});
				desc.html('<p>" '+text+' "</p>');
			}
		});

	$('li, a').on('mouseout', clear);

	function clear() {
		img.css({
				'background' : 'url() no-repeat center',
				'background-size': 'contain'
			});
		desc.html('<p></p>');
	}

})