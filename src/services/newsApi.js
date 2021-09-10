export const formatArticles = (json) =>
  json.articles.map((article) => ({
    title: article.title,
    author: article.author,
    description: article.description,
  }));

export const fetchArticlesBySearchTerm = async (searchTerm) => {
  const res = await fetch(
    // eslint-disable-next-line max-len
    `https://newsapi.org/v2/everything?apiKey=${process.env.API_KEY}&qInTitle=${searchTerm}`
  );
  const json = await res.json();
  console.log(json);
  return formatArticles(json);
};
