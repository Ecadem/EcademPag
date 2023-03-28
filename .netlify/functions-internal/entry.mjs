import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { s as server_default, g as deserializeManifest } from './chunks/astro.b7979d7c.mjs';
import { _ as _page0, a as _page1, b as _page2, c as _page3, d as _page4 } from './chunks/pages/all.30ebbb55.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'string-width';
/* empty css                               */
const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/about.astro", _page1],["src/pages/blog/metabase.astro", _page2],["src/pages/blog/ds4a.astro", _page3],["src/pages/404.astro", _page4],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":["_astro/404.4ea4e3aa.css"],"scripts":[{"type":"external","value":"_astro/hoisted.e5646dac.js"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/404.4ea4e3aa.css"],"scripts":[{"type":"external","value":"_astro/hoisted.e5646dac.js"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/404.4ea4e3aa.css"],"scripts":[{"type":"external","value":"_astro/hoisted.e5646dac.js"}],"routeData":{"route":"/blog/metabase","type":"page","pattern":"^\\/blog\\/metabase\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"metabase","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/metabase.astro","pathname":"/blog/metabase","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/404.4ea4e3aa.css"],"scripts":[{"type":"external","value":"_astro/hoisted.e5646dac.js"}],"routeData":{"route":"/blog/ds4a","type":"page","pattern":"^\\/blog\\/ds4a\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"ds4a","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/ds4a.astro","pathname":"/blog/ds4a","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/404.4ea4e3aa.css"],"scripts":[{"type":"external","value":"_astro/hoisted.e5646dac.js"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["/home/user/Escritorio/Ecadem/Repos/EcedemPag/ecademPag/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/user/Escritorio/Ecadem/Repos/EcedemPag/ecademPag/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/user/Escritorio/Ecadem/Repos/EcedemPag/ecademPag/src/pages/blog/ds4a.astro",{"propagation":"none","containsHead":true}],["/home/user/Escritorio/Ecadem/Repos/EcedemPag/ecademPag/src/pages/blog/metabase.astro",{"propagation":"none","containsHead":true}],["/home/user/Escritorio/Ecadem/Repos/EcedemPag/ecademPag/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.e5646dac.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/404.4ea4e3aa.css","/ajuste.png","/azure.png","/favicon.svg","/git.png","/github.png","/kubernetes.png","/linkedin.png","/microsoft-sql-server.png","/python.png","/sitio-web.png","/_astro/hoisted.e5646dac.js"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
