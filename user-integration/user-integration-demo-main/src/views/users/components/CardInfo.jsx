/* eslint-disable react/prop-types */
import userImage from '../../../assets/userImage.svg';

const CardInfo = ({user}) => {
  return (
    <div
        style={{
            width: "300px",
            padding: "20px", 
            height:"600px", 
            backgroundColor: "white",
            boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
            borderRadius: "10px"
        }}
    >
        <img src={userImage} width={80} alt="avatar" />
        <p>Nombre</p>
        <p>{user.name}</p>
        <p>Email</p>
        <p>{user.email}</p>
        <p>Dirección</p>
        <p>{user.adress}</p>
        <p>Edad</p>
        <p>{user.age}</p>
        <p>CP</p>
        <p>{user.cp}</p>
        <p>Teléfono</p>
        <p>{user.phone}</p>
        
    </div>
  )
}

export default CardInfo