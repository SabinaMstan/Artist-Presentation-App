import React from 'react';

export const EduData = [
  {
    title : {name: 'College of Computer Science \"Tudor Vianu\"'},
    data: ['Bucharest, Romania', '2007']
  },
  {
    title : {name: 'National Art University', image: require('../assets/images/the_weaver.png')},
    data: ['Bucharest, Romania', 'Bachelor degree in textile art and design','2010']
  },
]

export const ExhibitData = [
  {
    title: 'The IX International Biennial of Textile Miniatures \"Out of the box\"',
    data:[{place: 'Gallery Arka, Vilnius, Lithuania', date: '19th June – 11th July 2015', image: require('../assets/images/Ideally-make_your_own_box.JPG')}]
  },
  {
    title:  'To weave dreams – MINIARTEXTIL 2016',
    data: [{place: 'San Francesco Church, Como, Italy' , date: '1st October – 20th November 2016', image: require('../assets/images/Dreams_come_true.JPG')}, {place: 'Le Beffroi, Montrouge, France' , date: '22nd of February – 19th of March 2017'}]
  },
  {
    title: 'BIAMT - International Biennial of Miniature Art',
    data: [{place: 'Faculty of Arts and Design Timișoara, Romania', date: '25th of April – 23rd of May 2016' , image: require('../assets/images/cartea_fluture.png')}, {place: 'Faculty of Arts and Design Timișoara, Romania' , date: '26th October – 15th November 2018', image: require('../assets/images/Two_ropes.jpg')}]
  },
  {
    title: 'XIIth Florence Biennale 2019',
    data: [{place: 'Fortezza da Basso, Florence, Italy', date: '18th – 27th October 2019' , image: require('../assets/images/the_weaver.png')}]
  },
]

export const ProjectData = [
  {
    title: 'West meets East – A Cultural Book Exchange',
    data: []
  },
  {
    title: 'Al-Mutanabbi Street 2012',
    data: []
  },
  {
    title: 'CFCECAS Conference \'International Day for the Elimination of Violence against Women\'',
    data: [{place: 'Bucharest, Romania', date: '25th November 2016', image: require('../assets/images/Tree_of_emotions.JPG')}]
  },
]

export const MentionsData = [
  {
    title: 'The Unfiltered Lens',
    data: [{place: 'vol. VI issue 20, page 6', date: '13th October 2010', image: require('../assets/images/the_weaver.png')}]
  },
  {
    title: 'Can Art&Design Festival 2020 winners',
    data: [{place: 'designist.ro', date: '15th June 2020', image: require('../assets/images/canart2020winner.jpg'), link: 'https://designist.ro/tablouri-celebre-au-fost-recreate-din-doze-de-aluminiu-la-can-artdesign-festival-2020'}]
  }
]

export const Sections = [
  {
    title: 'Exhibitions: ',
    data: ExhibitData
  },
  {
    title: 'Collaborative projects: ',
    data: ProjectData
  },
  {
    title: 'Press mentions: ',
    data: MentionsData
  }
]
