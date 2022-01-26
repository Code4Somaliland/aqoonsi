<script>
	import StatementItem from '../components/StatementItem.svelte';
	import { statementList } from '../data/gavinList';
</script>

<svelte:head>
	<title>UK Parliment Somaliland debate 2022</title>
</svelte:head>

<header>
	<div class="alignleft" onclick="history.back()">
		<h2>
			<svg class="fa-chevron-left">
				<use xlink:href="#fa-chevron-left" />
			</svg>
		</h2>
	</div>
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

<article id="webslides">
	<section>
		<div class="wrap">
			<h3>UK Parliment Somaliland debate 2022</h3>
			<ul class="flexblock gallery">
				{#each statementList as model}
					<StatementItem {model} />
				{/each}
			</ul>
		</div>
		<!-- .end .wrap -->
	</section>
</article>
