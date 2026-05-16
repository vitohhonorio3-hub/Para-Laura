// ============================================================
// MODEL — Dados de cada slide da história
// ============================================================

export const slides = [
  {
    id: 1,
    image: '/images/img1.jpg',
    position: 'center top',
    label: 'Nossa história',
    phrase: 'Tudo começou\ncom um olhar...',
    sub: 'e eu soube que você ia mudar tudo.',
    hearts: true,
  },
  {
    id: 2,
    image: '/images/img2.jpg',
    position: 'center center',
    label: 'Do que mais gosto',
    phrase: 'Te olhar de perto\né o meu lugar favorito.',
    sub: 'Poderia ficar aqui para sempre.',
    hearts: false,
  },
  {
    id: 3,
    image: '/images/img3.jpg',
    position: 'center top',
    label: 'Você merece',
    phrase: 'Você merece todas as flores\ndo mundo.',
    sub: 'E muito mais do que posso te dar.',
    hearts: true,
  },
  {
    id: 4,
    image: '/images/img4.jpg',
    position: 'center top',
    label: 'Nós dois',
    phrase: 'Nós somos perfeitos\njuntos.',
    sub: 'Laura & Eu — combinamos demais. 💍',
    hearts: false,
  },
  {
    id: 5,
    image: '/images/img5.jpg',
    position: 'center center',
    label: 'Em cada momento',
    phrase: 'Em qualquer look,\nem qualquer momento...',
    sub: 'você arrasa. Sempre.',
    hearts: true,
  },
  {
    id: 6,
    image: '/images/img6.jpg',
    position: 'center center',
    label: 'Do dia a dia',
    phrase: 'Do simples ao inesquecível,\neu quero tudo ao seu lado.',
    sub: 'Cada instante contigo vale um universo.',
    hearts: false,
  },
  {
    id: 7,
    image: '/images/img7.jpg',
    position: 'center top',
    label: 'Para sempre',
    phrase: 'E depois de tudo isso...',
    sub: 'ainda tenho algo muito importante a te dizer.',
    hearts: true,
  },
  {
    id: 'final',
    type: 'proposal',
  },
]

export const SLIDE_DURATION = 7000 // ms por slide
