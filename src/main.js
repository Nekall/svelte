import App from "./App.svelte";

const app = new App({
	target: document.body,
	props: {
		url: "https://jsonplaceholder.typicode.com/"
	}
});

export default app;
