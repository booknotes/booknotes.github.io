$(document).ready(function() {
    $('#book-notes').DataTable( {
        "createdRow": function ( row, data, index ) {
        },
        "order": [[ 1, "asc" ]],
        "columns": [
            { "data": "author" },
            { "data": "title" },
            { "data": "goodreads_rating" },
            { "data": "review_author" },
        ]
    } );
} );
