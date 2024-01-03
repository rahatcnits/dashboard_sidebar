const listItems = document.querySelectorAll(".sidebar-list li");
const subListItems = document.querySelectorAll(".submenu");

listItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    let isActive = item.classList.contains("active");

    listItems.forEach((el) => {
      el.classList.remove("active");
    });

    item.classList.add("active");
    console.log(e.target.parentElement);
    if (e.target.parentElement.classList.contains("title")) {
      if (isActive) item.classList.remove("active");
    } else if (e.target.parentElement.classList.contains("link")) {
      if (isActive) item.classList.remove("active");
    }
  });
});

subListItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    let isActive = item.classList.contains("active");

    listItems.forEach((el) => {
      el.classList.remove("active");
    });

    item.classList.add("active");
    console.log(e.target.parentElement);
    if (e.target.parentElement.classList.contains("sub-title")) {
      if (isActive) item.classList.remove("active");
    } else if (e.target.parentElement.classList.contains("sub-link")) {
      if (isActive) item.classList.remove("active");
    }
  });
});

const toggleSidebar = document.querySelector(".toggle-sidebar");
const logo = document.querySelector(".logo-box");
const sidebar = document.querySelector(".sidebar");

toggleSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  let toggleSidebarIcon = toggleSidebar.querySelector(".bx-chevrons-left");
  toggleSidebarIcon.classList.toggle("active");
});

logo.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

// Toggle Dark Mode
const toggleMode = document.querySelector(".toggle_mode i");
const body = document.querySelector("body");

toggleMode.addEventListener("click", () => {
  if (toggleMode.classList.contains("bx-sun")) {
    body.classList.toggle("dark_theme");
    body.style.transition = "all 0.5s ease";
    toggleMode.classList.remove("bx-sun");
    toggleMode.classList.toggle("bx-moon");
  } else {
    body.classList.toggle("dark_theme");
    body.style.transition = "all 0.5s ease";
    toggleMode.classList.add("bx-sun");
    toggleMode.classList.toggle("bx-moon");
  }
});
