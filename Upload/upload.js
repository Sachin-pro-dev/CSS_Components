const image_input = document.querySelector("#input");
var uploaded_image = "";
const displayImage = document.querySelector("#display-file");

image_input.addEventListener("change", function () {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    displayImage.style.background = `url(${uploaded_image}) no-repeat`;
    displayImage.style.backgroundPosition = "center";
    displayImage.style.backgroundSize = "cover";
    displayImage.style.background
  });
  reader.readAsDataURL(this.files[0]);
});
