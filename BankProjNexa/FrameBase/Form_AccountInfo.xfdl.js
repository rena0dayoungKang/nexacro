(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_AccountInfo");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAccInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"balance\" type=\"INT\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBox","426.00","95","469","405",null,null,null,null,null,null,this);
            obj.set_taborder("0");
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

            obj = new Static("Static00_00","43.00","104","105","30",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("1");
            obj.set_text("이름");
            obj.set_font("normal bold 14pt/normal \"펜흘림\"");
            this.divBox.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","41.00","169","105","30",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("2");
            obj.set_text("입금액");
            obj.set_font("normal bold 14pt/normal \"펜흘림\"");
            this.divBox.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","38.00","229","105","30",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("3");
            obj.set_text("구분");
            obj.set_font("normal bold 14pt/normal \"펜흘림\"");
            this.divBox.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","38.00","289","105","30",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("4");
            obj.set_text("등급");
            obj.set_font("normal bold 14pt/normal \"펜흘림\"");
            this.divBox.addChild(obj.name, obj);

            obj = new TextArea("edtAccInfoName","158.00","104","229","35",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.divBox.addChild(obj.name, obj);

            obj = new TextArea("edtAccInfoMoney","158.00","169","229","35",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.divBox.addChild(obj.name, obj);

            obj = new TextArea("edtAccInfoType","158.00","227","229","35",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.divBox.addChild(obj.name, obj);

            obj = new TextArea("edtAccInfoGrade","158.00","287","229","35",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.divBox.addChild(obj.name, obj);

            obj = new Button("btnSearchAccount","204","347","130","38",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("9");
            obj.set_text("계좌조회");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            this.divBox.addChild(obj.name, obj);

            obj = new Edit("edtAccInfoId","160","34","232","36",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("10");
            this.divBox.addChild(obj.name, obj);

            obj = new Static("sttAccountTitle","600.00","20","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("* 계좌조회 *");
            obj.set_font("normal bold 14pt/normal \"펜흘림\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBox.form
            obj = new Layout("default","",0,0,this.divBox.form,function(p){});
            this.divBox.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,670,this,function(p){});
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_AccountInfo.xfdl", function() {

        this.divBox_btnSearchAccount_onclick = function(obj,e)
        {
        	var id="accInfo";
        	var url="http://localhost:8080/bank/nexaAccountInfo";
        	var reqDs="";
        	var resDs="dsAccInfo=acc";
        	var args=`accId=${this.divBox.form.edtAccInfoId.text}`;
        	var callback="receive_accountInfo";
        	this.transaction(id, url, reqDs, resDs, args, callback);

        };

        this.receive_accountInfo = function(id, code, message) {
        	if(code==0) {
        		this.alert("계좌조회 성공");
        		this.divBox.form.edtAccInfoId.value = this.dsAccInfo.getColumn(0, 0);
        		this.divBox.form.edtAccInfoName.value = this.dsAccInfo.getColumn(0, 1);
        		this.divBox.form.edtAccInfoMoney.value = this.dsAccInfo.getColumn(0, 2);
        		this.divBox.form.edtAccInfoType.value = this.dsAccInfo.getColumn(0, 3);
        		this.divBox.form.edtAccInfoGrade.value = this.dsAccInfo.getColumn(0, 4);
        	} else {
        		this.alert("계좌조회 실패");
        		trace(message);
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divBox.form.btnSearchAccount.addEventHandler("onclick",this.divBox_btnSearchAccount_onclick,this);
        };
        this.loadIncludeScript("Form_AccountInfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
