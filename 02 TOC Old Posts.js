<!-- ====== TOC VARIABLES ====== -->
<script>
var labels=[];
var type='cloud';
var sorting='datenewest';
var numChars=250;
var newestFlags=10;
var numDisplay=20;
var adjacents=2;
var exception=false;
var slwep=true;
var incLabelAll=true;

var postFilter="";
var searchQuery="";
var searchRegex;
var access;
var page;
var tempPage=1;
var display;

// Post data arrays (populated from JSON feed)
var postTitle=[], postURL=[], postDate=[], postDF=[], postUpdate=[], postUDF=[], postSummary=[], postLabels=[], labeled=[];
var blogLabels=[];
</script>

<!-- ====== TOC HTML PLACEHOLDERS ====== -->
<div id="toc-loading">
  Loading content, please wait...<br />
  <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzrpEIXMmX9ir6xbk8AmSimu3owyGXMaohhlXghq1sC87BInHrw5VGnkavYXcdSf-ZSL59Zc3JIi5jMbK6y9ODXQ2QUvhBGlasZktNDuJaiHFtHpzZvpGJcXDwM6E2dKKYHmFb44xVPrpuio4DFeQwhU7RmX13SgVAuhZQCOOYSLfWLWguU5hXhQNsDgio/s100/loading.gif" />
</div>

<div id="toc-init"></div>
<div id="toc-header"></div>
<div id="toc-display"></div>
<div id="toc"></div>
<div id="toc-footer"></div>

<div id="donotremove" style="display:none;">
  <a href="https://townoftwilight.blogspot.com/2012/02/advanced-blogspot-table-of-contents.html"></a>
</div>

<!-- ====== TOC SCRIPTS ====== -->
<script src="01-Initial-TOC-Old-Posts.js" type="text/javascript"></script>
<script src="02-TOC-Old-Posts.js" type="text/javascript"></script>

<!-- ====== JSON FEED ====== -->
<script src="https://www.urdutubes.com/feeds/posts/summary?max-results=100&alt=json-in-script&callback=inittoc" type="text/javascript"></script>

<!-- ====== SAFE DISPLAY CHECK ====== -->
<script>
function waitAndRender() {
  if(typeof postTitle !== "undefined" && postTitle.length > 0){
    displaydata(); // call the original function from 01/02 scripts
  } else {
    setTimeout(waitAndRender, 500); // wait half a second and check again
  }
}
waitAndRender();
</script>
