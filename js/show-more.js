$(document).ready(function () {
    $(".testimonial").hide(); // Hide all testimonials 
    $(".testimonial").slice(0, 4).show(); // Show only the first 4 testimonials
    $(".testimonial:hidden").css("opacity", 0); // Set opacity to 0 for hidden testimonials

    $("#showmorecomments").on("click", function (e) {
        e.preventDefault();
        $(".testimonial:hidden").slice(0, 5).slideDown("slow").animate({
            opacity: 1
        }, {
            queue: false,
            duration: "slow"
        });

        if ($(".testimonial:hidden").length == 0) {
            $("#showmorecomments").hide();
            $("#showlesscomments").show();
        }
    });

    $("#showlesscomments").on("click", function (e) {
        e.preventDefault();
        let visibleTestimonials = $(".testimonial:visible");
        if (visibleTestimonials.length > 4) {
            visibleTestimonials.slice(-4).slideUp();
            $(".testimonial").slice(0, 4).show(); // Ensure at least 4 testimonials are always visible
        }

        $("#showmorecomments").show();
        $("#showlesscomments").hide();
    });
});