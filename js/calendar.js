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
                element.find(".fc-content").append("<div class='btn-group' role='group' aria-label='Basic example'><button type='button' class='closeon btn btn-secondary'>Decl.</button><button id='#acc' type='button' class='accept btn btn-secondary'>Accept</button></div>");
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
                start: '2018-03-01'
            },
            {
                title: 'Long Event',
                start: '2018-03-07',
                end: '2018-03-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2018-03-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2018-03-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2018-03-11',
                end: '2018-03-13'
            },
            {
                title: 'Meeting',
                start: '2018-03-12T10:30:00',
                end: '2018-03-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2018-03-13T12:00:00'
            },
            {
                title: 'Meditation',
                start: '2018-03-14T15:00:00'
            },
            {
                title: 'Meeting',
                start: '2018-03-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2018-03-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2018-03-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2018-03-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2018-03-28'
            }
        ]
    });

});

