$("#load").click(() => {
    $(".comment-section").css("display", "block");
    $(".load-comments").css("display", "none");
})

$("#submit").on("click", (e) => {
    e.preventDefault();
    var name = $("#fullname").val();
    var comment = $("#userComment").val();
    
    if (name != "" && comment != "") {
        $(".comments > h1").css("display", "none");
        $(".comments").append('<div class="comment"><h1>'+name+'</h1><p>'+comment+'</p><button id="delete">x</button></div>');
        $("#fullname").val("").css("border", "1px solid #9e9e9e");
        $("#userComment").val("").css("border", "1px solid #9e9e9e");
        setTimeout(() => alert("Comment added!"), 1);
    }
    else {
        alert("Error! All fields must be filled!");
        if (name == "")
            $("#fullname").css("border", "1px solid red");
        if (comment == "") 
            $("#userComment").css("border", "1px solid red");
    }
});

$(".comments").on("click", "#delete", function (e) {
    e.preventDefault();
    const del = confirm("Do you want to remove your comment?");
    if (del) {
        $(this).closest(".comment").remove();
        setTimeout(() => alert("Comment removed!"), 1);
        if (!$(".comment").length) {
            $(".comments").append("<h1>No comments</h1>");
        }
    }
});