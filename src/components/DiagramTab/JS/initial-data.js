
export const COLORS_ARRAY = [
    '#fed057',
    '#ffd8d0',
    '#fd9498',
    '#c5baff',
    '#6e78e8',
    '#4a56e2',
    '#81e1ff',
    '#24cca7',
    '#00ad84',
  ];

const EXPENSE_ARRAY = [
    'Basic expences',
    'Products',
    'Car',
    'Self care',
    'Child care',
    'Household',
    'Education',
    'Leisure',
    'Other expenses'
];

export const dataForDiagramTable = [
    { color: COLORS_ARRAY[0], expense: EXPENSE_ARRAY[0], value: 0 },
    { color: COLORS_ARRAY[1], expense: EXPENSE_ARRAY[1], value: 0 },
    { color: COLORS_ARRAY[2], expense: EXPENSE_ARRAY[2], value: 0 },
    { color: COLORS_ARRAY[3], expense: EXPENSE_ARRAY[3], value: 0 },
    { color: COLORS_ARRAY[4], expense: EXPENSE_ARRAY[4], value: 0 },
    { color: COLORS_ARRAY[5], expense: EXPENSE_ARRAY[5], value: 0 },
    { color: COLORS_ARRAY[6], expense: EXPENSE_ARRAY[6], value: 0 },
    { color: COLORS_ARRAY[7], expense: EXPENSE_ARRAY[7], value: 0 },
    { color: COLORS_ARRAY[8], expense: EXPENSE_ARRAY[8], value: 0 },
  ];

export const dataForChart= {
    labels: EXPENSE_ARRAY,
    datasets: [
      {
        label: 'expenses',
        data: dataForDiagramTable.map(item => item.value),
        backgroundColor: COLORS_ARRAY,
        borderColor: COLORS_ARRAY,
        borderWidth: 1,
      },
    ],
  }; 

