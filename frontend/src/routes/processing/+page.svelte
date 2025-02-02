<svelte:head>
	<title>processing...</title>
</svelte:head>

<script>
    import { onMount } from "svelte";
    import { goto } from '$app/navigation';
	import { env } from '$env/dynamic/public';
	import {redirect} from "@sveltejs/kit";


    onMount( () => {
        document.cookie = `user_id=${window.location.search.split('=')[1]}`;
		let api = env.API_DOMAIN;
		redirect(300, `https://127.0.0.1:5000/login`);
    });

</script>