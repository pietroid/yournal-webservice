"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectNewsSummaries = void 0;
const tslib_1 = require("tslib");
const db_1 = require("../db");
const selectNewsSummaries = (newsNumber) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.pool.query('SELECT DISTINCT url_hash, news_source_url, title, main_text, main_image_url, news_source_url, news_pages.name, news_pages.icon_url, news_pages.main_url FROM news_summaries INNER JOIN news_pages ON news_page_id = news_pages.id WHERE news_read = false ORDER BY url_hash ASC LIMIT $1', [newsNumber]);
        const newsSummaries = result.rows.map(row => ({
            title: row.title,
            mainText: row.main_text,
            mainImageURL: row.main_image_url,
            newsSourceURL: row.news_source_url,
            newsPage: {
                name: row.name,
                iconURL: row.icon_url,
                mainURL: row.main_url,
            },
        }));
        return newsSummaries;
    }
    catch (error) {
        console.log(error);
        return [];
    }
});
exports.selectNewsSummaries = selectNewsSummaries;
//# sourceMappingURL=news_summaries.js.map