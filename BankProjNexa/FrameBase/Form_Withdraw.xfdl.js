(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("From_Withdraw");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("id_title_withdraw","625.00","20","85","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("* 출  금 *");
            obj.set_font("normal bold 14pt/normal \"펜흘림\"");
            this.addChild(obj.name, obj);

            obj = new Div("divBox","426.00","95","469","215",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("border-box #ffffff");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","41.00","33","105","30",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("0");
            obj.set_text("계좌번호");
            obj.set_textAlign("center");
            obj.set_font("normal 700 13pt/normal \"맑은 고딕\"");
            this.divBox.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","41.00","82","105","30",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("1");
            obj.set_text("출금액");
            obj.set_textAlign("center");
            obj.set_font("normal 700 13pt/normal \"맑은 고딕\"");
            this.divBox.addChild(obj.name, obj);

            obj = new Edit("edtWithdrawAccId","173.00","28","220","35",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("2");
            obj.set_font("normal 12pt/normal \"맑은고딕\"");
            this.divBox.addChild(obj.name, obj);

            obj = new Edit("edtWithdrawMoney","172.00","80","220","35",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("3");
            obj.set_font("normal 12pt/normal \"맑은고딕\"");
            this.divBox.addChild(obj.name, obj);

            obj = new Button("btnWithdraw","174.00","135","120","50",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("4");
            obj.set_text("출 금");
            obj.set_font("normal 12pt/normal \"맑은고딕\"");
            obj.set_borderRadius("10px");
            this.divBox.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBox.form
            obj = new Layout("default","",0,0,this.divBox.form,function(p){});
            this.divBox.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Withdraw.xfdl", function() {

        this.divBox_btnWithdraw_onclick = function(obj,e)
        {
        	var id="withdraw";
        	var url="http://localhost:8080/bank/nexaWithdraw";
        	var reqDs="";
        	var resDs="";
        	var args=`accId=${this.divBox.form.edtWithdrawAccId.text} money=${this.divBox.form.edtWithdrawMoney.text}`;
        	var callback="receive_withdraw";
        	this.transaction(id, url, reqDs, resDs, args, callback);
        };

        this.receive_withdraw = function(id, code, message) {
        	if(code == 0) {
        		this.alert("출금 성공");
        	} else {
        		this.alert("출금 실패");
        		trace(message);
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divBox.form.btnWithdraw.addEventHandler("onclick",this.divBox_btnWithdraw_onclick,this);
        };
        this.loadIncludeScript("Form_Withdraw.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
