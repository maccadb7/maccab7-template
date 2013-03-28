	
	<!-- Header -->
	<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>H5BP-Inuit.CSS &mdash; Grids</title>
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
<div class="page" id="wrapper">
		<header class="heading--kilo">Inuit Grids</header>	<!-- End Header -->

	<!-- Sample Navigation -->
	<div class="grid">
		<div class="grid__item">
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
		</div>
	</div>

	<!-- Fluid and nestable grid system  -->
	<div class="grid ">
		<div class="grid__item ">
			<h1 id="paragraph">Fluid grid system</h1>
		</div>

       	<div class="grid__item  one-third ">
           <p class="greybox">One third grid - 1/3</p>
       	</div><!--

    	--><div class="grid__item  one-third ">
           <p class="greybox">One third grid - 1/3</p>
       	</div><!--

    	--><div class="grid__item  one-third ">
           <p class="greybox">One third grid - 1/3</p>
       	</div><!--

   		--><div class="grid__item  one-half ">
           <p class="greybox">One half grid</p>
       	</div><!--

    	--><div class="grid__item  one-quarter ">
           <p class="greybox">One quarter grid</p>
       	</div><!--

    	--><div class="grid__item  one-quarter ">
           <p class="greybox">One quarter grid</p>
       	</div>

   	</div>

	<!-- Top Link  -->
	<div class="grid">
		<div class="grid__item">
			<small><a href="#wrapper">[top]</a></small>
		</div>
	</div>

		<hr />

	<!-- Nested grids  -->
	<div class="grid">
		<div class="grid__item">
			<h1 id="paragraph">Nestable grid system</h1>
		</div>

		<!-- Tier 1  -->
	    <div class="main-content  grid__item  two-thirds">
	        <p class="greybox">Two thirds grid.</p>
	        <h5>  Here we can set elements in columns of text using CSS3</h5>
	        <p class=text-cols--4>Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.

Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis.

Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>

	        <!-- Tier 2  -->
	        <div class="grid">
	        	<div class="grid__item one-half">
	        		<p class="greybox">One half grid nested.</p>
	        		<h5> Matrix object - Create a grid of items out of a single list</h5>
	        		<ul class="matrix  three-cols">
				       <li class=all-cols>Lorem</li>
				       <li>Ipsum <a href=#>dolor</a></li>
				       <li><a href=# class=matrix__link>Sit</a></li>
				       <li>Amet</li>
				       <li class=all-cols>Consectetuer</li>
				   </ul>

	        		<!-- Tier 3  -->
	        		<div class="grid">
			        	<div class="grid__item one-quarter">
			        		<p class="greybox">1/4 grid nested again</p>
			        	</div><!--
			        	 --><div class="grid__item one-quarter">
			        		<p class="greybox">1/4 grid nested again</p>
	        			</div><!--
			        	 --><div class="grid__item one-quarter">
			        		<p class="greybox">1/4 grid nested again</p>
	        			</div><!--
			        	 --><div class="grid__item one-quarter">
			        		<p class="greybox">1/4 grid nested again</p>
	        			</div>
	        		</div>
	        	</div><!--
	        	 --><div class="grid__item one-half">
	        		<p class="greybox">One half grid nested.</p>
	        		<h5>The `.multi-list` object is a lot like the `.matrix` object only without the
 * blocky borders and padding.</h5>
					<ul class="multi-list  four-cols">
					    <li>Lorem</li>
					    <li>Ipsum</li>
					    <li>Dolor</li>
					    <li>Sit</li>
					</ul>

	        		<!-- Tier 3  -->
	        		<div class="grid">
			        	<div class="grid__item one-half">
			        		<p class="greybox">One half grid nested again</p>
			        	</div><!--
			        	 --><div class="grid__item one-half">
			        		<p class="greybox">One half grid nested again</p>
	        			</div>
	        		<!-- Tier 3  -->
	        			<div class="grid__item one-half">
			        		<p class="greybox">One half grid nested again</p>
			        	</div><!--
			        	 --><div class="grid__item one-half">
			        		<p class="greybox">One half grid nested again</p>
	        			</div>
	        		</div>
	        	</div>
	        </div>
	    </div><!--

	    --><div class="sub-content  grid__item  one-third">
	        <p class="greybox">One third grid</p>

	        	        <!-- Tier 2  -->
	        <div class="grid">
	        	<div class="grid__item one-half">
	        		<p class="greybox">One half grid nested</p>

	        		<!-- Tier 3  -->
	        		<div class="grid">
			        	<div class="grid__item one-half">
			        		<p class="greybox">One half grid nested again</p>
			        	</div><!--
			        	 --><div class="grid__item one-half">
			        		<p class="greybox">One half grid nested again</p>
	        			</div>
	        		</div>
	        	</div><!--
	        	 --><div class="grid__item one-half">
	        		<p class="greybox">One half grid nested</p>

	        		<!-- Tier 3  -->
	        		<div class="grid">
			        	<div class="grid__item one-half">
			        		<p class="greybox">One half grid nested again</p>
			        	</div><!--
			        	 --><div class="grid__item one-half">
			        		<p class="greybox">One half grid nested again</p>
	        			</div>
	        		<!-- Tier 3  -->
	        			<div class="grid__item one-half">
			        		<p class="greybox">One half grid nested again</p>
			        	</div><!--
			        	 --><div class="grid__item one-half">
			        		<p class="greybox">One half grid nested again</p>
	        			</div>
	        		</div>
	        	</div>
	        </div>
	    </div>

	</div>
	<!-- Top Link  -->
	<div class="grid">
		<div class="grid__item">
			<small><a href="#wrapper">[top]</a></small>
		</div>
	</div>

		<hr />





<!-- End of Sample Grids -->
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
</div> 	<!-- /container-Wrapper -->



        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
    </body>
</html>
