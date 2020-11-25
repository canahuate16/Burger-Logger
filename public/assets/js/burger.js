

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour").on("click", function(event) {
      const id = $(this).data("id");
      // const status = $(this).data("status");
  
      const newStatus = {
        devoured: true 
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newStatus
      }).then(
        function() {
          console.log("changed burger status to", status);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newBurger = {
        burger_name: $("#burger-name").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
      console.log (newBurger);
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("add new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    
  

  });
  