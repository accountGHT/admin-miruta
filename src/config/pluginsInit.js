import $ from 'jquery';
import Scrollbar from 'smooth-scrollbar';

let WOW;

if (typeof window !== 'undefined') {
    window.jQuery = $;
    window.$ = $;
    WOW = require('wowjs');
    require('owl.carousel');
    require('select2/dist/js/select2.min');
}

const index = () => {
    $(document).unbind();
    wowInit();
    countDownInit();
    sideBarToggle();
    copyCode();
    owlCarouselInit();
    scrollbarInit();
    navigationScripts();
    fullScreenInit();
    ticketBookInit();
    preventWithAtag();
    initSelect2();
    inItAccordionScript();
};

const getActiveLink = (item) => {
    let link = (item.link === undefined || item.link === '/') ? '' : item.link;
    let active = false;
    let windowPath = window.location.pathname;
    let windowLength = (windowPath.length - 1)
    let removePreg = windowPath[windowLength]
    if (removePreg === '/') {
        windowPath = windowPath.slice(0, windowLength)
    }

    if (item.children !== undefined) {
        item.children.filter(function (child) {
            let base_path = process.env.PUBLIC_URL + child.link;
            if (base_path === windowPath) {
                active = true;
            }
            return active
        });
    } else {
        let base_path = process.env.PUBLIC_URL + link;
        if (base_path === windowPath) {
            active = true
        }
    }
    return active;
};

// Function to prevent with A tag...
const preventWithAtag = () => {
    $(document).on('click', 'a', function (e) {
        e.preventDefault();
    });
};

// Function to Init select2...
const initSelect2 = () => {
    $('.select2jsMultiSelect').select2({
        tags: true
    });
};

// Accordion script...
const inItAccordionScript = () => {
    $('.iq-accordion .iq-accordion-block .accordion-details').hide();
    $('.iq-accordion .iq-accordion-block:first').addClass('accordion-active').children().slideDown('slow');
    $(document).on("click", '.iq-accordion .iq-accordion-block', function () {
        if ($(this).children('div.accordion-details').is(':hidden')) {
            $('.iq-accordion .iq-accordion-block').removeClass('accordion-active').children('div.accordion-details ').slideUp('slow');
            $(this).toggleClass('accordion-active').children('div.accordion-details ').slideDown('slow');
        }
    });
};

const scrollbarInit = () => {
    if ($('#sidebar-scrollbar').length) {
        Scrollbar.init(document.querySelector('#sidebar-scrollbar'));
    }
    if ($('#right-sidebar-scrollbar').length) {
        Scrollbar.init(document.querySelector('#right-sidebar-scrollbar'));
    }
};

const fullScreenInit = () => {
    $(document).on('click', '.iq-full-screen', function () {
        let elem = $(this);
        if (!document.fullscreenElement &&
            !document.mozFullScreenElement && // Mozilla
            !document.webkitFullscreenElement && // Webkit-Browser
            !document.msFullscreenElement) { // MS IE ab version 11

            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
        elem.find('i').toggleClass('ri-fullscreen-line').toggleClass('ri-fullscreen-exit-line');
    });
};

const navigationScripts = () => {
    $(document).on('click', function (e) {
        let myTargetElement = e.target;
        let selector, mainElement;
        if ($(myTargetElement).hasClass('search-toggle') || $(myTargetElement).parent().hasClass('search-toggle') || $(myTargetElement).parent().parent().hasClass('search-toggle')) {
            if ($(myTargetElement).hasClass('search-toggle')) {
                selector = $(myTargetElement).parent();
                mainElement = $(myTargetElement);
            } else if ($(myTargetElement).parent().hasClass('search-toggle')) {
                selector = $(myTargetElement).parent().parent();
                mainElement = $(myTargetElement).parent();
            } else if ($(myTargetElement).parent().parent().hasClass('search-toggle')) {
                selector = $(myTargetElement).parent().parent().parent();
                mainElement = $(myTargetElement).parent().parent();
            }
            if (!mainElement.hasClass('active') && $(".navbar-list li").find('.active')) {
                $('.navbar-list li').removeClass('iq-show');
                $('.navbar-list li .search-toggle').removeClass('active');
            }

            selector.toggleClass('iq-show');
            mainElement.toggleClass('active');

            e.preventDefault();
        } else if ($(myTargetElement).is('.search-input')) { } else {
            $('.navbar-list li').removeClass('iq-show');
            $('.navbar-list li .search-toggle').removeClass('active');
        }
    });
};

const wowInit = () => {
    const elementExist = checkElement('class', 'wow');

    if (elementExist) {

        new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            live: false
        }).init();
    }
};

