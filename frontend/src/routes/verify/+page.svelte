<style lang='scss'>
  @import 'style.scss';
</style>

<svelte:head>
	<title>Blutspende | Login</title>
</svelte:head>

<script>
	process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'; // TODO DELETE THIS LINE IF YOU GO IN PRODUCTION USE!!!
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

	// No Navigator needed, because the API redirects you to the questions page
</script>

<div class='box'>
	<form class='login-form'>
		<h1>Anmeldung</h1>

		<img alt='IServ-Logo' class='iserv-logo' src='img/ISERV.svg'>

		<p>Bitte geben Sie den Verifizierungscode ein, welchen Sie über IServ bekommen haben.</p>
		<input type="text" name="input" id="input" placeholder="000000" pattern="[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]" required>
		<br>
		<a id='dynamic' class='btn-style1' href=''>Fortfahren</a>
		<script>
			const inputField = document.getElementById('input-mail');
			const dynamic = document.getElementById('dynamic');
			inputField.addEventListener('input', () => {
				dynamic.href = `${process.env.API_URL}/login?email=${encodeURIComponent(inputField.value)}`;
			});
		</script>

		<hr>

		<p>Mit dem Fortfahren des Registrierungsprozesses stimmen Sie zu, dass wir Ihre Daten bis zu dem Spendetermin
			speichern.</p>



		<a href='http://wp.tls-gi.de/impressum/'>Impressum</a>
	</form>
</div>
