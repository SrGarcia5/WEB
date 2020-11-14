/*
$(document) .ready(function(){
    alert ("Funcionando-abc");
})

$(document) .ready(function(){
 $("a") .click(function(event){
       alert("abc");

 })
}
)
*/
var buscador = $("#table").DataTable();

   $("#input-search").keyup(function(){
      buscador.search($(this).val()).draw();

     $(".content-search").css({
      "height":"20vh",
     "background":"rgba(0, 0, 0, 0.5)",
       "display": "contents"

     })

     if ($("#input-search").val()==""){
          $(".content-search").css({
            "display": "none"
          })
        } else{
          $("#table").fadeIn();
        }
})
