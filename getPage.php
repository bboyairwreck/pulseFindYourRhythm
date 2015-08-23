<?php
	$pageURL = 'home.php'; // default homepage
	$pageid = $_REQUEST["pageid"];
	
	if (isset($pageid)){	
		$pageid = $pageid.'.php';
		if (file_exists($pageid)){
			$pageURL = $pageid;
		}
	}
	
	include($pageURL);
?>