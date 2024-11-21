$(document).ready(function() {
  // Handle image click to enlarge
  $(".image-container img").click(function() {
    // If the clicked image is already enlarged, just return (don't do anything)
    if ($(this).hasClass("enlarged")) {
      return;
    }

    // Remove the 'enlarged' class from all images
    $(".image-container img").removeClass("enlarged");

    // Add the 'enlarged' class to the clicked image
    $(this).addClass("enlarged");
  });
});
// RANDOM LIST
// ---------------------------------------------
var random = document.querySelector('.random');
for (var i = random.children.length; i >= 0; i--) {
  random.appendChild(random.children[Math.random() * i | 0]);
}