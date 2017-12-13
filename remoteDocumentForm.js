var AddRemoteDocumentForm = (function() {
  var AddRemoteDocumentForm = function(container) {
    this.container = container;
    this.formTemplate = [
      '<div class="css-addRemoteDoc-container">',
      '<input type="text">',
      '<button>Open</button>',
      '</div>'
    ].join("");
  };

  AddRemoteDocumentForm.prototype.init = function() {
    this.container.innerHTML = this.formTemplate;
  };

  return AddRemoteDocumentForm;
})();