const countDownInit = () => {
    const elementExist = checkElement('class', 'countdown');

    if (elementExist) {
        /*$(".countdown").countdown();*/
    }
};

const checkElement = (type, element) => {
    let found = false;
    let elements;
    // eslint-disable-next-line default-case
    switch (type) {
        case 'class':
            elements = document.getElementsByClassName(element);

            if (elements !== undefined && elements !== null && elements.length > 0) {
                found = true;
            }
            break;

        case 'id':
            elements = document.getElementById(element);

            if (elements !== undefined && elements !== null) {
                found = true;
            }
            break;
    }


    return found;
};

const owlCarouselInit = () => {
    $('.owl-carousel').each(function () {
        var jQuerycarousel = $(this);
        jQuerycarousel.owlCarousel({
            items: jQuerycarousel.data("items"),
            loop: jQuerycarousel.data("loop"),
            margin: jQuerycarousel.data("margin"),
            nav: jQuerycarousel.data("nav"),
            dots: jQuerycarousel.data("dots"),
            autoplay: jQuerycarousel.data("autoplay"),
            autoplayTimeout: jQuerycarousel.data("autoplay-timeout"),
            navText: ["<i class='fa fa-angle-left fa-2x' />", "<i class='fa fa-angle-right fa-2x' />"],
            responsiveClass: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: jQuerycarousel.data("items-mobile-sm"),
                    nav: false,
                    dots: true
                },
                // breakpoint from 480 up
                480: {
                    items: jQuerycarousel.data("items-mobile"),
                    nav: false,
                    dots: true
                },
                // breakpoint from 786 up
                786: {
                    items: jQuerycarousel.data("items-tab")
                },
                // breakpoint from 1023 up
                1023: {
                    items: jQuerycarousel.data("items-laptop")
                },
                1199: {
                    items: jQuerycarousel.data("items")
                }
            }
        });
    });
};

const copyCode = () => {
    /*$(document).on('click','[data-copy="true"]',function (e) {
        let _this = $(this);
        let target = _this.attr('data-copy-target');
        /!* Copy the text inside the text field *!/
        let text = document.querySelector(target).innerText;
        let elem = document.createElement("textarea");
        document.body.appendChild(elem);
        elem.value = text;
        /!* Select the text field *!/
        elem.select();
        elem.setSelectionRange(0, 99999); /!*For mobile devices*!/
        /!* Copy the text inside the text field *!/
        document.execCommand("copy");
        document.body.removeChild(elem);
        tooltipUpdate(_this,'Copied');
        _this.tooltip('show');
        setTimeout(() => {
            tooltipUpdate(_this,'Copy')
        },2000)
    })

    function tooltipUpdate(_this,text) {
        _this.attr('title',text);
        _this.tooltip('dispose');
        _this.tooltip()
    }*/
};

