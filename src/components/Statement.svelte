<script lang="ts">
	import type { StatementModel } from 'src/Models/statementModel';
	export let model: StatementModel;
</script>

<header>
	<div class="alignright">
				<a href="/">
					<h2>
						<svg class="fa-bars">
							<use xlink:href="#fa-bars" />
						</svg>
					</h2>
				</a>
			</div>
</header>
<svelte:head>
	<title>{model.title}</title>
</svelte:head>

<section class="bg-secondary">
	<div class="wrap">
		<div class="card-50">
			<a href={model.url} target="_blank" title={model.title}>
				<figure>
					<img src={model.image} alt={model.title} style={model.imageStyle} />
				</figure>
				<blockquote>
					<p>
						&ldquo;{model.text}&rdquo;
					</p>
					<p><cite>{model.title} ({model.subtitle})</cite></p>
					<h6>
						{model.moreText}
						<svg class="fa-external-link">
							<use xlink:href="#fa-external-link" />
						</svg>
					</h6>
				</blockquote>
			</a>
		</div>
	</div>
	<!-- .end .wrap -->
</section>
