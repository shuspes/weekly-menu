var Storage = (function() {
  var Storage = function(remoteStorage, storageId) {
    this.storageId = storageId || "weeklyMenu";
    this.remoteStorage = remoteStorage;
  }

  Storage.prototype.init = function() {
    if(!this.remoteStorage) return;
    this.remoteStorage.getData().then(result => JSON.stringify(result)).then(result => {
      localStorage.setItem(this.storageId, result);
    }).catch(err => {
      console.log("some error with local storage: " + err);
    });
  }

  return Storage;
})();