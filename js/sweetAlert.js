(async () => {

	const { value: email } = await Swal.fire({
	  title: '¿QUERES RECIBIR NUESTRAS OFERTAS?',
	  input: 'email',
	  inputLabel: 'Registrate ya mismo y comenza a disfrutarlas!',
	  inputPlaceholder: 'email'
	})
	
	if (email) {
	  Swal.fire(`tu email es: ${email}`)
	}
	
	})()

