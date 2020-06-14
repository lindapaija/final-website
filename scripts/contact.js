$("#submit").on("click", (e) => {
    e.preventDefault();
    var error = false;
    $("form > .input-row1 > input, form > .input-row2 > input").each((n, e) => {
        if (e.value === "") {
            $(e).css("border-bottom", "1px solid #ce0808");
            error = true;
        } else {
            $(e).css("border-bottom", "1px solid #000");
        }

    });
    
    if ($("form > textarea").val() === "") $("form > textarea").css("border", "1px solid #ce0808");
    else $("form > textarea").css("border", "1px solid #000");
    
    if (error) {
        alert("All fields must be field!");
    }
    else {
        $("form > .input-row1 > input, form > .input-row2 > input, form > textarea").each((n, e) => {
            e.value = "";
        });
        alert("Thank you for your message!");                                    
    }
});