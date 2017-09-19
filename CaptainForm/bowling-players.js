$(document).ready(function () {
	(function (jQuery) {
		
		var config = {
			"backgroundColor": "#eee"
		};
		
		var fieldIds = {
			"otherFields": [
				//Dropdown
				"id123-control6673638",
				
				//Single Choice - Only one option is needed
				"id123-control6673639_0",
				
				//Multiple Choice - Only one option is needed
				"id123-control6673640_0"
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
					
					if (elementHasValue(fieldElement)) {
						makeElementReadOnly(fieldElement);
					}
				});
				
			});
		}
		
		/**
		 * @param fieldElement
		 * @returns {boolean}
		 */
		function elementHasValue(fieldElement) {
			var elementType = getElementType(fieldElement);
			
			switch (elementType) {
				case 'INPUT-RADIO':
				case 'INPUT-CHECKBOX':
					var selected  = false;
					var elementId = fieldElement.attr('id').split('_')[0];
					$('input[id*="' + elementId + '"]').each(function (index, element) {
						if (jQuery(element).is(':checked'))
							selected = true;
					});
					return selected;
					break;
				
				case 'INPUT':
				case 'SELECT':
				default:
					return fieldElement.val().trim() !== '';
					break;
			}
		}
		
		/**
		 * @param fieldElement
		 */
		function makeElementReadOnly(fieldElement) {
			var elementType = getElementType(fieldElement);
			
			switch (elementType) {
				case 'SELECT':
					jQuery('#s2id_' + fieldElement.attr('id') + ' .select2-choice').css('background-color', getConfigOption('backgroundColor'));
					jQuery(fieldElement).find("option:not(:selected)").prop("disabled", true);
					break;
				
				case 'INPUT-RADIO':
				case 'INPUT-CHECKBOX':
					var elementId = fieldElement.attr('id').split('_')[0];
					$('label[for*="' + elementId + '"]').each(function (index, element) {
						jQuery(element).attr('for', '').attr('for', '');
						jQuery(element).find('span.outside').css('background-color', getConfigOption('backgroundColor'));
					});
					break;
				
				case 'INPUT':
				default:
					fieldElement.attr('readonly', 'readonly').css('background-color', getConfigOption('backgroundColor'));
					break;
			}
			
		}
		
		/**
		 * @param fieldElement
		 * @returns {string}
		 */
		function getElementType(fieldElement) {
			var elementType    = jQuery(fieldElement)[0].tagName;
			var elementSubType = fieldElement.attr('type') || '';
			
			return elementSubType
				? elementType + '-' + elementSubType.toUpperCase()
				: elementType;
		}
		
		/**
		 * @param option
		 * @returns {*}
		 */
		function getConfigOption(option) {
			if (option && config.hasOwnProperty(option)) {
				return config[option];
			}
			
			return '';
		}
	})($);
});
