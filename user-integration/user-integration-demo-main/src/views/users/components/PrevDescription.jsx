const PrevDescription = ({ descriptions }) => {
  return (
      <div style={{width: '100%'}}>
          {descriptions?.map((des, idx) => (
              <div key={idx} style={{
                  boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
                  borderRadius: '10px',
                  padding: '10px',
                  marginBottom: '20px',
                  backgroundColor: '#fff',
                  borderLeft: '8px solid #399C7E',
                  position: 'relative',
              }}>
                  <div style={{
                      position: 'absolute',
                      top: '-10px',
                      left: '-10px',
                      backgroundColor: '#399C7E',
                      color: 'white',
                      padding: '5px 10px',
                      borderRadius: '10px 0 10px 0',
                  }}>
                      #{idx + 1}
                  </div>
                  <h3 style={{ color: '#333', marginBottom: '10px' }}>Descripción:</h3>
                  <p style={{ fontStyle: 'normal', color: '#000', backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px' }}>{des.description}</p>
                  <h3 style={{ color: '#333', marginTop: '20px', marginBottom: '10px' }}>Prescripción:</h3>
                  <p style={{ fontWeight: 'normal', color: '#000', backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px' }}>{des.prescription}</p>
              </div>
          ))}
      </div>
  );
};

export default PrevDescription;