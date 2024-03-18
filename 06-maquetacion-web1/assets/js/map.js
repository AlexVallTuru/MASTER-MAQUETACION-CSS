document.addEventListener("DOMContentLoaded", (event) => {
	setTimeout(() => {
		document.querySelector("#load-iframe-map").innerHTML =
			' <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d263.8606395445079!2d2.009484105818108!3d41.56399899115947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a492c025e89b33%3A0x7a8b7a66676c96d8!2sCarrer%20de%20la%20Rasa%2C%2081%2C%2008221%20Terrassa%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1710453287087!5m2!1ses!2ses"></iframe>';
	}, 500);
});
