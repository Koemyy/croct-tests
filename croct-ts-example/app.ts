import { renderHomeHero } from "./homeHero";

document.addEventListener("DOMContentLoaded", () => {
  renderHomeHero(document.querySelector("#slot"), {
    title: "Hello, world!",
    description: "This is a sample hero banner",
    visible: true,
    tag: null,
    cta: {
      label: "Learn more",
      url: "https://croct.com",
    },
    banners: [
      {
        title: "Banner 1",
        description: "This is a sample banner",
        image: "https://via.placeholder.com/150",
      },
      {
        title: "Banner 2",
        description: "This is another sample banner",
        image: "https://via.placeholder.com/150",
      },
    ],
  });
});
