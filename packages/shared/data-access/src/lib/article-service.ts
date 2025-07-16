export type Article = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export class ArticleService {
    private readonly apiUrl = 'https://jsonplaceholder.typicode.com/posts/';

    async list(): Promise<Article[]> {
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch articles: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            return data as Article[];
        } catch (error) {
            throw new Error(`Error fetching articles: ${(error as Error).message}`);
        }
    }

    async get(id: number): Promise<Article | null> {
        try {
            const response = await fetch(`${this.apiUrl}${id}`);
            if (!response.ok) {
                if (response.status === 404) return null;
                throw new Error(`Failed to fetch article: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            return data as Article;
        } catch (error) {
            throw new Error(`Error fetching article: ${(error as Error).message}`);
        }
    }
}