// Renders each route to static HTML so marketing content is crawlable.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const { render } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href)

const routes = { '/': 'index.html', '/privacy': 'privacy/index.html', '/terms': 'terms/index.html', '/app': 'app/index.html', '/404': '404.html' }
for (const [url, file] of Object.entries(routes)) {
  const { html, head } = render(url)
  const out = template
    .replace(/<title>.*?<\/title>/, `<title>${head.title}</title>`)
    .replace('<!--head-tags-->', head.tags)
    .replace('<div id="root"><!--app-html--></div>', `<div id="root" data-route="${url}">${html}</div>`)
  const target = path.join(dist, file)
  fs.mkdirSync(path.dirname(target), { recursive: true })
  fs.writeFileSync(target, out)
  console.log('prerendered', url, '->', file)
}
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
