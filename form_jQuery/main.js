$(document).ready(function() {
    $("#form-tarefa").submit(function(event) {
        event.preventDefault(); 
        const nomeTarefa = $("#nome-tarefa").val();
        const li = $("<li>").text(nomeTarefa);
        $("#lista-tarefas").append(li);
        $("#nome-tarefa").val(""); 
    });

    $("#lista-tarefas").on("click", "li", function() {
        $(this).toggleClass("grifado");
    });
});
