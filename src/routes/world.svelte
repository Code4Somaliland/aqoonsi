<script>
	import { modelNamesArray } from '../Models/statementModel';
	import StatementItem from '../components/StatementItem.svelte';
	import { statementList } from '../data/statementList';
	const statementList1 = statementList.sort((a, b) => {
		const indexA = modelNamesArray.indexOf(a.modelName);
		const indexB = modelNamesArray.indexOf(b.modelName);
		return indexA > indexB ? 1 : indexA < indexB ? -1 : 0;
	});
</script>

<svelte:head>
	<title>Somaliland Supporters</title>
</svelte:head>

<article id="webslides">
	<section>
		<div class="wrap">
			<h3>Somaliland Supporters</h3>
			<ul class="flexblock gallery">
				{#each statementList1 as model}
					<StatementItem {model} />
				{/each}
			</ul>
		</div>
		<!-- .end .wrap -->
	</section>
</article>
