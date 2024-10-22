interface Items {
  title: string;
  return: string;
  cost: number;
  author?: string;
  buyAgain?: boolean;
  viewItem?: string;
  productReview?: boolean;
  productSupport?: string;
}

interface orderInfo {
  orderPlaced: string;
  orderDelivered: string;
  total: number;
  shipTo: string;
  orderID: string;
  items: Items[];
  orderDetails?: string;
  invoice?: string;
}

const orderHistory: orderInfo[] = [
  {
    orderPlaced: 'August 4, 2020',
    orderDelivered: 'Aug. 8, 2020',
    total: 34.0,
    shipTo: 'JS Masher',
    orderID: '114-3941689-8772232',
    items: [
      {
        title: 'JavaScript for impatient programmers',
        return: 'Sep. 7, 2020',
        cost: 31.55,
        author: 'Rauschmayer, Dr. Axel',
      },
    ],
  },
  {
    orderPlaced: 'July 19, 2020',
    orderDelivered: 'Jul 20, 2020',
    total: 44.53,
    shipTo: 'JS Masher',
    orderID: '113-9984268-1280257',
    items: [
      {
        title: 'The Timeless Way of Building',
        return: 'Aug. 19, 2020',
        cost: 41.53,
        author: 'Alexander, Christopher',
      },
    ],
  },
  {
    orderPlaced: 'July 4, 2020',
    orderDelivered: 'Jul 7, 2020',
    total: 17.22,
    shipTo: 'JS Masher',
    orderID: '114-2875557-9059409',
    items: [
      {
        title:
          'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for Wii U, PC. ...',
        return: 'Aug. 5, 2020',
        cost: 15.98,
      },
    ],
  },
  {
    orderPlaced: 'July 3, 2020',
    orderDelivered: 'Jul 5, 2020',
    total: 138.93,
    shipTo: 'JS Masher',
    orderID: '113-2883177-2648248',
    items: [
      {
        title:
          'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        return: 'Aug. 4, 2020',
        cost: 94.95,
      },
      {
        title: 'The Art of SQL',
        return: 'Aug. 4, 2020',
        cost: 33.99,
        author: 'Faroult, Stephane',
      },
    ],
  },
];
