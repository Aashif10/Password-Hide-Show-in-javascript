let input = document.getElementById("input");
let icon = document.getElementById("icon");

icon.addEventListener("click", function() {
  if (input.type === "password") {
      input.type = "text";
      icon.classList.replace("fa-eye-slash", "fa-eye");
      
  } else {
      input.type = "password";

    icon.classList.replace("fa-eye", "fa-eye-slash");
    }
    
});
icon.addEventListener("click", function () {
    icon.style.color="green"
})
