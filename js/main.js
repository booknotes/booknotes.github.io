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
        ],
        "lengthMenu": [[10, 50, 100, -1], [10, 50, 100, "All"]],
        "dom": '<"top"f>rt<"bottom"lp><"clear">',
        "language": {
          "search": "_INPUT_",
          "searchPlaceholder": "Search books"
        }
    } );
} );
