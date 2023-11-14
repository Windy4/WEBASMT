document.addEventListener('DOMContentLoaded', function () {
    // Select the elements with the IDs "dropdown-1" and "dropdown-2"
    var dropdown1 = document.getElementById("dropdown-1");
    var dropdown2 = document.getElementById("dropdown-2");
    var dropdown3 = document.getElementById("dropdown-3");

    // Select the elements "arrow" in "dropdown-1" and "dropdown-2"
    var arrowImage1 = document.querySelector("#dropdown-1 .arrow");
    var arrowImage2 = document.querySelector("#dropdown-2 .arrow2");
    var arrowImage3 = document.querySelector("#dropdown-3 .arrow3");
    var isRotated1 = true;
    var isRotated2 = true;
    var isRotated3 = true;
    // Add a click event listener to "dropdown-1"
    dropdown1.addEventListener('click', function () {
        // Select the element with the class "droptext" within "dropdown-1"
        var drop1 = dropdown1.querySelector(".droptext");

        // Toggle the "droptext-visible" class on the "droptext" element in "dropdown-1"
        drop1.classList.toggle("droptext-visible");
        isRotated1 = !isRotated1;

        // Rotate the arrow image 90 degrees clockwise
        arrowImage1.style.transition = "transform 0.1s"; // Adjust the duration as needed
        arrowImage1.style.transform = isRotated1 ? "rotate(-90deg)" : "rotate(0deg)";

        // After the transition is complete, remove the transition for future rotations
        setTimeout(function () {
            arrowImage1.style.transition = "";
        }, 100); // Adjust the duration to match the transition duration

        // Calculate the height of "droptext" in "dropdown-1" after it's shown or hidden
        var droptextHeight1 = drop1.clientHeight;

        // Adjust the margin for "dropdown-2" based on the height of "droptext" in "dropdown-1"
        dropdown2.style.marginTop = (droptextHeight1 + 100) + "px";
        dropdown3.style.marginTop = (droptextHeight1 + 200) + "px";
        console.log("Margin for dropdown-2 adjusted to: " + dropdown2.style.marginTop);
        console.log("Margin for dropdown-3 adjusted to: " + dropdown3.style.marginTop);
    });

    // Add a click event listener to "dropdown-2" (if needed)
    dropdown2.addEventListener('click', function () {
        // Toggle the "droptext-visible" class on the "droptext" element in "dropdown-2"
        var drop2 = dropdown2.querySelector(".droptext");
        drop2.classList.toggle("droptext-visible");
        isRotated2 = !isRotated2;

        // Rotate the arrow image in "dropdown-2"
        arrowImage2.style.transition = "transform 0.1s"; // Adjust the duration as needed
        arrowImage2.style.transform = isRotated2 ? "rotate(-90deg)" : "rotate(0deg)";

        // After the transition is complete, remove the transition for future rotations
        setTimeout(function () {
            arrowImage2.style.transition = "";
        }, 100); // Adjust the duration to match the transition duration
        // Calculate the height of "droptext" in "dropdown-1" after it's shown or hidden
        var droptextHeight2 = drop2.clientHeight;

        // Adjust the margin for "dropdown-2" based on the height of "droptext" in "dropdown-1"
        dropdown3.style.marginTop = (droptextHeight2 + 200) + "px";
        console.log("Margin for dropdown-3 adjusted to: " + dropdown3.style.marginTop);
    });

    dropdown3.addEventListener('click', function () {
        // Select the element with the class "droptext" within "dropdown-1"
        var drop3 = dropdown3.querySelector(".droptext");

        // Toggle the "droptext-visible" class on the "droptext" element in "dropdown-1"
        drop3.classList.toggle("droptext-visible");
        isRotated3 = !isRotated3;

        // Rotate the arrow image 90 degrees clockwise
        arrowImage3.style.transition = "transform 0.1s"; // Adjust the duration as needed
        arrowImage3.style.transform = isRotated3 ? "rotate(-90deg)" : "rotate(0deg)";

        // After the transition is complete, remove the transition for future rotations
        setTimeout(function () {
            arrowImage3.style.transition = "";
        }, 100); // Adjust the duration to match the transition duration
    });
});
