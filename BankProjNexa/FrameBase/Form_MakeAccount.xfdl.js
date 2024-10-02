(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_MakeAccount");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMakeAccount", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"20\"/><Column id=\"name\" type=\"STRING\" size=\"50\"/><Column id=\"money\" type=\"INT\" size=\"20\"/><Column id=\"type\" type=\"STRING\" size=\"20\"/><Column id=\"grade\" type=\"STRING\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sttAccountTitle","600","20","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("* 계좌개설 *");
            obj.set_font("normal bold 14pt/normal \"펜흘림\"");
            this.addChild(obj.name, obj);

            obj = new Div("divBox","426","95","469","365",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_background("#ffffff border-box");
            obj.set_border("1px solid lightgray ");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","41","33","105","30",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("0");
            obj.set_text("계좌번호");
            obj.set_font("normal bold 14pt/normal \"펜흘림\"");
            this.divBox.addChild(obj.name, obj);

            obj = new Static("Static00_00","41","78","105","30",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("1");
            obj.set_text("이름");
            obj.set_font("normal bold 14pt/normal \"펜흘림\"");
            this.divBox.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","41","122","105","30",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("2");
            obj.set_text("입금액");
            obj.set_font("normal bold 14pt/normal \"펜흘림\"");
            this.divBox.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","41.00","171","105","30",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("3");
            obj.set_text("구분");
            obj.set_font("normal bold 14pt/normal \"펜흘림\"");
            this.divBox.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","41","221","105","30",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("4");
            obj.set_text("등급");
            obj.set_font("normal bold 14pt/normal \"펜흘림\"");
            this.divBox.addChild(obj.name, obj);

            obj = new Edit("edtMakeAccId","173","28","220","35",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("5");
            obj.set_font("normal 12pt/normal \"맑은고딕\"");
            this.divBox.addChild(obj.name, obj);

            obj = new Edit("edtMakeName","172","74","220","35",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("6");
            obj.set_font("normal 12pt/normal \"맑은고딕\"");
            this.divBox.addChild(obj.name, obj);

            obj = new Edit("edtMakeMoney","172.00","120","220","35",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("7");
            obj.set_font("normal 12pt/normal \"맑은고딕\"");
            this.divBox.addChild(obj.name, obj);

            obj = new Radio("rdoSect","174","164","189","50",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("8");
            obj.set_font("normal 12pt/normal \"맑은고딕\"");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divBox_form_rdoSect_innerdataset = new nexacro.NormalDataset("divBox_form_rdoSect_innerdataset", obj);
            divBox_form_rdoSect_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">normal</Col><Col id=\"datacolumn\">일반계좌</Col></Row><Row><Col id=\"codecolumn\">special</Col><Col id=\"datacolumn\">특수계좌</Col></Row></Rows>");
            obj.set_innerdataset(divBox_form_rdoSect_innerdataset);
            obj.set_text("일반계좌");
            obj.set_value("normal");
            obj.set_index("0");
            this.divBox.addChild(obj.name, obj);

            obj = new Combo("cmbMakeGrade","167","219","226","35",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("normal 12pt/normal \"맑은고딕\"");
            var divBox_form_cmbMakeGrade_innerdataset = new nexacro.NormalDataset("divBox_form_cmbMakeGrade_innerdataset", obj);
            divBox_form_cmbMakeGrade_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">VIP</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">Gold</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">Silver</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">Normal</Col></Row></Rows>");
            obj.set_innerdataset(divBox_form_cmbMakeGrade_innerdataset);
            obj.set_text("VIP");
            obj.set_value("1");
            obj.set_index("0");
            this.divBox.addChild(obj.name, obj);

            obj = new Button("btnMakeAccount","174","285","120","50",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("10");
            obj.set_text("계좌개설");
            obj.set_font("normal 12pt/normal \"맑은고딕\"");
            obj.set_borderRadius("10px");
            this.divBox.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBox.form
            obj = new Layout("default","",0,0,this.divBox.form,function(p){});
            this.divBox.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,670,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_MakeAccount.xfdl", function() {
        this.divBox_btnMakeAccount_onclick = function(obj,e)
        {
        	var row = this.dsMakeAccount.addRow();
        	this.dsMakeAccount.setColumn(row, "id", this.divBox.form.edtMakeAccId.text);
        	this.dsMakeAccount.setColumn(row, "name", this.divBox.form.edtMakeName.text);
        	this.dsMakeAccount.setColumn(row, "money", this.divBox.form.edtMakeMoney.text);
        	this.dsMakeAccount.setColumn(row, "type", this.divBox.form.rdoSect.text);
        	if(this.divBox.form.rdoSect.text=="특수계좌") {
        		this.dsMakeAccount.setColumn(row,"grade", this.divBox.form.cmbMakeGrade.text);
        	} else {
        		this.dsMakeAccount.setColumn(row,"grade", "");
        	}

        	var id="makeAccount";
        	var url="http://localhost:8080/bank/nexaMakeAccount";
        	var reqDs="acc=dsMakeAccount";
        	var resDs="";
        	var args="";
        	var callback="receive_makeAccount";

        	this.transaction(id,url,reqDs,resDs,args,callback);
        };

        this.receive_makeAccount = function(id,code,message) {
        	if(code==0) {
        		alert("계좌개설 성공");
        	} else {
        		alert("계좌개설 실패");
        		trace(message);
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divBox.form.btnMakeAccount.addEventHandler("onclick",this.divBox_btnMakeAccount_onclick,this);
        };
        this.loadIncludeScript("Form_MakeAccount.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
