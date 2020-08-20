$(".submit").on("click", function(event) {

  event.preventDefault();

  var burger_name = {
    burger_name: $("#burger").val().trim(),
  };

  $.ajax("/burger", {
    type: "POST",
    data: burger_name
  }).then(
    function() {
      console.log("created new burger");
      location.reload();
    }
  );
});

$('.eatMe').click(function() {
  let id = $(this).data('id');

  let devourState = {
      devoured: true
  }

  $.ajax(`/burgers/${id}`, {
      method: 'PUT',
      data: devourState
  }).then(function(data) {
      console.log("NOM NOM NOM")
      location.reload();
  })
})