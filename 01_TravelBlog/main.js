$(document).ready(() => {
  $('#logs').on('click', () => {
		$('#logsMenu').show();
  });
  $('.dropdown-menu').on('mouseleave', () => {
		$('.dropdown-menu').hide();
	});
});
