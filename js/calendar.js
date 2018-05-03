/**
 * Created by Marius on 29.04.18.
 */
$(document).ready(function () {

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next',
            center: 'title',
            right: ''
        },
        defaultDate: '2018-03-12',
        navLinks: true, // can click day/week names to navigate views
        selectable: true,
        selectHelper: true,
        defaultView: 'agendaWeek',
        select: function (start, end) {
            var title = prompt('Event Title:');
            var eventData;
            if (title) {
                eventData = {
                    title: title,
                    start: start,
                    end: end
                };
                $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
            }
            // $('#calendar').fullCalendar('unselect');
        },
        eventRender: function (event, element, view) {
            if (event.title === 'Meeting' || event.title === 'Meditation') {
                element.find(".fc-content").append("<div class='btn-group calendar-button' role='group' aria-label='Basic example'><button type='button' class='closeon btn btn-secondary' data-toggle='modal' data-target='#exampleModal2'><i class='fas fa-times'></i></button><button id='#acc' type='button' class='accept btn btn-secondary'><i class='fas fa-check'></i></button><button type='button' class='btn btn-secondary' data-toggle='modal' data-target='#exampleModal'><i class='fas fa-arrows-alt-v'></i></button></div>");
            }
            element.find(".closeon").on('click', function () {
                $('#calendar').fullCalendar('removeEvents', event._id);
                console.log('delete');
            });
            element.find(".accept").on('click', function () {
                $('accept').css('display', 'none');
                console.log('sdfdf');
            });
        },
        eventClick: function (event) {
            event.eventBackground = 'blue';
            $('#calendar').fullCalendar('rerenderEvents');
        },
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'All Day Event',
                start: '2018-03-01',
                color: '#378006'
            },
            {
                title: 'Long Event',
                start: '2018-03-07',
                end: '2018-03-10',
                color: '#378006'

            },
            {
                title: 'Repeating Event',
                start: '2018-03-09T16:00:00',
                color: '#378006'
            },
            {

                title: 'Tennis',
                start: '2018-03-16T16:00:00',
                color: '#f47a36'

            },
            {
                title: 'Conference',
                start: '2018-03-11',
                end: '2018-03-13',
                color: '#225180'

            },
            {
                title: 'Meeting',
                start: '2018-03-12T09:30:00',
                // end: '2018-03-12T11:30:00',
                color: '#b40913'

            },
            {
                title: 'Lunch',
                start: '2018-03-13T12:00:00',
                color: '#f47a36'

            },
            {
                title: 'Meditation',
                start: '2018-03-16T08:00:00',
                color: '#b40913'

            },
            {
                title: 'Meeting',
                start: '2018-03-14T12:30:00',
                color: '#b40913'

            },
            {
                title: 'Happy Hour',
                start: '2018-03-12T17:30:00',
                color: '#378006'
                // url: 'http://google.com/',

            },
            {
                title: 'Dinner',
                start: '2018-03-12T20:00:00',
                color: '#378006'

            },
            {
                title: 'Breakfast',
                start: '2018-03-13T07:00:00',
                color: '#378006'
            }

        ]
    });



    $('#calendar2').fullCalendar({
        header: {
            left: 'prev,next',
            center: 'title',
            right: ''
        },
        defaultDate: '2018-03-12',
        navLinks: true, // can click day/week names to navigate views
        selectable: true,
        selectHelper: true,
        defaultView: 'agendaWeek',
        select: function (start, end) {
            var title = prompt('Event Title:');
            var eventData;
            if (title) {
                eventData = {
                    title: title,
                    start: start,
                    end: end
                };
                $('#calendar2').fullCalendar('renderEvent', eventData, true); // stick? = true
            }
            // $('#calendar').fullCalendar('unselect');
        },
        eventRender: function (event, element, view) {
            if (event.title === 'Meeting' || event.title === 'Meditation') {
                element.find(".fc-content").append("<div class='btn-group calendar-button' role='group' aria-label='Basic example'><button type='button' class='closeon btn btn-secondary' data-toggle='modal' data-target='#exampleModal2'><i class='fas fa-times'></i></button><button id='#acc' type='button' class='accept btn btn-secondary'><i class='fas fa-check'></i></button><button type='button' class='btn btn-secondary' data-toggle='modal' data-target='#exampleModal'><i class='fas fa-arrows-alt-v'></i></button></div>");
            }
            element.find(".closeon").on('click', function () {
                $('#calendar2').fullCalendar('removeEvents', event._id);
                console.log('delete');
            });
            element.find(".accept").on('click', function () {
                $('accept').css('display', 'none');
                console.log('sdfdf');
            });
        },
        eventClick: function (event) {
            event.eventBackground = 'blue';
            $('#calendar2').fullCalendar('rerenderEvents');
        },
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'All Day Event',
                start: '2018-03-01',
                color: '#378006'
            },
            {
                title: 'Long Event',
                start: '2018-03-07',
                end: '2018-03-10',
                color: '#378006'

            },
            {
                title: 'Repeating Event',
                start: '2018-03-09T16:00:00',
                color: '#378006'
            },
            {

                title: 'Tennis',
                start: '2018-03-16T16:00:00',
                color: '#f47a36'

            },
            {
                title: 'Conference',
                start: '2018-03-11',
                end: '2018-03-13',
                color: '#225180'

            },
            {
                title: 'Meeting',
                start: '2018-03-13T09:30:00',
                // end: '2018-03-13T11:30:00',
                color: '#b40913'

            },
            {
                title: 'Lunch',
                start: '2018-03-13T12:00:00',
                color: '#f47a36'

            },
            {
                title: 'Meditation',
                start: '2018-03-14T15:00:00',
                color: '#b40913'

            },
            {
                title: 'Meeting',
                start: '2018-03-14T09:30:00',
                color: '#b40913'

            },
            {
                title: 'Happy Hour',
                start: '2018-03-12T17:30:00',
                color: '#378006'
                // url: 'http://google.com/',

            },
            {
                title: 'Dinner',
                start: '2018-03-12T20:00:00',
                color: '#378006'

            },
            {
                title: 'Breakfast',
                start: '2018-03-13T07:00:00',
                color: '#378006'
            }

        ]
    });

});

