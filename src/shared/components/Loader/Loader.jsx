import { Hearts } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Hearts
      height="180"
      width="180"
      color="red"
      ariaLabel="hearts-loading"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClass="hearts-wrapper"
      visible={true}
    />
  );
};

export default Loader;
