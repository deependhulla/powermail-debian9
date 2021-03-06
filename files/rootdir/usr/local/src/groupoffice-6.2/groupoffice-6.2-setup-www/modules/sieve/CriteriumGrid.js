/**
 * Copyright Intermesh
 *
 * This file is part of Group-Office. You should have received a copy of the
 * Group-Office license along with Group-Office. See the file /LICENSE.TXT
 *
 * If you have questions write an e-mail to info@intermesh.nl
 *
 * @version $Id: CriteriumGrid.js 21460 2017-09-20 09:21:26Z wsmits $
 * @copyright Copyright Intermesh
 * @author Wesley Smits <wsmits@intermesh.nl>
 * @author WilmarVB <wilmar@intermesh.nl>
 */

GO.sieve.CriteriumGrid = function(config){
	if(!config)
	{
		config = {};
	}
	config.autoScroll=true;
	config.height=180;
	config.style='margin: 5px;';
	config.border=true;
	config.cls = 'go-grid3-hide-headers';
	var fields ={
		fields:['test','not','type','arg','arg1','arg2','text','part'],
		header: false,
		columns:[
//		{
//			header: GO.sieve.lang.test,
//			dataIndex: 'test'
//		},{
//			header: GO.sieve.lang.not,
//			dataIndex: 'not'
//		},{
//			header: GO.sieve.lang.type,
//			dataIndex: 'type'
//		},{
//			header: GO.sieve.lang.arg,
//			dataIndex: 'arg'
//		},{
//			header: GO.sieve.lang.arg1,
//			dataIndex: 'arg1'
//		},{
//			header: GO.sieve.lang.arg2,
//			dataIndex: 'arg2'
//		},
		{
			header:false,
			dataIndex:'text',
			renderer:function(value, metaData, record, rowIndex, colIndex, store){
				
				var txtToDisplay = '';

				switch(record.data.test)
				{
					case 'currentdate':
				
//						id: 1, test: "currentdate", not: false, type: "is", arg: Date 2015-08-19T22:00:00.000Z, arg1: "", arg2: ""
						switch(record.data.type){
							case 'value-le':
								txtToDisplay = GO.sieve.lang.currentdate+' '+GO.sieve.lang.before+' '+record.data.arg;
								break;
							case 'is':
								txtToDisplay = GO.sieve.lang.currentdate+' '+GO.sieve.lang.is+' '+record.data.arg;
								break;
							case 'value-ge':
								txtToDisplay = GO.sieve.lang.currentdate+' '+GO.sieve.lang.after+' '+record.data.arg;
								break;
						}

					break;
						
					case 'body':
						if(record.data.type == 'contains')
						{
							if(record.data.not)
							{
								txtToDisplay = GO.sieve.lang.bodycontainsnot+' '+record.data.arg;
							} else {
								txtToDisplay = GO.sieve.lang.bodycontains+' '+record.data.arg;
							}
						}
						break;
					case 'header':
						if(record.data.type == 'contains')
						{
							if(record.data.not)
							{
								if(record.data.arg1 == 'Subject')
									txtToDisplay = GO.sieve.lang.subjectcontainsnot+' '+record.data.arg2;
								else if(record.data.arg1 == 'From')
									txtToDisplay = GO.sieve.lang.fromcontainsnot+' '+record.data.arg2;
								else if(record.data.arg1 == 'To')
									txtToDisplay = GO.sieve.lang.tocontainsnot+' '+record.data.arg2;
								else
									txtToDisplay = GO.sieve.lang.custommailheader+" "+record.data.arg1+" "+GO.sieve.lang.notcontains+" "+record.data.arg2;
							}
							else
							{
								if(record.data.arg1 == 'Subject')
									txtToDisplay = GO.sieve.lang.subjectcontains+' '+record.data.arg2;
								else if(record.data.arg1 == 'From')
									txtToDisplay = GO.sieve.lang.fromcontains+' '+record.data.arg2;
								else if(record.data.arg1 == 'To')
									txtToDisplay = GO.sieve.lang.tocontains+' '+record.data.arg2;
								else if(record.data.arg1 == 'X-Spam-Flag')
									txtToDisplay = GO.sieve.lang.markedasspam;
								else
									txtToDisplay = GO.sieve.lang.custommailheader+" "+record.data.arg1+" "+GO.sieve.lang.contains+" "+record.data.arg2;
							}
						}
						else if(record.data.type == 'is')
						{
							if(record.data.not)
							{
								if(record.data.arg1 == 'Subject')
									txtToDisplay = GO.sieve.lang.subjectequalsnot+' '+record.data.arg2;
								else if(record.data.arg1 == 'From')
									txtToDisplay = GO.sieve.lang.fromequalsnot+' '+record.data.arg2;
								else if(record.data.arg1 == 'To')
									txtToDisplay = GO.sieve.lang.toequalsnot+' '+record.data.arg2;
								else
									txtToDisplay = GO.sieve.lang.custommailheader+" "+record.data.arg1+" "+GO.sieve.lang.notis +" "+record.data.arg2;
							}
							else
							{
								if(record.data.arg1 == 'Subject')
									txtToDisplay = GO.sieve.lang.subjectequals+' '+record.data.arg2;
								else if(record.data.arg1 == 'From')
									txtToDisplay = GO.sieve.lang.fromequals+' '+record.data.arg2;
								else if(record.data.arg1 == 'To')
									txtToDisplay = GO.sieve.lang.toequals+' '+record.data.arg2;
								else
									txtToDisplay = GO.sieve.lang.custommailheader+" "+record.data.arg1+" "+GO.sieve.lang.is +" "+record.data.arg2;
							}
						}
						break;

					case 'exists':
						if(record.data.not)
						{
							if(record.data.arg == 'Subject')
								txtToDisplay = GO.sieve.lang.subjectexistsnot;
							else if(record.data.arg == 'From')
								txtToDisplay = GO.sieve.lang.fromexistsnot;
							else if(record.data.arg == 'To')
								txtToDisplay = GO.sieve.lang.toexistsnot;
							else
								txtToDisplay = GO.sieve.lang.custommailheader+" "+record.data.arg+" "+GO.sieve.lang.notexists;
						}
						else
						{
							if(record.data.arg == 'Subject')
								txtToDisplay = GO.sieve.lang.subjectexists;
							else if(record.data.arg == 'From')
								txtToDisplay = GO.sieve.lang.fromexists;
							else if(record.data.arg == 'To')
								txtToDisplay = GO.sieve.lang.toexists;
							else
								txtToDisplay = GO.sieve.lang.custommailheader+" "+record.data.arg+" "+GO.sieve.lang.notexists;
						}
						break;

					case 'true':	
						txtToDisplay = 'Alle';
						break;

					case 'size':
						if(record.data.type == 'under')
							txtToDisplay = GO.sieve.lang.sizesmallerthan+' '+record.data.arg;
						else
							txtToDisplay = GO.sieve.lang.sizebiggerthan+' '+record.data.arg;
						break;
						
					default:
						txtToDisplay = GO.sieve.lang.errorshowtext;
						break;
				}
				return txtToDisplay;
			}
		}
	]};
	
	var columnModel =  new Ext.grid.ColumnModel({
		columns:fields.columns
	});

	config.store = new GO.data.JsonStore({
	    root: 'criteria',
	    id: 'id',
	    totalProperty:'total',
	    fields: fields.fields,
	    remoteSort: true
	});
	enableDragDrop:true,
	config.enableDragDrop = true;
	config.ddGroup = 'SieveTestDD';
	config.cm=columnModel;
	config.view=new Ext.grid.GridView({
		autoFill: true,
		forceFit: true,
		emptyText: GO.sieve.lang['pleaseAddCriterium']
	});
	config.sm=new Ext.grid.RowSelectionModel();
	config.loadMask=true;
	config.tbar=[{
			iconCls: 'btn-add',
			text: GO.lang['cmdAdd'],
			cls: 'x-btn-text-icon',
			handler: function(){this.showCriteriumCreatorDialog();},
				scope: this
		},{
			iconCls: 'btn-delete',
			text: GO.lang['cmdDelete'],
			cls: 'x-btn-text-icon',
			handler: function(){this.deleteSelected();},
				scope: this
		}];

	GO.sieve.CriteriumGrid.superclass.constructor.call(this, config);

	this.on('render',function(){
	
		//enable row sorting
		var DDtarget = new Ext.dd.DropTarget(this.getView().mainBody,
		{
			ddGroup : 'SieveTestDD',
			copy:false,
			notifyDrop : this.onNotifyDrop.createDelegate(this)
		});
	}, this);
	
	this.on('rowdblclick', function(grid, index, e){
//		var record = this.store.getAt(index);
		this.showCriteriumCreatorDialog(index);
	},this);
};

