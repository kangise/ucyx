const fs = require('fs')
const path = require('path')

const outDir = path.join(__dirname, '..', 'src', 'assets', 'images', 'demo-concepts')

const green = '#00A651'
const greenDark = '#007a3d'
const yellow = '#ffcc00'
const teal = '#00c8b3'
const purple = '#6155f5'
const ink = '#111716'
const muted = '#6f7773'
const line = '#dfe4e0'
const paper = '#f7f6f3'

function esc(value) {
  return String(value).replace(/[&<>"']/g, (match) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  })[match])
}

function shadow(id, opacity = 0.16) {
  return `
    <filter id="${id}" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#101817" flood-opacity="${opacity}"/>
    </filter>`
}

function base(content) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="640" viewBox="0 0 1200 640" role="img" aria-label="UCYX demo concept">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#fbfaf7"/>
      <stop offset="0.58" stop-color="#f1f0ec"/>
      <stop offset="1" stop-color="#e8ebe7"/>
    </linearGradient>
    <linearGradient id="screen" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="1" stop-color="#eff3ef"/>
    </linearGradient>
    <linearGradient id="greenFade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${green}"/>
      <stop offset="1" stop-color="#a9e6c2"/>
    </linearGradient>
    ${shadow('softShadow')}
    ${shadow('cardShadow', 0.12)}
  </defs>
  <rect width="1200" height="640" fill="url(#bg)"/>
  <circle cx="104" cy="104" r="92" fill="#ffffff" opacity="0.5"/>
  <circle cx="1080" cy="526" r="110" fill="#dfeee5" opacity="0.42"/>
  <rect x="70" y="520" width="520" height="74" rx="20" fill="#ffffff" opacity="0.46" transform="rotate(-8 70 520)"/>
  <rect x="782" y="72" width="270" height="74" rx="18" fill="#ffffff" opacity="0.44" transform="rotate(5 782 72)"/>
  ${content}
</svg>`
}

function card(x, y, w, h, body = '', attrs = '') {
  return `<g filter="url(#cardShadow)" ${attrs}>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="22" fill="#ffffff" stroke="${line}"/>
    ${body}
  </g>`
}

function label(x, y, text, size = 24, weight = 750, fill = ink, anchor = 'start') {
  return `<text x="${x}" y="${y}" font-family="Inter, Arial, sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${esc(text)}</text>`
}

function tinyLabel(x, y, text, fill = muted) {
  return label(x, y, text, 16, 760, fill)
}

function lineBlock(x, y, widths = [130, 84], color = '#d6dad6') {
  return widths.map((w, i) => `<rect x="${x}" y="${y + i * 22}" width="${w}" height="8" rx="4" fill="${color}"/>`).join('')
}

function progress(x, y, w, value = 0.68, color = green) {
  return `
    <rect x="${x}" y="${y}" width="${w}" height="10" rx="5" fill="#e4e8e4"/>
    <rect x="${x}" y="${y}" width="${Math.round(w * value)}" height="10" rx="5" fill="${color}"/>`
}

function dot(x, y, color = green, r = 7) {
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}"/>`
}

function check(x, y, color = green) {
  return `<g transform="translate(${x} ${y})"><circle cx="0" cy="0" r="15" fill="${color}"/><path d="M-7 0l5 5 10-12" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>`
}

function iconBox(x, y, color = green) {
  return `<rect x="${x}" y="${y}" width="46" height="46" rx="13" fill="${color}" opacity="0.12"/><circle cx="${x + 23}" cy="${y + 23}" r="9" fill="${color}"/>`
}

function productPack(x, y, color = green, scale = 1) {
  return `<g transform="translate(${x} ${y}) scale(${scale})">
    <rect x="0" y="42" width="66" height="88" rx="11" fill="#ecebe6" stroke="#d7d7d1"/>
    <rect x="0" y="94" width="66" height="36" rx="0" fill="${color}" opacity="0.86"/>
    <rect x="88" y="14" width="48" height="116" rx="18" fill="#f8f8f4" stroke="#d7d7d1"/>
    <rect x="102" y="0" width="20" height="20" rx="8" fill="#e8e8e2"/>
    <rect x="158" y="58" width="72" height="72" rx="18" fill="#f2f0ea" stroke="#d7d7d1"/>
  </g>`
}

function laptop(x, y, w, h, body) {
  return `<g filter="url(#softShadow)">
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="30" fill="#191f1d"/>
    <rect x="${x + 18}" y="${y + 18}" width="${w - 36}" height="${h - 36}" rx="20" fill="url(#screen)"/>
    ${body}
    <rect x="${x - 24}" y="${y + h - 6}" width="${w + 48}" height="18" rx="9" fill="#202825"/>
  </g>`
}

function phone(x, y, body) {
  return `<g filter="url(#softShadow)">
    <rect x="${x}" y="${y}" width="164" height="286" rx="36" fill="#161b19"/>
    <rect x="${x + 12}" y="${y + 16}" width="140" height="252" rx="26" fill="#fafafa"/>
    <rect x="${x + 57}" y="${y + 27}" width="50" height="8" rx="4" fill="#1b1f1d"/>
    ${body}
  </g>`
}

