const accordionItem = document.querySelectorAll(".accordion-item"); // Select all accordion items in the documentnItem
const accordionContent = document.querySelectorAll(".accordion-content"); // Select all accordion contents in the document
const arrows = document.querySelectorAll(".arrow");

accordionItem.forEach((item, index) => {
  console.log(item);
  item.addEventListener("click", () => {
    accordionItem.forEach((itemInner) => {
      // item.classList.remove('active');
      accordionContent.forEach((content) => {
        if (accordionContent[index] !== content) {
          content.classList.remove("active");
        }
        // content.classList.remove("active");
      });
      arrows.forEach((arrow) => {
        if (arrows[index] !== arrow) {
          arrow.classList.remove("active");
        }
        // arrows.classList.remove("active");
      });
    });

    accordionContent[index].classList.toggle("active");
    arrows[index].classList.toggle("active");
  });
});
