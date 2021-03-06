Ext.namespace('GO.leavedays');

GO.leavedays.UserPanel = function(config) {
	
	var config = config || {};
	
	config.title = GO.leavedays.lang['leavedays'];
	config.layout = 'fit';
	config.width = 600;
	
	config.cls='go-white-bg';
	
	this.msgWindow = new Ext.Window({
		title: GO.leavedays.lang['reason_why'],
		width: 400,
		height: 180,
		layout: 'form',
		modal: false,
		resizable: false,
		closeAction: 'hide',
		items: [
			new Ext.form.FormPanel({
				hideLabels: true,
				items: [
					this.reasonWhyMsg = new Ext.form.TextArea({
						name: 'comment',
						anchor: '100%'
						
					})
				]
			})
			
		],
		listeners: {
				show: function() {
					this.reasonWhyMsg.focus(true, 100);
				},
				scope: this
			},
		buttons: [
			this.msgWindowSend = new Ext.Button({
				text: 'send',
				handler: function(){
					this.msgWindow.hide();
					this.msgWindow.onSend(this)
				},
				scope: this
			}),
			this.msgWindowClose = new Ext.Button({
				text: 'close',
				handler: function(){
					this.msgWindow.hide();
					this.msgWindow.onClose(this)
				},
				scope: this
			})
		],
		onSend: function(scope) {},
		onClose: function(scope) {}
	})
	
	
	this.gridPanel = this._buildGridPanel();
	
	
	config.items = [
		new Ext.TabPanel({
			activeTab: 0,
			items: [
				this.gridPanel,
				this.summaryPanel = new Ext.Panel({
					layout: "fit",
					title: GO.leavedays.lang.year_summary,
					autoScroll: true
				})
			]
		})
		
		
	];
	
	 
	this.summaryPanel.on('render', function(panel) {
		this._loadYearSummary();
	}, this)
	
	GO.leavedays.UserPanel.superclass.constructor.call(this,config);
	
	this.addEvents({'leavedaySaved':true});
	
}

