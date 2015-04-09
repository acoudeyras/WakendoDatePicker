(function(KendoDatePicker) {
	'use strict';
	
	KendoDatePicker.setWidth('130');
	KendoDatePicker.setHeight('22');
	
	KendoDatePicker.addLabel({
		'defaultValue': 'Label',
		'position': 'left'
	});
	
	KendoDatePicker.setPanelStyle({
	        'fClass': true,
	        'text': true,
	        'background': true,
	        'border': true,
	        'sizePosition': true,
	        'label': true,
	        'disabled': ['border-radius']
    	});

});
