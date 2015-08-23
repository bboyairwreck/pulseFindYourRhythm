var timer = null;

$(document).ready(function(){
	$('#bpmbar').click(function(){
		$('#pulseMtn').addClass('grow');

		timer = setTimeout(function(){
			$('#pulseMtn').removeClass('grow');
		}, 101);

	});
});