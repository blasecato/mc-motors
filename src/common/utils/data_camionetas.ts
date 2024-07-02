// discovery
import discovery1 from '@/assets/images/Camionetas/discovery/discovery1.jpg'
import discovery2 from '@/assets/images/Camionetas/discovery/discovery2.jpg'
import discovery3 from '@/assets/images/Camionetas/discovery/discovery3.jpg'
import discovery4 from '@/assets/images/Camionetas/discovery/discovery4.jpg'
import discovery5 from '@/assets/images/Camionetas/discovery/discovery5.jpg'
import discovery6 from '@/assets/images/Camionetas/discovery/discovery6.jpg'
import discovery7 from '@/assets/images/Camionetas/discovery/discovery7.jpg'

// Jaguar
import Jaguar1 from '@/assets/images/Camionetas/JaguarFPace/Jaguar1.jpeg'
import Jaguar2 from '@/assets/images/Camionetas/JaguarFPace/Jaguar2.jpeg'
import Jaguar3 from '@/assets/images/Camionetas/JaguarFPace/Jaguar3.jpeg'
import Jaguar4 from '@/assets/images/Camionetas/JaguarFPace/jaguar4.jpeg'
import Jaguar5 from '@/assets/images/Camionetas/JaguarFPace/jaguar5.jpeg'
import Jaguar6 from '@/assets/images/Camionetas/JaguarFPace/jaguar6.jpeg'
import Jaguar7 from '@/assets/images/Camionetas/JaguarFPace/jaguar7.jpeg'
import Jaguar8 from '@/assets/images/Camionetas/JaguarFPace/jaguar8.jpeg'
import Jaguar9 from '@/assets/images/Camionetas/JaguarFPace/jaguar9.jpeg'
import Jaguar10 from '@/assets/images/Camionetas/JaguarFPace/jaguar10.jpeg'
import Jaguar11 from '@/assets/images/Camionetas/JaguarFPace/jaguar11.jpeg'
import Jaguar12 from '@/assets/images/Camionetas/JaguarFPace/jaguar12.jpeg'

// mercedes Gris
import mercedesGris1 from '@/assets/images/Camionetas/mercedes/mercedes_gris1.jpg'
import mercedesGris2 from '@/assets/images/Camionetas/mercedes/mercedes_gris2.jpg'
import mercedesGris3 from '@/assets/images/Camionetas/mercedes/mercedes_gris3.jpg'
import mercedesGris4 from '@/assets/images/Camionetas/mercedes/mercedes_gris4.jpg'
import mercedesGris5 from '@/assets/images/Camionetas/mercedes/mercedes_gris5.jpg'
import mercedesGris6 from '@/assets/images/Camionetas/mercedes/mercedes_gris6.jpg'
import mercedesGris7 from '@/assets/images/Camionetas/mercedes/mercedes_gris7.jpg'
import mercedesGris8 from '@/assets/images/Camionetas/mercedes/mercedes_gris8.jpg'

// mercedes Rojo
import mercedesRojo1 from '@/assets/images/Camionetas/mercedes_rojo/mercedes_rojo1.jpg'
import mercedesRojo2 from '@/assets/images/Camionetas/mercedes_rojo/mercedes_rojo2.jpg'
import mercedesRojo3 from '@/assets/images/Camionetas/mercedes_rojo/mercedes_rojo3.jpg'
import mercedesRojo4 from '@/assets/images/Camionetas/mercedes_rojo/mercedes_rojo4.jpg'
import mercedesRojo5 from '@/assets/images/Camionetas/mercedes_rojo/mercedes_rojo5.jpg'
import mercedesRojo6 from '@/assets/images/Camionetas/mercedes_rojo/mercedes_rojo6.jpg'
import mercedesRojo7 from '@/assets/images/Camionetas/mercedes_rojo/mercedes_rojo7.jpg'
import mercedesRojo8 from '@/assets/images/Camionetas/mercedes_rojo/mercedes_rojo8.jpg'
import mercedesRojo9 from '@/assets/images/Camionetas/mercedes_rojo/mercedes_rojo9.jpg'
// import mercedesRojo10 from '@/assets/images/Camionetas/mercedes_rojo/mercedes_rojo10.jpg'

