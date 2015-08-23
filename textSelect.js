$(document).ready(function(){
	$('#searchBox').hover(function(){
		$(this).addClass('searchBoxHover');
	}, function(){
		$(this).removeClass('searchBoxHover');
	});

	// $('#selector select').click(function(){
	// 	
	// });
	$('#selector select').focus(function(){
		$('#selector').addClass('selActive');
	});

	$('#selector select').blur(function(){
		$('#selector').removeClass('selActive');
	});

	$('input[name="searchText"]').focus(function(){
		$('#searchBox').addClass('sbActive');
	});

	$('input[name="searchText"]').blur(function(){
		$('#searchBox').removeClass('sbActive');
	});

	$('select[name="attrSelect"]').change(function(){
		var selectText = $('select[name="attrSelect"] option:selected').text();
		$('#attrText').text(selectText);
		$('#selector').removeClass('selActive');

		$('input[name="searchText"]').focus();
	});

});