$(function() {

    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
        $("#nav, #nav_toggle").removeClass("active");
    });



    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    /* Collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    });
});
