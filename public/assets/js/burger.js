// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }

    // Add a new burger.
    $('.create-form').on('submit', function(event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $('#newburger').val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function() {
            $('#newburger').val('');
            console.log("Added new burger");
            // Reload the page to get the updated burger list.
            location.reload();
        });
    });

    $(".eatburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
            console.log("Burger devoured");
            location.reload();
        });
    });
});

