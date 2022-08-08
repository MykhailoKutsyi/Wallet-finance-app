
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

export const EXPENSE_ARRAY = [
  {
    id: "1",
    name: "Basic expenses"
  },
    {
    id: "2",
    name: "Products"
  },
    {
    id: "3",
    name: "Car"
  },
    {
    id: "4",
    name: "Self care"
  },
  {
    id: "5",
    name: "Child care"
  },
    {
    id: "6",
    name: "Household products"
  },
      {
    id: "7",
    name: "Education" 
  },  
    {
    id: "8",
    name: "Leisure"
  },
    {
    id: "9",
    name: "Other expenses"
  }
];

export const dataForDiagramTable = [
    { color: COLORS_ARRAY[0], expense: EXPENSE_ARRAY[0].name, value: 0 },
    { color: COLORS_ARRAY[1], expense: EXPENSE_ARRAY[1].name, value: 0 },
    { color: COLORS_ARRAY[2], expense: EXPENSE_ARRAY[2].name, value: 0 },
    { color: COLORS_ARRAY[3], expense: EXPENSE_ARRAY[3].name, value: 0 },
    { color: COLORS_ARRAY[4], expense: EXPENSE_ARRAY[4].name, value: 0 },
    { color: COLORS_ARRAY[5], expense: EXPENSE_ARRAY[5].name, value: 0 },
    { color: COLORS_ARRAY[6], expense: EXPENSE_ARRAY[6].name, value: 0 },
    { color: COLORS_ARRAY[7], expense: EXPENSE_ARRAY[7].name, value: 0 },
    { color: COLORS_ARRAY[8], expense: EXPENSE_ARRAY[8].name, value: 0 },
  ];

export const dataForChart= {
    labels: EXPENSE_ARRAY.map(item => item.name),
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

export const dataForMonthPicker = [
  {id: '1', value: 1, name: '01 - january'},
  {id: '2', value: 2, name: '02 - february'},
  {id: '3', value: 3, name: '03 - march'},
  {id: '4', value: 4, name: '04 - april'},
  {id: '5', value: 5, name: '05 - may'},
  {id: '6', value: 6, name: '06 - june'},
  {id: '7', value: 7, name: '07 - july'},
  {id: '8', value: 8, name: '08 - august'},
  {id: '9', value: 9, name: '09 - september'},
  {id: '10', value: 10, name: '10 - october'},
  {id: '11', value: 11, name: '11 - november'},
  {id: '12', value: 12, name: '12 - december'},
]

export const dataForYearPicker = [
  {id: '1', value: 2015, name: '2015'},
  {id: '2', value: 2016, name: '2016'},
  {id: '3', value: 2017, name: '2017'},
  {id: '4', value: 2018, name: '2018'},
  {id: '5', value: 2019, name: '2019'},
  {id: '6', value: 2020, name: '2020'},
  {id: '7', value: 2021, name: '2021'},
  {id: '8', value: 2022, name: '2022'},
  {id: '9', value: 2023, name: '2023'},
  {id: '10', value: 2024, name: '2024'},
  {id: '11', value: 2025, name: '2025'},
  {id: '12', value: 2025, name: '2026'},
  {id: '13', value: 2025, name: '2027'},
  {id: '14', value: 2025, name: '2028'},
  {id: '15', value: 2025, name: '2029'},
  {id: '16', value: 2025, name: '2030'},
]