
const Spinner = () => {
  const spinnerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const spinnerCircleStyle = {
    border: '4px solid #f3f3f3', // Light gray
    borderTop: '4px solid #3498db', // Blue
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    animation: 'spin 1s linear infinite',
  };

  const spinKeyframes = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <div style={spinnerStyle}>
      <style>{spinKeyframes}</style>
      <div style={spinnerCircleStyle}></div>
    </div>
  );
}

export default Spinner;
