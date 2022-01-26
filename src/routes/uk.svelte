<script>
	import StatementItem from '../components/StatementItem.svelte';
	import { statementList } from '../data/gavinList';
</script>

<svelte:head>
	<title>UK Parliment on Somaliland</title>
</svelte:head>

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

<article id="webslides">
	<section>
		<div class="wrap">
			<h3>UK Parliment on Somaliland</h3>
			<ul class="flexblock gallery">
				{#each statementList as model}
					<StatementItem {model} />
				{/each}
			</ul>
		</div>
		<!-- .end .wrap -->
	</section>
</article>
