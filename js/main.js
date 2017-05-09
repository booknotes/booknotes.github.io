$(document).ready(function() {
    $('#book-notes').DataTable( {
"createdRow": function ( row, data, index ) {
        },
        "columns": [
            { "data": "author" },
            { "data": "title" },
            { "data": "review_author" },
        ]
    } );
} );
