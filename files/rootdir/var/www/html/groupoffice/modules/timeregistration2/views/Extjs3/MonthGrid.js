/**
 * Copyright Intermesh
 *
 * This file is part of Group-Office. You should have received a copy of the
 * Group-Office license along with Group-Office. See the file /LICENSE.TXT
 *
 * If you have questions write an e-mail to info@intermesh.nl
 *
 * @version $Id: MonthGrid.js 20040 2014-12-04 10:23:55Z mdhart $
 * @copyright Copyright Intermesh
 * @author Michael de Hart <mdhart@intermesh.nl>
 */
GO.timeregistration2.MonthGrid = Ext.extend(GO.grid.GridPanel,{

	mainPanel : false,

	initComponent : function(){
		
		var now = new Date();
		
		var toolbar = [this.leftArrow = new Ext.Button({
				iconCls : 'btn-left-arrow',
				handler : function() {
					this.store.baseParams.year--;
					this.yearPanel.body.update(this.store.baseParams.year);
					this.store.load();
				},
				scope : this
			}), this.yearPanel = new Ext.Panel({
						html : now.format('Y')+"",
						plain : true,
						border : true,
						cls : 'cal-period'
					}), this.rightArrow = new Ext.Button({
				iconCls : 'btn-right-arrow',
				handler : function() {
					this.store.baseParams.year++;
					this.yearPanel.body.update(this.store.baseParams.year);
					this.store.load();
				},
				scope : this
			})]
		
		Ext.apply(this,{
			title: GO.lang.strMonth,
			region:'west',
			tbar : toolbar,
			sm: new Ext.grid.RowSelectionModel({singleSelect:true}),
			store: new GO.data.JsonStore({
			  url: GO.url('timeregistration2/month/store'),		
			  fields:['id', 'closed','disapproved', 'name'],
			  baseParams:{ year:now.format('Y')},
			  listeners:{
			    load: function(records, operation, success) {
					
					var month = (new Date()).getMonth()
					var index = this.store.findBy(function(record){
						return record.data.id == month+1;
					});
					this.getSelectionModel().selectRow(index, true );
					this.getView().focusRow(index);
				},
				scope: this
			  }
//				listeners:{
//					load:function(){
//						this.getSelectionModel().selectFirstRow();
//					},
//					scope:this
//				}
			}),
			listeners:{
				show:function(){
					this.store.load();
				},
				scope:this
			},
			cm:new Ext.grid.ColumnModel({
				columns:[
				  { 
					  header: GO.lang.strMonth, 
					  dataIndex: 'name',
					  renderer:function(v, meta, record){
						  
						if(record.get('disapproved')==true) {
							meta.css='go-icon-cross';
							return v;
						}
						  
						switch(record.get('closed')){

							case true:
								meta.css='go-icon-ok';
							break;

							default:
								meta.css='go-icon-empty';
								break;
						}

						return v;
					}
				  }
				]
			})
		});
		
		GO.timeregistration2.MonthGrid.superclass.initComponent.call(this);

		this.on('delayedrowselect', function(sm, i, record){
		  if(this.mainPanel){
			this.mainPanel.timeEntryGrid.startTime = record.get('start_time');
			this.mainPanel.cardPanel.layout.setActiveItem(0);
			this.mainPanel.timeEntryGrid.setTitle(record.get('name'));
		    this.mainPanel.timeEntryGrid.loadEntries('month', record.get('id'), this.store.baseParams.year);
		  }
		}, this);
	}
});