function mapPins() {
  return `
    <path d="M62 132c112-40 225-54 340-36 84 13 161 47 240 75 91 33 178 47 270 24" fill="none" stroke="#d7ddd8" stroke-width="18" stroke-linecap="round" opacity=".62"/>
    <path d="M74 136c125 10 217 46 315 46 144 0 229-69 408-58" fill="none" stroke="${green}" stroke-width="3" stroke-dasharray="9 9" opacity=".72"/>
    ${dot(206, 146, green, 11)}${dot(467, 182, teal, 8)}${dot(760, 124, green, 12)}${dot(866, 196, yellow, 8)}`
}

function marketOpportunityBrief() {
  return base(`
    ${productPack(850, 500, green, 0.82)}
    ${laptop(330, 150, 520, 330, `
      <g transform="translate(376 216)">
        ${mapPins()}
        ${card(22, 186, 190, 86, `${lineBlock(44, 218, [86, 126])}${progress(44, 270, 120, 0.72)}`, '')}
        ${card(250, 186, 190, 86, `${lineBlock(272, 218, [116, 76])}${progress(272, 270, 120, 0.58, teal)}`, '')}
      </g>
    `)}
    ${card(98, 118, 292, 218, `
      ${iconBox(126, 150, green)}
      ${label(190, 181, 'Market Signals', 25)}
      ${lineBlock(126, 226, [176, 122])}
      ${check(344, 232)}
      ${lineBlock(126, 286, [194, 94])}
      ${dot(344, 292, yellow, 10)}
    `)}
    ${card(92, 386, 328, 236, `
      ${label(124, 426, 'Opportunity Brief', 25)}
      ${tinyLabel(124, 474, 'Demand Notes')}
      ${lineBlock(124, 502, [190, 128, 220])}
      ${progress(124, 590, 220, 0.74)}
    `)}
    ${card(850, 136, 258, 248, `
      ${label(884, 178, 'Ready to Test', 25)}
      ${lineBlock(884, 226, [138, 172, 116])}
      ${check(1048, 302)}
    `)}
  `)
}

function categoryPriorityMap() {
  const cells = Array.from({ length: 20 }, (_, i) => {
    const x = 448 + (i % 5) * 58
    const y = 222 + Math.floor(i / 5) * 54
    const colors = [green, '#d5d9d5', yellow, teal, purple]
    return `<rect x="${x}" y="${y}" width="38" height="32" rx="8" fill="${colors[(i + Math.floor(i / 5)) % colors.length]}" opacity="${i % 3 === 0 ? 0.86 : 0.46}"/>`
  }).join('')

  return base(`
    ${productPack(84, 460, greenDark, 0.72)}
    ${laptop(338, 120, 560, 380, `
      ${label(388, 180, 'Category Fit', 28)}
      <g>${cells}</g>
      ${progress(430, 456, 340, 0.66)}
    `)}
    ${card(86, 116, 292, 260, `
      ${label(120, 160, 'Category Map', 26)}
      ${['Beauty', 'Travel', 'Pet', 'Home'].map((item, i) => `
        <g transform="translate(120 ${204 + i * 44})">
          ${iconBox(0, -22, [green, yellow, teal, purple][i])}
          ${label(62, 8, item, 18, 740)}
          ${lineBlock(136, -2, [74])}
        </g>`).join('')}
    `)}
    ${card(848, 160, 270, 238, `
      ${label(884, 202, 'Priority View', 26)}
      ${lineBlock(884, 248, [164, 116])}
      ${progress(884, 304, 178, 0.82)}
      ${tinyLabel(884, 364, 'Test order')}
    `)}
  `)
}

function firstMarketRecommendation() {
  return base(`
    ${laptop(322, 132, 556, 362, `
      ${label(374, 192, 'Priority Market', 28)}
      <g transform="translate(376 230)">${mapPins()}</g>
      ${card(520, 370, 240, 86, `${label(548, 410, 'Test Scope', 20)}${progress(548, 430, 152, 0.76)}`)}
    `)}
    ${card(96, 132, 270, 260, `
      ${label(130, 174, 'First Market', 28)}
      ${['North America', 'Europe', 'SEA'].map((item, i) => `
        <g transform="translate(130 ${224 + i * 54})">
          ${dot(8, 0, [green, yellow, teal][i], 10)}
          ${label(34, 7, item, 19, 750)}
          ${lineBlock(168, -2, [62])}
        </g>`).join('')}
    `)}
    ${card(824, 178, 284, 280, `
      ${label(860, 222, 'Entry Route', 28)}
      <path d="M880 294h160" stroke="${line}" stroke-width="9" stroke-linecap="round"/>
      <path d="M880 294h96" stroke="${green}" stroke-width="9" stroke-linecap="round"/>
      ${check(880, 350)}
      ${lineBlock(916, 340, [142, 98])}
      ${check(880, 420, teal)}
      ${lineBlock(916, 410, [162, 118])}
    `)}
  `)
}

