<script>
	import StatementItem from '../../components/StatementItem.svelte';
	import { statementList } from '../../data/fire';
	let list = statementList.filter((model) => model.page === 'index') ;
</script>

<svelte:head>
	<title>2022 Hargeisa Inferno</title>
</svelte:head>

<article id="webslides">
	<section>
		<div class="wrap">
			<h3>2022 Hargeisa Inferno</h3>
			<ul class="flexblock gallery">
				{#each list as model}
					<StatementItem {model} />
				{/each}
			</ul>
		</div>
		<!-- .end .wrap -->
	</section>
</article>
