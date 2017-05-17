$(document).ready(function() {
    $('#book-notes').DataTable( {
        "createdRow": function ( row, data, index ) {
        },
        "order": [[ 1, "asc" ]],
        "columns": [
            { "data": "author" },
            { "data": "title" },
            { "data": "review_author" },
        ]
    } );
} );