function conceptTestBrief() {
  return base(`
    ${productPack(914, 500, greenDark, 0.7)}
    ${laptop(326, 120, 560, 390, `
      ${label(376, 180, 'Concept Test', 28)}
      ${card(400, 220, 190, 190, `${label(430, 258, 'Offer A', 22)}${productPack(450, 276, green, 0.35)}${progress(430, 378, 120, 0.78)}`)}
      ${card(618, 220, 190, 190, `${label(648, 258, 'Offer B', 22)}${productPack(668, 276, yellow, 0.35)}${progress(648, 378, 120, 0.45, '#b8bdb8')}`)}
      ${check(574, 238)}
    `)}
    ${card(86, 150, 282, 252, `
      ${label(124, 192, 'Concept Brief', 26)}
      ${lineBlock(124, 242, [154, 196, 118])}
      ${progress(124, 336, 190, 0.7)}
    `)}
    ${card(828, 150, 284, 252, `
      ${label(864, 192, 'Launch Candidate', 25)}
      ${['Clarity', 'Trust', 'Intent'].map((item, i) => `
        <g transform="translate(864 ${244 + i * 48})">${dot(0, 0, [green, teal, yellow][i], 8)}${label(24, 6, item, 18, 740)}${progress(118, -5, 90, [0.82, 0.68, 0.58][i])}</g>`).join('')}
    `)}
  `)
}

function valuePropositionComparison() {
  return base(`
    ${laptop(326, 120, 560, 390, `
      ${label(374, 180, 'Message Fit', 28)}
      ${['Offer A', 'Offer B', 'Offer C'].map((item, i) => `
        <g transform="translate(${386 + i * 154} 230)">
          <rect width="128" height="172" rx="20" fill="#fff" stroke="${i === 1 ? green : line}" stroke-width="${i === 1 ? 3 : 1}"/>
          ${label(22, 42, item, 20, 760)}
          ${lineBlock(22, 78, [78, 54])}
          ${progress(22, 134, 82, [0.48, 0.78, 0.58][i], [yellow, green, teal][i])}
        </g>`).join('')}
    `)}
    ${card(92, 142, 282, 238, `
      ${label(126, 184, 'Value Prop', 27)}
      ${tinyLabel(126, 230, 'Compare promise')}
      ${lineBlock(126, 260, [170, 110])}
      ${check(310, 316)}
    `)}
    ${card(842, 174, 268, 230, `
      ${label(876, 216, 'Best Angle', 26)}
      ${['Simple', 'Specific', 'Credible'].map((item, i) => `
        <g transform="translate(876 ${262 + i * 42})">${dot(0, 0, [green, teal, yellow][i], 8)}${label(24, 6, item, 18, 740)}</g>`).join('')}
    `)}
  `)
}

function creativeRecommendation() {
  return base(`
    ${phone(500, 128, `
      ${[0, 1, 2, 3].map((i) => `<rect x="${524 + (i % 2) * 62}" y="${188 + Math.floor(i / 2) * 84}" width="52" height="68" rx="10" fill="${['#e9ede7', '#f5ead5', '#e8f5f1', '#eeeaf8'][i]}"/>`).join('')}
      ${progress(528, 370, 102, 0.74)}
    `)}
    ${card(100, 138, 330, 262, `
      ${label(136, 182, 'Creative Board', 27)}
      ${['Hook', 'Proof', 'CTA'].map((item, i) => `
        <g transform="translate(136 ${240 + i * 50})">${iconBox(0, -24, [green, yellow, teal][i])}${label(64, 6, item, 19, 760)}${lineBlock(128, -2, [112])}</g>`).join('')}
    `)}
    ${card(770, 130, 326, 284, `
      ${label(806, 172, 'First Creative', 27)}
      <rect x="806" y="210" width="106" height="122" rx="16" fill="#e9ede7"/>
      <rect x="936" y="210" width="106" height="122" rx="16" fill="#f5ead5"/>
      ${check(1018, 354)}
      ${lineBlock(806, 374, [192, 136])}
    `)}
  `)
}

function channelTestPlan() {
  return base(`
    ${productPack(842, 480, greenDark, 0.76)}
    ${card(92, 118, 348, 356, `
      ${label(132, 164, 'Channel Sprint', 30)}
      ${['Search', 'Social', 'Creator', 'Community'].map((item, i) => `
        <g transform="translate(132 ${226 + i * 56})">${iconBox(0, -26, [green, yellow, purple, teal][i])}${label(64, 4, item, 19, 740)}${lineBlock(166, -6, [96])}${dot(282, 0, [green, yellow, green, teal][i], 8)}</g>`).join('')}
    `)}
    ${phone(502, 132, `
      ${[0, 1, 2, 3].map((i) => `<rect x="${526 + (i % 2) * 62}" y="${190 + Math.floor(i / 2) * 84}" width="52" height="68" rx="10" fill="${['#e9ede7', '#f5ead5', '#e8f5f1', '#eeeaf8'][i]}"/>`).join('')}
      ${label(532, 396, 'Launch Week', 15, 760)}
    `)}
    ${card(764, 128, 338, 322, `
      ${label(802, 172, 'Launch Week', 28)}
      ${[0, 1, 2, 3].map((i) => `<rect x="${802}" y="${218 + i * 42}" width="${[180, 126, 212, 150][i]}" height="16" rx="8" fill="${[green, yellow, teal, purple][i]}" opacity=".78"/>`).join('')}
      ${check(1010, 386)}
      ${label(1044, 394, 'Ready', 22, 780)}
    `)}
  `)
}

