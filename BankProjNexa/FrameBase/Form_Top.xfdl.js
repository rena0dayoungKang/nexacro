(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top");
            this.set_titletext("Form_Top");
            this.set_font("italic 700 15pt/normal \"펜흘림\"");
            this.set_background("lightyellow");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,100);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","35.00","25","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("코스타 은행");
            this.addChild(obj.name, obj);

            obj = new Static("sttMakeAccount","285.00","25","80","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("계좌개설");
            obj.set_font("normal 700 13pt/normal \"펜흘림\"");
            obj.set_color("darkblue");
            this.addChild(obj.name, obj);

            obj = new Static("sttDeposit","405.00","25","50","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("입금");
            obj.set_font("normal 700 13pt/normal \"펜흘림\"");
            obj.set_color("darkblue");
            this.addChild(obj.name, obj);

            obj = new Static("sttWithdraw","480.00","25","50","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("출금");
            obj.set_font("normal 700 13pt/normal \"펜흘림\"");
            obj.set_color("darkblue");
            this.addChild(obj.name, obj);

            obj = new Static("sttAccount","560.00","25","75","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("계좌조회");
            obj.set_font("normal 700 13pt/normal \"펜흘림\"");
            obj.set_color("darkblue");
            this.addChild(obj.name, obj);

            obj = new Static("sttAllAccount","668.00","25","107","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("전체계좌조회");
            obj.set_font("normal 700 13pt/normal \"펜흘림\"");
            obj.set_color("darkblue");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,100,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Top.xfdl", function() {
        var app = nexacro.getApplication();
        this.sttMakeAccount_onclick = function(obj,e)
        {
        	app.mainframe.VFrameSet00.WorkFrame.formurl="FrameBase::Form_MakeAccount.xfdl";
        };

        this.sttAccount_onclick = function(obj,e)
        {
        	app.mainframe.VFrameSet00.WorkFrame.formurl="FrameBase::Form_AccountInfo.xfdl";
        };

        this.sttDeposit_onclick = function(obj,e)
        {
        	app.mainframe.VFrameSet00.WorkFrame.formurl="FrameBase::Form_Deposit.xfdl";
        };

        this.sttWithdraw_onclick = function(obj,e)
        {
        	app.mainframe.VFrameSet00.WorkFrame.formurl="FrameBase::Form_Withdraw.xfdl";
        };

        this.sttAllAccount_onclick = function(obj,e)
        {
        	app.mainframe.VFrameSet00.WorkFrame.formurl="FrameBase::Form_AllAccountInfo.xfdl";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.sttMakeAccount.addEventHandler("onclick",this.sttMakeAccount_onclick,this);
            this.sttDeposit.addEventHandler("onclick",this.sttDeposit_onclick,this);
            this.sttWithdraw.addEventHandler("onclick",this.sttWithdraw_onclick,this);
            this.sttAccount.addEventHandler("onclick",this.sttAccount_onclick,this);
            this.sttAllAccount.addEventHandler("onclick",this.sttAllAccount_onclick,this);
        };
        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
