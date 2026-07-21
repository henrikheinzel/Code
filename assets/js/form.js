document.getElementById("rad1").onselect = function () {};
const radioText = document.getElementById("rad1");
const radioVideo = document.getElementById("rad2");
const durationInput = document.querySelector('input[name="duration"]');

radioText.addEventListener("change", function () {
  if (this.checked) {
    durationInput.required = false;
    let currentContent = document.getElementById("content");
    if (currentContent.tagName.toLowerCase() !== "input") {
      let newInput = document.createElement("input");
      newInput.type = "url";
      newInput.name = "content";
      newInput.id = "content";
      newInput.required = true;
      newInput.placeholder = "URL zum Text-Tutorial";
      currentContent.replaceWith(newInput);
    }
  }
});

radioVideo.addEventListener("change", function () {
  if (this.checked) {
    durationInput.required = true;
    let currentContent = document.getElementById("content");
    if (currentContent.tagName.toLowerCase() !== "textarea") {
      let newTextarea = document.createElement("textarea");
      newTextarea.name = "content";
      newTextarea.id = "content";
      newTextarea.required = true;
      newTextarea.placeholder = "Inhalt des Tutorials";
      newTextarea.rows = 10;
      newTextarea.cols = 40;
      currentContent.replaceWith(newTextarea);
    }
  }
});