function creatorBrief() {
  return base(`
    ${card(92, 114, 372, 314, `
      ${label(132, 160, 'Creator Brief', 30)}
      ${[0, 1, 2, 3].map((i) => `<g transform="translate(${136 + i * 76} 214)"><circle cx="0" cy="0" r="28" fill="${['#d7f2e2', '#e8f5f1', '#f5ead5', '#eeeaf8'][i]}"/><circle cx="0" cy="-6" r="8" fill="#8d9891"/><path d="M-15 18c5-12 25-12 30 0" fill="#8d9891"/></g>`).join('')}
      ${['Audience', 'Angle', 'Proof'].map((item, i) => `<g transform="translate(136 ${292 + i * 42})">${check(0, 0, [green, teal, yellow][i])}${label(40, 7, item, 19, 760)}${lineBlock(138, -2, [124])}</g>`).join('')}
    `)}
    ${phone(522, 132, `
      ${[0, 1, 2, 3].map((i) => `<rect x="${546 + (i % 2) * 58}" y="${190 + Math.floor(i / 2) * 76}" width="48" height="60" rx="10" fill="${['#e9ede7', '#f5ead5', '#e8f5f1', '#eeeaf8'][i]}"/>`).join('')}
    `)}
    ${card(786, 146, 300, 270, `
      ${label(824, 190, 'Content Plan', 27)}
      ${lineBlock(824, 242, [172, 124, 196])}
      ${progress(824, 330, 180, 0.68)}
    `)}
  `)
}

function localOpsChecklist() {
  return base(`
    ${laptop(348, 142, 500, 330, `
      ${label(400, 202, 'Local Ops', 30)}
      ${['Hiring', 'Payroll', 'Service'].map((item, i) => `
        <g transform="translate(410 ${264 + i * 58})">${check(0, 0, [green, teal, yellow][i])}${label(42, 7, item, 20, 760)}${lineBlock(158, -2, [150])}</g>`).join('')}
    `)}
    ${card(96, 142, 280, 282, `
      ${label(132, 184, 'Entry Setup', 28)}
      ${lineBlock(132, 236, [160, 108])}
      ${progress(132, 304, 180, 0.64)}
      ${label(132, 372, 'Ready', 24, 780, greenDark)}
    `)}
    ${card(820, 154, 282, 270, `
      ${label(856, 196, 'Ops Owner', 28)}
      <circle cx="900" cy="260" r="34" fill="#d7f2e2"/>
      <circle cx="900" cy="250" r="10" fill="#84918a"/>
      <path d="M878 285c8-20 36-20 44 0" fill="#84918a"/>
      ${lineBlock(948, 248, [86, 120])}
      ${progress(856, 346, 176, 0.72)}
    `)}
  `)
}

function attributionReview() {
  return base(`
    ${laptop(338, 126, 540, 366, `
      ${label(390, 186, 'Attribution Flow', 28)}
      ${['Search', 'Social', 'Creator', 'CRM'].map((item, i) => `
        <g transform="translate(410 ${244 + i * 46})">${dot(0, 0, [green, yellow, purple, teal][i], 10)}${label(28, 7, item, 18, 740)}<path d="M132 0 C210 ${-80 + i * 40}, 260 ${-50 + i * 25}, 318 42" fill="none" stroke="${green}" stroke-width="3" opacity=".45"/></g>`).join('')}
      ${check(746, 332)}
    `)}
    ${card(88, 150, 300, 250, `
      ${label(124, 192, 'ROI Review', 28)}
      ${lineBlock(124, 244, [158, 106])}
      ${progress(124, 304, 190, 0.7)}
      ${tinyLabel(124, 358, 'Signal to decision')}
    `)}
    ${card(846, 170, 260, 230, `
      ${label(880, 212, 'Entry ROI', 28)}
      <path d="M884 304h158" stroke="${line}" stroke-width="9" stroke-linecap="round"/>
      <path d="M884 304h112" stroke="${green}" stroke-width="9" stroke-linecap="round"/>
      ${check(1020, 344)}
    `)}
  `)
}

function channelQualityReadout() {
  return base(`
    ${card(82, 126, 380, 376, `
      ${label(122, 174, 'Channel Quality', 30)}
      ${['Intent', 'Traffic', 'Feedback', 'Cost'].map((item, i) => `
        <g transform="translate(122 ${242 + i * 58})">${iconBox(0, -26, [green, teal, yellow, purple][i])}${label(64, 4, item, 19, 740)}${[0, 1, 2, 3, 4].map((star) => `<circle cx="${190 + star * 24}" cy="0" r="8" fill="${star < [4,3,4,2][i] ? green : '#d8dcd8'}"/>`).join('')}</g>`).join('')}
    `)}
    ${laptop(504, 136, 488, 336, `
      ${label(556, 196, 'Quality Readout', 28)}
      <path d="M578 350c48-60 88-22 132-80 40-52 90-14 134-84" fill="none" stroke="${green}" stroke-width="8" stroke-linecap="round"/>
      ${[0, 1, 2, 3].map((i) => `<rect x="${580 + i * 68}" y="${286 - i * 18}" width="36" height="${80 + i * 18}" rx="8" fill="${green}" opacity="${0.28 + i * 0.13}"/>`).join('')}
    `)}
  `)
}

