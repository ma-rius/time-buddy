$(function () {

    var dateSlider = document.getElementById('slider-date-mon');

    noUiSlider.create(dateSlider, {
        range: {
            min: 1262300401000, // time in milliseconds
            max: 1262386799000 // If it's stupid but it works, it isn't stupid.
        },

        start: [1262323800000, 1262367000000],
        connect: true
    });


    var dateValues = [
        document.getElementById('event-start-mon'),
        document.getElementById('event-end-mon')
    ];

    dateSlider.noUiSlider.on('update', function (values, handle) {
        dateValues[handle].innerHTML = formatDate(new Date(+values[handle]));
    });


// Create a string representation of the date.
    function formatDate(date) {
        return date.getHours() + ":" + date.getMinutes();
    }
});


$(function () {

    var dateSlider = document.getElementById('slider-date-tue');

    noUiSlider.create(dateSlider, {
        range: {
            min: 1262300401000, // time in milliseconds
            max: 1262386799000 // If it's stupid but it works, it isn't stupid.
        },

        start: [1262323800000, 1262367000000],
        connect: true
    });


    var dateValues = [
        document.getElementById('event-start-tue'),
        document.getElementById('event-end-tue')
    ];

    dateSlider.noUiSlider.on('update', function (values, handle) {
        dateValues[handle].innerHTML = formatDate(new Date(+values[handle]));
    });


// Create a string representation of the date.
    function formatDate(date) {
        return date.getHours() + ":" + date.getMinutes();
    }
});

$(function () {

    var dateSlider = document.getElementById('slider-date-wed');

    noUiSlider.create(dateSlider, {
        range: {
            min: 1262300401000, // time in milliseconds
            max: 1262386799000 // If it's stupid but it works, it isn't stupid.
        },

        start: [1262323800000, 1262367000000],
        connect: true
    });


    var dateValues = [
        document.getElementById('event-start-wed'),
        document.getElementById('event-end-wed')
    ];

    dateSlider.noUiSlider.on('update', function (values, handle) {
        dateValues[handle].innerHTML = formatDate(new Date(+values[handle]));
    });


// Create a string representation of the date.
    function formatDate(date) {
        return date.getHours() + ":" + date.getMinutes();
    }
});

$(function () {

    var dateSlider = document.getElementById('slider-date-thu');

    noUiSlider.create(dateSlider, {
        range: {
            min: 1262300401000, // time in milliseconds
            max: 1262386799000 // If it's stupid but it works, it isn't stupid.
        },

        start: [1262323800000, 1262367000000],
        connect: true
    });


    var dateValues = [
        document.getElementById('event-start-thu'),
        document.getElementById('event-end-thu')
    ];

    dateSlider.noUiSlider.on('update', function (values, handle) {
        dateValues[handle].innerHTML = formatDate(new Date(+values[handle]));
    });


// Create a string representation of the date.
    function formatDate(date) {
        return date.getHours() + ":" + date.getMinutes();
    }
});

$(function () {

    var dateSlider = document.getElementById('slider-date-fri');

    noUiSlider.create(dateSlider, {
        range: {
            min: 1262300401000, // time in milliseconds
            max: 1262386799000 // If it's stupid but it works, it isn't stupid.
        },

        start: [1262323800000, 1262367000000],
        connect: true
    });


    var dateValues = [
        document.getElementById('event-start-fri'),
        document.getElementById('event-end-fri')
    ];

    dateSlider.noUiSlider.on('update', function (values, handle) {
        dateValues[handle].innerHTML = formatDate(new Date(+values[handle]));
    });


// Create a string representation of the date.
    function formatDate(date) {
        return date.getHours() + ":" + date.getMinutes();
    }
});
