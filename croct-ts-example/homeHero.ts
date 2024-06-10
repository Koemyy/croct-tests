import croct from '@croct/plug';
import {SlotContent} from '@croct/plug/slot';

export async function renderHomeHero(container: HTMLElement, fallback: SlotContent): Promise<void> {
  // Display a loading message while the content is being fetched
  container.innerText = '✨ Personalizing...';

  const {content} = await croct.fetch('home-hero@1').catch(() => ({content: fallback}));

  // Remove the loading message
  container.replaceChildren();

  // Render the content
  const element = document.createElement('div');

  const promotionPopupTitleElement = document.createElement('strong');
  promotionPopupTitleElement.innerText = 'Promotion popup';
  element.appendChild(promotionPopupTitleElement);

  const promotionPopupElement = document.createElement('div');
  promotionPopupElement.innerText += `Id do produto: ${content.promotionPopup.id}\n`;
  promotionPopupElement.innerText += `Título do popup: ${content.promotionPopup.title}\n`;
  promotionPopupElement.innerText += `Cor de fundo: ${content.promotionPopup.bgColor}\n`;
  promotionPopupElement.innerText += `Label: ${content.promotionPopup.ctaTitle}\n`;
  promotionPopupElement.innerText += `Cor do texto: ${content.promotionPopup.textColor}\n`;

  element.appendChild(promotionPopupElement);

  container.appendChild(element);
}