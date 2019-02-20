	var link = document.querySelector(".btn-contact");
	var popup = document.querySelector(".modal-content");
	var popover = document.querySelector(".modal-overlay");
	var close = document.querySelector(".modal-content-close");
	var cname = document.querySelector(".call-name");

	link.addEventListener("click", function(event){
		event.preventDefault();
		popover.classList.add("modal-overlay-show");
		popup.classList.add("modal-content-show");
		cname.focus();
	});

	close.addEventListener("click", function(event){
		event.preventDefault();
		popup.classList.remove("modal-content-show");
		popover.classList.remove("modal-overlay-show");
	});

	window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27){
			if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
			popover.classList.remove("modal-overlay-show");
		}
	}
	});

