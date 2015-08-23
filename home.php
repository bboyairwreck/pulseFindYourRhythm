<?php
	// $clip = $_GET["clip"];

	// if (isset($clip) == false){
	// 	/* Redirect browser */
	// 	header("Location: http://pulse.info320.ischool.uw.edu/"); // + "index.php?pageid=home
	// 	/* Make sure that code below does not get executed when we redirect. */
	// 	exit;
	// }

?>
			<div id="bigWrap">
				<div id="animationWrap">
					<div id="hpWrap">
						<img id="hpNoGlow" src="headphoneNoGlow2.png" alt="Heapdhone Img" />
						<div id="glowLine">
							<div id="pulsePoint"></div>
						</div>
						<div id="pulseMtnWrap">
							<div id="pulseMtnInner">
								<img id="pulseMtn" class="shrink" src="justGlow2.png" alt="pusleLine" />
							</div>
						</div>
					</div>
				</div>
				
				<div id = "queryWrap">
					<div id="searchWrap">
						<div id="sboxClone"></div>
						<div id="searchBox">
							<span id="selector" class="selNormal">
								<span id="attrText">All</span>
								<span id="downArrow"></span>
								<select name="attrSelect" id="sCategory">
									<option value="all" selected>All</option>
									<option value="bpm">BPM</option>
									<option value="song">Song</option>
									<option value="artist">Artist</option>
									<option value="genre">Genre</option>
								</select>
							</span>
							<div id="searchTextWrap">
								<input type="text" name="searchText" placeholder="Search a Rhythm, Title, Artist, or Genre" id="searchbar" autofocus/>
							</div>
						</div>
						<input type="submit" value="Search" id="submitbar" /> 
					</div>
					
					<div id="bpmWrap">
						<input type="submit" value="TAP A BEAT" id="bpmbar" />
						
						<div id ="bpmdisplay"></div>
					</div>
				</div>
				
				<div class="overHidden"></div>
			</div>

			<!-- <div class="resultsCell">
					<div class="album"></div>
					<div class="songArtist">
						<p id="song">Song: </p>
						<p id="artist">Artist: </p>
					</div>
					<div class="bpmCell">
						<a class="bpmText" name="bpm">123 BPM</a>
					</div>
				 </div>  -->
			<h3 id="resultsHeader">Showing Results for "<span id="queryEcho"></span>"<span id="catEcho"></span></h3>
			<div id="results" class="resultsHidden">
				<!-- <p id="noResults">**No matches found but check out our featured songs:</p>
				<div class="resultsCell">
					<div class="cellNumber">1</div>
					<div class="attrWrap">
						<div class="album">
							<img class="playIcon" src="playIcon.png" />
						</div>
						<div class="songArtist">
							<p class="songTitle">Maximum Overdrive</p>
							<p class="artistName">2 Unlimited</p>
						</div>
						<div class="bpmCell">
							<a class="bpmText" name="bpm">131 BPM</a>
						</div>
					</div>
				</div>

				<div class="resultsCell">
					<div class="cellNumber">2</div>
					<div class="attrWrap">
						<div class="album">
							<img class="playIcon" src="playIcon.png" />
						</div>
						<div class="songArtist">
							<p class="songTitle">Cry Wolf</p>
							<p class="artistName">A-Ha</p>
						</div>
						<div class="bpmCell">
							<a class="bpmText" name="bpm">131 BPM</a>
						</div>
					</div>
				</div>

				<div class="resultsCell">
					<div class="cellNumber">2</div>
					<div class="attrWrap">
						<div class="album">
							<img class="playIcon" src="playIcon.png" />
						</div>
						<div class="songArtist">
							<p class="songTitle">If I Had You</p>
							<p class="artistName">Adam Lambert</p>
						</div>
						<div class="bpmCell">
							<a class="bpmText" name="bpm">131 BPM</a>
						</div>
					</div>
				</div> -->

			</div> <!-- end of #results -->
			<div id="spinnerWrap">
				<img src="spinner.gif" alt="loading..." />
			</div>
			<a href="#" class="scrollup" title="Scroll Up">Scroll</a>

			<a id="vidLink" href="http://www.youtube.com/watch?v=Ahb-0bd7054">View Video</a>

			<script type="text/javascript" src="textSelect.js"></script>
			<script type="text/javascript" src="logoAnim.js"></script>

			<script src="Pulse.js" type="text/javascript"></script>

			<style type="text/css">
				#sboxClone {
					z-index: 1000;
					-webkit-transform: translate3d(0,0,0);
				}
			</style>