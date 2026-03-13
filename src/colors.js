const C = {
  greenDeep:  '#1a3c2e',
  greenMid:   '#2d5a42',
  greenLight: '#3d7a5a',
  gold:       '#c9a84c',
  goldLight:  '#e0c57a',
  goldPale:   '#f5e9c4',
  cream:      '#fdf6e8',
  creamDark:  '#f0e6cc',
  brown:      '#5c3d2e',
  textDark:   '#1e1810',
  textMid:    '#3d2e1e',
}

export default C

// Reusable clip-path shapes
export const clip7 = 'polygon(7px 0%, 100% 0%, calc(100% - 7px) 100%, 0% 100%)'
export const clip6 = 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)'
export const clip5 = 'polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%)'
export const clip8 = 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)'

// Shared background patterns
export const geoBgHeader = {
  backgroundColor: C.greenDeep,
  backgroundImage: `
    repeating-linear-gradient(60deg, transparent, transparent 30px, rgba(201,168,76,0.04) 30px, rgba(201,168,76,0.04) 31px),
    repeating-linear-gradient(-60deg, transparent, transparent 30px, rgba(201,168,76,0.04) 30px, rgba(201,168,76,0.04) 31px)
  `,
}

export const geoBgHero = {
  backgroundColor: C.greenDeep,
  backgroundImage: `
    repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(201,168,76,0.03) 40px, rgba(201,168,76,0.03) 41px),
    repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(201,168,76,0.03) 40px, rgba(201,168,76,0.03) 41px)
  `,
}
