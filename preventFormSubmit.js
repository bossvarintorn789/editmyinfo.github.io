  /**ป้องกันการ submit หน้าว่าง */
  function preventFormSubmit() {
    var forms = document.querySelectorAll("form");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", function (event) {
        event.preventDefault();
      });
    }
  }
  window.addEventListener("load", preventFormSubmit);