// Notify Bing, Yandex, Seznam, Naver and the other IndexNow search engines
// about every page in the live sitemap. Run once after each deploy:
//
//     node scripts/indexnow.mjs
//
// Google does not use IndexNow — it keeps using the sitemap via Search Console.
// DuckDuckGo, Yahoo and Ecosia show Bing's index, so they follow Bing.
const HOST = 'tech.omni-solutions.co';
// Must match public/<KEY>.txt, which proves to the search engines that we own the site
const KEY = 'b7e41c9f2a6d4e0f8c35a91d6e2b7f04';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const keyResponse = await fetch(KEY_LOCATION);
if (!keyResponse.ok || (await keyResponse.text()).trim() !== KEY) {
    console.error(`The key file is not live at ${KEY_LOCATION} — deploy the site first.`);
    process.exit(1);
}

const sitemap = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url.trim());
if (urlList.length === 0) {
    console.error('No URLs found in the live sitemap.');
    process.exit(1);
}

const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});

// 200 = accepted, 202 = accepted and the key is still being verified
console.log(`IndexNow: ${response.status} ${response.statusText} — ${urlList.length} URLs submitted`);
if (response.status >= 300) {
    console.error(await response.text());
    process.exit(1);
}
