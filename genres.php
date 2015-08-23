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
	<div id="genres">
		<div class="genrebuttonunselected">Pop</div>
		<div class="genrebuttonunselected">Metal</div>
		<div class="genrebuttonunselected">Rock</div>
		<div class="genrebuttonunselected">Rap</div>
		<div class="genrebuttonunselected">Country</div>
		<div class="genrebuttonunselected">Hip-Hop</div>
		<div class="genrebuttonunselected">R&amp;B</div>
		<div class="genrebuttonunselected">Electronic</div>
		<div class="genrebuttonunselected">Trance</div>
	</div>
</div>
<style type="text/css">
	.genrebuttonselected {
		background-color: purple;

	}

	.genrebuttonunselected {
		background-color: rgb(0, 0, 0);
		opacity: 0.9;
	}

	#genres > div {
		-webkit-box-shadow: 5px 5px 5px #888;
		color: white;
		display: inline-block;
		width: 30%;
		margin-right: 1%;
		margin-bottom: 3%;
		float: left;
		height: 200px;
	}
</style>

<script type="text/javascript">
	$(document).ready(function() {
		$('#genres > div').click(function() {
			if (this.className == "genrebuttonselected")
				this.className = "genrebuttonunselected";
			else
				this.className = "genrebuttonselected";
		});
	});
</script>