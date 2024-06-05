import {fetchContent} from '@croct/plug-next/server';

export default async function HomeHero() {
  const content = await fetchContent('home-hero@1', {
    fallback: fallbackContent,
  });

  return (
    <div>
      <div>
        <div>Id do produto: {content.id}</div>
        <div>Título do popup: {content.title}</div>
        <div>Cor de fundo: {content.bgColor}</div>
        <div>Label: {content.ctaTitle}</div>
        <div>Cor do texto: {content.textColor}</div>
      </div>
    </div>
  );
};

const fallbackContent = {
  "title": "Hello, world!",
  "description": "This is a sample hero banner",
  "visible": true,
  "tag": null,
  "cta": {
    "label": "Learn more",
    "url": "https://croct.com"
  },
  "banners": [
    {
      "title": "Banner 1",
      "description": "This is a sample banner",
      "image": "https://via.placeholder.com/150"
    },
    {
      "title": "Banner 2",
      "description": "This is another sample banner",
      "image": "https://via.placeholder.com/150"
    }
  ]
};