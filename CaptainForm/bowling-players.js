$(document).ready(function () {
	(function (jQuery) {
		
		var fieldIds = {
			"otherFields": [
				//Dropdown
				"id123-control6673638"
			],
			
			
			"player1": [
				'id123-control6640945-1',
				'id123-control6640945-2',
				'id123-control6640946',
				'id123-control6640947-1',
				'id123-control6640947-2',
				'id123-control6640947-3'
			],
			
			"player2": [
				'id123-control6640949-1',
				'id123-control6640949-2',
				'id123-control6640950',
				'id123-control6640951-1',
				'id123-control6640951-2',
				'id123-control6640951-3'
			],
			
			"player3": [
				'id123-control6640956-1',
				'id123-control6640956-2',
				'id123-control6640957',
				'id123-control6640958-1',
				'id123-control6640958-2',
				'id123-control6640958-3'
			]
		};
		
		var entryId = jQuery('input[name=entryid]');
		
		if (~~entryId.val() > 0) {
			jQuery.each(fieldIds, function (playerId, playerFields) {
				
				jQuery(playerFields).each(function (index, fieldId) {
					
					var fieldElement = jQuery('#' + fieldId);
					
					if (fieldElement.val().trim() !== '') {
						fieldElement.attr('readonly', 'readonly')
						.css('background-color', '#eee');
						
						if (getElementType(fieldElement) === 'SELECT') {
							makeSelectReadOnly(fieldElement);
						}
					}
				});
				
			});
		}
		
		function getElementType(fieldElement) {
			return jQuery(fieldElement)[0].tagName;
		}
		
		function makeSelectReadOnly(fieldElement) {
			jQuery('#s2id_' + fieldElement.attr('id') + ' .select2-choice').css('background-color', '#eee');
			jQuery(fieldElement).find("option:not(:selected)").prop("disabled", true);
		}
	})($);
});
