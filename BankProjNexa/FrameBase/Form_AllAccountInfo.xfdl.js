(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_AllAccountInfo");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAccList", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"balance\" type=\"INT\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("id_title_accountInfo","600.00","20","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("* 계좌조회 *");
            obj.set_font("normal bold 14pt/normal \"펜흘림\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAccList","337.00","90","633","305",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_font("normal 12pt/normal \"맑은고딕\"");
            obj.set_binddataset("dsAccList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"181\"/><Column size=\"144\"/><Column size=\"146\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계좌번호\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"잔액\"/><Cell col=\"3\" text=\"구분\"/><Cell col=\"4\" text=\"등급\"/></Band><Band id=\"body\"><Cell text=\"bind:id\"/><Cell col=\"1\" text=\"bind:name\"/><Cell col=\"2\" text=\"bind:balance\"/><Cell col=\"3\" text=\"bind:type\"/><Cell col=\"4\" text=\"bind:grade\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("Form_AllAccountInfo.xfdl", function() {

        this.dsAccList_onload = function(obj,e)
        {
        	var id="allAccInfo";
        	var url="http://localhost:8080/bank/nexaAllAccountInfo";
        	var reqDs="";
        	var resDs="dsAccList=accs";
        	var args="";
        	var callback="receive_allAccountInfo";
        	this.transaction(id, url, reqDs, resDs, args, callback);
        };

        this.receive_allAccountInfo = function(id, code, message) {
        	if(code==0) {
        		this.alert("전체 계좌조회 성공");
        	} else {
        		this.alert("전체 계좌조회 실패");
        		trace(message);
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsAccList.addEventHandler("onload",this.dsAccList_onload,this);
        };
        this.loadIncludeScript("Form_AllAccountInfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
