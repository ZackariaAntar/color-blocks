$(document).ready(onReady); // asking jQuery to run the onReady function once the page has loaded.
console.log("🟥 🟦 🟩 🟨"); // testing to make sure our scripts are sourced appropriately. We will see this logged to the console if they are.
//________________________________________________________________________________
// Overview:
// When you click on a button, it adds a color block of that color to the DOM.
// When you click on a color block in the DOM, remove that specific block from the DOM.
// When a block is either added to or removed from the DOM, update the color counters to reflect the current number of color blocks on the DOM.
//________________________________________________________________________________

// onReady registers the '#xColor-btn's' with event handlers that add color blocks to the DOM upon being clicked.
// Similarly, it registers the existing and soon to be created color blocks with an event handler that will discreetly remove a block as it is clicked.
function onReady() {
	$("#red-btn").on("click", appendRed); // registers button at id red-btn with the appendRed event handler. Upon being clicked it will add a RED color block to the DOM.
	$("#blue-btn").on("click", appendBlue); // registers button at id blue-btn with the appendBlue event handler. Upon being clicked it will add a BLUE color block to the DOM.
	$("#green-btn").on("click", appendGreen); // registers button at id green-btn with the appendGreen event handler. Upon being clicked it will add a GREEN color block to the DOM.
	$("#yellow-btn").on("click", appendYellow); // registers button at id yellow-btn with the appendYellow event handler. Upon being clicked it will add a YELLOW color block to the DOM.
	// $('#blocks').on('click', '.red-fill', removeBlock) // (for lines 19-22) Asking jQuery to register blocks by their class within the section at id blocks, with the removeBlock event handler.
	// $('#blocks').on('click', '.blue-fill', removeBlock)
	// $('#blocks').on('click', '.green-fill', removeBlock)
	// $('#blocks').on('click', '.yellow-fill', removeBlock)
	$("#blocks").on("click", ".block", removeBlock); // simplified version of lines 19-22. All color blocks share a class of ".blocks" as such we can simply register ".blocks" with the removeBlock event handler.
}
//============================= outide of onReady ===================================//
//___________________________________________________________________________________________________________________________________________
// TODO find out how a conditional can be used inside appendX to append a color to the DOM based on the corresponding button that was pressed.
//___________________________________________________________________________________________________________________________________________

// appendRed event handler/function both adds color blocks to the DOM AND keeps track of/counts the number of blocks of a specific class on the DOM.
function appendRed() {
	// asking jQuery to add a div color block element to the section with the id "blocks" on the DOM.
	$("#blocks").append('<div class="block red-fill"></div>');
	// asking jQuery to find the element on the DOM with the id "red-count" and empty what is currently on the DOM.
	$("#red-count").empty();
	// asking jQuery to update the emptied DOM element with the value of the length of the array of blocks with the class ".red-fill" on the DOM.
	$("#red-count").append($(".red-fill").length);
}
// appendBlue event handler/function both adds color blocks to the DOM AND keeps track of/counts the number of blocks of a specific class on the DOM.
function appendBlue() {
	// asking jQuery to add a div color block element to the section with the id "blocks" on the DOM.
	$("#blocks").append('<div class="block blue-fill"></div>');
	// asking jQuery to find the element on the DOM with the id "blue-count" and empty what is currently on the DOM.
	$("#blue-count").empty();
	// asking jQuery to update the emptied DOM element with the value of the length of the array of blocks with the class ".blue-fill" on the DOM.
	$("#blue-count").append($(".blue-fill").length);
}
// appendGreen event handler/function both adds color blocks to the DOM AND keeps track of/counts the number of blocks of a specific class on the DOM.
function appendGreen() {
	// asking jQuery to add a div color block element to the section with the id "blocks" on the DOM.
	$("#blocks").append('<div class="block green-fill"></div>');
	// asking jQuery to find the element on the DOM with the id "green-count" and empty what is currently on the DOM.
	$("#green-count").empty();
	// asking jQuery to update the emptied DOM element with the value of the length of the array of blocks with the class ".green-fill" on the DOM.
	$("#green-count").append($(".green-fill").length);
}
// appendYellow event handler/function both adds color blocks to the DOM AND keeps track of/counts the number of blocks of a specific class on the DOM.
function appendYellow() {
	// asking jQuery to add a div color block element to the section with the id "blocks" on the DOM.
	$("#blocks").append('<div class="block yellow-fill"></div>');
	// asking jQuery to find the element on the DOM with the id "yellow-count" and empty what is currently on the DOM.
	$("#yellow-count").empty();
	// asking jQuery to update the emptied DOM element with the value of the length of the array of blocks with the class ".yellow-fill" on the DOM.
	$("#yellow-count").append($(".yellow-fill").length);
}
// recountBlocks function provides the DOM with an update value of classed blocks on the DOM for when blocks are REMOVED fromn the DOM.
function recountBlocks() {
	// asking jQuery to find the element on the DOM with the id "red-count" and empty what is currently on the DOM.
	$("#red-count").empty();
	// asking jQuery to update the emptied DOM element with the value of the length of the array of blocks with the class ".red-fill" on the DOM.
	$("#red-count").append($(".red-fill").length);
	// asking jQuery to find the element on the DOM with the id "blue-count" and empty what is currently on the DOM.
	$("#blue-count").empty();
	// asking jQuery to update the emptied DOM element with the value of the length of the array of blocks with the class ".blue-fill" on the DOM.
	$("#blue-count").append($(".blue-fill").length);
	// asking jQuery to find the element on the DOM with the id "green-count" and empty what is currently on the DOM.
	$("#green-count").empty();
	// asking jQuery to update the emptied DOM element with the value of the length of the array of blocks with the class ".green-fill" on the DOM.
	$("#green-count").append($(".green-fill").length);
	// asking jQuery to find the element on the DOM with the id "yellow-count" and empty what is currently on the DOM.
	$("#yellow-count").empty();
	// asking jQuery to update the emptied DOM element with the value of the length of the array of blocks with the class ".yellow-fill" on the DOM.
	$("#yellow-count").append($(".yellow-fill").length);
}
// discreetly recounting blocks, functionality was simplified into one function as seen above on lines 54-62.
// function recountBlue() {
// 	$("#blue-count").empty();
// 	$("#blue-count").append($(".blue-fill").length);
// }
// function recountGreen() {
// 	$("#green-count").empty();
// 	$("#green-count").append($(".green-fill").length);
// }
// function recountYellow() {
// 	$("#yellow-count").empty();
// 	$("#yellow-count").append($(".yellow-fill").length);
// }
// removeBlock event handler/function
function removeBlock() {
	// using THIS allows for only the specific block that is clicked to be removed from the DOM instead of all blocks that share a class.
	$(this).remove();
	// after a block is removed run the recountBlocks function to update the counter for all blocks on the DOM.
	recountBlocks();
	// recountRed();
	// recountBlue();
	// recountGreen();
	// recountYellow();
}
