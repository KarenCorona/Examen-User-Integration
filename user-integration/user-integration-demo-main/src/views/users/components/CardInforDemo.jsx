/* eslint-disable react/prop-types */
import userDemo from '../../../assets/userDemo.svg';
const CardInforDemo = ({ user }) => {
  return (
    <div
      style={{
        width: '500px',
        height: '800px',
        boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
        borderRadius: '10px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        padding: '20px',
      }}
    >
      <div>
        <img src={userDemo} alt="user" style={{ width: '140px' }} />
      </div>
      <div
        style={{
          display: 'flex',
          justifyItems: 'left',
          flexDirection: 'column',
        }}
      >
        <p style={{ fontSize: '24px' }}>Personal Information</p>
        <p style={{ fontSize: '14px' }}>Nombre:</p>
        <p style={{ fontWeight: 'bold' }}>{user.name}</p>
        <p style={{ fontSize: '14px' }}>Email:</p>
        <p style={{ fontWeight: 'bold' }}>{user.email}</p>
        <p style={{ fontSize: '14px' }}>Edad:</p>
        <p style={{ fontWeight: 'bold' }}>{user.age}</p>
        <p style={{ fontSize: '14px' }}>Año de nacimiento:</p>
        <p style={{ fontWeight: 'bold' }}>{user.adress}</p>
        <p style={{ fontSize: '14px' }}>CP:</p>
        <p style={{ fontWeight: 'bold' }}>{user.cp}</p>
        <p style={{ fontSize: '14px' }}>Teléfono:</p>
        <p style={{ fontWeight: 'bold' }}>{user.phone}</p>

      </div>
    </div>
  );
};

export default CardInforDemo;
