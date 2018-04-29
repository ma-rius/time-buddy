/* $(function () {
 var slider = document.getElementById('slider');

 noUiSlider.create(slider, {
 start: [20, 80],
 connect: true,
 range: {
 'min': 0,
 'max': 100
 }
 });
 });*/

$(function () {
    function timestamp(str) {
        return new Date(str).getTime();
    }

    var dateSlider = document.getElementById('slider-date');

    noUiSlider.create(dateSlider, {
// Create two timestamps to define a range.
        range: {
            min: timestamp('2010'),
            max: timestamp('2016')
        },

// Steps of one week
        step: 7 * 24 * 60 * 60 * 1000,

// Two more timestamps indicate the handle starting positions.
        start: [timestamp('2011'), timestamp('2015')],

// No decimals
        format: wNumb({
            decimals: 0
        })
    });
    var dateValues = [
        document.getElementById('event-start'),
        document.getElementById('event-end')
    ];

    dateSlider.noUiSlider.on('update', function (values, handle) {
        dateValues[handle].innerHTML = formatDate(new Date(+values[handle]));
    });
// Create a list of day and monthnames.
    var
        weekdays = [
            "Sunday", "Monday", "Tuesday",
            "Wednesday", "Thursday", "Friday",
            "Saturday"
        ],
        months = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];

// Append a suffix to dates.
// Example: 23 => 23rd, 1 => 1st.
    function nth(d) {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    }

// Create a string representation of the date.
    function formatDate(date) {
        return date.getFullYear();
    }
});

$("#slider-range").slider({
    range: true,
    min: 0,
    max: 1440,
    step: 15,
    values: [540, 1020],
    slide: function (e, ui) {
        var hours1 = Math.floor(ui.values[0] / 60);
        var minutes1 = ui.values[0] - (hours1 * 60);

        if (hours1.length === 1) hours1 = '0' + hours1;
        if (minutes1.length === 1) minutes1 = '0' + minutes1;
        if (minutes1 === 0) minutes1 = '00';
        if (hours1 >= 12) {
            if (hours1 === 12) {
                hours1 = hours1;
                minutes1 = minutes1 + " PM";
            } else {
                hours1 = hours1 - 12;
                minutes1 = minutes1 + " PM";
            }
        } else {
            hours1 = hours1;
            minutes1 = minutes1 + " AM";
        }
        if (hours1 === 0) {
            hours1 = 12;
            minutes1 = minutes1;
        }



        $('.slider-time').html(hours1 + ':' + minutes1);

        var hours2 = Math.floor(ui.values[1] / 60);
        var minutes2 = ui.values[1] - (hours2 * 60);

        if (hours2.length === 1) hours2 = '0' + hours2;
        if (minutes2.length === 1) minutes2 = '0' + minutes2;
        if (minutes2 === 0) minutes2 = '00';
        if (hours2 >= 12) {
            if (hours2 === 12) {
                hours2 = hours2;
                minutes2 = minutes2 + " PM";
            } else if (hours2 === 24) {
                hours2 = 11;
                minutes2 = "59 PM";
            } else {
                hours2 = hours2 - 12;
                minutes2 = minutes2 + " PM";
            }
        } else {
            hours2 = hours2;
            minutes2 = minutes2 + " AM";
        }

        $('.slider-time2').html(hours2 + ':' + minutes2);
    }
});