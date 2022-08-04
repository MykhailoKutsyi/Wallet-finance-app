import styled from 'styled-components';

export const Info = styled.div`
  width: 100%;
  height: 100%;

  background-color: #4a56e2;
  filter: opacity(0.8);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 30px;
  color: white;

  & > * {
    &:nth-child(2n) {
      margin-top: 20px;
      text-align: center;
    }
  }
`;

export const TableContainer = styled.div`
  margin-top: 10px; // not according to layout

  width: 280px;
  height: 174px;

  @media (min-width: 768px) {
    width: 336px;
    height: 182px;
  }
  @media (min-width: 1280px) {
    width: 393px;
    height: 347px;
  }
`;

export const Table = styled.table`
  border-radius: 30px;
  color: white;
`;

export const TableHead = styled.thead`
  width: 280px;
  height: 50px;

  display: block;

  border-radius: 30px 30px 0px 0px;

  padding: 11px 17px 12px 20px;

  background-color: #4a56e2;
  filter: opacity(0.8);

  @media (min-width: 768px) {
    width: 336px;
  }
  @media (min-width: 1280px) {
    width: 393px;
    height: 60px;

    padding-top: 17px;
    padding-bottom: 16px;
  }
`;

export const HeadRow = styled.tr`
  display: flex;
  justify-content: space-between;

  @media (min-width: 1280px) {
    padding-left: 27px; //layout 44px
    padding-right: 44px;
  }
`;

export const HeadItem = styled.th`
  display: inline-block;

  &:first-child {
    margin-right: 10px;
  }

  &:nth-child(2n) {
    margin-right: 40px;
  }

  color: var(--white-color);
  opacity: 1;

  font-family: font-face;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
`;

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;

  padding: 12px 20px 16px;
  border-radius: 0px 0px 30px 30px;

  background-color: var(--blue-color);

  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
    padding: 20px 61px 147px 58px;
  }
`;
export const BodyRow = styled.tr`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const BodyItem = styled.td`
  font-family: font-face;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

// Curerncy div

// export const CurrencyContainer = styled.div`
//   width: 280px;
//   height: 174px;

//   border-radius: 30px;

//   margin-top: 16px; // in layout 28px

//   @media (min-width: 768px) {
//     width: 336px;
//     height: 182px;
//   }

//   @media (min-width: 1280px) {
//     width: 393px;
//     height: 347px;
//   }
// `;

// export const CurrencyHead = styled.div`
//   height: 50px;

//   display: flex;
//   align-items: center;

//   padding-left: 20px;
//   padding-right: 17px;

//   border-radius: 30px 30px 0px 0px;

//   background-color: var(--blue-color);
//   filter: opacity(0.8);
//   color: var(--white-color);

//   font-family: font-face;
//   font-style: normal;
//   font-weight: 700;
//   font-size: 18px;
//   line-height: 27px;

//   @media (min-width: 1280px) {
//     height: 60px;
//   }
// `;

// export const HeadItem = styled.p`
//   &:first-child {
//     margin-right: 23px; // in layout 24px
//   }

//   &:nth-child(2) {
//     margin-right: 44px;
//   }
// `;

// export const CurrencyBody = styled.div`
//   height: 124px;

//   border-radius: 0px 0px 30px 30px;

//   padding: 12px 20px 16px;

//   background-color: var(--blue-color);
//   color: var(--white-color);
//   background-image: url('../../images/currency-background.jpg');

//   font-family: font-face;
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;

//   @media (min-width: 1280px) {
//     height: 182px;
//   }

//   @media (min-width: 1280px) {
//     height: 347px;
//   }
// `;

// export const BodyList = styled.div`
//   list-style: none;
// `;
// export const BodyItem = styled.div`
//   display: flex;

//   &:not(:last-child) {
//     margin-bottom: 12px;
//   }
// `;

// export const ItemData = styled.p`
//   &:first-child {
//     margin-right: 64px; // in layout 24px
//   }

//   &:nth-child(2) {
//     margin-right: 71px;
//   }
// `;