function optimizationRoadmap() {
  return base(`
    ${laptop(322, 132, 556, 360, `
      ${label(374, 192, 'Next Actions', 30)}
      ${['Optimize', 'Scale', 'Pause'].map((item, i) => `
        <g transform="translate(${392 + i * 148} 254)">
          <rect width="126" height="156" rx="22" fill="#fff" stroke="${i === 1 ? green : line}" stroke-width="${i === 1 ? 3 : 1}"/>
          ${label(20, 48, item, 20, 780, i === 1 ? greenDark : ink)}
          ${lineBlock(20, 84, [74, 52])}
          ${progress(20, 126, 78, [0.56, 0.84, 0.32][i], [teal, green, yellow][i])}
        </g>`).join('')}
    `)}
    ${card(90, 162, 270, 250, `
      ${label(126, 204, 'Roadmap', 29)}
      ${lineBlock(126, 260, [156, 104])}
      ${check(296, 336)}
    `)}
    ${card(850, 176, 260, 224, `
      ${label(884, 218, 'Scale Plan', 28)}
      ${progress(884, 274, 168, 0.82)}
      ${lineBlock(884, 324, [130, 92])}
    `)}
  `)
}

function realBase(content) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="640" viewBox="0 0 1200 640" role="img" aria-label="UCYX realistic workflow demo">
  <defs>
    <linearGradient id="softBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f7f6f3"/>
      <stop offset="1" stop-color="#ebe9e4"/>
    </linearGradient>
    <linearGradient id="photoWarm" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f4dfc8"/>
      <stop offset="0.52" stop-color="#d8dfd3"/>
      <stop offset="1" stop-color="#5d7167"/>
    </linearGradient>
    <linearGradient id="photoCool" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#dce8ef"/>
      <stop offset="0.56" stop-color="#e8ebe5"/>
      <stop offset="1" stop-color="#7e9489"/>
    </linearGradient>
    <linearGradient id="photoShelf" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f4f0e8"/>
      <stop offset="0.5" stop-color="#d9d5c9"/>
      <stop offset="1" stop-color="#79887f"/>
    </linearGradient>
    <filter id="realShadow" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="18" stdDeviation="20" flood-color="#141817" flood-opacity="0.10"/>
    </filter>
    <filter id="smallShadow" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="10" stdDeviation="11" flood-color="#141817" flood-opacity="0.08"/>
    </filter>
    <marker id="arrowHead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M0 0L10 5L0 10z" fill="#343a38"/>
    </marker>
  </defs>
  <rect width="1200" height="640" fill="url(#softBg)"/>
  ${content}
