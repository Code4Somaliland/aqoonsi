<script lang="ts">
	import { statementList } from '../../data/fire';
	import Statement from '../../components/Statement.svelte';
	let model = statementList.find((model) => model.modelName === 'fire/what-15h');
</script>

<Statement {model} />