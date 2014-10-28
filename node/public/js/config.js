requirejs.config({
    baseUrl: "/js/",
    paths: {
        //Always Load
        jquery:         'vendor/jquery/jquery',
        foundation:     'vendor/foundation/foundation.min',
        modernizr:      'vendor/modernizr/modernizr',
        fastclick:      'vendor/fastclick/fastclick',
        placeholder:    'vendor/placeholder/placeholder',
        nicescroll:     'vendor/nicescroll/nicescroll.min',
        underscore:     'vendor/underscore/underscore',
        socketio:       '/socket.io/socket.io',

        datatables:     'vendor/datatables/jquery.dataTables',
        dt_responsive:  'vendor/datatables/dataTables.responsive',
        dt_foundation:  'vendor/datatables/dataTables.foundation',
        dt_grouping:    'vendor/datatables/dataTables.grouping',
        dt_scroller:    'vendor/datatables/dataTables.scroller',
        flot:           'vendor/flot/jquery.flot',
        flot_symbol:    'vendor/flot/jquery.flot.symbol',
        flot_time:      'vendor/flot/jquery.flot.time',
        flot_tooltip:   'vendor/flot/jquery.flot.tooltip',
        fullcalendar:   'vendor/fullcalendar/fullcalendar.min',
        moment:         'vendor/fullcalendar/moment.min',
        easypiechart:   'vendor/easypiechart/easypiechart'
    },
    shim: {
        foundation: {
            deps: ['jquery', 'modernizr', 'fastclick', 'placeholder']
        },

        datatables: {
            deps: ['jquery']
        },

        dt_foundation: {
            deps: ['jquery', 'datatables', 'foundation']
        },

        dt_responsive: {
            deps: ['jquery', 'datatables']
        },

        dt_scroller: {
            deps: ['jquery', 'datatables']
        },

        dt_grouping: {
            deps: ['jquery', 'datatables']
        },

        nicescroll: {
            deps: ['jquery']
        },

        flot_time: {
            deps: ['jquery', 'flot']
        },

        flot_symbol: {
            deps: ['jquery', 'flot']
        },

        flot_tooltip: {
            deps: ['jquery', 'flot']
        },

        fullcalendar: {
            deps: ['jquery', 'moment']
        },

        easypiechart: {
            deps: ['jquery']
        }
    }
});