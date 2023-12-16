<script>
	import StatementItem from '../../components/StatementItem.svelte';
	import { statementList } from '../../data/fire';
	let list = statementList.filter((model) => model.page === 'what' || model.page === 'main') ;
</script>

<svelte:head>
	<title>What Happened: hargeisa 1 April 2022</title>
</svelte:head>

<article id="webslides">
	<section>
		<div class="wrap">
			<h3>What Happened: Hargeisa 1 April 2022</h3>
			<ul class="flexblock gallery">
				{#each list as model}
					<StatementItem {model} />
				{/each}
			</ul>
		</div>
		<!-- .end .wrap -->
	</section>
</article>
