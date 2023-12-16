<script lang="ts">
	import { statementList } from '../../data/fire';
	import Statement from '../../components/Statement.svelte';
	let model = statementList.find((model) => model.modelName === 'fire/where');
</script>

<Statement {model} />