$(document).ready(function() {
    $("#blogForm").submit(function(event) {
        event.preventDefault();

        // Form inputs
        var name = $(".form-input #name").val();
        var tittle = $(".form-input #tittle").val();
        var desc = $(".form-input #desc").val();

        const today = new Date()
        var year = today.getFullYear();
        var date = today.getDate();
        var month = today.toLocaleString('default', {
            month: 'long'
        })

        $(".new-blog .newblog-heading").html("<h1>" + tittle + "</h1>");
        $(".new-blog .date").text(month + " " + date + ", " + year);
        $(".new-blog .person").html("<p>by " + name + "</p>");
        $(".new-blog .blog_description").html("<p>" + desc + "</p>");
    });
});