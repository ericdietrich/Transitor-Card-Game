export default function createCarousel() {
    const slide = document.querySelector('.carousel');

    new Glider(slide, {
        slidesToShow: 1,
        slidesToSroll: 1,
        draggable: true,
        rewind: true,
        scrollPropagate: true,
        arrows: {
            prev: '.prev',
            next: '.next',
        },

        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToSroll: 1,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToSroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToSroll: 1,
                }
            },

        ]
    })
}