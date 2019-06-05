// const elements = [
//   {
//     symbol: 'H',
//     name: 'Hidrógeno',
//     atmNum: '1',
//     atmMss: '1.008'
//   },
//   {
//     symbol: 'He',
//     name: 'Helio',
//     atmNum: '2',
//     atmMss: '4.003'
//   },
//   {
//     symbol: 'Li',
//     name: 'Litio',
//     atmNum: '3',
//     atmMss: '6.94'
//   },
//   {
//     symbol: 'Be',
//     name: 'Berilio',
//     atmNum: '4',
//     atmMss: '9.012'
//   },
//   {
//     symbol: 'B',
//     name: 'Boro',
//     atmNum: '5',
//     atmMss: '10.81'
//   },
//   {
//     symbol: 'C',
//     name: 'Carbono',
//     atmNum: '6',
//     atmMss: '12.0011'
//   },
//   {
//     symbol: 'N',
//     name: 'Nitrógeno',
//     atmNum: '7',
//     atmMss: '14.007'
//   },
//   {
//     symbol: 'O',
//     name: 'Oxígeno',
//     atmNum: '8',
//     atmMss: '15.999'
//   },
//   {
//     symbol: 'F',
//     name: 'Flúor',
//     atmNum: '9',
//     atmMss: '18.998'
//   },
//   {
//     symbol: 'Ne',
//     name: 'Neón',
//     atmNum: '10',
//     atmMss: '20.180'
//   },
//   {
//     symbol: 'Na',
//     name: 'Sodio',
//     atmNum: '11',
//     atmMss: '22.990'
//   },
//   {
//     symbol: 'Mg',
//     name: 'Magnesio',
//     atmNum: '12',
//     atmMss: '24.305'
//   },
//   {
//     symbol: 'Al',
//     name: 'Aluminio',
//     atmNum: '13',
//     atmMss: '26.982'
//   },
//   {
//     symbol: 'Si',
//     name: 'Silicio',
//     atmNum: '14',
//     atmMss: '28.085'
//   },
//   {
//     symbol: 'P',
//     name: 'Fósforo',
//     atmNum: '15',
//     atmMss: '30.974'
//   },
//   {
//     symbol: 'S',
//     name: 'Azufre',
//     atmNum: '16',
//     atmMss: '32.06'
//   },
//   {
//     symbol: 'Cl',
//     name: 'Cloro',
//     atmNum: '17',
//     atmMss: '35.45'
//   },
//   {
//     symbol: 'Ar',
//     name: 'Argón',
//     atmNum: '18',
//     atmMss: '39.95'
//   },
//   {
//     symbol: 'K',
//     name: 'Potasio',
//     atmNum: '19',
//     atmMss: '39.098'
//   },
//   {
//     symbol: 'Ca',
//     name: 'Calcio',
//     atmNum: '20',
//     atmMss: '40.078'
//   },
//   {
//     symbol: 'Sc',
//     name: 'Escacio',
//     atmNum: '21',
//     atmMss: '44.956'
//   },
//   {
//     symbol: 'Ti',
//     name: 'Titanio',
//     atmNum: '22',
//     atmMss: '47.867'
//   },
//   {
//     symbol: 'V',
//     name: 'Vanadio',
//     atmNum: '23',
//     atmMss: '50.942'
//   },
//   {
//     symbol: 'Cr',
//     name: 'Cromo',
//     atmNum: '24',
//     atmMss: '51.996'
//   },
//   {
//     symbol: 'Mn',
//     name: 'Manganeso',
//     atmNum: '25',
//     atmMss: '54.938'
//   },
//   {
//     symbol: 'Fe',
//     name: 'Hierro',
//     atmNum: '26',
//     atmMss: '55.845'
//   },
//   {
//     symbol: 'Co',
//     name: 'Cobalto',
//     atmNum: '27',
//     atmMss: '58.933'
//   },
//   {
//     symbol: 'Ni',
//     name: 'Níquel',
//     atmNum: '28',
//     atmMss: '58.693'
//   },
//   {
//     symbol: 'Cu',
//     name: 'Cobre',
//     atmNum: '29',
//     atmMss: '65.546'
//   },
//   {
//     symbol: 'Zn',
//     name: 'Zinc',
//     atmNum: '30',
//     atmMss: '65.38'
//   },
//   {
//     symbol: 'Ga',
//     name: 'Galio',
//     atmNum: '31',
//     atmMss: '69.723'
//   },
//   {
//     symbol: 'Ge',
//     name: 'Germanio',
//     atmNum: '32',
//     atmMss: '72.630'
//   },
//   {
//     symbol: 'As',
//     name: 'Arsénico',
//     atmNum: '33',
//     atmMss: '74.922'
//   },
//   {
//     symbol: 'Se',
//     name: 'Selenio',
//     atmNum: '34',
//     atmMss: '78.971'
//   },
//   {
//     symbol: 'Br',
//     name: 'Bromo',
//     atmNum: '35',
//     atmMss: '79.904'
//   },
//   {
//     symbol: 'Kr',
//     name: 'Kriptón',
//     atmNum: '36',
//     atmMss: '83.798'
//   },
//   {
//     symbol: 'Rb',
//     name: 'Rubidio',
//     atmNum: '37',
//     atmMss: '85.468'
//   },
//   {
//     symbol: 'Sr',
//     name: 'Estroncio',
//     atmNum: '38',
//     atmMss: '87.62'
//   },
//   {
//     symbol: 'Y',
//     name: 'Itrio',
//     atmNum: '39',
//     atmMss: '88.906'
//   },
//   {
//     symbol: 'Zr',
//     name: 'Zirconio',
//     atmNum: '40',
//     atmMss: '91.224'
//   },
//   {
//     symbol: 'Nb',
//     name: 'Niobio',
//     atmNum: '41',
//     atmMss: '92.906'
//   },
//   {
//     symbol: 'Mo',
//     name: 'Molibdeno',
//     atmNum: '42',
//     atmMss: '95.95'
//   },
//   {
//     symbol: 'Tc',
//     name: 'Tecnecio',
//     atmNum: '43',
//     atmMss: '[98]'
//   },
//   {
//     symbol: 'Ru',
//     name: 'Rutenio',
//     atmNum: '44',
//     atmMss: '101.07'
//   },
//   {
//     symbol: 'Rh',
//     name: 'Rodio',
//     atmNum: '45',
//     atmMss: '102.906'
//   },
//   {
//     symbol: 'Pd',
//     name: 'Paladio',
//     atmNum: '46',
//     atmMss: '106.42'
//   },
//   {
//     symbol: 'Ag',
//     name: 'Plata',
//     atmNum: '47',
//     atmMss: '107.868'
//   },
//   {
//     symbol: 'Cd',
//     name: 'Cadmio',
//     atmNum: '48',
//     atmMss: '112.414'
//   },
//   {
//     symbol: 'In',
//     name: 'Indio',
//     atmNum: '49',
//     atmMss: '114.818'
//   },
//   {
//     symbol: 'Sn',
//     name: 'Estaño',
//     atmNum: '50',
//     atmMss: '118.710'
//   },
//   {
//     symbol: 'Sb',
//     name: 'Antimonio',
//     atmNum: '51',
//     atmMss: '121.760'
//   },
//   {
//     symbol: 'Te',
//     name: 'Telurio',
//     atmNum: '52',
//     atmMss: '127.60'
//   },
//   {
//     symbol: 'I',
//     name: 'Yodo',
//     atmNum: '53',
//     atmMss: '126.904'
//   },
//   {
//     symbol: 'Xe',
//     name: 'Xenón',
//     atmNum: '54',
//     atmMss: '131.293'
//   },
//   {
//     symbol: 'Cs',
//     name: 'Cesio',
//     atmNum: '55',
//     atmMss: '132.905'
//   },
//   {
//     symbol: 'Ba',
//     name: 'Bario',
//     atmNum: '56',
//     atmMss: '137.327'
//   },
//   {
//     symbol: 'La',
//     name: 'Lantano',
//     atmNum: '57',
//     atmMss: '138.905'
//   },
//   {
//     symbol: 'Hf',
//     name: 'Hafnio',
//     atmNum: '72',
//     atmMss: '178.49'
//   },
//   {
//     symbol: 'Ta',
//     name: 'Tántalo',
//     atmNum: '73',
//     atmMss: '180.948'
//   },
//   {
//     symbol: 'W',
//     name: 'Tungsteno',
//     atmNum: '74',
//     atmMss: '183.84'
//   },
//   {
//     symbol: 'Re',
//     name: 'Renio',
//     atmNum: '75',
//     atmMss: '186.207'
//   },
//   {
//     symbol: 'Os',
//     name: 'Osmio',
//     atmNum: '76',
//     atmMss: '190.23'
//   },
//   {
//     symbol: 'Ir',
//     name: 'Iridio',
//     atmNum: '77',
//     atmMss: '192.217'
//   },
//   {
//     symbol: 'Pt',
//     name: 'Platino',
//     atmNum: '78',
//     atmMss: '195.084'
//   },
//   {
//     symbol: 'Au',
//     name: 'Oro',
//     atmNum: '79',
//     atmMss: '196.967'
//   },
//   {
//     symbol: 'Hg',
//     name: 'Mercurio',
//     atmNum: '80',
//     atmMss: '200.592'
//   },
//   {
//     symbol: 'Tl',
//     name: 'Talio',
//     atmNum: '81',
//     atmMss: '204.38'
//   },
//   {
//     symbol: 'Pb',
//     name: 'Plomo',
//     atmNum: '82',
//     atmMss: '202.2'
//   },
//   {
//     symbol: 'Bi',
//     name: 'Bismuto',
//     atmNum: '83',
//     atmMss: '208.980'
//   },
//   {
//     symbol: 'Po',
//     name: 'Polonio',
//     atmNum: '84',
//     atmMss: '[209]'
//   },
//   {
//     symbol: 'At',
//     name: 'Astato',
//     atmNum: '85',
//     atmMss: '[210]'
//   },
//   {
//     symbol: 'Rn',
//     name: 'Radón',
//     atmNum: '86',
//     atmMss: '[222]'
//   },
//   {
//     symbol: 'Fr',
//     name: 'Francio',
//     atmNum: '87',
//     atmMss: '[223]'
//   },
//   {
//     symbol: 'Ra',
//     name: 'Radio',
//     atmNum: '88',
//     atmMss: '[226]'
//   },
//   {
//     symbol: 'Ac',
//     name: 'Actinio',
//     atmNum: '89',
//     atmMss: '[227]'
//   },
//   {
//     symbol: 'Rf',
//     name: 'Rutherfordio',
//     atmNum: '104',
//     atmMss: '[267]'
//   },
//   {
//     symbol: 'Db',
//     name: 'Dubnio',
//     atmNum: '105',
//     atmMss: '54.938'
//   },
//   {
//     symbol: 'Sg',
//     name: 'Seaborgio',
//     atmNum: '106',
//     atmMss: '[269]'
//   },
//   {
//     symbol: 'Bh',
//     name: 'Bohrio',
//     atmNum: '107',
//     atmMss: '[270]'
//   },
//   {
//     symbol: 'Hs',
//     name: 'Hasio',
//     atmNum: '108',
//     atmMss: '[269]'
//   },
//   {
//     symbol: 'Mt',
//     name: 'Meitnerio',
//     atmNum: '109',
//     atmMss: '[278]'
//   },
//   {
//     symbol: 'Ds',
//     name: 'Darmstadtio',
//     atmNum: '110',
//     atmMss: '[281]'
//   },
//   {
//     symbol: 'Rg',
//     name: 'Roentgenio',
//     atmNum: '111',
//     atmMss: '[280]'
//   },
//   {
//     symbol: 'Cn',
//     name: 'Copernicio',
//     atmNum: '112',
//     atmMss: '[285]'
//   },
//   {
//     symbol: 'Nh',
//     name: 'Nihonio',
//     atmNum: '113',
//     atmMss: '[286]'
//   },
//   {
//     symbol: 'Fl',
//     name: 'Flerovio',
//     atmNum: '114',
//     atmMss: '[289]'
//   },
//   {
//     symbol: 'Mc',
//     name: 'Moscovio',
//     atmNum: '115',
//     atmMss: '[289]'
//   },
//   {
//     symbol: 'Lv',
//     name: 'Livermorio',
//     atmNum: '116',
//     atmMss: '[293]'
//   },
//   {
//     symbol: 'Ts',
//     name: 'Teneso',
//     atmNum: '117',
//     atmMss: '[294]'
//   },
//   {
//     symbol: 'Og',
//     name: 'Oganesón',
//     atmNum: '118',
//     atmMss: '[294]'
//   },
//   {
//     symbol: 'Ce',
//     name: 'Cerio',
//     atmNum: '58',
//     atmMss: '140.116'
//   },
//   {
//     symbol: 'Pr',
//     name: 'Praseodimio',
//     atmNum: '59',
//     atmMss: '140.908'
//   },
//   {
//     symbol: 'Nd',
//     name: 'Neodimio',
//     atmNum: '60',
//     atmMss: '144.242'
//   },
//   {
//     symbol: 'Pm',
//     name: 'Prometio',
//     atmNum: '61',
//     atmMss: '[145]'
//   },
//   {
//     symbol: 'Sm',
//     name: 'Samario',
//     atmNum: '62',
//     atmMss: '150.36'
//   },
//   {
//     symbol: 'Eu',
//     name: 'Europio',
//     atmNum: '63',
//     atmMss: '151.964'
//   },
//   {
//     symbol: 'Gd',
//     name: 'Gadolinio',
//     atmNum: '64',
//     atmMss: '157.25'
//   },
//   {
//     symbol: 'Tb',
//     name: 'Terbio',
//     atmNum: '65',
//     atmMss: '158.925'
//   },
//   {
//     symbol: 'Dy',
//     name: 'Disprosio',
//     atmNum: '66',
//     atmMss: '162.500'
//   },
//   {
//     symbol: 'Ho',
//     name: 'Holmio',
//     atmNum: '67',
//     atmMss: '164.930'
//   },
//   {
//     symbol: 'Er',
//     name: 'Erbio',
//     atmNum: '68',
//     atmMss: '167.259'
//   },
//   {
//     symbol: 'Tm',
//     name: 'Tulio',
//     atmNum: '69',
//     atmMss: '168.934'
//   },
//   {
//     symbol: 'Yb',
//     name: 'Iterbio',
//     atmNum: '70',
//     atmMss: '173.045'
//   },
//   {
//     symbol: 'Lu',
//     name: 'Lutecio',
//     atmNum: '71',
//     atmMss: '174.967'
//   },
//   {
//     symbol: 'Th',
//     name: 'Torio',
//     atmNum: '90',
//     atmMss: '232.038'
//   },
//   {
//     symbol: 'Pa',
//     name: 'Protactinio',
//     atmNum: '91',
//     atmMss: '231.036'
//   },
//   {
//     symbol: 'U',
//     name: 'Uranio',
//     atmNum: '92',
//     atmMss: '238.029'
//   },
//   {
//     symbol: 'Np',
//     name: 'Neptunio',
//     atmNum: '93',
//     atmMss: '[237]'
//   },
//   {
//     symbol: 'Pu',
//     name: 'Plutonio',
//     atmNum: '94',
//     atmMss: '[244]'
//   },
//   {
//     symbol: 'Am',
//     name: 'Americio',
//     atmNum: '95',
//     atmMss: '[243]'
//   },
//   {
//     symbol: 'Cm',
//     name: 'Curio',
//     atmNum: '96',
//     atmMss: '[247]'
//   },
//   {
//     symbol: 'Bk',
//     name: 'Berkelio',
//     atmNum: '97',
//     atmMss: '[247]'
//   },
//   {
//     symbol: 'Cf',
//     name: 'Californio',
//     atmNum: '98',
//     atmMss: '[251]'
//   },
//   {
//     symbol: 'Es',
//     name: 'Einstenio',
//     atmNum: '99',
//     atmMss: '[252]'
//   },
//   {
//     symbol: 'Fm',
//     name: 'Fermio',
//     atmNum: '100',
//     atmMss: '[257]'
//   },
//   {
//     symbol: 'Md',
//     name: 'Mendelevio',
//     atmNum: '101',
//     atmMss: '[258]'
//   },
//   {
//     symbol: 'No',
//     name: 'Nobelio',
//     atmNum: '102',
//     atmMss: '[259]'
//   },
//   {
//     symbol: 'Lr',
//     name: 'Laurencio',
//     atmNum: '103',
//     atmMss: '[262]'
//   },
// ]

