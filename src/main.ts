import * as express from 'express'
import { selectNewsSummaries } from './repository/news_summaries';

const app = express();


app.use(express.json())

app.get('/news/summaries', async function (req, res) {
  const news_number = req.query.news_number;

  if (!news_number)
    res.sendStatus(400)

  const newsSummaries = await selectNewsSummaries(news_number);
  res.send({ newsSummaries: newsSummaries });
})

app.listen(3000)