/**
 * Met internet kan je jquery gebruiken.
 */
// $(function(){
//     $("#nav-placeholder").load("../html/navbar.html");
// });

function toggle() {
    const foldmenu = document.getElementById("foldmenu");
    if (foldmenu.style.display === "block") {
      foldmenu.style.display = "none";
    } else {
      foldmenu.style.display = "block";
    }
  }

  /**
   * Zonder internet gebruik je vanilla javascript.
   */
const navPlaceholder = document.querySelector("#nav-placeholder");
navPlaceholder.innerHTML = `
  <link rel="stylesheet" href="/css/navbar.css">
  <nav class="mainNav">
  <ul id="listNav">
    <li><a href="index.html">Home</a></li>
    <li><a href="personalPage.html">Personal page</a></li>
    <li><a href="examples.html">Examples</a></li>
    <li id="hamburger" onclick="toggle()"><a><img src="/data/Hamburger_iconWit.png"></a></li>
  </ul>

  <div id="foldmenu">
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="personalPage.html">Personal page</a></li>
      <li><a href="examples.html">Examples</a></li>
    </ul>
  </div>
  </nav>
`;