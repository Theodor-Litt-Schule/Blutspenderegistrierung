<style lang='scss'>
  @import 'style.scss';
</style>

<svelte:head>
	<title>Blutspende | Login</title>
</svelte:head>

<script>
	// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'; // TODO DELETE THIS LINE IF YOU GO IN PRODUCTION USE!!!
	//
	// async function login(event) {
	// 	console.log('in');
	// 	event.preventDefault(); // prevent the default behave of the form
	//
	// 	const nameInput = event.target.querySelector('#input-name');
	// 	const mailInput = event.target.querySelector('#input-mail');
	//
	// 	const name = nameInput.value;
	// 	const mail = mailInput.value;
	//
	// 	let data = {
	// 		name: name,
	// 		email: mail
	// 	};
	// 	// TODO finish the Login here
	// 	try {
	// 		await fetch('https://localhost:5000/login', {
	// 			method: 'GET',
	// 			cache: 'no-cache',
	// 			credentials: 'same-origin',
	// 			headers: new Headers({
	// 				'content-type': 'application/json'
	// 			}),
	// 			data: JSON.stringify(data)
	// 		});
	// 	} catch (error) {
	// 		console.error('Fetch error:', error);
	// 	}
	// }
	import {goto} from "$app/navigation";
    import { redirect } from "@sveltejs/kit";


	let email = '';

	function handleSubmit() {
		document.cookie = `email=${email}`;
		redirect(308, `/processing`);
	}
	// No Navigator needed, because the API redirects you to the questions page
</script>

<div class='box'>
	<form class='login-form'>
		<h1>Anmeldung</h1>

<!--		<img alt='IServ-Logo' class='iserv-logo' src='img/ISERV.svg'>-->

		<p>Bitte geben Sie Ihre IServ E-Mail-Adresse ein, um sich für die Blutspende anzumelden.</p>

		<form on:submit={handleSubmit}>
        <input
            type="email"
            bind:value={email}
            placeholder="vorname.nachname@tls-giessen.eu"
			pattern="[A-Za-z0-9.]+@tls-giessen.eu"
            required
        />
		<br><br>
        <button id='dynamic' class='btn-style1' type="submit">Submit</button>
    	</form>

		<hr>

		<p>Mit dem Fortfahren des Registrierungsprozesses stimmen Sie zu, dass wir Ihre Daten bis zu dem Spendetermin
			speichern.</p>



		<a href='http://wp.tls-gi.de/impressum/'>Impressum</a>
	</form>
</div>
