    
    <!-- Header -->
    <!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>H5BP-Inuit.CSS &mdash; Menus</title>
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
    	<header class="heading--kilo">Inuit Menus</header>    <!-- End Header -->

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

    <div class="grid">
        <div class="grid__item palm-one-whole lap-one-half desk-one-third">
            <h3>Nav-Stacked</h3>
            <ul class="nav  nav--stacked">
                <li><a href=#>Home</a></li>
                <li><a href=#>About</a></li>
                <li><a href=#>Portfolio</a></li>
                <li><a href=#>Contact</a></li>
            </ul>
        </div><!--
        --><div class="grid__item palm-one-whole lap-one-half desk-two-thirds">
            <!-- Main Content -->
            <h3>Nav-Banner</h3>
            <ul class="nav  nav--banner">
                <li><a href=#>Home</a></li>
                <li><a href=#>About</a></li>
                <li><a href=#>Portfolio</a></li>
                <li><a href=#>Contact</a></li>
            </ul>

            <h3>Nav-Block</h3>
            <ul class="nav  nav--block  block">
                <li><a href=#>Home</a></li><!--
                --><li><a href=#>About</a></li><!--
                --><li><a href=#>Portfolio</a></li><!--
                --><li><a href=#>Contact</a></li>
            </ul>

            <h3>Nav-Fit</h3>
            <ul class="nav  nav--fit  block">
                <li><a href=#>Home</a></li>
                <li><a href=#>About</a></li>
                <li><a href=#>Portfolio</a></li>
                <li><a href=#>Contact</a></li>
            </ul>

            <h3>Nav-Keywords</h3>
            <ul class="nav  nav--keywords">
                <li><a href=#>Home</a></li>
                <li><a href=#>About</a></li>
                <li><a href=#>Portfolio</a></li>
                <li><a href=#>Contact</a></li>
            </ul>

            <h3>Pagination</h3>
            <ol class="nav pagination">
                <li class=pagination__first>First</li><!--
                --><li class=pagination__prev>Previous</li><!--
                --><li><a href=/page/1>1</a></li><!--
                --><li><a href=/page/2>2</a></li><!--
                --><li class=current><a href=/page/3>3</a></li><!--
                --><li><a href=/page/4>4</a></li><!--
                --><li><a href=/page/5>5</a></li><!--
                --><li class=pagination__next><a href=/page/next>Next</a></li><!--
                --><li class=pagination__last><a href=/page/last>Last</a></li>
            </ol>

            <h3>Options Nav</h3>
            <ul class="nav  options  block">
                <li><a href=#>Ignore</a></li><!--
                --><li class=current><a href=#>Read</a></li><!--
                --><li><a href=#>Delete</a></li>
            </ul>

            <ul class="nav  nav--fit  options  block">
                <li class=one-third><a href=#>Ignore</a></li><!--
                --><li class="current  one-third"><a href=#>Read</a></li><!--
                --><li><a href=#>Delete</a></li>
            </ul>

            <h3>Breadcrumbs</h3>
            <ol class="nav  breadcrumb">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">The Board</a></li>
                <li class="current"><a href="#">Directors</a></li>
            </ol>

            <h3>Breadcrumb Path</h3>
            <ol class="nav  breadcrumb--path">
                <li class="breadcrumb__root"><a href="#">inuit.css</a></li>
                <li><a href="#">inuit.css</a></li>
                <li><a href="#">partials</a></li>
                <li class="current"><a href="#">objects</a></li>
            </ol>

            <h3>Breadcrumb Nav</h3>
            <ol class="nav  breadcrumb">
                <li><a href="#">Home</a></li>
                <li data-breadcrumb="|"><a href="#">About</a></li>
                <li data-breadcrumb="|"><a href="#">The Board</a></li>
                <li data-breadcrumb="|" class="current"><a href="#">Directors</a></li>
            </ol>
        </div>
    </div>
    <!-- End Sample Navigation -->

    <!-- Sample Grid -->
    <div class="grid">

        <div class="grid__item  one-third">
            <p class="greybox">One third grid</p>
        </div><!--

        --><div class="grid__item  two-thirds">
            <p class="greybox">Two thirds grid</p>
        </div><!--

        --><div class="grid__item  one-half">
            <p class="greybox">One half grid</p>
        </div><!--

        --><div class="grid__item  one-quarter">
            <p class="greybox">One quarter grid</p>
        </div><!--

        --><div class="grid__item  one-quarter">
            <p class="greybox">One quarter grid</p>
        </div>
    </div>
