

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour").on("click", function(event) {
      const id = $(this).data("id");
      // const status = $(this).data("status");
  
      const newStatus = {
        devoured: true 
      };
  
      // Send the PUT request.
      $.ajax("/api/burguers/" + id, {
        type: "PUT",
        data: newStatus
      }).then(
        function() {
          console.log("changed burguer status to", status);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newBurguer = {
        burguer_name: $("#burguer-name").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
      console.log (newBurguer);
      // Send the POST request.
      $.ajax("/api/burguers", {
        type: "POST",
        data: newBurguer
      }).then(
        function() {
          console.log("add new burguer");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    
  

  });
  