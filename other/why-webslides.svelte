<article id="webslides" class="vertical">
	<!-- Quick Guide
          - Each parent <section> in the <article id="webslides"> element is an individual slide.
          - Vertical sliding = <article id="webslides" class="vertical">
          - <div class="wrap"> = container 90% / <div class="wrap size-50"> = 45%;
        -->

	<section>
		<!--.wrap = container (width: 90%) -->
		<div class="wrap aligncenter">
			<h1 class="text-landing">Good Karma</h1>
			<p class="text-intro">
				<strong><a href="http://webslides.tv/">WebSlides</a></strong> &mdash; HTML presentations
				made easy. <br />
				Hypertext and beauty as narrative elements.
			</p>
			<nav>
				<ul>
					<li><a href="https://twitter.com/webslides">Twitter</a></li>
					<li><a href="https://dribbble.com/tags/webslides">Dribbble</a></li>
					<li><a href="https://github.com/webslides/webslides">Github</a></li>
				</ul>
			</nav>
		</div>
		<!-- .end .wrap -->
	</section>
	<section class="bg-black aligncenter">
		<!-- Overlay/Opacity: [class*="bg-"] > .background.dark or .light -->
		<span
			class="background"
			style="background-image:url('https://source.unsplash.com/OkAAx4mI2Hc/')"
		/>
		<!-- background with a frame frame -->
		<span class="background frame" />
		<!--.wrap = container (width: 90%) -->
		<div class="wrap fadeInUp">
			<h1>
				Everyone
				<svg class="fa-heart-o">
					<use xlink:href="#fa-heart-o" />
				</svg>
				Stories
			</h1>
		</div>
		<!-- .end .wrap -->
	</section>
	<section>
		<!--.wrap = container (width: 90%) -->
		<div class="wrap">
			<!-- alignment [class*="content-"] = container max-width:50% = 600px -->
			<div class="content-center">
				<h2><strong>Why WebSlides?</strong></h2>
				<blockquote>
					<p>
						"I feel guilty as a web designer when I have to use PowerPoint and Keynote. So I made <a
							href="https://twitter.com/search?q=%23webslides&amp;src=typd">#WebSlides</a
						>."
					</p>
					<p>
						<cite>
							<img class="avatar-40" src="../assets/img/avatar.jpg" alt="Avatar" />
							<a href="http://twitter.com/jlantunez/">@jlantunez</a>.</cite
						>
					</p>
				</blockquote>
			</div>
		</div>
		<!-- .end .wrap -->
	</section>
	<section>
		<!--.wrap = container (width: 90%) -->
		<div class="wrap">
			<div class="grid vertical-align">
				<div class="column">
					<h3><strong>WebSlides is really easy</strong></h3>
					<p class="text-intro">
						Each parent <code>&lt;section&gt;</code> in the #webslides element is an individual slide.
					</p>
					<p>
						Code is clean, scalable, and well documented. It uses <strong>intuitive markup</strong>
						with popular naming conventions. There's no need to overuse classes or nesting.
						<strong
							>Based on <a href="https://github.com/jennschiffer/SimpleSlides">SimpleSlides</a>, by
							<a href="http://jennmoney.biz">Jenn Schiffer</a></strong
						> :)
					</p>
				</div>
				<!-- .end .column -->
				<div class="column">
					<pre>&lt;article id="webslides"&gt;
  <span class="code-comment">&lt;!-- Slide 1 --&gt;</span>
  &lt;section&gt;
    &lt;h1&gt;Design for trust&lt;/h1&gt;
  &lt;/section&gt;
  <span class="code-comment">&lt;!-- Slide 2 --&gt;</span>
  &lt;section class="bg-primary"&gt;
    &lt;div class="wrap"&gt;
      &lt;h2&gt;.wrap = container (width: 90%)&lt;/h2&gt;
    &lt;/div&gt;
  &lt;/section&gt;
