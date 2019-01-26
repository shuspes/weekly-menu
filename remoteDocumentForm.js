var AddRemoteDocumentForm = (function() {
  var AddRemoteDocumentForm = function(container) {
    this.container = container;
    this.formTemplate = [
      '<div id="addRemoteDocumentForm" class="css-addRemoteDoc-container">',
      '<input type="text">',
      '<button>Open</button>',
      '</div>'
    ].join("");
  };

  AddRemoteDocumentForm.prototype.init = function() { //NOTE: app should clear storage by button click
    this.container.innerHTML = this.formTemplate;
    this.container
        .querySelector("#addRemoteDocumentForm")
        .querySelector("button")
        .addEventListener("click", this.load.bind(this));
  };

  AddRemoteDocumentForm.prototype.load = function() {
    var remoteDocument = this.container.querySelector("#addRemoteDocumentForm").querySelector("input").value;
    var isValidRemoteDoc = this.isValid(remoteDocument);
    if(isValidRemoteDoc) {
      
    } else {
      console.log("can not load " + remoteDocument + " document");      
    }
    
  };

  AddRemoteDocumentForm.prototype.isValid = function(value) {
    return Boolean(value) && value.trim() !== "";
  }

  return AddRemoteDocumentForm;
})();