const sideBarToggle = () => {
    /*$(document).on('click', '.iq-sidebar-menu > ul > li > a', function() {
        var checkElement = $(this).next();
        $('.iq-sidebar-menu li').removeClass('active');
        $(this).closest('li').addClass('active');
        if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            $(this).closest('li').removeClass('active');
            checkElement.slideUp('normal');
        }
        if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('.iq-sidebar-menu ul ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
        }
        let length =$(this).closest('li').find('ul').children().length;
        if (length === 0) {
            return true;
        } else {
            return false;
        }
    });*/
    $('.iq-sidebar-menu .active').each(function (ele, index) {
        $(this).find('.iq-submenu').addClass('show');
        $(this).next().attr("aria-expanded", "true");
    })
    $(".iq-waves-effect").click(function (e) {

        // Remove any old one
        $(".ripple").remove();

        // Setup
        let posX = $(this).offset().left,
            posY = $(this).offset().top,
            buttonWidth = $(this).width(),
            buttonHeight = $(this).height();

        // Add the element
        $(this).prepend("<span class='ripple' />");


        // Make it round!
        if (buttonWidth >= buttonHeight) {
            buttonHeight = buttonWidth;
        } else {
            buttonWidth = buttonHeight;
        }

        // Get the center of the element
        var x = e.pageX - posX - buttonWidth / 2;
        var y = e.pageY - posY - buttonHeight / 2;


        // Add the ripples CSS and start the animation
        $(".ripple").css({
            width: buttonWidth,
            height: buttonHeight,
            top: y + 'px',
            left: x + 'px'
        }).addClass("rippleEffect");
    });

    $(document).on('click', '.wrapper-menu', function () {
        $(this).toggleClass('open');
    });

    $(document).on('click', ".wrapper-menu", function () {
        $("body").toggleClass("sidebar-main");
    });
};

const dynamicChart = () => {

    // eslint-disable-next-line no-unused-vars
    var lastDate = 0;
    var data = [];
    var TICKINTERVAL = 86400000;
    let XAXISRANGE = 777600000;

    function getDayWiseTimeSeries(baseval, count, yrange) {
        var i = 0;
        while (i < count) {
            var x = baseval;
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            data.push({
                x,
                y
            });
            lastDate = baseval;
            baseval += TICKINTERVAL;
            i++;
        }
    }

    getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
        min: 10,
        max: 90
    });

    /*function getNewSeries(baseval, yrange) {
        var newDate = baseval + TICKINTERVAL;
        lastDate = newDate;
        for (var i = 0; i < data.length - 10; i++) {
            data[i].x = newDate - XAXISRANGE - TICKINTERVAL;
            data[i].y = 0;
        }
        data.push({
            x: newDate,
            y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        })

    }

    function resetData() {
        // Alternatively, you can also reset the data at certain intervals to prevent creating a huge series
        data = data.slice(data.length - 10, data.length);
    }*/


    let options = {
        chart: {
            height: 150,
            type: 'area',
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                }
            },
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: true
            },
            group: 'sparklines',
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 3
        },
        series: [{
            data: data
        }],
        markers: {
            size: 4
        },
        xaxis: {
            type: 'datetime',
            range: XAXISRANGE,
        },
        yaxis: {
            max: 100
        },
        colors: ['#0084ff'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 90, 100]
            },
        },
        legend: {
            show: false
        },
    };

    return options;
};

const ticketBookInit = () => {
    $('.iq-film-block').find('span').text(0);
    $(document).on('click', '.iq-booking-screen .iq-booking-no .list-inline-item .iq-seat ', function (e) {
        e.preventDefault();
        let sheet = 0;
        if (!$(this).hasClass('bg-secondary')) {
            $(this).toggleClass('active');
            sheet = $('.iq-booking-screen').find('.iq-seat.active').length;
            $('.iq-film-block').find('span').text(sheet);
        }
    });
    $(document).on('click', '.ri-close-circle-line', function () {
        $(this).parent().parent().parent().parent().removeClass('film-side');
    });

    $(document).on('click', '.iq-film-block', function () {
        if (parseInt($(this).find('span').text()) > 0) {
            $('.iq-sidebar-right-menu').addClass('film-side');
        }
    });
};

export { index, dynamicChart, initSelect2, getActiveLink }

