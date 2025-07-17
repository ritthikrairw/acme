export type Article = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export class ArticleService {
  private readonly apiUrl = "https://jsonplaceholder.typicode.com/posts/";

  async get(id: number): Promise<Article | null> {
    try {
      const response = await fetch(`${this.apiUrl}${id}`);
      if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error(
          `Failed to fetch article: ${response.status} ${response.statusText}`
        );
      }
      const data = await response.json();
      return data as Article;
    } catch (error) {
      throw new Error(`Error fetching article: ${(error as Error).message}`);
    }
  }

  async list(): Promise<Article[]> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch articles: ${response.status} ${response.statusText}`
        );
      }
      const data = await response.json();
      return data as Article[];
    } catch (error) {
      throw new Error(`Error fetching articles: ${(error as Error).message}`);
    }
  }
}