// range rover
import range_rover1 from '@/assets/images/Camionetas/range_rover/range_rover1.jpg'
import range_rover2 from '@/assets/images/Camionetas/range_rover/range_rover2.jpg'
import range_rover3 from '@/assets/images/Camionetas/range_rover/range_rover3.jpg'
import range_rover4 from '@/assets/images/Camionetas/range_rover/range_rover4.jpg'
import range_rover5 from '@/assets/images/Camionetas/range_rover/range_rover5.jpg'
import range_rover6 from '@/assets/images/Camionetas/range_rover/range_rover6.jpg'
import range_rover7 from '@/assets/images/Camionetas/range_rover/range_rover7.jpg'
import range_rover8 from '@/assets/images/Camionetas/range_rover/range_rover8.jpg'
import range_rover9 from '@/assets/images/Camionetas/range_rover/range_rover9.jpg'
import range_rover10 from '@/assets/images/Camionetas/range_rover/range_rover10.jpg'
import range_rover11 from '@/assets/images/Camionetas/range_rover/range_rover11.jpg'
import range_rover12 from '@/assets/images/Camionetas/range_rover/range_rover12.jpg'

const dataCamionetas = [
  {
    id: 1,
    name: 'Jaguar F Pace',
    model: "2017",
    color: "Blue",
    type: "2.0 Diesel",
    hp: "180 HP",
    use: "USED",
    images: [
      { id: 1, image: Jaguar1 },
      { id: 2, image: Jaguar2 },
      { id: 3, image: Jaguar3 },
      { id: 4, image: Jaguar4 },
      { id: 5, image: Jaguar5 },
      { id: 6, image: Jaguar6 },
      { id: 7, image: Jaguar7 },
      { id: 8, image: Jaguar8 },
      { id: 9, image: Jaguar9 },
      { id: 10, image: Jaguar10 },
      { id: 11, image: Jaguar11 },
      { id: 12, image: Jaguar12 },
    ]
  },
  {
    id: 2,
    name: 'Mercedes GLC',
    color: "Gray",
    model: "2017",
    type: "2.2",
    hp: "160 HP",
    use: "USED",
    images: [
      { id: 1, image: mercedesGris1 },
      { id: 2, image: mercedesGris2 },
      { id: 3, image: mercedesGris3 },
      { id: 4, image: mercedesGris4 },
      { id: 5, image: mercedesGris5 },
      { id: 6, image: mercedesGris6 },
      { id: 7, image: mercedesGris7 },
      { id: 8, image: mercedesGris8 },
    ]
  },
  {
    id: 3,
    name: 'Mercedes - Benz GLA',
    color: "Red",
    model: "2016",
    type: "2.2",
    hp: "136 HP",
    use: "USED",
    images: [
      { id: 1, image: mercedesRojo1 },
      { id: 2, image: mercedesRojo2 },
      { id: 3, image: mercedesRojo3 },
      { id: 4, image: mercedesRojo4 },
      { id: 5, image: mercedesRojo5 },
      { id: 6, image: mercedesRojo6 },
      { id: 7, image: mercedesRojo7 },
      { id: 8, image: mercedesRojo8 },
      { id: 9, image: mercedesRojo9 },
      // { id: 10, image: mercedesRojo10 },
    ]
  },
  {
    id: 4,
    name: 'RANGE ROVER SPORT',
    color: "Santorini Black",
    model: "2019",
    type: "3.0 Diesel",
    hp: "7 CHAIRS",
    use: "USED",
    images: [
      { id: 1, image: range_rover1 },
      { id: 2, image: range_rover2 },
      { id: 3, image: range_rover3 },
      { id: 4, image: range_rover4 },
      { id: 5, image: range_rover5 },
      { id: 6, image: range_rover6 },
      { id: 7, image: range_rover7 },
      { id: 8, image: range_rover8 },
      { id: 9, image: range_rover9 },
      { id: 10, image: range_rover10 },
      { id: 11, image: range_rover11 },
      { id: 12, image: range_rover12 },
    ]
  },
  {
    id: 5,
    name: 'LAND ROVER DISCOVERY',
    color: "Blue",
    model: "2020",
    type: "2.0 DIESEL",
    hp: "7 CHAIRS",
    use: "USED",
    images: [
      { id: 1, image: discovery1 },
      { id: 2, image: discovery2 },
      { id: 3, image: discovery3 },
      { id: 4, image: discovery4 },
      { id: 5, image: discovery5 },
      { id: 6, image: discovery6 },
      { id: 7, image: discovery7 },
    ]
  },
]

export default dataCamionetas