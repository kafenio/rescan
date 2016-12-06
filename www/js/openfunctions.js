var op = {
  searchAmazon: function() {
    try {
      var ean = document.getElementById('content').innerHTML,
          url = "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords="+ean+"&rh=i%3Aaps%2Ck%3A"+ean;
      window.open(url, '_system');
    } catch(e) {}
  },

  searchGoogle: function() {
    try {
      var content = encodeURIComponent(document.getElementById('content').innerHTML),
          url = "https://www.google.de/#q="+content;
      window.open(url, '_system');
    } catch(e) {}
  },

  inBrowser: function() {
    try {
      var content = document.getElementById('content').innerHTML;
      window.open(content, '_system');
    } catch(e) {}
  },

  intent: function() {
    var message = { text: "Ein Link: "+document.getElementById('content').innerHTML };
    var has_intents = false;

    try {
      has_intents = (device.platform == "iOS" || device.platform == "Android");
    } catch(e) {}
    if (has_intents) {
      window.socialmessage.send(message);
    }
  },

  mailto: function() {
    var subject= "Ein cooler Link";
    var body = "Der Link:\r\n\r\n<a href=\"";
    body += document.getElementById('content').innerHTML;
    body += "\">"+document.getElementById('content').innerHTML+"</a>";
    var uri = "mailto:?subject=";
    uri += encodeURIComponent(subject);
    uri += "&body=";
    uri += encodeURIComponent(body);
    window.open(uri);
  },

  tel: function() {
    window.location.href='tel:'+document.getElementById('content').innerHTML;
  },

  toClipboard: function() {
    var text = document.getElementById('demo').innerHTML;
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
  }
};
