import { useSelector, useDispatch } from 'react-redux';
import financeOperations from 'redux/finance/finance-operations';
import globalSelectors from 'redux/finance/finance-selectors';
import { useEffect, useState } from 'react';
import Select from 'react-select';
// const options = [
//   { value: 'main', label: 'Main' },
//   { value: 'car', label: 'Car' },
//   { value: 'health', label: 'Health' },
// ];

export default function CustomSelect({ onChange, value, checked }) {
  const dispatch = useDispatch();
  // const categories = useSelector(globalSelectors.getCategories);
  const [options, setOptions] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await dispatch(financeOperations.categories());
      setOptions(
        data.payload.map(item => {
          return { value: item.name, label: item.name };
        })
      );
    };
    getData();
  }, [dispatch]);

  const defaultValue = (options, value) => {
    return options ? options.find(option => option.value === value) : '';
  };
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      // width: "300px",
      borderRadius: 18,
      borderBottom: '1px dotted pink',
      color: state.selectProps.menuColor,
      padding: 0,
      marginTop: 4,
      marginBottom: 0,
      boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
      // backgroundColor: "red",
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      backgroundColor: 'transparent',
    }),
    container: (provided, state) => ({
      ...provided,
      marginTop: 40,
    }),
    option: (provided, state) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      color: state.isFocused ? '#FF6596' : '#000000',
      backgroundColor: state.isFocused ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
      paddingLeft: 20,
      height: 44,
      // paddingTop: 4,
      // borderRadius: 12,
    }),

    menuList: (provided, state) => ({
      ...provided,
      padding: 0,
      borderRadius: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    }),
    control: (provided, state) => ({
      ...provided,
      borderRadius: 0,
      border: state.isFocused ? 'none' : 'none',
      // borderColor: state.isHovered ? "red" : "none",

      boxShadow: state.isFocused ? 'transparent' : 'transparent',

      borderBottom: state.isHovered ? '1px solid #E0E0E0' : '1px solid #E0E0E0',
    }),
  };

  return (
    <Select
      options={options}
      placeholder="Select a category"
      styles={customStyles}
      value={defaultValue(options, value)}
      // value={"sdsdss"}
      onChange={value => onChange(value)}
    ></Select>
  );
}
