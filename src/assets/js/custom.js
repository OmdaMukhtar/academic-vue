/* Global jQuery */

/* Contents
// ------------------------------------------------>
     1. wow animation
     2. Menu Mobile
     3. Cart
     4. Search
     5. Owl Slider
     6. Light Box
     7. Fixed Header
     8. Sticky Sidebar
*/

(function ($) {
    "use strict";



    /* ------------------  2. Menu Mobile ------------------ */
    var $menu_show = $('.mobile-toggle'),
        $menu = $('header .main-menu'),
        $list = $("ul.nav-menu li a"),
        $menu_list = $('header li.has-dropdown'),
        $menu_ul = $('ul.sub-menu'),
        $dropdown = $('header .dropdown'),
        $cart_link = $('#cart-link'),
        $search_bar = $('#search_bar'),
        $search_close = $('.close-search'),
        $search_bot = $('#search-header'),
        $fixed_header = $('#fixed-header'),
        $fixed_header_dark = $('#fixed-header-dark'),
        $sticky_content = $('.sticky-content'),
        $sticky_sidebar = $('.sticky-sidebar');

    $menu_show.on("click", function (e) {
        $menu.slideToggle();
        $dropdown.slideToggle();
    });
    $list.on("click", function (e) {
        var submenu = this.parentNode.getElementsByTagName("ul").item(0);
        if (submenu != null) {
            event.preventDefault();
            $(submenu).slideToggle();
        }
    });









    // var ctx = document.getElementById('commons_incidents');

    // var myChart = new Chart(ctx, {
    //     type: 'bar',
    //     data: {
    //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    //         datasets: [{
    //             label: '# of Votes',
    //             data: [12, 19, 3, 5, 2, 3],
    //             backgroundColor: [
    //             'rgba(255, 99, 132, 0.2)',
    //             'rgba(54, 162, 235, 0.2)',
    //             'rgba(255, 206, 86, 0.2)',
    //             'rgba(75, 192, 192, 0.2)',
    //             'rgba(153, 102, 255, 0.2)',
    //         ],
    //             borderColor: [
    //             'rgba(255, 99, 132, 1)',
    //             'rgba(54, 162, 235, 1)',
    //             'rgba(255, 206, 86, 1)',
    //             'rgba(75, 192, 192, 1)',
    //             'rgba(153, 102, 255, 1)',
    //         ],
    //             borderWidth: 1
    //     }]
    //     },
    //     options: {
    //         scales: {
    //             yAxes: [{
    //                 ticks: {
    //                     beginAtZero: true
    //                 }
    //         }]
    //         }
    //     }
    // });



    // var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // var config = {
    //     type: 'line',
    //     data: {
    //         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //         datasets: [{
    //             label: 'My First dataset',
    //             backgroundColor: window.chartColors.red,
    //             borderColor: window.chartColors.red,
    //             data: [
	// 					randomScalingFactor(),
	// 					randomScalingFactor(),
	// 					randomScalingFactor(),
	// 					randomScalingFactor(),
	// 					randomScalingFactor(),
	// 					randomScalingFactor(),
	// 					randomScalingFactor()
	// 				],
    //             fill: false,
	// 			}, {
    //             label: 'My Second dataset',
    //             fill: false,
    //             backgroundColor: window.chartColors.blue,
    //             borderColor: window.chartColors.blue,
    //             data: [
	// 					randomScalingFactor(),
	// 					randomScalingFactor(),
	// 					randomScalingFactor(),
	// 					randomScalingFactor(),
	// 					randomScalingFactor(),
	// 					randomScalingFactor(),
	// 					randomScalingFactor()
	// 				],
	// 			}]
    //     },
    //     options: {
    //         responsive: true,
    //         title: {
    //             display: true,
    //             text: 'Chart.js Line Chart'
    //         },
    //         tooltips: {
    //             mode: 'index',
    //             intersect: false,
    //         },
    //         hover: {
    //             mode: 'nearest',
    //             intersect: true
    //         },
    //         scales: {
    //             xAxes: [{
    //                 display: true,
    //                 scaleLabel: {
    //                     display: true,
    //                     labelString: 'Month'
    //                 }
	// 				}],
    //             yAxes: [{
    //                 display: true,
    //                 scaleLabel: {
    //                     display: true,
    //                     labelString: 'Value'
    //                 }
	// 				}]
    //         }
    //     }
    // };

    // window.onload = function () {
    //     var ctx = document.getElementById('canvas').getContext('2d');
    //     window.myLine = new Chart(ctx, config);
    // };

    // document.getElementById('randomizeData').addEventListener('click', function () {
    //     config.data.datasets.forEach(function (dataset) {
    //         dataset.data = dataset.data.map(function () {
    //             return randomScalingFactor();
    //         });

    //     });

    //     window.myLine.update();
    // });

    // var colorNames = Object.keys(window.chartColors);
    // document.getElementById('addDataset').addEventListener('click', function () {
    //     var colorName = colorNames[config.data.datasets.length % colorNames.length];
    //     var newColor = window.chartColors[colorName];
    //     var newDataset = {
    //         label: 'Dataset ' + config.data.datasets.length,
    //         backgroundColor: newColor,
    //         borderColor: newColor,
    //         data: [],
    //         fill: false
    //     };

    //     for (var index = 0; index < config.data.labels.length; ++index) {
    //         newDataset.data.push(randomScalingFactor());
    //     }

    //     config.data.datasets.push(newDataset);
    //     window.myLine.update();
    // });

    // document.getElementById('addData').addEventListener('click', function () {
    //     if (config.data.datasets.length > 0) {
    //         var month = MONTHS[config.data.labels.length % MONTHS.length];
    //         config.data.labels.push(month);

    //         config.data.datasets.forEach(function (dataset) {
    //             dataset.data.push(randomScalingFactor());
    //         });

    //         window.myLine.update();
    //     }
    // });

    // document.getElementById('removeDataset').addEventListener('click', function () {
    //     config.data.datasets.splice(0, 1);
    //     window.myLine.update();
    // });

    // document.getElementById('removeData').addEventListener('click', function () {
    //     config.data.labels.splice(-1, 1); // remove the label first

    //     config.data.datasets.forEach(function (dataset) {
    //         dataset.data.pop();
    //     });

    //     window.myLine.update();
    // });



}(jQuery));
