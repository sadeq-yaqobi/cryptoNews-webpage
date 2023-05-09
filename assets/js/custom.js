function showMenu() {
  var menu = document.getElementById("menu");

  if (menu.className === "header-menu") {
    menu.className += " show";
  } else {
    menu.className = "header-menu";
  }
}
var burgerMenuIcon = document.getElementById("header-menu-burger");
burgerMenuIcon.onclick = showMenu;
