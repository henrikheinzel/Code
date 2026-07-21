document.addEventListener("DOMContentLoaded", function () {
  const radioText = document.getElementById("rad1");
  const radioVideo = document.getElementById("rad2");
  
  // HIER KORRIGIERT: Sucht jetzt nach 'name="dauer"'
  const durationInput = document.querySelector('input[name="dauer"]');

  radioText.addEventListener("change", function () {
    if (this.checked) {
      durationInput.required = false;
      let currentContent = document.getElementById("content");
      if (currentContent.tagName.toLowerCase() !== "input") {
        let newInput = document.createElement("input");
        newInput.type = "url";
        // HIER KORRIGIERT: Name muss "url" sein für Express
        newInput.name = "url";
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
        // HIER KORRIGIERT: Name muss "url" sein für Express
        newTextarea.name = "url";
        newTextarea.id = "content";
        newTextarea.required = true;
        newTextarea.placeholder = "Inhalt des Tutorials (Embed-Code oder URL)";
        newTextarea.rows = 10;
        newTextarea.cols = 40;
        currentContent.replaceWith(newTextarea);
      }
    }
  });
});