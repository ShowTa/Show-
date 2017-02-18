$(function() {
  $('#edit-content').on('keyup', function() {
    $('#preview').html(marked($(this).val().toString(), {sanitize: true}));
  });
});
