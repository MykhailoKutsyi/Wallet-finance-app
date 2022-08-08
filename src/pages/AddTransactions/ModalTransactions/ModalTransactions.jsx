import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import Datetime from 'react-datetime';
import { Formik, ErrorMessage, useFormik } from 'formik';
import 'react-datetime/css/react-datetime.css';

import CustomSelect from '../SelectTransaction/SelectTransaction';
import moment from 'moment';
import validationSchema from '../validationSchema.js';
import 'react-toastify/dist/ReactToastify.css';

import {
  TransactBackdrop,
  TransactBox,
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
  DateTimeWrapper,
  TransButtonClose,
} from './ModalTransactions.styled';
import { useDispatch } from 'react-redux';
import financeOperations from 'redux/finance/finance-operations';
import { toast } from 'react-toastify';
import { toggleModalAddTransaction } from 'redux/global/global-slice';
import Icon from '../../../components/Icon/Icon';
const modalRoot = document.querySelector('#modal-root');

export default function AddTransaction({ errors, touched }) {
  const dispatch = useDispatch();
  const onClose = () => dispatch(toggleModalAddTransaction());
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
  const renderInput = props => (
    <TransactDateInput {...props}></TransactDateInput>
  );

  const today = moment().format('YYYY-MM-DD');

  const valid = current => current.isBefore(today);
  const formik = useFormik({
    initialValues: {
      type: true,
      category: '',
      amount: 0,
      date: today,
      comment: '',
      year: null,
      month: null,
    },
    validationSchema,
    onSubmit: async values => {
      if (!values.type) {
        values.category = 'Regular income';
      }
      if (!values.category) {
        toast.error('Please enter category');
        return;
      }
      const arrDate = values.date.split('-');
      values.year = Number(arrDate[0]);
      values.month = Number(arrDate[1]);
      values.amount = Number(values.amount);

      try {
        await dispatch(
          financeOperations.createTransactions({
            ...values,
            type: !values.type,
          })
        );
        onClose();
        dispatch(financeOperations.refreshTransactions());
        toast.success('Yeap! Transaction created');
      } catch (error) {
        toast.error(error.message);
      }
      values.amount = 0;
      values.comment = '';
    },
  });
  function formatDate(momentDate) {
    return moment(momentDate).format('YYYY-MM-DD');
  }
  return createPortal(
    <TransactBackdrop onClick={onBackdropClick}>
      <TransactContainer>
        <TransButtonClose onClick={() => onClose()}>
          <Icon id={'#icon-close'} width={16} height={16} />
        </TransButtonClose>
        <Formik>
          <TransactForm onSubmit={formik.handleSubmit}>
            <TransTitle>Add transaction</TransTitle>
            <TransactBox>
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
                    checked={formik.values.type}
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
                <div style={{ marginRight: 32 }}>
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
                <DateTimeWrapper>
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
                  <Icon id={'#icon-date'} width={24} height={24}></Icon>
                </DateTimeWrapper>
              </TransSumDateCommonBox>

              <TransactComment
                placeholder="Comment"
                value={formik.values.comment}
                name="comment"
                onChange={formik.handleChange}
              ></TransactComment>
            </TransactBox>
            <TransactBtnAdd type="submit">Add</TransactBtnAdd>
          </TransactForm>
        </Formik>

        <TransactBtnCncl type="button" onClick={() => onClose()}>
          Cancel
        </TransactBtnCncl>
      </TransactContainer>
    </TransactBackdrop>,
    modalRoot
  );
}
