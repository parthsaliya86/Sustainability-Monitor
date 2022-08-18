// function scrolltop_arrow() {
//     /* ---- Page Scrollup JS Start ---- */
//     //When distance from top = 250px fade button in/out
//     var scrollup = $('.scrollup');
//     var headertag = $('header');
//     var mainfix = $('.main');
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 150) {
//             scrollup.fadeIn(300);
//         } else {
//             scrollup.fadeOut(300);
//         }

//         /* ---- Page Scrollup JS End ---- */
//     });

//     //On click scroll to top of page t = 1000ms
//     scrollup.on("click", function () {
//         $("html, body").animate({ scrollTop: 0 }, 1000);
//         return false;
//     });
// }