</svg>`
}

function uiCard(x, y, w, h, body = '', radius = 28) {
  return `<g filter="url(#realShadow)">
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${radius}" fill="#fff" stroke="#e2e0db"/>
    ${body}
  </g>`
}

function plainCard(x, y, w, h, body = '', radius = 24) {
  return `<g>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${radius}" fill="#fff" stroke="#e2e0db"/>
    ${body}
  </g>`
}

function uiTitle(x, y, text) {
  return label(x, y, text, 24, 720)
}

function uiKicker(x, y, text) {
  return label(x, y, text, 15, 760, '#9a9d99')
}

function uiBody(x, y, text, size = 21) {
  return label(x, y, text, size, 520, '#2f3432')
}

function pill(x, y, text, fill = '#efefec', textFill = '#3d4541') {
  return `<g>
    <rect x="${x}" y="${y}" width="${text.length * 9 + 34}" height="32" rx="16" fill="${fill}"/>
    ${label(x + 17, y + 22, text, 15, 680, textFill)}
  </g>`
}

function flowArrow(x1, y1, x2, y2) {
  return `<path d="M${x1} ${y1}H${x2}" fill="none" stroke="#343a38" stroke-width="3" marker-end="url(#arrowHead)"/>`
}

function avatar(x, y, fill = '#d7f2e2', skin = '#d7aa88', hair = '#2a2724') {
  return `<g>
    <circle cx="${x}" cy="${y}" r="24" fill="${fill}" stroke="#fff" stroke-width="3"/>
    <circle cx="${x}" cy="${y - 5}" r="8" fill="${skin}"/>
    <path d="M${x - 10} ${y - 9}c5-12 22-8 20 5c-8-5-15-4-20-1z" fill="${hair}"/>
    <path d="M${x - 15} ${y + 17}c6-20 24-20 30 0z" fill="${skin}"/>
  </g>`
}

function avatarRow(x, y) {
  return [
    avatar(x, y, '#e5f4ee', '#cf9b79', '#221d1b'),
    avatar(x + 34, y, '#f5ead5', '#9f6e50', '#3a2018'),
    avatar(x + 68, y, '#e8edf4', '#e0b38f', '#62402d'),
    avatar(x + 102, y, '#eeeaf8', '#c18d6b', '#171717')
  ].join('')
}

function productThumb(x, y, w, h, type = 'beauty') {
  const bg = type === 'outdoor' ? 'url(#photoCool)' : type === 'shelf' ? 'url(#photoShelf)' : 'url(#photoWarm)'
  const product = type === 'shoe'
    ? `<path d="M${x + 38} ${y + h - 46}c46 8 100 8 150-2c18-4 34 6 42 22H${x + 38}c-14 0-18-16 0-20z" fill="#171c1a"/><path d="M${x + 70} ${y + h - 42}h70" stroke="${green}" stroke-width="7" stroke-linecap="round"/>`
    : `<rect x="${x + w * 0.28}" y="${y + h * 0.38}" width="38" height="${h * 0.38}" rx="9" fill="#f7f6f1" stroke="#d8d8d2"/><rect x="${x + w * 0.28}" y="${y + h * 0.62}" width="38" height="${h * 0.14}" fill="${green}"/><rect x="${x + w * 0.48}" y="${y + h * 0.25}" width="30" height="${h * 0.51}" rx="13" fill="#f4f3ef" stroke="#d8d8d2"/><rect x="${x + w * 0.64}" y="${y + h * 0.48}" width="50" height="${h * 0.28}" rx="13" fill="#f1eee8" stroke="#d8d8d2"/>`
  return `<g>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${bg}"/>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="#fff" opacity="0.18"/>
    ${product}
  </g>`
}

function contentThumb(x, y, w, h, type = 'lifestyle') {
  return `<g>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${type === 'lifestyle' ? 'url(#photoCool)' : 'url(#photoShelf)'}"/>
    <circle cx="${x + w * 0.68}" cy="${y + h * 0.42}" r="${h * 0.13}" fill="#dec1a4"/>
    <path d="M${x + w * 0.58} ${y + h * 0.72}c12-45 72-45 88 0z" fill="#f4f1e8"/>
    <rect x="${x + 22}" y="${y + h - 30}" width="${w - 44}" height="8" rx="4" fill="${green}" opacity="0.55"/>
  </g>`
}

function statusRow(x, y, text, status = 'Ready', color = green) {
  return `<g>
    ${dot(x, y - 5, color, 7)}
    ${label(x + 22, y, text, 18, 680, ink)}
    ${pill(x + 178, y - 24, status, color === green ? '#dff5e8' : '#f5ead5', color === green ? greenDark : '#7a5a00')}
  </g>`
}

function marketOpportunityBrief() {
  return realBase(`
    ${uiCard(92, 118, 280, 150, `${uiKicker(122, 154, 'MARKET 1')}${uiBody(122, 198, 'North America')}${pill(122, 222, 'Test first', '#dff5e8', greenDark)}`)}
    ${flowArrow(372, 194, 446, 194)}
    ${uiCard(446, 82, 320, 224, `${uiKicker(476, 120, 'CATEGORY SIGNALS')}${productThumb(476, 146, 132, 92)}${statusRow(632, 178, 'Demand', 'High')}${statusRow(632, 230, 'Competition', 'Watch', yellow)}`)}
    ${flowArrow(766, 194, 838, 194)}
    ${uiCard(838, 118, 270, 150, `${uiKicker(868, 154, 'FIRST TEST')}${uiBody(868, 198, 'Beauty devices')}${pill(868, 222, 'Narrow scope')}`)}
    ${uiCard(256, 376, 688, 118, `${uiKicker(292, 416, 'ENTRY MEMO')}${uiBody(292, 456, 'Turn market signals into a first test decision.')}${progress(744, 432, 150, 0.72)}`)}
  `)
}

function categoryPriorityMap() {
  return realBase(`
    ${uiCard(108, 94, 292, 404, `${uiKicker(140, 134, 'CATEGORY SHORTLIST')}${['Beauty device', 'Pet travel', 'Home fitness', 'Smart home'].map((item, i) => `${statusRow(140, 196 + i * 70, item, ['Test', 'Later', 'Watch', 'Test'][i], [green, '#aeb6b1', yellow, green][i])}`).join('')}`)}
    ${flowArrow(400, 294, 470, 294)}
    ${uiCard(470, 112, 304, 356, `${uiKicker(506, 152, 'FIT MAP')}${Array.from({ length: 16 }, (_, i) => `<rect x="${506 + (i % 4) * 58}" y="${190 + Math.floor(i / 4) * 50}" width="42" height="34" rx="10" fill="${[green, '#d8ddd8', yellow, teal][(i + Math.floor(i / 4)) % 4]}" opacity="${i % 3 === 0 ? 0.88 : 0.48}"/>`).join('')}${pill(506, 410, 'Priority view', '#dff5e8', greenDark)}`)}
    ${flowArrow(774, 294, 842, 294)}
    ${uiCard(842, 170, 254, 246, `${uiKicker(874, 210, 'DECISION')}${uiBody(874, 254, 'Pick one narrow entry lane')}${lineBlock(874, 294, [150, 104])}${check(1030, 354)}`)}
  `)
}

function firstMarketRecommendation() {
  return realBase(`
    ${uiCard(84, 136, 294, 338, `${uiKicker(118, 178, 'MARKET OPTIONS')}${['US', 'Canada', 'UK', 'SEA'].map((item, i) => `${statusRow(118, 238 + i * 54, item, i === 0 ? 'Start' : 'Hold', i === 0 ? green : '#b7bdb8')}`).join('')}`)}
    ${flowArrow(378, 306, 454, 306)}
    ${uiCard(454, 88, 326, 430, `${uiKicker(490, 130, 'ENTRY ROUTE')}${productThumb(490, 160, 248, 136, 'shelf')}${uiBody(490, 340, 'One market, one category, one first test.')}${progress(490, 390, 220, 0.74)}`)}
    ${flowArrow(780, 306, 854, 306)}
    ${uiCard(854, 164, 260, 252, `${uiKicker(886, 204, 'NEXT STEP')}${uiBody(886, 250, 'Build the test brief')}${pill(886, 302, 'Ready for design', '#dff5e8', greenDark)}`)}
  `)
}

function conceptTestBrief() {
  return realBase(`
    ${uiCard(112, 120, 278, 324, `${uiKicker(144, 160, 'CONCEPT BRIEF')}${lineBlock(144, 198, [170, 126, 190])}${productThumb(144, 286, 176, 96)}`)}
    ${flowArrow(390, 282, 458, 282)}
    ${uiCard(458, 86, 336, 392, `${uiKicker(492, 126, 'OFFER TEST')}${plainCard(492, 166, 124, 174, `${label(518, 206, 'A', 30, 780)}${productThumb(514, 226, 78, 58)}${progress(514, 306, 78, 0.74)}`, 18)}${plainCard(636, 166, 124, 174, `${label(662, 206, 'B', 30, 780)}${productThumb(658, 226, 78, 58, 'shelf')}${progress(658, 306, 78, 0.46, '#b8beb8')}`, 18)}${pill(520, 392, 'A is clearer', '#dff5e8', greenDark)}`)}
    ${flowArrow(794, 282, 864, 282)}
    ${uiCard(864, 142, 244, 280, `${uiKicker(896, 182, 'LAUNCH CANDIDATE')}${statusRow(896, 242, 'Clarity', 'Strong')}${statusRow(896, 300, 'Trust', 'Good')}${statusRow(896, 358, 'Intent', 'Test', yellow)}`)}
  `)
}

function valuePropositionComparison() {
  return realBase(`
    ${uiCard(92, 120, 300, 324, `${uiKicker(126, 160, 'OFFER A')}${contentThumb(126, 194, 220, 104)}${uiBody(126, 346, 'Simple benefit')}${pill(126, 374, 'Clear')}`)}
    ${flowArrow(392, 282, 452, 282)}
    ${uiCard(452, 88, 300, 388, `${uiKicker(486, 128, 'OFFER B')}${contentThumb(486, 162, 220, 104, 'street')}${uiBody(486, 314, 'Premium positioning')}${pill(486, 346, 'Needs proof', '#f5ead5', '#7a5a00')}${lineBlock(486, 400, [190, 126])}`)}
    ${flowArrow(752, 282, 812, 282)}
    ${uiCard(812, 120, 296, 324, `${uiKicker(846, 160, 'BEST MESSAGE')}${uiBody(846, 212, 'Specific + credible wins')}${progress(846, 270, 192, 0.78)}${check(1030, 352)}`)}
  `)
}

function creativeRecommendation() {
  return realBase(`
    ${uiCard(92, 110, 300, 390, `${uiKicker(126, 150, 'CREATIVE INPUT')}${contentThumb(126, 188, 220, 104)}${contentThumb(126, 318, 220, 104, 'street')}`)}
    ${flowArrow(392, 306, 456, 306)}
    ${uiCard(456, 84, 322, 444, `${uiKicker(492, 124, 'FIRST CREATIVE SET')}${['Hook', 'Proof', 'CTA'].map((item, i) => `<g transform="translate(492 ${184 + i * 88})">${plainCard(0, -34, 240, 66, `${label(22, 8, item, 20, 760)}${lineBlock(92, -2, [110])}`, 16)}</g>`).join('')}`)}
    ${flowArrow(778, 306, 848, 306)}
    ${uiCard(848, 156, 260, 292, `${uiKicker(880, 196, 'RECOMMENDATION')}${uiBody(880, 244, 'Test creator-led proof first')}${pill(880, 314, 'Ready to brief', '#dff5e8', greenDark)}`)}
  `)
}

function channelTestPlan() {
  return realBase(`
    ${uiCard(84, 94, 314, 420, `${uiKicker(118, 134, 'CHANNEL PLAN')}${['Search', 'Creator', 'Community', 'Retail signal'].map((item, i) => `${statusRow(118, 206 + i * 70, item, ['Start', 'Brief', 'Listen', 'Watch'][i], [green, teal, yellow, '#b7bdb8'][i])}`).join('')}`)}
    ${flowArrow(398, 306, 466, 306)}
    ${uiCard(466, 128, 298, 336, `${uiKicker(500, 168, 'SPRINT WEEK')}${contentThumb(500, 202, 210, 94)}${lineBlock(500, 342, [188, 130])}${pill(500, 392, 'In motion', '#dff5e8', greenDark)}`)}
    ${flowArrow(764, 306, 832, 306)}
    ${uiCard(832, 158, 280, 276, `${uiKicker(866, 198, 'COORDINATION')}${uiBody(866, 244, 'Media + creator + local ops')}${check(1028, 348)}`)}
  `)
}

function creatorBrief() {
  return realBase(`
    ${uiCard(88, 120, 310, 340, `${uiKicker(122, 160, 'CREATOR SHORTLIST')}${avatarRow(128, 218)}${lineBlock(122, 286, [210, 154])}${pill(122, 344, 'Brief ready', '#dff5e8', greenDark)}`)}
    ${flowArrow(398, 290, 464, 290)}
    ${uiCard(464, 92, 320, 400, `${uiKicker(500, 132, 'MEDIA CREATOR BRIEF')}${contentThumb(500, 168, 230, 104, 'street')}${statusRow(500, 332, 'Audience', 'Set')}${statusRow(500, 390, 'Content angle', 'Set')}`)}
    ${flowArrow(784, 290, 854, 290)}
    ${uiCard(854, 150, 260, 280, `${uiKicker(886, 190, 'HANDOFF')}${uiBody(886, 236, 'Agency can execute')}${pill(886, 302, 'Next: launch', '#dff5e8', greenDark)}`)}
  `)
}

function localOpsChecklist() {
  return realBase(`
    ${uiCard(96, 112, 310, 374, `${uiKicker(130, 152, 'LOCAL SETUP')}${['Hiring', 'Payroll', 'Support', 'Contractor'].map((item, i) => `${statusRow(130, 218 + i * 60, item, i < 2 ? 'Ready' : 'Plan', i < 2 ? green : yellow)}`).join('')}`)}
    ${flowArrow(406, 300, 474, 300)}
    ${uiCard(474, 132, 294, 332, `${uiKicker(508, 172, 'WORKFORCE FLOW')}${avatarRow(516, 232)}${lineBlock(508, 302, [202, 140])}${pill(508, 366, 'Ops owner assigned')}`)}
    ${flowArrow(768, 300, 836, 300)}
    ${uiCard(836, 158, 276, 280, `${uiKicker(870, 198, 'ENTRY READY')}${uiBody(870, 244, 'Local operations can support test demand')}${check(1040, 348)}`)}
  `)
}

function attributionReview() {
  return realBase(`
    ${uiCard(86, 118, 296, 368, `${uiKicker(120, 158, 'CHANNEL SIGNALS')}${['Search', 'Creator', 'Email', 'Community'].map((item, i) => `${statusRow(120, 226 + i * 62, item, ['Keep', 'Test', 'Nurture', 'Watch'][i], [green, yellow, teal, '#b7bdb8'][i])}`).join('')}`)}
    ${flowArrow(382, 302, 454, 302)}
    ${uiCard(454, 94, 336, 418, `${uiKicker(490, 134, 'ENTRY ROI REVIEW')}${plainCard(490, 176, 240, 76, `${label(516, 222, 'Market response', 20, 700)}${progress(650, 208, 58, 0.68)}`, 18)}${plainCard(490, 280, 240, 76, `${label(516, 326, 'Operating load', 20, 700)}${progress(650, 312, 58, 0.46, yellow)}`, 18)}${pill(490, 416, 'Decision view')}`)}
    ${flowArrow(790, 302, 862, 302)}
    ${uiCard(862, 158, 248, 278, `${uiKicker(894, 198, 'NEXT DECISION')}${uiBody(894, 244, 'Optimize before scaling')}${check(1030, 344)}`)}
  `)
}

function channelQualityReadout() {
  return realBase(`
    ${uiCard(88, 104, 320, 408, `${uiKicker(122, 144, 'CHANNEL QUALITY')}${['Intent', 'Feedback', 'Cost pressure', 'Ops fit'].map((item, i) => `${statusRow(122, 214 + i * 66, item, ['Good', 'Useful', 'Watch', 'Good'][i], [green, teal, yellow, green][i])}`).join('')}`)}
    ${flowArrow(408, 306, 482, 306)}
    ${uiCard(482, 142, 292, 318, `${uiKicker(516, 182, 'READOUT')}${Array.from({ length: 4 }, (_, i) => `<rect x="${522 + i * 42}" y="${338 - i * 30}" width="28" height="${62 + i * 30}" rx="8" fill="${green}" opacity="${0.28 + i * 0.14}"/>`).join('')}${lineBlock(516, 238, [180, 128])}`)}
    ${flowArrow(774, 306, 846, 306)}
    ${uiCard(846, 154, 264, 286, `${uiKicker(880, 194, 'ACTION')}${uiBody(880, 242, 'Shift budget toward higher-quality signals')}${pill(880, 324, 'Refine mix')}`)}
  `)
}

function optimizationRoadmap() {
  return realBase(`
    ${uiCard(86, 144, 280, 294, `${uiKicker(120, 184, 'CURRENT PATH')}${uiBody(120, 232, 'Good signal, unclear scale path')}${lineBlock(120, 294, [174, 120])}`)}
    ${flowArrow(366, 292, 438, 292)}
    ${uiCard(438, 96, 340, 392, `${uiKicker(474, 136, 'NEXT ACTIONS')}${['Optimize offer', 'Scale channel', 'Pause weak path'].map((item, i) => `${statusRow(474, 220 + i * 76, item, ['Now', 'After', 'Stop'][i], [green, teal, yellow][i])}`).join('')}`)}
    ${flowArrow(778, 292, 850, 292)}
    ${uiCard(850, 154, 260, 282, `${uiKicker(884, 194, 'ROADMAP')}${uiBody(884, 242, 'One next test, one owner, one review date')}${pill(884, 326, 'Ready')}`)}
  `)
}

const demos = [
  ['market-opportunity-brief.svg', marketOpportunityBrief()],
  ['category-priority-map.svg', categoryPriorityMap()],
  ['first-market-recommendation.svg', firstMarketRecommendation()],
  ['concept-test-brief.svg', conceptTestBrief()],
  ['value-proposition-comparison.svg', valuePropositionComparison()],
  ['creative-recommendation.svg', creativeRecommendation()],
  ['channel-test-plan.svg', channelTestPlan()],
  ['creator-brief.svg', creatorBrief()],
  ['local-ops-checklist.svg', localOpsChecklist()],
  ['attribution-review.svg', attributionReview()],
  ['channel-quality-readout.svg', channelQualityReadout()],
  ['optimization-roadmap.svg', optimizationRoadmap()]
]

fs.mkdirSync(outDir, { recursive: true })

demos.forEach(([filename, svg]) => {
  fs.writeFileSync(path.join(outDir, filename), svg)
})

console.log(`Generated ${demos.length} demo concept SVGs in ${outDir}`)
