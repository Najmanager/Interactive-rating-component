
$(document).ready(function() {

    $(".number").click(function(e) {
        var isActive = $(this).hasClass('clicked');

        $('.clicked').removeClass('clicked');
        $('.numbers').removeClass('chosen');

        if (!isActive) {
            $(this).addClass('clicked');
            $('.numbers').addClass('chosen');

            $(".btn").click(function () {
                if ($('.numbers').hasClass('chosen')) {
                    $(".visible").css("display", "none");
                    $(".hidden").removeClass("hidden");
                }
        });
      };
    });

    $(".btn").click(function () {
        var number = $(".clicked").html();

        $(".rating").html("<p class='rating'>You selected " + number + " out of 5</p>");

        if ($('.numbers').hasClass('not-chosen')) {
            $(".warning").css("display", "block");
        }
    });
});

