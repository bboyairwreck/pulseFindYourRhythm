<!DOCTYPE html>
<html>
	<head>
		<title>Pulse - Find Your Rhythm</title>
		<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
		<link rel="icon" href="/favicon.ico" type="image/x-icon">
		<meta charset='utf-8'>
		<meta content='Find the BPM to your music.  Tap a beat, get the songs.' name='description'>
		<meta content='bpm, song, song bpm, tempo, pace, music bpm, songs bpm, song pace, music pace, song tempo, music tempo, beats per minute, rhythm' name='keywords'>

		<link href="Pulse.css" type="text/css" rel="stylesheet" />
		<link rel="stylesheet" href="animFadeBounce.css" />

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		

		<!--
		<script type="text/javascript" src="textSelect.js"></script>
		<script type="text/javascript" src="logoAnim.js"></script>

		<script src="Pulse.js" type="text/javascript"></script>
		-->
		<script src="internalNav.js" type="text/javascript"></script>
		
        <script>
			// GOOGLE ANALYTICS
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insert})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-45416039-1', 'uw.edu'); ga('send', 'pageview');
		</script>
	</head>

	<body>		
		<header>
			<div id="headingwrap">
				<div class="heading">
					<div id="invisibleLogo"></div>
					<a href="http://pulse.info320.ischool.uw.edu/" id="logowrap">				
						<img src="pulselogo2.png" id="pulselogo" alt="Pulse Logo" />
					</a>
					<div id="heading2">
						<a href="http://pulse.info320.ischool.uw.edu/" id="heading">	
							PULSE
						</a>	
						<p id="heading3">Find Your Rhythm</p>
					</div>
				</div>
				<div id="selections">
					
					<input type="text" name="searchText" id="topbar" class="tbDisabled" disabled/>
					<button id="goBtn" class="tbDisabled" disabled>Go</button>
					<div class="selectbar">
						<a href="home.php" class="select" data-pageid="home">	
							HOME
						</a>
					</div>
					
					<div class="selectbar">
						<a href="artists.php" class="select" data-pageid="artists">	
							ARTISTS
						</a>
					</div>
					
					<div class="selectbar">
						<a href="genres.php" class="select" data-pageid="genres">	
							GENRES
						</a>
					</div>
					
					<div class="selectbar">
						<a href="bpm.php" class="select" data-pageid="bpm">	
							BPM
						</a>
					</div>
				</div>
				
				<h1 class="invis">	
					PULSE
				</h1>
				<h2 class="invis">
					Find Your Rhythm
				</h2>	
				
			</div>
		</header>
		<div id="content" data-hidden="n">
			
			<?php	
				include('home.php');
			?>

		</div> <!-- end of content -->
		
		<div id="content2">
			Hidden Conent
		</div> <!-- end of content 2-->
	</body>
</html>