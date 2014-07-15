function paragraph_eventHandler() {
	if (window.event.type === "click") {
		alert("You clicked me!");
	} else if (window.event.type === "mouseover") {
		alert("You tickled me!");
	}
}