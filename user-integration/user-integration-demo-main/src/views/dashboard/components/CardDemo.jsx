/* eslint-disable react/prop-types */
import backgroundCard from '../../../assets/backgroundCard.svg';
import userDemo from '../../../assets/userDemo.svg';

const CardDemo = ({ user }) => {
  console.log(user);
  return (
    <div
      style={{
        width: '420px',
        height: '200px',
        boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
        borderRadius: '5px',
        display: 'flex',

        cursor: 'pointer',
        backgroundImage: `url(${backgroundCard})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div style={{ display: 'flex', padding: '10%' }}>
        <div style={{ paddingRight: '10%' }}>
          <img src={userDemo} alt={user.name} width={80} />
        </div>
        <div>
          <p
            style={{
              marginBottom: '0px',
              fontWeight: 'bold',
              fontSize: '20px',
              color: 'black',
            }}
          >
            {user.name}
          </p>
          <p
            style={{
              marginTop: '0px',
              fontWeight: 'normal',
              fontSize: '12px',
              color: 'black',
            }}
          >
            {user.email}
          </p>
          <p
            style={{
              marginTop: '0px',
              fontWeight: 'normal',
              fontSize: '12px',
              color: 'black',
            }}
          >
            {user.age}
          </p>
          <p
            style={{
              marginTop: '0px',
              fontWeight: 'normal',
              fontSize: '12px',
              color: 'black',
            }}
          >
            {user.adress}
          </p>
          <p
            style={{
              marginTop: '0px',
              fontWeight: 'normal',
              fontSize: '12px',
              color: 'black',
            }}
          > 
            {user.sexo}
          </p>
          <p
            style={{
              marginTop: '0px',
              fontWeight: 'normal',
              fontSize: '12px',
              color: 'black',
            }}
          >
            {user.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDemo;
