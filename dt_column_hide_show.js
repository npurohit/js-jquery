
(function ($) { //alert('working $');
	Drupal.behaviors.customDatatable = {  attach: function (context, settings) { alert('working behaviors');
	/*Datatables*/
		//jQuery(document).ready(function ($) { alert('workingready');
                var head= Array();
				var hidden= [ 2,3,4,5,6,7,8,9,10,11,1,2,13,14,20,25,27,30,32 ];
                $('#custom-datatable tr th', context).each(function(i){
                    var str = $(this).text();
                    head[i] = str.trim();
                });                
                var colList = $('ul#col_head')
                for (var i=0;i<head.length;i++) {                    
                    var _li = $('<li/>').addClass('li-item');
					if(hidden.includes(i)){
						_li.addClass('active');
					}
					_li.appendTo(colList);
                    var _a = $('<a/>').attr('href', "javascript:void(0);").attr('data-column', i).addClass('toggle-vis').text(head[i]).appendTo(_li);
                }                
                
                var customDatatable = $('#custom-datatable', context).DataTable( {
                    "scrollY": "200px", 
					"columnDefs": [{"targets": hidden,"visible": false}]
                } );

                $('a.toggle-vis', context).on( 'click', function (e) {
                    e.preventDefault();                    
                    $(this).parent('li').toggleClass('active');
                    var column = customDatatable.column( $(this).attr('data-column') );
                    column.visible( ! column.visible() );
                } );
            //});
			/*Data tables*/
		}
	};
    Drupal.behaviors.acquisitionresponsiveThemeAutocomplete = {
        attach: function (context, settings) { 

            Drupal.jsAC.prototype.found = function (matches) {

                if (!this.input.value.length) {
                    return false;
                }


                var ul = $('<ul></ul>');
                var ac = this;
                var i =0;
                for (key in matches) {
                    $('<li></li>')
                        .html($('<div></div>').html(matches[key]))
                        .mousedown(function () { ac.hidePopup(this); })
                        .mouseover(function () { ac.highlight(this); })
                        .mouseout(function () { ac.unhighlight(this); })
                        .addClass(i%2 == 0 ? "ac_even" : "ac_odd")
                        .data('autocompleteValue', key)
                        .appendTo(ul);
                    i++;
                }


                if (this.popup) {
                    if (ul.children().length) {
                        $(this.popup).empty().append(ul).show();
                        $(this.ariaLive).html(Drupal.t('Autocomplete popup'));
                    }
                    else {
                        $(this.popup).css({ visibility: 'hidden' });
                        this.hidePopup();
                    }
                }
            };

        }
    };
})(jQuery);
