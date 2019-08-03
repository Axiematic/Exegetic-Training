$(document).ready(function () {
    $("div").each(function (index, element) {
        var id = $(this).attr("id");

        var numOfUl = $(this).find("ul").length;

        if (id == "hide" && numOfUl === 0) {
            $(this).hide();
        }
    });
});