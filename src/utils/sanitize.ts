import { RichText } from 'prismic-dom';
import { PrismicNode } from '../types/cms'

const symbolReplacements = {
  '“': '"',
  '”': '"',
}

const sanitizeArticle = (node: PrismicNode | PrismicNode[]): string => {
  const article = RichText.asHtml(node)
  let buffer = article;
  for (const before in symbolReplacements) {
    const after = symbolReplacements[before];
    const regex = new RegExp(before, 'g');
    buffer = buffer.replace(regex, after);
  }
  return buffer;
}

export { sanitizeArticle };
