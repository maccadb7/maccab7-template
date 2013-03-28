	
	<!-- Header -->
	<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>H5BP-Inuit.CSS &mdash; Objects</title>
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
		<header class="heading--kilo">Inuit Objects</header>	<!-- End Header -->

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

	<!-- Sample Content  -->
	<div class="grid">

		<!-- Horizontal Rules  -->
		<div class="grid__item">
			<h3>Horizontal Rules</h3>
			<hr>
			<hr class=rule>
			<hr class="rule  rule--dotted">
			<hr class="rule  rule--dashed">
			<hr class="rule  rule--ornament">
		</div>
	</div>

	<!-- Top Link  -->
	<div class="grid">
		<div class="grid__item">
			<small><a href="#wrapper">[top]</a></small>
		</div>
	</div>

		<hr />

	<!-- Stat gropus & Block lists  -->
	<div class="grid">
		<div class="grid__item desk-one-half">
			<h3 id="paragraph">Stat Groups</h3>
			<div class="stat-group">
			    <dl class=stat>
			        <dt class=stat__title>Tweets</dt>
			        <dd class=stat__value>27,740</dd>
			    </dl>

			    <dl class=stat>
			        <dt class=stat__title>Following</dt>
			        <dd class=stat__value>11,529</dd>
			    </dl>

			    <dl class=stat>
			        <dt class=stat__title>Followers</dt>
			        <dd class=stat__value>12,105</dd>
			    </dl>
			</div>
		</div><!--
		--><div class="grid__item desk-one-half">
			<h3 id="paragraph">Block List</h3>
				<ul class=block-list>
				    <li>Foo</li>
				    <li>Foo <a href=#>Bar</a> Baz</li>
				    <li>Baz</li>
				    <li><a href=# class=block-list__link>Foo Bar Baz</a></li>
				</ul>
		</div>
	</div>

	<!-- Top Link  -->
	<div class="grid">
		<div class="grid__item">
			<small><a href="#wrapper">[top]</a></small>
		</div>
	</div>

		<hr />

	<!-- Icon text  -->
	<div class="grid">


	    <div class="grid__item  lap-one-half  desk-one-third">
			<h3 id="list_types">Icon Text</h3>
			<p>
    			<a href=# class=icon-text>
        		<i class="icon-text__icon  s  s--red-square"></i>Foo bar
    			</a>
			</p>

			<p>
    			<a href=# class=icon-text--rev>
        		Foo bar<i class="icon-text__icon  s  s--red-square"></i>
    			</a>
			</p>
			<h3 id="list_types">Complex Link</h3>
				<a href=log-in class=link-complex>
    			<strong class=link-complex__target>Log in</strong> to your account.
				</a>
	    </div><!--
	    --><div class="grid__item  lap-one-half  desk-one-third">
	        <h3>Media</h3>
			<div class=media>
			    <img src=http://placekitten.com/200/300 alt="" class=media__img>
			    <p class=media__body>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
	    </div><!--
	    --><div class="grid__item  lap-one-half  desk-one-third">
	        <h3>Numbered List</h3>
			<ul class="numbered-list">
				<li>List Item 1</li>
				<li>List Item 2</li>
				<li>List Item 3</li>
			</ul>
	    </div>
	</div>

	<!-- Top Link  -->
	<div class="grid">
		<div class="grid__item">
			<small><a href="#wrapper">[top]</a></small>
		</div>
	</div>

		<hr />
	<!-- Pills, Lozenges Buttons  -->
	<div class="grid">
		<div class="grid__item one-half">
			<h3 id="form_elements">Pills & Lozenges</h3>

			<h1>This <span class=pill>here</span> is a pill!</h1>
			<p>This <strong class="pill  pill--error">here</strong> is also a pill!</p>

		<hr>

			<h1>This <span class=loz>here</span> is a lozenge!</h1>
			<p>This <strong class="loz  loz--error">here</strong> is also a lozenge!</p>

		<hr>

			<h3 id="form_elements">Split objects</h3>
			<dl class=split>
			    <dt class=split__title>Burger and fries</dt>
			    <dd>&pound;5.99</dd>
			    <dt class=split__title>Fillet steak</dt>
			    <dd>&pound;19.99</dd>
			    <dt class=split__title>Ice cream</dt>
			    <dd>&pound;2.99</dd>
			</dl>

			<ol class=split>
			    <li><b class=split__title>1st place</b> Bob</li>
			    <li><b class=split__title>2nd place</b> Lilly</li>
			    <li><b class=split__title>3rd place</b> Ted</li>
			</ol>

		<hr>
			<!-- Islands & Islets  -->
			<h3 id="tables">Islands & Islets</h3>
				<div class="island">
				Island - I am boxed off.
				</div>

				<div class="islet">
				Islet - I am boxed off.
				</div>

		<hr>
			<!-- Flyouts  -->
			<h3 id="misc">Flyouts</h3>
				<div class="flyout  btn">
    			Foo
    				<div class="flyout__content  islet">
        			<h1>Lorem</h1>
        			<p>Ipsum</p>
    				</div>
				</div>

		</div><!--
		 --><div class="grid__item one-half">
			<h3 id="form_elements">Buttons</h3>
			<p>
    			<a href=# class="btn  btn--login">Log in</a>
			</p>
			<p>
    			<a href=# class="btn  btn--full  btn--login">Log in - Full</a>
			</p>
			<p>
    			<a href=# class="btn  btn--small">Small</a>
			</p>
			<p>
    			<a href=# class="btn  btn--large">Large</a>
			</p>
			<p>
    			<a href=# class="btn  btn--huge">Log in</a>
			</p>
			<p>
    			<a href=# class="btn  btn--alpha">Alpha font 3rem</a>
			</p>
			<p>
    			<a href=# class="btn  btn--beta">Beta font 2rem</a>
			</p>
			<p>
    			<a href=# class="btn  btn--gamma">gamma font 1rem</a>
			</p>
			<p>
    			<a href=# class="btn  btn--natural">Natural</a>
			</p>
			<p>
    			<a href=# class="btn  btn--primary">Primary</a>
			</p>
			<p>
    			<a href=# class="btn  btn--secondary">Secondary</a>
			</p>
			<p>
    			<a href=# class="btn  btn--tertiary">Tertiary</a>
			</p>
			<p>
    			<a href=# class="btn  btn--positive">Positive</a>
			</p>
			<p>
    			<a href=# class="btn  btn--negative">Negative</a>
			</p>
			<p>
    			<a href=# class="btn  btn--inactive">Inactive</a>
			</p>
			<p>
    			<a href=# class="btn  btn--soft">Soft</a>
			</p>
			<p>
    			<a href=# class="btn  btn--hard">Hard</a>
			</p>
		</div>
	</div>

	<!-- Top Link  -->
	<div class="grid">
		<div class="grid__item">
			<small><a href="#wrapper">[top]</a></small>
		</div>
	</div>

		<hr />

	<!-- RESPONSIVE SLIDES  -->
	<div class="grid">
		<div class="grid__item two-thirds">
		    <h3>Vertically centered on both sides</h3>
		    <!-- Slideshow 1 -->
		    <div class="rslides_container">
		      <ul class="rslides" id="slider1">
		        <li><img src="images/slider/images/1.jpg" alt=""></li>
		        <li><img src="images/slider/images/2.jpg" alt=""></li>
		        <li><img src="images/slider/images/3.jpg" alt=""></li>
		      </ul>
		    </div>
		</div><!--
		 --><div class="grid__item one-third">

		    <h3>Transparent buttons over the left and right side</h3>
		    <!-- Slideshow 2 -->
		    <div class="rslides_container">
		      <ul class="rslides" id="slider2">
		        <li><img src="images/slider/images/1.jpg" alt=""></li>
		        <li><img src="images/slider/images/2.jpg" alt=""></li>
		        <li><img src="images/slider/images/3.jpg" alt=""></li>
		      </ul>
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

	<div class="grid">
		<div class="grid__item one-whole">
		    <h3>100% height with vertically centered icons</h3>
		    <!-- Slideshow 3 -->
		    <div class="rslides_container">
		      <ul class="rslides" id="slider3">
		        <li><img src="images/slider/images/1.jpg" alt=""></li>
		        <li><img src="images/slider/images/2.jpg" alt=""></li>
		        <li><img src="images/slider/images/3.jpg" alt=""></li>
		      </ul>
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
<!-- End of Sample Content -->

<!-- FOOTER & JS -->
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
<!-- Responsive Slides - http://responsive-slides.viljamis.com -->
        // <script src="js/plugins.js"></script>
        // <script src="js/main.js"></script>
        <script src="js/responsiveslides/responsiveslides-ck.js"></script>

        <script>
        // You can also use "$(window).load(function() {"
        $(function () {

            // Slideshow 1
            $("#slider1").responsiveSlides({
                auto: true,
                pager: true,
                nav: true,
                speed: 1000,
                timeout: 10000,
                maxwidth: 1200 ,
                namespace: "centered-btns"
            });

            // Slideshow 2
            $("#slider2").responsiveSlides({
                auto: true,
                pager: true,
                nav: true,
                speed: 500,
                maxwidth: 1200,
                namespace: "transparent-btns"
            });

            // Slideshow 3
            $("#slider3").responsiveSlides({
                auto: true,
                pager: false,
                nav: true,
                speed: 500,
                maxwidth: 1200,
                namespace: "large-btns"
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

