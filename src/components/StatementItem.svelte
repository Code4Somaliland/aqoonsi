<script lang="ts">
	import type { StatementModel } from 'src/Models/statementModel';
	export let model: StatementModel;
</script>

<li>
	<a href="/{model.modelName}">
		<figure>
						<span>{model.country}  </span>
			<img alt="Thumbnail" src={model.image} />

			<figcaption>
				<h2>{model.title}</h2>
				<p>{model.subtitle}</p>
			</figcaption>
		</figure>
	</a>
</li>
