<script lang="ts">
	import { statementList } from '../data/gavinList';
	import Statement from '../components/Statement.svelte';
	let model = statementList.find((model) => model.modelName === 'mitchell');
</script>

<Statement {model} />