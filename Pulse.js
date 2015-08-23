var time = 0;
var page = -1;
var curQuery = "";
var curResultNum = 1;
var curCategory = "";
var changeBigBPM = true;
var goToTop = false;

$(document).ready(function() {
	
	$("#bpmbar").click(function(e){
		console.log('change BPM: ' + changeBigBPM);
		if(changeBigBPM) {
			changeToBPM();
			beat(e);
		}
		
	});

	$("#submitbar, #goBtn").click(function(e) {
		page = 0;
		curResultNum = 1;
		var query = "";
		if ($('#goBtn').attr('disabled')){
			query = $("#searchbar").val();
			curQuery = query;
		} else {
			query = $("#topbar").val();
			curQuery = query;
		}
	
		curCategory = $('#sCategory option:selected').val();
		

		animateSearchBox($("#submitbar").offset().top, $("#submitbar").offset().left, query);

		$.ajax("http://pulse.info320.ischool.uw.edu/search.php", {
			data: { 
				'category' : curCategory,
				'q' : query
			},
			success : function(data){
				results(data, true);
			}
		});
    });

    $('.resultsCell').hover(function(){
    	$(this).find('.playIcon').addClass('showPlay');
    }, function(){
    	$(this).find('.playIcon').removeClass('showPlay');
    });

 //    $("#results").on("mouseenter", ".resultsCell", function(){
 //    	$(".resultsCell:hover").find('.playIcon').addClass('showPlay');
	// }).on("mouseleave", function(){
	// 	$(".resultsCell").find('.playIcon').removeClass('showPlay');
	// });

	// Load new page
    $(window).scroll(function() {

    	if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
			goToTop = true;
        } else {
            $('.scrollup').fadeOut();
            goToTop = false;
        }

		if($(window).scrollTop() + $(window).height() == $(document).height()) {
			// load new page
			if (page > -1){
				console.log('loading new page');

				$('#spinnerWrap').fadeIn();


				page++;
				$.ajax("http://pulse.info320.ischool.uw.edu/search.php", {
					data: { 
						'category' : curCategory,
						'q' : curQuery,
						'page' : page
					},
					success : function(data){
						results(data, false);
					}
				});
			}
		}
	});

	$('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    // If enter button is pressed, calls the search function
	$(document).keypress(function(e) {
		if(e.which == 13) {
			changeBigBPM = false;
			if ($('#goBtn').attr('disabled')){
				$('#submitbar').click();
			} else {
				$('#goBtn').click();
			}
		}
	});
});

function beat(event){
	var $bpm = $("#bpmdisplay");
	
	$bpm.html("");
	
	var diff = event.timeStamp - time;
	var tempo = Math.round(60/(diff/1000));

	time = event.timeStamp;
	
	var p1 = $('<p class="number">').html(tempo + " BPM");

	$bpm.append(p1);
	$("#searchbar").val(tempo);
}

function results(data, clearResults){

	$('#spinnerWrap').fadeOut();

	console.log('got it');
	
	if (clearResults){
		$('#results').html("");
	}
	
	console.log(data);
	console.log("status: " + data.status)
	if (data.status == 0) {
		var $noResults = $('<p id="noResults">').text('**No matches found but check out our featured songs:');
		$('#results').append($noResults);
		page = -1;
	} else if (data.status == -1) {
		var $noResults = $('<p id="noResults">').text('**End of Results**');
		$('#results').append($noResults);
		page = -1;
	}

	delete data.status;	// remove 'status' before foreach keys

	$.each(data, function(index, value){
		var resultsCell = $('<div class="resultsCell">');

		var cellNumber = $('<div class="cellNumber">').text(curResultNum + '.');

		var attrWrap = $('<div class="attrWrap">');

		var album = $('<div class="album">');
		var playIcon = $('<img class="playIcon" src="playIcon.png" alt="playIcon" />');
		

		var songArtist = $('<div class="songArtist">');

		var songTitle = $('<p class="songTitle">').text(value.song_title);
		var artistName = $('<p class="artistName">').text(value.artist);

		var bpmCell = $('<div class="bpmCell">');
		var bpmText = $('<a class="bpmText" name="bpm">').text(value.bpm+" BPM");
		
		album.append(playIcon);
		songArtist.append(songTitle);
		songArtist.append(artistName);
		bpmCell.append(bpmText);

		attrWrap.append(album);
		attrWrap.append(songArtist);
		attrWrap.append(bpmCell);
		
		resultsCell.append(cellNumber);
		resultsCell.append(attrWrap);

		$('#results').append(resultsCell);

		$(resultsCell).hover(function(){
	    	$(this).find('.playIcon').addClass('showPlay');
	    }, function(){
	    	$(this).find('.playIcon').removeClass('showPlay');
	    });

	    curResultNum++;
	});
	
}

function animateSearchBox(sbOffsetTop, sbOffsetLeft, query){
	$('#sboxClone').text(query);
	$('#searchBox').css('visibility', 'hidden');
	$('#sboxClone').css('visibility', 'visible');

	var sbWidth = $('#sboxClone').css('width');
	var sbHeight = $('#sboxClone').css('height');
	sbWidth = parseInt(sbWidth);
	sbHeight = parseInt(sbHeight);

	var sbTop = sbOffsetTop - $(window).scrollTop();
	var sbLeft = sbOffsetLeft;

	

	var tbTop = $('#topbar').offset().top - $(window).scrollTop();
	var tbLeft = $('#topbar').offset().left;
	var tbWidth = $('#topbar').css('width');
	var tbHeight = $('#topbar').css('height');



	var topDif = tbTop - sbTop;
	var leftDif = sbWidth + tbLeft - sbLeft + 2;

	tbWidth = parseInt(tbWidth) + 4;
	tbHeight = parseInt(tbHeight) + 8;

	var translate = "translate(" + leftDif + "px, " + topDif + "px) ";

	var scale = "scale(" + (tbWidth / sbWidth) + ", " + (tbHeight / sbHeight) + ")";
	var transform = translate + scale;

	// $('#sboxClone').css({'top':topDif, 'left':leftDif, 'width':tbWidth, 'height':tbHeight});
	$('#sboxClone').css({
		'transform' : transform,
		'-webkit-transform' : transform,
		'-moz-transform' : transform,
		'-ms-transform' : transform,
		'opacity' : 0
	});

	setTimeout(function(){
		$('#bigWrap').slideUp(600);
		$('#topbar').removeClass('tbDisabled');
		$('#topbar').removeAttr('disabled');
		$('#topbar').val(query);
		$('#resultsHeader').fadeIn();
		$('#resultsHeader #queryEcho').text(curQuery);
		$('#resultsHeader #catEcho').text(capitalize(curCategory));
		$('#results').removeClass('resultsHidden');

		$('#goBtn').removeClass('tbDisabled');
		$('#goBtn').removeAttr('disabled');
		$('#spinnerWrap').fadeIn();
	}, 700);
}

function capitalize(string){
	if (curCategory == "all"){
		return "";
	} else if (curCategory == "bpm") {
		return " BPM's";
	} else {
	    return " in " + string.charAt(0).toUpperCase() + string.slice(1)  + 's';
	}
}


function changeToBPM(){
	$('select[name="attrSelect"]').val('bpm');
	$('#attrText').text('BPM');
}