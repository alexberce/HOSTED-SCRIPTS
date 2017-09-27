$(document).ready(function() {
  (function(jQuery) {

    var config = {
      "backgroundColor": "#eee"
    };

    var fieldIds = {

      "otherFields": [
        //Dropdowns - select 1 option each
	'id123-control6625267',
	'id123-control6617218',
	'id123-control6625296',
	'id123-control6617309',
	'id123-control6625298',
	'id123-control6617327',
	'id123-control6625255',
	'id123-control6617333',

      //Radio Buttons - select 1 option for each
	"id123-control6615687_0",	
	"id123-control6619253_0",
	"id123-control6599060_0",	
      	"id123-control6602054_0",
	"id123-control6602055_0",
	"id123-control6598898_0",
	"id123-control6599123_0",
	"id123-control6599849_0",
	"id123-control6598897_0",

	"id123-control6609334_0",	
	"id123-control6610264_0",
	"id123-control6606182_0",	
      	"id123-control6606184_0",
	"id123-control6606185_0",
	"id123-control6606178_0",
	"id123-control6606183_0",
	"id123-control6606175_0",
	"id123-control6606177_0",

	"id123-control6609409_0",	
	"id123-control6619276_0",
	"id123-control6609397_0",
	"id123-control6609403_0",	
      	"id123-control6609405_0",
	"id123-control6609406_0",
	"id123-control6609404_0",
	"id123-control6609396_0",
	"id123-control6609398_0",
	
	"id123-control6609784_0",	
	"id123-control6619289_0",
	"id123-control6619290_0",
	"id123-control6609778_0",	
      	"id123-control6609780_0",
	"id123-control6609781_0",
	"id123-control6609779_0",
	"id123-control6609771_0",
	"id123-control6609773_0",

	'id123-control6598903_0',
        'id123-control6619536_0'
      ],

      "Instructions": [
        'id123-control6615701',
        'id123-control6619844'
      ],

      "1st Position Bowler": [
        'id123-control6615637-1',
        'id123-control6615637-2',
        'id123-control6625274',
        'id123-control6598843-1',
        'id123-control6598843-2',
        'id123-control6598843-3',
        'id123-control6598844',
        'id123-control6617202',
        'id123-control6617209',
        'id123-control6617221',
        'id123-control6619259',
        'id123-control6598847',
        'id123-control6598899'
      ],

      "2nd Position Bowler": [
        'id123-control6615666-1',
        'id123-control6615666-2',
	'id123-control6625297',
        'id123-control6606171-1',
        'id123-control6606171-2',
        'id123-control6606171-3',
        'id123-control6606172',
        'id123-control6617307',
        'id123-control6617308',
        'id123-control6617311',
        'id123-control6619265',
        'id123-control6606174',
        'id123-control6606176',
        'id123-control6606179'
      ],

      "3rd Position Bowler": [
        'id123-control6615671-1',
        'id123-control6615671-2',
        'id123-control6609392-1',
        'id123-control6609392-2',
        'id123-control6609392-3',
        'id123-control6609393',
        'id123-control6617326',
        'id123-control6617325',
        'id123-control6617328',
        'id123-control6619277',
        'id123-control6609395',
        'id123-control6609397',
        'id123-control6609399_0',
        'id123-control6609399_1',
        'id123-control6609400'
      ],

      "4th Position Bowler": [
        'id123-control6615672-1',
        'id123-control6615672-2',
        'id123-control6625556',
        'id123-control6609767-1',
        'id123-control6609767-2',
        'id123-control6609767-3',
        'id123-control6609768',
        'id123-control6617331',
        'id123-control6617332',
        'id123-control6617334',
        'id123-control6609778_1',
        'id123-control6609772',
        'id123-control6609774_0',
        'id123-control6609774_1',
        'id123-control6609775'
      ],

      "Team Info": [
        'id123-control6609782'
      ]

 
    };
    var entryId = jQuery('input[name=entryid]');
    if (~~entryId.val() > 0) {
      jQuery.each(fieldIds, function(playerId, playerFields) {
        jQuery(playerFields).each(function(index, fieldId) {
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
          var selected = false;
          var elementId = fieldElement.attr('id').split('_')[0];
          $('input[id*="' + elementId + '"]').each(function(index, element) {
            if (jQuery(element).is(':checked'))
              selected = true;
          });
          return selected;
          break;

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
          setTimeout(function() {
            jQuery('#s2id_' + fieldElement.attr('id') + ' .select2-choice').css('background-color', getConfigOption('backgroundColor'));
            jQuery(fieldElement).find("option:not(:selected)").prop("disabled", true);
          }, 250);

          break;

        case 'INPUT-RADIO':
        case 'INPUT-CHECKBOX':
          var elementId = fieldElement.attr('id').split('_')[0];
          $('label[for*="' + elementId + '"]').each(function(index, element) {
            jQuery(element).attr('for', '').attr('for', '');
            jQuery(element).find('span.outside').css('background-color', getConfigOption('backgroundColor'));
          });
          break;

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
      var elementType = jQuery(fieldElement)[0].tagName;
      var elementSubType = fieldElement.attr('type') || '';

      return elementSubType ? elementType + '-' + elementSubType.toUpperCase() : elementType;
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
