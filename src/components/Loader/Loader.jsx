import { TailSpin } from 'react-loader-spinner';

const Loader = () => (
  <div
    style={{
      width: '80px',
      margin: 'auto',
    }}
  >
    <TailSpin color="#4A56E2" height={80} width={80} />
  </div>
);

export default Loader;
