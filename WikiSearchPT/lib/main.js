// Import the APIs we need.
var contextMenu = require("context-menu");
var tabBrowser = require("tab-browser");
 
exports.main = function(options, callbacks) {
  console.log(options.loadReason);
 
  // Create a new context menu item.
  var menuItem = contextMenu.Item({
    label: "Pesquisar no Wikipédia",
    // Show this item when a selection exists.
    context: contextMenu.SelectionContext(),
    // When this item is clicked, post a message back with the selection
    contentScript: 'self.on("click", function () {' +
                   '  var text = window.getSelection().toString();' +
                   '  self.postMessage(text);' +
                   '});',
    // When we receive a message, look up the item
    onMessage: function (item) {
      console.log('looking up "' + item + '"');
      lookup(item);
    }
  });
};
 
function lookup(item) {
  wikipanel = tabBrowser.addTab("http://pt.wikipedia.org/w/index.php?title=" +
                item, {
	onLoad: function(tab) {
    console.log("tab is open.");
   }                
  }
)};