&lt;/article&gt;
</pre>
				</div>
				<!-- .end .column -->
			</div>
			<!-- .end .grid -->
		</div>
		<!-- .end .wrap -->
	</section>
	<section>
		<!--.wrap = container (width: 90%) -->
		<div class="wrap">
			<div class="content-left">
				<h2>WebSlides was made to inspire people.</h2>
			</div>
			<div class="content-left">
				<p>
					There are excellent presentation tools out there. WebSlides is <strong
						>an open source solution</strong
					> for telling stories. Hypertext and beauty as narrative elements.
				</p>
			</div>
			<ul class="flexblock features">
				<li>
					<div>
						<h2>
							<span>&rarr;</span>
							Keyboard navigation
						</h2>
						with arrow keys.
					</div>
				</li>
				<li>
					<div>
						<h2>
							<svg class="fa-link">
								<use xlink:href="#fa-link" />
							</svg>
							Go to a specific slide
						</h2>
						URL: #slide=number
					</div>
				</li>
				<li>
					<div>
						<h2>
							<svg class="fa-clock o">
								<use xlink:href="#fa-clock-o" />
							</svg>
							Slide counter
						</h2>
						Current/Total number.
					</div>
				</li>
			</ul>
		</div>
		<!-- .end .wrap -->
	</section>
	<section>
		<div class="wrap">
			<ul class="flexblock features">
				<li>
					<div>
						<h2><span>100<sup>%</sup></span> customizable</h2>
						Well documented.
					</div>
				</li>
				<li>
					<div>
						<h2>
							<span>40<sup>+</sup></span>
							Beautiful Components
						</h2>
						Covers, cards, quotes...
					</div>
				</li>
				<li>
					<div>
						<h2>
							<svg class="fa-list">
								<use xlink:href="#fa-list" />
							</svg>
							Flexible blocks
						</h2>
						with auto-fill and equal height.
					</div>
				</li>
				<li>
					<div>
						<h2>
							<svg class="fa-text-height">
								<use xlink:href="#fa-text-height" />
							</svg>
							Vertical rhythm
						</h2>
						Use multiples of 8.
					</div>
				</li>
				<li>
					<div>
						<h2>
							<svg class="fa-language">
								<use xlink:href="#fa-language" />
							</svg>
							Fade transition
						</h2>
						to all slides.
					</div>
				</li>
				<li>
					<div>
						<h2>
							<span>500<sup>+</sup></span>
							SVG Icons
						</h2>
						Font Awesome Kit.
					</div>
				</li>
			</ul>
		</div>
		<!-- .end .wrap -->
	</section>
	<section>
		<div class="wrap">
			<div class="grid vertical-align">
				<div class="column">
					<h3>Support</h3>
					<p>Making a beautiful HTML presentation has never been so rewarding.</p>
					<ul class="description">
						<li>
							<strong>Demos:</strong> <a href="../demos/landings.html">Landings</a> &middot;
							<a href="../demos/portfolios.html">Portfolios</a>
						</li>
						<li>
							<strong>Docs:</strong>
							<a href="../demos/components.html" title="WebSlides Components">Components</a>
							&middot; <a href="../demos/classes.html" title="WebSlides Classes">Classes</a>
						</li>
						<li>
							<strong>Tags:</strong>
							<a href="https://dribbble.com/tags/webslides" title="WebSlides Screenshots"
								>Dribbble</a
							>
							&middot;
							<a href="https://instagram.com/webslides" title="WebSlides Screenshots">Instagram</a>
						</li>
					</ul>
				</div>
				<div class="column">
					<a href="https://github.com/webslides/webslides" title="Github"
						><img class="aligncenter" src="../assets/img/setup.png" alt="WebSlides Files" /></a
					>
				</div>
				<div class="column">
					<h3>Extensible</h3>
					<p>The best way to inspire with your content is to connect on a personal level:</p>
					<ul class="description">
						<li>
							<strong>Animations:</strong>
							<a href="https://github.com/daneden/animate.css/" title="Animate.css">
								Animate.css</a
							>.
						</li>
						<li>
							<strong>Images:</strong> <a href="http://unsplash.com" title="Unsplash">Unsplash</a>.
						</li>
						<li>
							<strong>Videos:</strong>
							<a href="https://pixabay.com/en/videos" title="Pixabay"> Pixabay</a>.
						</li>
					</ul>
				</div>
			</div>
			<!-- end .grid-->
		</div>
		<!-- end .wrap-->
	</section>
	<section class="bg-apple aligncenter">
		<span
			class="background-right-bottom"
			style="background-image:url('../assets/img/tim-cook.png')"
		/>
		<div class="wrap">
			<h2>One more thing...</h2>
			<p class="fadeInUp">
				<a href="../demos/keynote.html">Make your keynote &mdash; <code>.bg-apple</code></a>
			</p>
		</div>
		<!-- .end .wrap -->
	</section>
</article>
