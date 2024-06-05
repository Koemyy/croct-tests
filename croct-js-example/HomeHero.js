import croct from "@croct/plug";

export async function renderHomeHero(container, fallback) {
  // Display a loading message while the content is being fetched
  container.innerText = "✨ Personalizing...";

  const content = await croct.fetch("home-hero@1").catch(() => fallback);

  // Remove the loading message
  container.replaceChildren();

  // Render the content
  const element = document.createElement("div");

  const promotionPopupElement = document.createElement("div");
  promotionPopupElement.appendChild(
    document.createTextNode("Id do produto: " + content.promotionPopup.id)
  );
  promotionPopupElement.appendChild(
    document.createTextNode("Título do popup: " + content.promotionPopup.title)
  );
  promotionPopupElement.appendChild(
    document.createTextNode("Cor de fundo: " + content.promotionPopup.bgColor)
  );
  promotionPopupElement.appendChild(
    document.createTextNode("Label: " + content.promotionPopup.ctaTitle)
  );
  promotionPopupElement.appendChild(
    document.createTextNode("Cor do texto: " + content.promotionPopup.textColor)
  );

  element.appendChild(promotionPopupElement);

  container.appendChild(element);
}
