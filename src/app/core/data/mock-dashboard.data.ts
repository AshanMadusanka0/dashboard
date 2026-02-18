export const MOCK_DASHBOARD = {
  stats: [
    { id: 'branches', title: 'Количество заведений', value: '6', color: 'bg-yellow' },
    { id: 'employees', title: 'Все сотрудники', value: '477', color: 'bg-blue' },
    { id: 'income', title: 'Общий приход', value: '120 647 000 сум', color: 'bg-green' },
    { id: 'expenses', title: 'Общий расход', value: '12 407 000 сум', color: 'bg-red' },
    { id: 'orders', title: 'Заказы', value: '1284', color: 'bg-yellow' }
  ],

  bar: {
    categories: ['2015','2016','2017','2018','2019','2020','2021','2022'],
    series: [
      { name: 'Приход', data: [3.5, 10, 6, 9, 14, 18, 15, 8] },
      { name: 'Расход', data: [1.5, 8, 2, 4, 6, 12, 11, 4] }
    ]
  },

  pies: {
    revenueA: [30, 8, 22, 40],
    revenueB: [43, 9, 26, 22],
    labels: ['Супермаркеты','Заправки','Fast food','Магазины']
  },

  table: [
    {
      id: 1,
      name: 'Заправка Жондор',
      icon: '⛽',
      balance: '22 000 000 сум',
      income: '22 000 000 сум',
      expense: '11 400 385 сум',
      profit: '10 699 615 сум',
      given: '10 699 615 сум',
      debt: '10 699 615 сум',
      rentability: '0.2 %'
    },
    {
      id: 2,
      name: 'Супермаркет Жондор',
      icon: '🛒',
      balance: '22 000 000 сум',
      income: '22 000 000 сум',
      expense: '11 400 385 сум',
      profit: '10 699 615 сум',
      given: '10 699 615 сум',
      debt: '10 699 615 сум',
      rentability: '5 %'
    },
    {
      id: 3,
      name: 'Ресторан Шофёрхон',
      icon: '☕',
      balance: '22 000 000 сум',
      income: '22 000 000 сум',
      expense: '11 400 385 сум',
      profit: '10 699 615 сум',
      given: '10 699 615 сум',
      debt: '10 699 615 сум',
      rentability: '34 %'
    }
  ],

  currencies: [
    { code: 'USD', rate: '12 600.14', delta: 10.14 },
    { code: 'EUR', rate: '13 642.17', delta: -23.02 },
    { code: 'RUB', rate: '135.92', delta: -0.05 },
    { code: 'TRY', rate: '390.94', delta: -0.86 }
  ]
};
