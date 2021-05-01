const cloudscraper = require('cloudscraper');
const cheerio = require('cheerio');

async function scrape() {
    const res = await cloudscraper.get('https://twist.moe/a/one-punch-man/1',timeout=5);
    const body = await res;
    const $ = cheerio.load(body);
    const promises = [];

    console.log($.html());
}
scrape();