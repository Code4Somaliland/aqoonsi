<script>
	import { modelNamesArray } from '../Models/statementModel';
	import StatementItem from '../components/StatementItem.svelte';
	import { statementList } from '../data/statementList';
	const statementList1 = statementList.sort((a, b) => {
		const indexA = modelNamesArray.indexOf(a.modelName);
		const indexB = modelNamesArray.indexOf(b.modelName);
		return indexA > indexB ? 1 : indexA < indexB ? -1 : 0;
	});
	const countries = [...new Set(statementList1.map((statement) => statement.country))];
	let countryCounts = statementList1.reduce((counts, statement) => {
		counts[statement.country] = (counts[statement.country] || 0) + 1;
		return counts;
	}, {});
	let selectedCountry = 'all';
	let filteredStatements = statementList1;
	$: {
		if (selectedCountry !== 'all') {
			filteredStatements = statementList1.filter(
				(statement) => statement.country === selectedCountry
			);
		} else {
			filteredStatements = statementList1;
		}
	}
</script>

<svelte:head>
	<title>Somaliland Supporters</title>
</svelte:head>

<article id="webslides">
	<section>
		<div class="wrap">
			<h3>Somaliland Supporters</h3>
			<select bind:value={selectedCountry} style="margin-bottom: 30px;">
				<option value="all">All</option>
				{#each countries as country}
					<option value={country}>{country}: {countryCounts[country]} Entries</option>
				{/each}
			</select>
			<ul class="flexblock gallery">
				{#each filteredStatements as model}
					<StatementItem {model} />
				{/each}
			</ul>
		</div>
		<!-- .end .wrap -->
	</section>
</article>
