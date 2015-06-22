$(function() {
    var toggle = $("#toggle");
    var gosetting = $("#gosetting");
    
    toggle.attr("checked", gooDB.getIsRedirect());

    gosetting.click(function() {
        //在popup页面无法使用window.confirm时，弹出框会随着popup页面消失而消失
        //所以，我这里把confirm调用放到了background script中
        chrome.runtime.sendMessage({gosetting: gooDB.getIsRedirect()});
    });
    toggle.click(function() {
        chrome.runtime.sendMessage({isRedirect: this.checked});
    });
});