Ext.extend(GO.sieve.CriteriumGrid, GO.grid.GridPanel,{
	deleteSelected : function(){this.store.remove(this.getSelectionModel().getSelections());},
	
	onNotifyDrop : function(dd, e, data)
	{
		var rows=this.selModel.getSelections();
		var dragData = dd.getDragData(e);
		var cindex=dragData.rowIndex;
		if(cindex=='undefined')
		{
			cindex=this.store.data.length-1;
		}

		for(i = 0; i < rows.length; i++)
		{
			var rowData=this.store.getById(rows[i].id);

			if(!this.copy){
				this.store.remove(this.store.getById(rows[i].id));
			}

			this.store.insert(cindex,rowData);
		}

		//save sort order
		var filters = {};

		for (var i = 0; i < this.store.data.items.length;  i++)
		{
			filters[this.store.data.items[i].get('id')] = i;
		}
	},
	
	_saveCriteriumRecord : function(values) {
		if(values.id<0){
			var record = new GO.sieve.CriteriumRecord(values)
			record.set('id',this.store.getCount());
			this.store.insert( this.store.getCount(), record);
		}
		else
		{
			var record = this.store.getAt(values.id);
			Ext.apply(record.data,values);
			record.commit();
		}
	},
	
	showCriteriumCreatorDialog : function(recordId) {
		if (!this.criteriumCreatorDialog) {
			this.criteriumCreatorDialog = new GO.sieve.CriteriumCreatorDialog();
			this.criteriumCreatorDialog.on('criteriumPrepared',function(critValues){
				this._saveCriteriumRecord(critValues);
			},this);
		}
		
		if (recordId>=0) {
			var record = this.store.getAt(recordId);
			record.set('id',recordId);
			this.criteriumCreatorDialog.show(record);
		} else {
			var record = new Ext.data.Record();
			record.set('id',-1);
			this.criteriumCreatorDialog.show(record);
		}
	}
});