$(document).ready(onReady);
console.log("🟥 🟦 🟩 🟨");
// When you click on a button, it should: Add a color block of that color to the DOM.
// Additionally, when you click on a color block, it should: Remove that block from the DOM

function onReady(){
    $('#red-btn').on('click',appendRed);
    $('#blue-btn').on('click', appendBlue);
    $('#green-btn').on('click', appendGreen);
    $('#yellow-btn').on('click', appendYellow);
    // $('#blocks').on('click', '.red-fill', removeBlock)
    // $('#blocks').on('click', '.blue-fill', removeBlock)
    // $('#blocks').on('click', '.green-fill', removeBlock)
    // $('#blocks').on('click', '.yellow-fill', removeBlock)
    // $('#blocks').on('click', '.block', removeBlock)


}
//____________________________out of page load_____________________//

// find out if a conditional can be initialized inside the append to conditionally append based on the button.

function appendRed(){
    $('#blocks').append('<div class="block red-fill"></div>');
    $('#red-count').empty()
    $('#red-count').append( $('.red-fill').length)

}
function appendBlue(){
    $("#blocks").append('<div class="block blue-fill"></div>');
    $("#blue-count").empty();
	$("#blue-count").append($(".blue-fill").length);

}
function appendGreen(){
    $("#blocks").append('<div class="block green-fill"></div>');
    $("#green-count").empty();
	$("#green-count").append($(".green-fill").length);

}
function appendYellow(){
    $("#blocks").append('<div class="block yellow-fill"></div>');
    $("#yellow-count").empty();
	$("#yellow-count").append($(".yellow-fill").length);

}


// function removeBlock(){
//     $(this).remove()

// }


