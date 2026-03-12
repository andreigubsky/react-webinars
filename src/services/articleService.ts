// src/services/articleService.ts

import axios from "axios";
import type { Article, ArticlesHttpResponse } from "../types/article";



// HTTP-функція запиту статей
export const fetchArticles = async (topic: string): Promise<Article[]> => {
  const response = await axios.get<ArticlesHttpResponse>(
    `https://hn.algolia.com/api/v1/search?query=${topic}`
  );
  return response.data.hits;
};
