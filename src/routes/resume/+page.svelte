<script>
	import { base } from '$app/paths';
	import { data, pages, title } from '@data/resume';

	import CommonPage from '$lib/components/CommonPage.svelte';
</script>

<CommonPage {title}>
	<div class="resume">
		{#if data}
			<iframe
				class="resume-frame"
				src={`${base}${data}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&view=FitH`}
				title={`${title} PDF`}
			></iframe>
			<div class="print-pages" aria-hidden="true">
				{#each pages as page, index}
					<img
						class:last={index === pages.length - 1}
						src={`${base}${page}`}
						alt={`${title} page ${index + 1}`}
					/>
				{/each}
			</div>
		{:else}
			<p class="resume-empty">Ooops! no CV at the moment.</p>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		overflow-x: hidden;
	}

	.resume-frame {
		display: block;
		width: 100%;
		max-width: 900px;
		height: calc(100vh - 190px);
		min-height: 500px;
		border: 0;
		background-color: #fff;
	}

	.resume-empty {
		text-align: center;
	}

	.print-pages {
		display: none;
	}

	@media print {
		@page {
			size: letter;
			margin: 0;
		}

		:global(html),
		:global(body) {
			margin: 0;
			padding: 0;
			background: #fff;
			overflow: visible;
		}

		:global(.body) {
			display: block !important;
			min-height: 0;
			margin: 0;
			padding: 0;
			background: #fff !important;
			color: #000;
			letter-spacing: normal;
		}

		:global(.nav-menu),
		:global(.nav-menu-mobile) {
			display: none !important;
		}

		:global(.content) {
			display: block !important;
			flex: none;
			width: 100%;
			max-width: none;
			margin: 0;
			padding: 0;
		}

		:global(.content > div) {
			display: block !important;
			width: 100%;
			max-width: none;
			margin: 0;
			padding: 0;
			gap: 0;
		}

		:global(h1) {
			display: none !important;
		}

		.resume {
			display: block;
			width: 100%;
			margin: 0;
			padding: 0;
			overflow: visible;
		}

		.resume-frame {
			display: none !important;
		}

		.print-pages {
			display: block;
			width: 100%;
			margin: 0;
			padding: 0;
		}

		.print-pages :global(img) {
			display: block;
			width: 100%;
			height: auto;
			margin: 0;
			padding: 0;
			border: 0;
			page-break-after: always;
			break-after: page;
			page-break-inside: avoid;
			break-inside: avoid;
		}

		.print-pages :global(img.last) {
			page-break-after: auto;
			break-after: auto;
		}

		.resume-empty {
			display: none;
		}
	}
</style>
