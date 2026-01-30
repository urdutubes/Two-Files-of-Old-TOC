<!-- ====== TOC PLACEHOLDERS ====== -->
<div id="toc-loading">
  Loading content, please wait...<br />
  <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzrpEIXMmX9ir6xbk8AmSimu3owyGXMaohhlXghq1sC87BInHrw5VGnkavYXcdSf-ZSL59Zc3JIi5jMbK6y9ODXQ2QUvhBGlasZktNDuJaiHFtHpzZvpGJcXDwM6E2dKKYHmFb44xVPrpuio4DFeQwhU7RmX13SgVAuhZQCOOYSLfWLWguU5hXhQNsDgio/s100/loading.gif" />
</div>

<div id="toc-header"></div>
<div id="toc-display"></div>
<div id="toc"></div>
<div id="toc-footer"></div>

<div id="donotremove" style="display:none;">
  <a href="https://townoftwilight.blogspot.com/2012/02/advanced-blogspot-table-of-contents.html"></a>
</div>

<script>
// ====== VARIABLES ======
var labels = [];
var blogLabels = [];
var type = 'cloud'; // cloud or dropdown
var sorting = 'datenewest';
var newestFlags = 10;
var numDisplay = 20;
var adjacents = 2;
var exception = false;
var slwep = true;
var incLabelAll = true;

var postTitle = [];
var postURL = [];
var postDate = [];
var postDF = [];
var postUpdate = [];
var postUDF = [];
var postSummary = [];
var postLabels = [];
var labeled = [];

var postFilter = "";
var searchQuery = "";
var searchRegex;
var access;
var page;
var tempPage = 1;
var display;

// ====== INITIAL DISPLAY FUNCTION ======
function displaydata() {
  // Add loading icons for newest posts
  for (var i = 0; i < postTitle.length; i++) {
    if (i < newestFlags) {
      labeled.push('<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzrpEIXMmX9ir6xbk8AmSimu3owyGXMaohhlXghq1sC87BInHrw5VGnkavYXcdSf-ZSL59Zc3JIi5jMbK6y9ODXQ2QUvhBGlasZktNDuJaiHFtHpzZvpGJcXDwM6E2dKKYHmFb44xVPrpuio4DFeQwhU7RmX13SgVAuhZQCOOYSLfWLWguU5hXhQNsDgio/s100/loading.gif" />');
    } else {
      labeled.push("");
    }
  }

  sortBy = sorting;
  sortPosts(sortBy);
  access = 1;
  page = 1;
  display = checkdisplay(numDisplay);
  displayItem();

  if (incLabelAll) {
    displayToc(postFilter);
  } else if (!exception && slwep && labels.length > 0) {
    labels.sort();
    postFilter = labels[0];
    displayToc(postFilter);
  } else {
    blogLabels.sort();
    postFilter = blogLabels[0];
    displayToc(postFilter);
  }
}

// ====== CHECK DONOTREMOVE ======
function ju67iO() {
  var _1 = document.getElementById("donotremove");
  var _2 = _1.getElementsByTagName("a");
  if (_2[0].href.length == 83) {
    displaydata();
  }
}
ju67iO();

// ====== DISPLAY SEARCH BOX ======
function displayItem() {
  var html = '<table width="100%"><tr>';
  html += '<td id="ds-id1"><form>Title Search : <input type="text" id="toc-search" onkeyup="searchPosts()" /></form></td>';
  html += '<td id="ds-id2" align="right"></td></tr></table>';
  document.getElementById("toc-display").innerHTML = html;
}

// ====== FILTER, SELECT, PAGINATION ======
function filterPosts(filter) {
  sortBy = sorting;
  sortPosts(sortBy);
  access = 1;
  page = 1;
  postFilter = filter;
  displayToc(postFilter);
}

function selectFilterPosts() {
  var _5 = document.tocForm;
  var filter = _5.tocList.options[_5.tocList.selectedIndex].value;
  filterPosts(filter);
}

function selectPage(cp) {
  var x = document.getElementById("toc-display").offsetLeft;
  var y = document.getElementById("toc-display").offsetTop;
  page = cp;
  tempPage = cp;
  displayToc(postFilter);
  window.scroll(x, y);
}

function selectDisplay() {
  var _6 = document.formDisplay;
  var displayTemp = _6.listDisplay.options[_6.listDisplay.selectedIndex].value;
  display = checkdisplay(displayTemp);
  page = 1;
  displayToc(postFilter);
}

function checkdisplay(cd) {
  return (cd == "All") ? postTitle.length : parseInt(cd);
}

// ====== SEARCH POSTS ======
function searchPosts() {
  searchQuery = document.getElementById("toc-search").value;
  searchRegex = new RegExp(searchQuery, "i");
  page = (searchQuery != "") ? 1 : tempPage;
  displayToc(postFilter);
}

// ====== SORT POSTS ======
function sortPosts(type) {
  function swap(x, y) {
    var arrays = [postTitle, postDate, postDF, postUpdate, postUDF, postURL, postSummary, postLabels, labeled];
    arrays.forEach(function(arr) {
      var tmp = arr[x];
      arr[x] = arr[y];
      arr[y] = tmp;
    });
  }

  for (var i = 0; i < postTitle.length - 1; i++) {
    for (var j = i + 1; j < postTitle.length; j++) {
      if ((type == "titleasc" && postTitle[i] > postTitle[j]) ||
          (type == "titledesc" && postTitle[i] < postTitle[j]) ||
          (type == "datenewest" && postDF[i] < postDF[j]) ||
          (type == "dateoldest" && postDF[i] > postDF[j]) ||
          (type == "updatenewest" && postUDF[i] < postUDF[j]) ||
          (type == "updateoldest" && postUDF[i] > postUDF[j])) {
        swap(i, j);
      }
    }
  }
}

// ====== TOC DISPLAY ======
function displayToc(filter) {
  // ... full display logic remains same as your code, including pagination and results
  // (I can write it fully fixed if you want, ready for blogger copy-paste)
}

// ====== SORT TOGGLES ======
function toggleTitleSort() { sortBy = (sortBy=="titleasc")?"titledesc":"titleasc"; sortPosts(sortBy); access=2; displayToc(postFilter); }
function toggleDateSort()  { sortBy = (sortBy=="datenewest")?"dateoldest":"datenewest"; sortPosts(sortBy); access=2; displayToc(postFilter); }
function toggleUpdateSort(){ sortBy = (sortBy=="updatenewest")?"updateoldest":"updatenewest"; sortPosts(sortBy); access=2; displayToc(postFilter); }

// ====== SAFARI FIX ======
function handleSafari() {
  if (navigator.appVersion.search(/safari/i) == -1 || navigator.appVersion.search(/version/i) == -1){
    addCss("div#toc-footer a, div#toc-footer span{ display:inline-table; }");
  }
}

function addCss(css) {
  var style = document.createElement("style");
  style.type = "text/css";
  if (style.styleSheet) style.styleSheet.cssText = css;
  else style.appendChild(document.createTextNode(css));
  document.getElementsByTagName("head")[0].appendChild(style);
}

// ====== REMOVE LOADING ======
function loading() { document.getElementById("toc-loading").remove(); }

handleSafari();
loading();
</script>
