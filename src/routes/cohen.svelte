<script lang="ts">
	import { statementList } from '../data/statementList';
	import Statement from '../components/Statement.svelte';
	let model = statementList.find((model) => model.modelName === 'cohen');
</script>

<Statement {model} />