// var found = elements.find(function(element) {
//   return element
// })

const questions = [
  {
    question: 'Son herramientas del método científico, excepto...',
    number: '1',
    table: [
      [
        'Nº',
        'Opción',
      ],
      [
        'I.',
        'Formulación de hipótesis.'
      ],
      [
        'II.',
        'Colorización de datos'
      ],
      [
        'III.',
        'Abastecimiento técnico'
      ],
      [
        'IV.',
        'Fase de experimentación'
      ],
      [
        'V.',
        'Formulación de teoría'
      ],
      [
        'VI.',
        'Formulación de estructura'
      ],
      [
        'VII.',
        'Fase de observación'
      ],
    ],
    desc: {
      text1: 'Los pasos que sigue el Método Científico para enunciar leyes que describan la naturaleza del mundo, son',
      list: [
        { title: 'Observación', text: 'Consiste en la recopilación de hechos acerca de un problema o fenómeno natural que despierta nuestra curiosidad. Las observaciones deben ser lo más claras y numerosas posible, porque han de servir como base de partida para la solución.' },
        { title: 'Hipótesis', text: 'Es la explicación que nos damos ante el hecho observado. Su utilidad consiste en que nos proporciona una interpretación de los hechos de que disponemos, interpretación que debe ser puesta a prueba por observaciones y experimentos posteriores. Las hipótesis no deben ser tomadas nunca como verdaderas, debido a que un mismo hecho observado puede explicarse mediante numerosas hipótesis. El objeto de una buena hipótesis consiste solamente en darnos una explicación para estimularnos a hacer más experimentos y observaciones.' },
        { title: 'Experimentación', text: 'Consiste en la verificación o comprobación de la hipótesis. La experimentación determina la validez de las posibles explicaciones que nos hemos dado y decide el que una hipótesis se acepte o se deseche.' },
        { title: 'Teoría', text: 'Es una hipótesis en cual se han relacionado una gran cantidad de hechos acerca del mismo fenómeno que nos intriga. Algunos autores consideran que la teoría no es otra cosa más que una hipótesis en la cual se consideran mayor número de hechos y en la cual la explicación que nos hemos forjado tiene mayor probabilidad de ser comprobada positivamente.' },
        { title: 'Ley', text: 'Consiste en un conjunto de hechos derivados de observaciones y experimentos debidamente reunidos, clasificados e interpretados que se consideran demostrados. En otras palabras la ley no es otra cosa que una hipótesis que ha sido demostrada mediante el experimento. La ley nos permite predecir el desarrollo y evolución de cualquier fenómeno natural.' },
      ],
      text2: 'Los incisos II, III, y VI no se están refiriendo a ninguno de los pasos mencionados'
    },
    options: [
      { sub: 'A', val: 'II, IV y VI', },
      { sub: 'B', val: 'I, III, y V', },
      { sub: 'C', val: 'II, III y VI', },
      { sub: 'D', val: 'III, VI y VII', }
    ],
    answer: 'C',
    image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
  },
  {
    question: 'Las partículas rojas, verdes y amarillas del siguiente diagrama son, respectivamente...',
    number: '2',
    img: 'atom.png',
    desc: {
      text1: 'En los electrones, siempre vamos a encontrar a las protones con carga positiva(+) junto a los neutrones con carga neutra (+/-) en el núcleo, y a los electrones con carga negativa(-) en los orbitales. La pregunta nos indica ordenarlos respectivamente (rojo, verde, y amarillo).',
    },
    options: [
      { sub: 'A', val: 'Electrón, protón y neutrón', },
      { sub: 'B', val: 'Protón, neutrino y electrón', },
      { sub: 'C', val: 'Neutrino, electrón y protón', },
      { sub: 'D', val: 'Protón, neutrón y electrón', }
    ],
    answer: 'D',
    image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
  },
  {
    question: 'En el átomo, la partícula menos masiva es...',
    number: '3',
    desc: {
      text1: 'Los electrones tienen una masa de 9,11×10-31 kilogramos, que es unas 1800 menos a la de los neutrones y protones.',
    },
    options: [
      { sub: 'A', val: 'El protón', },
      { sub: 'B', val: 'El electrón', },
      { sub: 'C', val: 'El neutrón', },
      { sub: 'D', val: 'Ninguna de las anteriores', }
    ],
    answer: 'B',
    image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  },
  {
    question: 'El siguiente símbolo representa...',
    number: '4',
    img: 'nacl.png',
    desc: {
      text1: 'La sal de mesa, conocida como cloruro de sodio, tiene la fórmula química NaCl, compuesta por sodio(Na) y cloro(Cl). El clorito de sodio, aunque similar, contiene 2 átomos de oxígeno junto con uno de sodio y cloro.',
    },
    options: [
      { sub: 'A', val: 'Cloruro de sodio', },
      { sub: 'B', val: 'Clorito de nadio', },
      { sub: 'C', val: 'Ácido clorhídrico', },
      { sub: 'D', val: 'Carbonato de nadio', }
    ],
    answer: 'A',
    image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  },
  {
    question: 'Algo característico de la familia IA en la tabla periódica es...',
    number: '5',
    desc: {
      text1: 'Los elementos del grupo A se organizan en columnas en orden de valencia (IA - Un electrón de valencia, IVA - Cuatro electrones de valencia, etc...).',
    },
    options: [
      { sub: 'A', val: 'Todos sus elementos son gaseosos a temperatura ambiente', },
      { sub: 'B', val: 'Todos sus elementos tienen completo su octeto', },
      { sub: 'C', val: 'Todos sus elementos comparten un número de oxidación de +1', },
      { sub: 'D', val: 'Todos sus elementos presentan un brillo metálico', }
    ],
    answer: 'C',
    image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  },
  {
    question: 'Los siguientes elementos son:',
    number: '6',
    desc: {
      text1: 'Los elementos mostrados a la imagen son pertenecientes a la familia VIIIA, y se conocen como gases nobles o inertes.',
    },
    img: 'nobles.png',
    options: [
      { sub: 'A', val: 'Metales de transición', },
      { sub: 'B', val: 'Gases nobles', },
      { sub: 'C', val: 'Elementos de tierras raras', },
      { sub: 'D', val: 'De la familia de los lantánidos', }
    ],
    answer: 'B',
    image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  },
  {
    question: 'Los elementos resaltados son...',
    number: '7',
    img: 'metaloids.png',
    desc: {
      text1: 'La tabla periódica se divide en tres grupos. Los no metales, los metales y los metaloides. Los que se se indican en la imagen pertenecen al grupo de los metaloides.',
    },
    options: [
      { sub: 'A', val: 'Elementos pesados', },
      { sub: 'B', val: 'No metales', },
      { sub: 'C', val: 'Metales de transición', },
      { sub: 'D', val: 'Metaloides', }
    ],
    answer: 'D',
    image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  },
  {
    question: 'En la tabla periódica, la separación en periodos de los elementos representa...',
    number: '8',
    img: 'periods.jpg',
    desc: {
      text1: 'Los elementos de la tabla periódica se separan por periodos en filas descendentes, indicando la cantidad de orbitales, órbitas o niveles de energía que tiene cada elemento.',
    },
    options: [
      { sub: 'A', val: 'El número de neutrones que un elemento tiene en el núcleo', },
      { sub: 'B', val: 'El número de electrones de un elemento en su capa de valencia', },
      { sub: 'C', val: 'El número de orbitales que posee un elemento', },
      { sub: 'D', val: 'El número de partículas totales con masa que un elemento tiene', }
    ],
    answer: 'C',
    image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  },
  {
    question: '¿A qué se debe el cambio en el estado de agregación de una sustancia?',
    number: '9',
    desc: {
      text1: 'Llamamos cohesión molecular a la atracción entre moléculas que mantiene unidas a las partículas de una sustancia. Un sólido tiene mayor cohesión que un líquido, y éste a su vez más que un gas. Cuando cambia la cohesión molecular de una sustancia, cambia su estado de agregación.',
    },
    options: [
      { sub: 'A', val: 'A que sus neutrones se separan o acercan', },
      { sub: 'B', val: 'A que sus partículas se expanden o dilatan', },
      { sub: 'C', val: 'A que se incrementa o decrece su cohesión molecular', },
      { sub: 'D', val: 'A que aumenta o disminuye su temperatura', }
    ],
    answer: 'C',
    image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  },
  {
    question: '¿Qué caracteriza a una partícula polar?',
    number: '10',
    desc: {
      text1: 'La polaridad química o solo polaridad es una propiedad de las moléculas que representa la separación de las cargas eléctricas en la misma molécula, osbervando en ellas un desequilibrio en la distribución de su electronegatividad.',
    },
    options: [
      { sub: 'A', val: 'Que tiene un campo magnético', },
      { sub: 'B', val: 'Que tiene dos partículas enlazadas', },
      { sub: 'C', val: 'Que tiene una distribución desequilibrada de electronegatividad', },
      { sub: 'D', val: 'Que está en dos estados a la vez', }
    ],
    answer: 'C',
    image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  },
  {
    question: 'Principal diferencia entre un enlace covalente y uno iónico',
    number: '11',
    desc: {
      text1: 'El enlace iónico se da entre dos átomos diferentes (metálico y no. metálico), mientras que el enlace covalente se produce entre dos átomos iguales (no-metálicos). En el enlace covalente hay un compartimiento de electrones, mientras que en el enlace iónico hay una transferencia de electrones.',
    },
    options: [
      { sub: 'A', val: 'En el primero hay una compartición de electrones mientras que en el segundo éstos se transfieren', },
      { sub: 'B', val: 'El primero es entre átomos diferentes mientras que en el segundo son idénticos', },
      { sub: 'C', val: 'En el segundo existe una ionización del aire mientras que esto no pasa en el primero', },
      { sub: 'D', val: 'Ambos son iguales, sólo llevan diferentes nombres', }
    ],
    answer: 'A',
    image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  },
  {
    question: '¿Qué tipo de enlace observamos en la siguiente imagen?',
    number: '12',
    desc: {
      text1: 'La molécula de cloruro de sodio, se forma por la ionización de los átomos de sodio y cloro, y la atracción de estos cationes y aniones resultantes formando un enlace iónico. El sodio tiene un electrón fuera de una capa completa, mientras que al cloro le hace falta un electrón para completar su capa.',
    },
    img: 'naclshare.png',
    options: [
      { sub: 'A', val: 'Covalente polar', },
      { sub: 'B', val: 'Covalente no polar', },
      { sub: 'C', val: 'Puente de hidrógeno', },
      { sub: 'D', val: 'Iónico', }
    ],
    answer: 'D',
    image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  },
  {
    question: '¿Qué diferencia a un enlace covalente polar de uno no polar?',
    number: '13',
    desc: {
      text1: 'El enlace covalente polar se da generalmente entre átomos de diferentes elementos no metálicos, que al ser diferentes, presentarán distintos niveles de electronegatividad. El no polar se da entre átomos del mismo elemento no metálico, por lo que estos compartirán un nivel idéntico de electronegatividad entre sí.',
    },
    options: [
      { sub: 'A', val: 'En el polar los átomos siguen una estructura mientras que en el no polar se disponen libremente', },
      { sub: 'B', val: 'En el no polar se unen dos elementos con idéntico nivel de electronegatividad mientras que en el polar sólo se consiguen niveles similiares de electronegatividad', },
      { sub: 'C', val: 'En el polar se intenta estabilizar el orbital de valencia de los elementos mientras que en el no polar se prescinde de ello', },
      { sub: 'D', val: 'En el no polar se manejan elementos de diferente electronegatividad mientras que en el polar estos niveles son idénticos', }
    ],
    answer: 'B',
    image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  },
  {
    question: 'Para determinar la riqueza de una muestra de zinc se toman 50 gramos de la misma y se tratan con 120 ml de ácido clorhídrico del 35% y densidad 1,18 g/ml, obteniéndose cloruro de zinc e hidrógeno. Calcula la riqueza de en la muestra. Considera las siguientes masas atómicas:',
    number: '14',
    desc: {
      text1: 'Lo primero que tenemos que hacer, es formular la reacción que nos están planteando, y balancearla. El problema nos dice que la muestra de zinc(Zn) está reaccionando con ácido chlorhídrico(HCl) para formar cloruro de zinc(ZClⁿ2) e hidrógeno(Hⁿ2)',
      img1: 'q01f01.png',
      text2: 'Al escribir la reacción, la balanceamos como lo muestra la imagen anterior. Para obtener la respuesta que buscamos, que es la cantidad en gramos de zinc puro que hay en la muestra, lo tendremos que hacer a partir de la información que tenemos del ácido clorhídrico. Primero calcularemos los moles que están reaccionando de ácido clorhídrico. Para esto, vamos a usar la siguiente fórmula:',
      img2: 'q01f02.png',
      text3: 'Donde la letra griega rho representa la densidad, m la masa de la disolución y v el volumen de la disolución.',
    },
    table: [
      [
        'Elemento (Símbolo)',
        'Masa Atómica (UMA)',
      ],
      [
        'H',
        '1'
      ],
      [
        'Cl',
        '35.5'
      ],
      [
        'Zn',
        '65.4'
      ],
    ],
    options: [
      { sub: 'A', val: '4.44gr de zinc', },
      { sub: 'B', val: '14.16gr de zinc', },
      { sub: 'C', val: '44.4gr de zinc', },
      { sub: 'D', val: '1.41gr de zinc', }
    ],
    answer: 'C',
    image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  },
  // {
  //   question: '¿Qué observamos en la siguiente fórmula?',
  //   number: '15',
  //   img: 'formule.png',
  //   options: [
  //     { sub: 'A', val: 'Que la masa y el volumen son proporcionales entre sí', },
  //     { sub: 'B', val: 'Que la densidad es inversamente proporcional al volumen', },
  //     { sub: 'C', val: 'Que el volumen es directamente proporcional a la densidad', },
  //     { sub: 'D', val: 'Que las tres medidas son directamente proporcionales', }
  //   ],
  //   answer: 'B',
  //   image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  // },
  // {
  //   question: 'Se produce un fenómeno nuclear cuando...',
  //   number: '16',
  //   options: [
  //     { sub: 'A', val: 'Se cambia de forma, el tamaño, el estado de movimiento o agregación. La energía implicada generalmente es pequeña', },
  //     { sub: 'B', val: 'Se obtiene una sustancia con propiedades distintas. La energía desprendida o absorbida es mayor', },
  //     { sub: 'C', val: 'Se modifica la constitución de un núcleo del átomo. La cantidad de energía que se libera es enorme', },
  //     { sub: 'D', val: 'Se modifican los elemtos que constituyen el núcleo mismo. La energía que se genera es inmesurable', }
  //   ],
  //   answer: 'C',
  //   image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  // },
  // {
  //   question: 'Son ejemplos de compuestos',
  //   number: '17',
  //   table: [
  //     [
  //       'Nº',
  //       'Sustancia',
  //     ],
  //     [
  //       'I.',
  //       'Agua destilada'
  //     ],
  //     [
  //       'II.',
  //       'Arena de playa'
  //     ],
  //     [
  //       'III.',
  //       'Ozono'
  //     ],
  //     [
  //       'IV.',
  //       'Bronce (Aleación)'
  //     ],
  //     [
  //       'V.',
  //       'Latón (Aleación)'
  //     ],
  //     [
  //       'VI.',
  //       'Sal común'
  //     ],
  //     [
  //       'VII.',
  //       'ADN'
  //     ],
  //     [
  //       'VIII.',
  //       'Agua de mar'
  //     ],
  //   ],
  //   options: [
  //     { sub: 'A', val: 'I, II, V y VII', },
  //     { sub: 'B', val: 'III, IV, V y VII' },
  //     { sub: 'C', val: 'III, VI, VII y VIII', },
  //     { sub: 'D', val: 'I, III, VI y VII', }
  //   ],
  //   answer: 'D',
  //   image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  // },
  // {
  //   question: '¿Qué método puedo usar para separar el aceite del agua?',
  //   number: '18',
  //   options: [
  //     { sub: 'A', val: 'Decantación', },
  //     { sub: 'B', val: 'Sublimación', },
  //     { sub: 'C', val: 'Filtación', },
  //     { sub: 'D', val: 'Destilación', }
  //   ],
  //   answer: 'A',
  //   image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  // },
  // {
  //   question: 'Las mezclas pueden separarse por...',
  //   number: '19',
  //   options: [
  //     { sub: 'A', val: 'Métodos físicos y núcleares', },
  //     { sub: 'B', val: 'Métodos químicos y físicos', },
  //     { sub: 'C', val: 'Métodos químicos y nucleares', },
  //     { sub: 'D', val: 'Sólo por métodos físicos', }
  //   ],
  //   answer: 'B',
  //   image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  // },
  // {
  //   question: 'Las mezclas homogéneas reciben el nombre de...',
  //   number: '20',
  //   options: [
  //     { sub: 'A', val: 'Suspensiones', },
  //     { sub: 'B', val: 'Disoluciones', },
  //     { sub: 'C', val: 'Coloides', },
  //     { sub: 'D', val: 'Solvente', }
  //   ],
  //   answer: 'B',
  //   image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  // },
  // {
  //   question: 'La sedimentación es una técnica que separa componentes por...',
  //   number: '21',
  //   options: [
  //     { sub: 'A', val: 'Sus diferentes puntos de fusión', },
  //     { sub: 'B', val: 'Sus diferentes niveles de electronegatividad', },
  //     { sub: 'C', val: 'Sus diferentes enlaces moleculares', },
  //     { sub: 'D', val: 'Sus diferentes densidades', }
  //   ],
  //   answer: 'D',
  //   image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  // },
  // {
  //   question: 'El siguiente elemento es',
  //   number: '22',
  //   element: [elements[25]],
  //   options: [
  //     { sub: 'A', val: 'Felenio', },
  //     { sub: 'B', val: 'Plata', },
  //     { sub: 'C', val: 'Hierro', },
  //     { sub: 'D', val: 'Feladio', }
  //   ],
  //   answer: 'C',
  //   image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  // }
]

export default questions
