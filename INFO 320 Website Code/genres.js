$(document).ready(function() {
	$('#genres > div').click(function() {
		if (this.className == "genrebuttonselected")
			this.className = "genrebuttonunselected";
		else
			this.className = "genrebuttonselected";
	});
});