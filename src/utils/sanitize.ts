const symbolReplacements = {
  '“': '"',
  '”': '"',
};

function sanitizeArticle(article: string) {
  let buffer = article;
  for (const before in symbolReplacements) {
    const after = symbolReplacements[before];
    const regex = new RegExp(before, 'g');
    buffer = buffer.replace(regex, after);
  }
  return buffer;
}

export { sanitizeArticle };
