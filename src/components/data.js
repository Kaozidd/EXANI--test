const questions = [
  {
    question: 'Son herramientas del método científico, excepto...',
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
    img: 'atom.png',
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
    question: 'En el átomo, la partícula más masiva es...',
    options: [
      { sub: 'A', val: 'El protón', },
      { sub: 'B', val: 'El electrón', },
      { sub: 'C', val: 'El neutrón', },
      { sub: 'D', val: 'Ninguna de las anteriores', }
    ],
    answer: 'D',
    image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  },
  {
    question: 'El siguiente símbolo representa...',
    img: 'nacl.png',
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
    img: 'metaloids.png',
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
    img: 'periods.jpg',
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
    options: [
      { sub: 'A', val: 'En el primero hay una compartición de electrones mientras que en el segundo se transfieren', },
      { sub: 'B', val: 'El primero es entre átomos diferentes mientras que en el segundo son idénticos', },
      { sub: 'C', val: 'En el segundo existe una ionización del aire mientras que esto no pasa en el primero', },
      { sub: 'D', val: 'Ambos son iguales, sólo llevan diferentes nombres', }
    ],
    answer: 'A',
    image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  },
  {
    question: '¿Qué tipo de enlace observamos en la siguiente imagen?',
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
  {
    question: '¿Qué observamos en la siguiente fórmula?',
    img: 'formule.png',
    options: [
      { sub: 'A', val: 'Que la masa y el volumen son proporcionales entre sí', },
      { sub: 'B', val: 'Que la densidad es inversamente proporcional al volumen', },
      { sub: 'C', val: 'Que el volumen es directamente proporcional a la densidad', },
      { sub: 'D', val: 'Que las tres medidas son directamente proporcionales', }
    ],
    answer: 'B',
    image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  },
  {
    question: 'Se produce un fenómeno nuclear cuando...',
    options: [
      { sub: 'A', val: 'Se cambia de forma, el tamaño, el estado de movimiento o agregación. La energía implicada generalmente es pequeña', },
      { sub: 'B', val: 'Se obtiene una sustancia con propiedades distintas. La energía desprendida o absorbida es mayor', },
      { sub: 'C', val: 'Se modifica la constitución de un núcleo del átomo. La cantidad de energía que se libera es enorme', },
      { sub: 'D', val: 'Se modifican los elemtos que constituyen el núcleo mismo. La energía que se genera es inmesurable', }
    ],
    answer: 'C',
    image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  },
  {
    question: 'Son ejemplos de compuestos',
    table: [
      [
        'Nº',
        'Sustancia',
      ],
      [
        'I.',
        'Agua destilada'
      ],
      [
        'II.',
        'Arena de playa'
      ],
      [
        'III.',
        'Ozono'
      ],
      [
        'IV.',
        'Bronce (Aleación)'
      ],
      [
        'V.',
        'Latón (Aleación)'
      ],
      [
        'VI.',
        'Sal común'
      ],
      [
        'VII.',
        'ADN'
      ],
      [
        'VIII.',
        'Agua de mar'
      ],
    ],
    options: [
      { sub: 'A', val: 'I, II, V y VII', },
      { sub: 'B', val: 'III, IV, V y VII' },
      { sub: 'C', val: 'III, VI, VII y VIII', },
      { sub: 'D', val: 'I, III, VI y VII', }
    ],
    answer: 'D',
    image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  },
  {
    question: '¿Qué método puedo usar para separar el aceite del agua?',
    options: [
      { sub: 'A', val: 'Decantación', },
      { sub: 'B', val: 'Sublimación', },
      { sub: 'C', val: 'Filtación', },
      { sub: 'D', val: 'Destilación', }
    ],
    answer: 'A',
    image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  },
  {
    question: 'Las mezclas pueden separarse por...',
    options: [
      { sub: 'A', val: 'Métodos físicos y núcleares', },
      { sub: 'B', val: 'Métodos químicos y físicos', },
      { sub: 'C', val: 'Métodos químicos y nucleares', },
      { sub: 'D', val: 'Sólo por métodos físicos', }
    ],
    answer: 'B',
    image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  },
  {
    question: 'Las mezclas homogéneas reciben el nombre de...',
    options: [
      { sub: 'A', val: 'Suspensiones', },
      { sub: 'B', val: 'Disoluciones', },
      { sub: 'C', val: 'Coloides', },
      { sub: 'D', val: 'Solvente', }
    ],
    answer: 'B',
    image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  },
  {
    question: 'La sedimentación es una técnica que separa componentes por...',
    options: [
      { sub: 'A', val: 'Sus diferentes puntos de fusión', },
      { sub: 'B', val: 'Sus diferentes niveles de electronegatividad', },
      { sub: 'C', val: 'Sus diferentes enlaces moleculares', },
      { sub: 'D', val: 'Sus diferentes densidades', }
    ],
    answer: 'D',
    image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  },
]

export default questions