<!-- End of Sample Grid -->
    <div class="grid">
        <div class="grid__item one-whole">
            <h3>Camera Slider</h3>
            <p>Pagination circles with the height relative to the width</p>

            <div class="camera_wrap camera_azure_skin" id="camera_wrap_1">

                <div data-thumb="images/camera/images/slides/thumbs/bridge.jpg" data-src="images/camera/images/slides/bridge.jpg">
                    <div class="camera_caption fadeFromBottom">Camera is a responsive/adaptive slideshow. <em>Try to resize the browser window</em>
                    </div>
                </div>

                <div data-thumb="images/camera/images/slides/thumbs/leaf.jpg" data-src="images/camera/images/slides/leaf.jpg">
                    <div class="camera_caption fadeFromBottom">It uses a light version of jQuery mobile, <em>navigate the slides by swiping with your fingers</em>
                    </div>
                </div>

                <div data-thumb="images/camera/images/slides/thumbs/road.jpg" data-src="images/camera/images/slides/road.jpg">
                    <div class="camera_caption fadeFromBottom"><em>It's completely free</em> (even if a donation is appreciated)
                    </div>
                </div>

                <div data-thumb="images/camera/images/slides/thumbs/sea.jpg" data-src="images/camera/images/slides/sea.jpg">
                    <div class="camera_caption fadeFromBottom">Camera slideshow provides many options <em>to customize your project</em> as more as possible
                    </div>
                </div>

                <div data-thumb="images/camera/images/slides/thumbs/shelter.jpg" data-src="images/camera/images/slides/shelter.jpg">
                    <div class="camera_caption fadeFromBottom">It supports captions, HTML elements and videos and <em>it's validated in HTML5</em> (<a href="http://validator.w3.org/check?uri=http%3A%2F%2Fwww.pixedelic.com%2Fplugins%2Fcamera%2F&amp;charset=%28detect+automatically%29&amp;doctype=Inline&amp;group=0&amp;user-agent=W3C_Validator%2F1.2" target="_blank">have a look</a>)
                    </div>
                </div>

                <div data-thumb="images/camera/images/slides/thumbs/tree.jpg" data-src="images/camera/images/slides/tree.jpg">
                    <div class="camera_caption fadeFromBottom">Different color skins and layouts available, <em>fullscreen ready too</em>
                    </div>
                </div>
            </div><!-- /#camera_wrap_1 -->

            <p>Thumbnails with fixed height</p>

            <div class="camera_wrap camera_magenta_skin" id="camera_wrap_2">

                <div data-thumb="images/camera/images/slides/thumbs/bridge.jpg" data-src="images/camera/images/slides/bridge.jpg">
                    <div class="camera_caption fadeFromBottom">Camera is a responsive/adaptive slideshow. <em>Try to resize the browser window</em>
                    </div>
                </div>

                <div data-thumb="images/camera/images/slides/thumbs/leaf.jpg" data-src="images/camera/images/slides/leaf.jpg">
                    <div class="camera_caption fadeFromBottom">It uses a light version of jQuery mobile, <em>navigate the slides by swiping with your fingers</em>
                    </div>
                </div>

                <div data-thumb="images/camera/images/slides/thumbs/road.jpg" data-src="images/camera/images/slides/road.jpg">
                    <div class="camera_caption fadeFromBottom"><em>It's completely free</em> (even if a donation is appreciated)
                    </div>
                </div>

                <div data-thumb="images/camera/images/slides/thumbs/sea.jpg" data-src="images/camera/images/slides/sea.jpg">
                    <div class="camera_caption fadeFromBottom">Camera slideshow provides many options <em>to customize your project</em> as more as possible
                    </div>
                </div>

                <div data-thumb="images/camera/images/slides/thumbs/shelter.jpg" data-src="images/camera/images/slides/shelter.jpg">
                    <div class="camera_caption fadeFromBottom">It supports captions, HTML elements and videos and <em>it's validated in HTML5</em> (<a href="http://validator.w3.org/check?uri=http%3A%2F%2Fwww.pixedelic.com%2Fplugins%2Fcamera%2F&amp;charset=%28detect+automatically%29&amp;doctype=Inline&amp;group=0&amp;user-agent=W3C_Validator%2F1.2" target="_blank">have a look</a>)
                    </div>
                </div>

                <div data-thumb="images/camera/images/slides/thumbs/tree.jpg" data-src="images/camera/images/slides/tree.jpg">
                    <div class="camera_caption fadeFromBottom">Different color skins and layouts available, <em>fullscreen ready too</em>
                    </div>
                </div>

            </div><!-- /#camera_wrap_2 -->
        </div><!-- /grid__item -->
    </div><!-- /grid -->
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
</div>  <!-- /container-Wrapper -->

        <!-- Camera Slider -->
        <script type='text/javascript' src='js/camera/jquery.min-ck.js'></script>
        <script type='text/javascript' src='js/camera/jquery.mobile.customized.min-ck.js'></script>
        <script type='text/javascript' src='js/camera/jquery.easing.1.3-ck.js'></script>
        <script type='text/javascript' src='js/camera/camera.min-ck.js'></script>

        <script>
                jQuery(function(){

                    jQuery('#camera_wrap_1').camera({
                        thumbnails: true
                    });

                    jQuery('#camera_wrap_2').camera({
                        height: '500px',
                        loader: 'bar',
                        pagination: false,
                        thumbnails: true
                    });
                });
            </script>




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





