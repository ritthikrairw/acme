'use client';

import { ArticleService } from '@acme/shared-data-access';
import { useEffect } from 'react';

export function Card() {
  const articleService = new ArticleService();
  useEffect(() => {
    async function fetchArticles() {
      try {
        const articles = await articleService.list();
        console.log(articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    }
    fetchArticles();
  }, [articleService]);
  return (
    <div className="x">
      <h1>Welcome to Card!</h1>
    </div>
  );
}

export default Card;
