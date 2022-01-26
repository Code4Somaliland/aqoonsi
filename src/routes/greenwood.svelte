<script lang="ts">
	import { statementList } from '../data/gavinList';
	import Statement from '../components/Statement.svelte';
	let model = statementList.find((model) => model.modelName === 'greenwood');
</script>

<Statement {model} />