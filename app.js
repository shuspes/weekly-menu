(function() {
  var remoteDocument = "weeklyMenuRemoteDocument";
  var storageId = "weeklyMenu";
  var rootElement = document.getElementById("weeklyMenuApp");

  var page = getPage();  

  var storedRemoteDocument = localStorage.getItem(remoteDocument);
  if(storedRemoteDocument && storedRemoteDocument !== "") {
    // console.log("display app");
    if(page === "") {
      page = "Generator";
      window.location.hash = page;
    }
  } else {
    // console.log("display add form");
    page = "InitApplication";
  }
  loadPage(page);   
  
  function getPage() {
    return window.location.hash.split('#').pop();
  }

  function openRemoteDocumentForm() {
    console.log("create remote document form");

    var remoteDocumentForm = new AddRemoteDocumentForm(rootElement);
    remoteDocumentForm.init();
  }

  function openProductList() {
    console.log("open product list");
  }

  function openGeneratorPage() {
    console.log("open menu generator");
  }

  function loadPage(page) {
    console.log("rootElement",rootElement);
    rootElement.innerHTML = "";
    if(page === "InitApplication") {
      openRemoteDocumentForm();
    } else if(page === "List") {
      openProductList();
    } else if(page === "Generator") {
      openGeneratorPage();
    }
  }

  window.addEventListener('hashchange', () => handleUrl());
  
  function handleUrl() {
      var page = getPage();
      loadPage(page);
  }

  document.body.addEventListener('click', (ev) => {
    if(!ev.target.matches('a')) { //NOTE: maybe remove this check
        return;
    }
    ev.preventDefault();
    var url = ev.target.getAttribute('href');
    window.location.hash = url;
  });
})();