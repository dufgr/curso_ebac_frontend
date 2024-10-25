$(document).ready(function () {
  $("form").on("submit", (e) => {
    e.preventDefault();

    const tarefa = $("#tarefa").val();
    const novoItem = $('<li style="display: none"></li>');
    $(`<p>${tarefa}</p>`).appendTo(novoItem);
    $(novoItem).appendTo("ul");
    $(novoItem).fadeIn();
    $("#tarefa").val("");
  });

  $("ul").on("click", "li", function () {
    const p = $(this).find("p");

    if (p.css("text-decoration") === "line-through solid rgb(0, 0, 0)") {
      p.css("text-decoration", "none");
    } else {
      p.css("text-decoration", "line-through");
    }
  });
});