Ext.extend( GO.leavedays.UserPanel, Ext.Panel, {
	
	_user_name : '',
	
	show : function(config) {
		
		GO.leavedays.UserPanel.superclass.show.call(this);
		
		if(this.gridPanel.store.baseParams['user_id'] != GO.leavedays.activeUserId || this.gridPanel.store.baseParams['year'] != GO.leavedays.activeYear){
			this.gridPanel.store.baseParams['user_id'] = GO.leavedays.activeUserId;
			this.gridPanel.store.baseParams['year'] = GO.leavedays.activeYear;
			this.gridPanel.store.load();

			this._loadYearSummary();

			this._user_name = config['user_name'];
			this.setTitle(GO.leavedays.lang['leavedays']+': '+this._user_name+' ('+GO.leavedays.activeYear+')');
		} else if (!GO.util.empty(config['empty'])) {
			this.gridPanel.store.baseParams['user_id'] = 0;
			this.gridPanel.store.load();
			this._user_name = '';
			this.setTitle(GO.leavedays.lang['leavedays']);
			this._loadYearSummary();
		}
	},
	
	_buildGridPanel : function() {
		
		
		var columns = [{
					header: GO.leavedays.lang['id'],
					dataIndex: 'id',
					width:20,
					hidden: true
				},{
					header: GO.leavedays.lang['firstDate'],
					dataIndex: 'first_date',
					width:90,
					renderer: function(value, metadata, record) {
						if (record.data.has_negative_credit)
							return '<span style="color:red;">'+value+'</span>';
						else
							return value;
					}
				},{
					header: GO.leavedays.lang['lastDate'],
					dataIndex: 'last_date',
					width:90,
					renderer: function(value, metadata, record) {
						if (record.data.has_negative_credit)
							return '<span style="color:red;">'+value+'</span>';
						else
							return value;
					}
				},{
					header: GO.leavedays.lang['type'],
					dataIndex: 'credit_type_name',
					sortable:false,
					width:50,
					align: 'right'
				},{
					header: GO.leavedays.lang['hours'],
					dataIndex: 'n_hours',
					width:50,
					align: 'right',
					renderer: function(value, metadata, record) {
						if (record.data.has_negative_credit)
							return '<span style="color:red;">'+value+'</span>';
						else
							return value;
					}
				},{
					header: GO.leavedays.lang['hoursNationalHolidays'],
					dataIndex: 'n_nat_holiday_hours',
					width:50,
					align: 'right',
					renderer: function(value, metadata, record) {
						if (record.data.has_negative_credit)
							return '<span style="color:red;">'+value+'</span>';
						else
							return value;
					}
				},{
					header: GO.leavedays.lang['strDescription'],
					dataIndex: 'description',
					width:120,
					align: 'right',
					renderer: function(value, metadata, record) {
						if (record.data.has_negative_credit)
							return '<span style="color:red;">'+value+'</span>';
						else
							return value;
					}
				},{
					header: GO.lang['strCtime'],
					dataIndex: 'ctime',
					width: 110,
					align: 'right',
					hidden: true,
					renderer: function(value, metadata, record) {
						if (record.data.has_negative_credit)
							return '<span style="color:red;">'+value+'</span>';
						else
							return value;
					}
				},{
					header: GO.lang['strMtime'],
					dataIndex: 'mtime',
					width: 110,
					align: 'right',
					hidden: true,
					renderer: function(value, metadata, record) {
						if (record.data.has_negative_credit)
							return '<span style="color:red;">'+value+'</span>';
						else
							return value;
					}
				}];
			
		var icons = {
			appr: '<div title="GOED" style="float:left;height:16px;width:16px;" class="btn-ok"></div>',
			disa: '<div class="go-icon-cross"><div style="float:left; height:16px;width:16px;padding-left:3px !important;" class="x-grid3-cell-inner"></div></div>',
			none: '<div style="float:left; height:16px;width:16px;" class="go-important-icon"></div>'
		};
		
		if(GO.leavedays.currentUserIsManager){
			
			var radioRenderer = function(value, meta, r, row, col) {
				if(r.get('manager_user_id') != GO.settings.user_id && !GO.settings.modules.leavedays.write_permission) {
					return '';
				}
				
				
				var id = Ext.id();
				Ext.defer(function () {
					new Ext.form.Radio({
						renderTo: id,
						name: 'ld-status-'+row,
						checked: r.get('status')==columns[col].emptyGroupText,
						width: 75,
						handler: function (me, checked) { 
							
							if(!checked) {
								this.msgWindow.switchbackRadio = me;
								return;
							}
							
							this.msgWindow.onClose = function(scope) {								
								scope.msgWindow.switchbackRadio.setValue(true);
								scope.reasonWhyMsg.setValue('')
							}
							
							this.msgWindow.onSend = function(scope) {
								
								GO.request({
									url:'leavedays/leaveday/update',
									params:{
										id:r.id,
										user_id:r.data.user_id,
										status:columns[col].emptyGroupText,
										reasonWhyMsg: scope.reasonWhyMsg.getValue()
									},
									success:function(){
										 scope.reasonWhyMsg.setValue('')
									}
								});
								
							};
							
							if(columns[col].emptyGroupText == 2) {
								this.msgWindow.show();
								
							} else {
								GO.request({
									url:'leavedays/leaveday/update',
									params:{
										id:r.id,
										user_id:r.data.user_id,
										status:columns[col].emptyGroupText
									},
									success:function(){

									}
								});
							}
							
							
						},
						scope: this
					});
				}, 50, this);
				return String.format('<div id="{0}"></div>', id);
			};
			
			
			columns.push({
				header:icons['appr'],
				width: 30,
				emptyGroupText: 1, //abusing this property to pass value to radio select
				sortable:false,
				hideable:false,
				menuDisabled:true,
				resizable:false,
				renderer:{
					fn: radioRenderer,
					scope: this 
				} 
			});
			columns.push({
				header:icons['disa'],
				width: 30,
				emptyGroupText: 2,
				sortable:false,
				hideable:false,
				menuDisabled:true,
				resizable:false,
				renderer:{
					fn: radioRenderer,
					scope: this 
				} 
			});
			columns.push({
				header:icons['none'],
				width: 30,
				emptyGroupText: 0,
				sortable:false,
				hideable:false,
				menuDisabled:true,
				resizable:false,
				renderer:{
					fn: radioRenderer,
					scope: this 
				} 
			});
		} else {
			columns.push({ 
				header: GO.lang.strStatus, 
				//dataIndex: 'name',
				renderer:function(v, meta, record){

				  if(record.get('status')==0) {
					  return '';// icons['none'];
				  }
				  if(record.get('status')==1) {
					  return icons['appr'];
				  }
				  if(record.get('status')==2) {
					  return icons['disa'];
				  }
			  }
			});
		}
						
		var gridPanelConfig = {
			plugins: this.checkColumn ? this.checkColumn : [],
			autoScroll: true,
			layout: "fit",
			store: new GO.data.JsonStore({
				url: GO.url('leavedays/leaveday/store'),
				remoteSort:true,
				fields: ['id', 'user_id', 'first_date', 'last_date','n_hours', 'n_nat_holiday_hours', 'description','ctime','mtime', 'status', 'has_negative_credit', 'credit_type_name', 'manager_user_id'],
				listeners: {
					load: function() {
						this.enable();
					},
					scope: this
				},
				scope: this
			}),
			noDelete: !GO.settings.modules.leavedays.write_permission,
			paging: true,
			cm: new Ext.grid.ColumnModel({
				defaults:{
					sortable:true
				},
				columns:columns
			}),
			view: new Ext.grid.GridView({
				emptyText: GO.lang['strNoItems']
			}),
			sm: new Ext.grid.RowSelectionModel(),
			loadMask: true,
			clicksToEdit: 1
		};
		
		
			this.addButton = new Ext.Button({
				iconCls: 'btn-add',
				text: GO.lang['cmdAdd'],
				cls: 'x-btn-text-icon',
//				disabled: true,
				handler: function(){
					GO.leavedays.showLeavedayDialog(0);
					
					if(!this.saveListenerAdded){
						this.saveListenerAdded=true;
						GO.leavedays.leavedayDialog.on('save',function(){
							this.gridPanel.store.load();
							this._loadYearSummary();
						}, this);
					}
				},
				scope: this
			});
			this.delButton = new Ext.Button({
				iconCls: 'btn-delete',
				text: GO.lang['cmdDelete'],
				cls: 'x-btn-text-icon',
//				disabled: true,
				handler: function(){
					
//					var  selModel = this.gridPanel.getSelectionModel();
//					Ext.each(selModel.getSelections(), function (record, index) {
//						if(record.get('status') != 0 && !GO.settings.modules.leavedays.write_permission) {
//							
//							selModel.deselectRow(this.gridPanel.getStore().indexOf(record));
//						}
//							
//					}, this);
					
					this.gridPanel.deleteSelected();
				},
				scope: this
			});
			
			gridPanelConfig.tbar = [this.addButton,this.delButton];
		
		gridPanelConfig.title =  GO.leavedays.lang['holiday_request'];
		
		var gridPanel = new GO.grid.GridPanel(gridPanelConfig);
				
		gridPanel.store.on('load',function(){
			this._loadYearSummary();
		}, this);
		
		//if (GO.settings.modules.leavedays.write_permission)
			gridPanel.on('rowdblclick',function(grid,rowIndex,event){
				var record = grid.store.getAt(rowIndex);

				if(record.get('status') != 0 && !GO.settings.modules.leavedays.write_permission)
					return false;
				GO.leavedays.showLeavedayDialog(record.data['id']);
				
				if(!this.saveListenerAdded){
					this.saveListenerAdded=true;
					GO.leavedays.leavedayDialog.on('save',function(){
						this.gridPanel.store.load();
						this._loadYearSummary();
					}, this);
				}

			}, this);
				
		return gridPanel;
		
	},
	
	
	_loadYearSummary : function() {
		
			if(this.summaryPanel.rendered) {
				this.summaryPanel.load({
					url: GO.url('leavedays/user/yearInfo'),
					params: {
						'userId' : GO.leavedays.activeUserId,
						'selectedYear' : GO.leavedays.activeYear
					}
					,scope: this
					,callback: function(panel,success,action) {
						
						if(typeof(this.addButton)=='object')
							this.addButton.setDisabled(GO.util.empty(action.responseText));
						if(typeof(this.delButton)=='object')
							this.delButton.setDisabled(GO.util.empty(action.responseText));
					}
				});
			}
			
	}
	
});