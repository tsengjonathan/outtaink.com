const symbolReplacements = {
  '“': '"',
  '”': '"',
};

function sanitizeArticle(article) {
  let buffer = article;
  for (const before in symbolReplacements) {
    const after = symbolReplacements[before];
    buffer = buffer.replaceAll(before, after);
  }
  return buffer;
}

export { sanitizeArticle };
