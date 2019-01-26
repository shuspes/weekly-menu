var RemoteStorage = (function() {
  var RemoteStorage = function(remoteDocument) {
    this.remoteDocumentId = "weeklyMenuRemoteDocument";
    this.remoteDocument = remoteDocument;    
  };

  RemoteStorage.prototype.getRemoteDocument = function() {
    this.remoteDocument = localStorage.getItem(this.remoteDocumentId);
    return this.remoteDocument;
  };

  RemoteStorage.prototype.getData = function() {
    return fetch(this.remoteDocument).then(result => result.json()).catch(err => {
      console.log("Some error with remote document: " + err);
      return Promise.reject();
    });
  };

  return RemoteStorage;
})();
