"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express = require("express");
const news_summaries_1 = require("./repository/news_summaries");
const app = express();
app.use(express.json());
app.get('/news/summaries', function (req, res) {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const news_number = req.query.news_number;
        if (!news_number)
            res.sendStatus(400);
        const newsSummaries = yield (0, news_summaries_1.selectNewsSummaries)(news_number);
        res.send({ newsSummaries: newsSummaries });
    });
});
app.listen(3000);
//# sourceMappingURL=main.js.map