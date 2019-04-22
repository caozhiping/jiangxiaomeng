function getUrl() {
  
    //获取单选按钮的值
    var line = $("input[name='line']:checked").val();
    var filmUrl = $("#filmUrl").val();
    localStorage.setItem("bofangUrl", line + filmUrl);
    window.location.href = "bofang.html";
  
}