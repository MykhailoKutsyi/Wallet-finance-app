import { createPortal } from 'react-dom';
import Datetime from 'react-datetime';
import { Formik, ErrorMessage, useFormik } from 'formik';
import 'react-datetime/css/react-datetime.css';
import CustomSelect from '../SelectTransaction/SelectTransaction';
import moment from 'moment';
import validationSchema from '../TransactValidation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  TransactBackdrop,
  TransactBox,
  TransButtonClose,
  TransactForm,
  TransTitle,
  CheckBoxWrapper,
  CheckBox,
  CheckBoxLabel,
  Income,
  Expense,
  TransactHadleWrapper,
  TransactSumLabel,
  TransactSumInput,
  TransactDateInput,
  TransactComment,
  TransactBtnAdd,
  TransactBtnCncl,
  TransactContainer,
  TransSumDateCommonBox,
} from './ModalTransaction.styled';
import { useDispatch, useSelector } from 'react-redux';
import financeOperations from 'redux/finance/finance-operations';
import globalSelectors from 'redux/finance/finance-selectors';
import { toggleModalAddTransaction } from '../../../redux/global/global-slice';
import { useEffect } from 'react';
const ModalRoot = document.querySelector('#modal-root');

export default function AddTransaction({ errors, touched }) {
  const dispatch = useDispatch();
  const onClose = () => dispatch(toggleModalAddTransaction());
  const categories = useSelector(globalSelectors.getCategories);
  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  useEffect(() => {
    dispatch(financeOperations.categories());
  }, [dispatch]);

  const renderInput = props => (
    <TransactDateInput {...props}></TransactDateInput>
  );

  const today = moment().format('YYYY-MM-DD');
  const valid = current => current.isBefore(today);

  const formik = useFormik({
    initialValues: {
      type: true,
      category: '',
      amount: 0.0,
      date: today,
      year: null,
      month: null,
      comment: '',
    },
    validationSchema,
    onSubmit: values => {
      console.log(values);
      if (!values.type) {
        values.category = 'Regular income';
      }
      if (!values.category) {
        toast.error('Please,select the category');
      }
      console.log(values.date);
      const arrDate = values.date.split('-');
      values.year = Number(arrDate[0]);
      values.month = Number(arrDate[1]);
      values.amount = Number(values.amount);

      dispatch(financeOperations.createTransactions(values));
    },
  });
  function formatDate(momentDate) {
    return moment(momentDate).format('YYYY-MM-DD');
  }
  return createPortal(
    <TransactBackdrop onClick={onBackdropClick}>
      <TransactContainer>
        <TransButtonClose>X</TransButtonClose>
        <Formik>
          <TransactBox>
            <TransTitle>Add transaction</TransTitle>
            <TransactForm onSubmit={formik.handleSubmit}>
              <TransactHadleWrapper>
                <Income checked={formik.values.type}>Income</Income>
                <CheckBoxWrapper>
                  <CheckBox
                    defaultChecked
                    id="checkbox"
                    type="checkbox"
                    onChange={formik.handleChange}
                    name="type"
                    value={formik.values.type}
                  />
                  <CheckBoxLabel htmlFor="checkbox" />
                </CheckBoxWrapper>
                <Expense checked={formik.values.type}>Expense</Expense>
              </TransactHadleWrapper>

              {formik.values.type && (
                <>
                  <CustomSelect
                    type={formik.values.type}
                    options
                    value={formik.values.category}
                    onChange={value =>
                      formik.setFieldValue('category', value.value)
                    }
                  />
                  <ErrorMessage name="category" />
                </>
              )}

              <TransSumDateCommonBox>
                <TransactSumLabel htmlFor="amount"></TransactSumLabel>
                <div>
                  <TransactSumInput
                    id="amount"
                    name="amount"
                    value={formik.values.amount}
                    onChange={formik.handleChange}
                    placeholder="0.00"
                  ></TransactSumInput>
                  {/* <ErrorMessage name="sum" /> */}
                  {formik.errors.amount && formik.touched.amount ? (
                    <div>{formik.errors.amount}</div>
                  ) : null}
                </div>
                <Datetime
                  value={formik.values.date}
                  name="date"
                  onChange={dateFromValue =>
                    formik.setFieldValue('date', formatDate(dateFromValue))
                  }
                  renderInput={renderInput}
                  dateFormat="YYYY-MM-DD"
                  timeFormat={false}
                  isValidDate={valid}
                  closeOnSelect
                />
              </TransSumDateCommonBox>

              <TransactComment
                placeholder="Comment"
                value={formik.values.comment}
                name="comment"
                onChange={formik.handleChange}
              ></TransactComment>
              <TransactBtnAdd type="submit">Add</TransactBtnAdd>
            </TransactForm>
          </TransactBox>
        </Formik>
        <TransactBtnCncl>Cancel</TransactBtnCncl>
      </TransactContainer>
    </TransactBackdrop>,
    ModalRoot
  );
}
