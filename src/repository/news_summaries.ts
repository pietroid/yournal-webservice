import { pool } from "../db";

interface NewsPage {
    name: string;
    iconURL: string;
    mainURL: string;
}

interface NewsSummary {
    title: string;
    mainText: string;
    mainImageURL: string;
    newsSourceURL: string;
    newsPage?: NewsPage;
}

export const selectNewsSummaries = async (newsNumber: number): Promise<NewsSummary[]> => {
    try {
        const result = await pool.query('SELECT DISTINCT url_hash, news_source_url, title, main_text, main_image_url, news_source_url, news_pages.name, news_pages.icon_url, news_pages.main_url FROM news_summaries INNER JOIN news_pages ON news_page_id = news_pages.id WHERE news_read = false ORDER BY url_hash ASC LIMIT $1', [newsNumber]);
        const newsSummaries: NewsSummary[] = result.rows.map(row => ({
            title: row.title,
            mainText: row.main_text,
            mainImageURL: row.main_image_url,
            newsSourceURL: row.news_source_url,
            newsPage: {
                name: row.name,
                iconURL: row.icon_url,
                mainURL: row.main_url,
            },
        }))
        return newsSummaries;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const readNewsSummaries = async (newsNumber: number): Promise<void> => {
    await pool.query('UPDATE news_summaries SET news_read = true WHERE news_source_url IN (SELECT news_source_url FROM news_summaries WHERE news_read = false ORDER BY url_hash ASC LIMIT $1)', [newsNumber]);
}