$(document).ready(function() {

	$('a.select').click(function(e) {
		e.preventDefault();
		
		var pageid = $(this).attr('data-pageid');
		
		if(history.pushState) {
			history.pushState(null, null, "");
		}
		
        $.ajax('getPage.php', {
			data : {
					'pageid' : pageid
			},
			success : function(data){
				if (pageid == 'home') {
					navTo(data, true);
				} else {
					navTo(data, false);
				}
			}
		});
		
		// if(history.pushState) {
		// 	history.pushState(null, null, $(this).attr('href'));
		// }
		
		return false;
	});
});

function navTo(data, isHome){
	console.log("got getPage.php");
	var curContent = "#content";
	var hidContent = "#content2"; 
	
	var isHidden = $(curContent).attr('data-hidden');
	if (isHidden == 'y') {
		var temp = curContent;
		curContent = hidContent;
		hidContent = temp;
		$(hidContent).attr('data-hidden', 'n');
	} else {
		$(curContent).attr('data-hidden', 'y');	
	}
	
	$(hidContent).removeClass('animated bounceOutLeft bounceOutRight fadeOut');
	$(hidContent).html(data);
	$(hidContent).css('visibility', 'visible');

	if (isHome) {
		$(curContent).addClass('animated bounceOutLeft');
		$(hidContent).addClass('animated fadeIn');
	} else {
		$(curContent).addClass('animated bounceOutLeft');
		$(hidContent).addClass('animated bounceInRight');
	}
}