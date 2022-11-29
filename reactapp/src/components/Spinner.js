const Spinner = () => {
  return (
    <div className='container text-center mt-3'>
      <div
        className='spinner-border text-primary'
        role='status'
        style={{ width: '50px', height: '50px' }}
      >
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
