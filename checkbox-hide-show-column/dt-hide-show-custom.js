/* This js is for DataTables 1.9.0 jqeury Column Hide-Show using the JQuerry
 * Use checkbox to hide-show columns dynamaic using Drupal datatable view.
 */

var hidden = [];
		  var visible = [];
		  //var hidden= [ 2,3,4,5,6,7,8,9,10,11,1,2,13,14,20,25,27,30,32 ];
		  var head = Array();				
                $(selector + ' tr th').each(function(i){
                    var str = $(this).text();
                    head[i] = str.trim();
					visible.push(i);
                });
		    settings.scrollY = "200px";
		  //settings.aoColumnDefs = [{"aTargets": hidden,"bVisible": false}]
			
			
          var datatable = $(selector).dataTable(settings);
		 // console.log(datatable);
			
		  /*custom*/
				
                var colList = $('.custom-datatables ul#col_head')
                
				for (var i=0;i<head.length;i++) {                    
                    var _li = $('<li/>').addClass('li-item');
					var is_checked = false;
					if(visible.includes(i)){
						//_li.addClass('active');
						 is_checked = true;
					}
					_li.appendTo(colList);
                    //var _a = $('<a/>').attr('href', "javascript:void(0);").attr('data-column', i).addClass('toggle-vis').text(head[i]).appendTo(_li);
					 var _checkbox = $('<input />').attr('type', 'checkbox').attr('id', 'cb'+i).attr('name','selected[]').addClass('toggle-vis').attr('checked', is_checked).val(i).appendTo(_li);
                    var _checkbox_label = $('<label />').attr('for', 'cb'+i).attr('class', 'tgl-class').text(head[i]).appendTo(_li);
                }
				$('#check_all').on('change', function (e) { 				 
					$('label#check_all_label span').text(this.checked ? 'Hide All' : 'Show All');
                     $('input[name*=\'selected\']').prop('checked', this.checked);
                     $('input[name*=\'selected\']').each(function (i) {
						var iCol = $(this).val();
						$(this).parent('li').toggleClass('active');						
						var bVis = datatable.fnSettings().aoColumns[iCol].bVisible;
						datatable.fnSetColumnVis( iCol, bVis ? false : true );
					});
                });
				$('.toggle-vis').on( 'change', function (e) { 
                    e.preventDefault();                    
                    $(this).parent('li').toggleClass('active');
					var iCol = $(this).val();
					var bVis = datatable.fnSettings().aoColumns[iCol].bVisible;
					datatable.fnSetColumnVis( iCol, bVis ? false : true );
				});
                
		  /*custom*/