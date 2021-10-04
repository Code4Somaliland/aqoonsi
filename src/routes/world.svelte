<script>
	import StatementItem from '../components/StatementItem.svelte';
	import { statementList } from '../data/statementList';
</script>

<svelte:head>
	<title>Entities, experts & leaders Supporting Somaliland</title>
</svelte:head>

<article id="webslides">
	<section>
		<div class="wrap">
			<h3>Entities, experts & leaders</h3>
			<h3>Supporting Somaliland</h3>
			<ul class="flexblock gallery">
				{#each statementList as model}
					<StatementItem {model} />
				{/each}
			</ul>
		</div>
		<!-- .end .wrap -->
	</section>
</article>
