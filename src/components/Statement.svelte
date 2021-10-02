<script lang="ts">
	import type { StatementModel } from 'src/Models/statementModel';
	export let model: StatementModel;
</script>

<section>
	<div class="wrap">
		<div class="card-50">
			<a href={model.url} target="_blank" title={model.title}>
				<figure>
					<img src={model.image} alt={model.title} style={model.imageStyle} />
				</figure>
				<blockquote>
					<p>
						&ldquo;{model.text}&rdquo; {model.moreText}
					</p>
					<p><cite>{model.title}</cite></p>
				</blockquote>
			</a>
		</div>
	</div>
	<!-- .end .wrap -->
</section>
