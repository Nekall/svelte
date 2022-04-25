<script>
	export let url;
	let dataArticles;

	fetch(`${url}posts`)
			.then((response) => response.json())
			.then((data) => {
					dataArticles = data;
			})
</script>

<main>
	<h1>NewsPaper</h1>
	<hr/>
	<div class="articles">
		{#if dataArticles === undefined}
		Loading...
		{:else}
				{#each dataArticles as article, i}
						<div class="article">
							<h2>{(article.title).charAt(0).toUpperCase() + (article.title).slice(1) + "."}</h2>
							<p>―</p>
							<p>{(article.body).charAt(0).toUpperCase() + (article.body).slice(1) + "."}</p>
						</div>
				{/each}
		{/if}
	</div>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Rozha+One&display=swap');
	main {
		text-align: center;
		padding: 0;
		margin: 0;
		font-family: 'Rozha One', serif;
		background-color: #eeeeee;
		color: black;
	}

	h1{
		font-size: 60px;
		letter-spacing: 30px;
		text-shadow: 4px 4px 10px #4a4a4a;
	}

	h2{
		font-size: 28px;
		letter-spacing: -1px;
	}

	hr{
    border: none;
    border-top: 6px double #333;
	}

	.articles{
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	}

	.article{
		border: solid 1px rgba(0, 0, 0, 0.1);
		height: 400px;
		vertical-align: middle;
		display: inline;
		padding: 10px;
		opacity: 0.5;
		cursor: pointer;
	}

	.article:hover{
		opacity: 1;
	}
</style>
