<!-- DREAMHOST specified 404 page -->
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>H5BP-Inuit.CSS &mdash; Missing Page - error 404</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory or as below -->
        <!-- Favicon and touch icons -->
        <link rel="shortcut icon" href="images/icons/favicon.ico">
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="images/icons/apple-touch-icon-144-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="images/icons/apple-touch-icon-114-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="images/icons/apple-touch-icon-72-precomposed.png">
        <link rel="apple-touch-icon-precomposed" href="images/icons/apple-touch-icon-57-precomposed.png">

        <!-- CSS -->
        <link href="css/style.css" rel="stylesheet" type="text/css">

         <!-- JS -->
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>


    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

<div class="page">

<!-- Header -->

<!-- End Header -->

<!-- Navigation -->
<nav class="navigation">
	<ul class=nav>
	    <li><a href=index.php>Home</a></li>
	    <li><a href=semantic.php>Semantic</a></li>
	    <li><a href=typography.php>Typography</a></li>
	    <li><a href=grids.php>Grids</a></li>
	    <li><a href=objects.php>Objects</a></li>
	    <li><a href=menus.php>Menus</a></li>
	</ul>
</nav>


<!-- End Navigation -->

<!-- 404 Error Message -->

	 	<div class="gw">
            <div class="g one-half push--one-quarter"
                <h1>Uh Oh! &mdash; You've found our 404 page!</h1>
                <p>Sorry, but this means the page you were trying to view does not exist or has been lost in the ether.</p>
                <p>This may be the result of either:</p>
                <ul class="lists" >
                    <li>a mistyped address</li>
                    <li>or an out-of-date link</li>
                </ul>
                <p>Please return to our <a href="index.php">homepage</a></p>
            </div>
  	   </div>


<!-- Footer -->

<div class="grid">
	<div class="grid__item one-whole islet">

		<p class="smallprint text--center contact">&copy;
		<?php
			$startYear = 2013;
			$thisYear = date('Y');
			if ($startYear == $thisYear) {
				echo $startYear;
			} else {
			echo "{$startYear}&#8211;{$thisYear}";
			}
			?>&nbsp;Company Full Name&nbsp;All Rights Reserved<br>Site by&nbsp;<a rel="external" href="http://www.agraphicnature.com/">AGN</a>
		</p>

	</div>
</div>
<!-- Javascript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.9.0.min.js"><\/script>')</script>



        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
    </body>
</html>

<!-- End Footer -->
