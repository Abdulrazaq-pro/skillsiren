// Renders PNG brand assets from the SVG sources in public/brand.
import sharp from 'sharp'
import fs from 'node:fs'
const b = 'public/brand/'
const svg = (f) => fs.readFileSync(b + f)
const mark = svg('skillsiren-mark.svg')
await sharp(mark, { density: 1200 }).resize(512, 512).png().toFile(b + 'skillsiren-logo-512.png')
await sharp(mark, { density: 600 }).resize(180, 180).png().toFile(b + 'apple-touch-icon.png')
await sharp({ create: { width: 400, height: 400, channels: 4, background: '#111833' } })
  .composite([{ input: await sharp(mark, { density: 1200 }).resize(400, 400).png().toBuffer() }]).png().toFile(b + 'skillsiren-logo-400.png')
await sharp(svg('skillsiren-logo.svg'), { density: 384 }).resize(1200).png().toFile(b + 'skillsiren-logo.png')
await sharp(svg('linkedin-banner.svg')).png().toFile(b + 'linkedin-banner.png')
await sharp(svg('linkedin-banner.svg')).resize(1200, 630, { fit: 'contain', background: '#0B1020' }).png().toFile(b + 'og-image.png')
console.log('assets generated')
