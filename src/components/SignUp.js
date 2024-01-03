import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp(){
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  
  const containerStyle = {
    width: '100%',
    height: '100vh',
    backgroundImage: 'url(images/1000_F_274451578_YTqT3pYjmH22O8rkcgYAr5L78R2TqEVF.jpg)',
    backgroundSize: 'cover',
    fontFamily: 'Poppins, sans-serif',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  };

  const formBoxStyle = {
    width: '20%',
    maxWidth: '450px',
    position: 'absolute',
    top: '50%',
    left: '46%',
    transform: 'translate(-50%, -50%)',
    background: '#fff',
    padding: '50px 60px 70px',
    textAlign: 'center',
  };

  const h1Style = {
    fontSize: '30px',
    marginBottom: '19px',
    marginLeft: '23px',
    color: '#3c00a0',
    position: 'relative',
  };

  const inputFieldStyle = {
    background: '#eaeaea',
    margin: '15px 0',
    borderRadius: '3px',
    display: 'flex',
    alignItems: 'center',
    maxHeight: '65px',
  };

  const inputStyle = {
    width: '100%',
    background: '100%',
    border: '0',
    outline: '0',
    padding: '18px 15px',
  };

  const btnFieldStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginLeft:'-55px'
  };

  const buttonStyle = {
    flexBasis: '48%',
    color: '#fff',
    height: '40px',
    borderRadius: '20px',
    border: '0',
    outline: '0',
    cursor: 'pointer',
    transition: 'background 0.3s',
    background: isHovered ? '#000000' : '#3c00a0',
  };

  const inputGroupStyle = {
    height: '250px',
    width:'320px'
  };

  const messageStyle = {
    height: '50px',
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
const navigate = useNavigate();


const handleSignUp = () => {
 
  const existingData = JSON.parse(localStorage.getItem('formData')) || [];


  const isAccountExist = existingData.some((user) => user.email === formData.email);

  if (isAccountExist) {
    
    alert('Account already registered. Please use a different email.');
  } else {
    
    const newData = [...existingData, formData];


    localStorage.setItem('formData', JSON.stringify(newData));

   
    setFormData({
      name: '',
      email: '',
      password: '',
    });

    alert('SignUp successful!');
  }
  navigate('/login');
};




  return (
    <div style={containerStyle} className="container">
      <div style={formBoxStyle} className="form-box">
        <h1 style={h1Style} id="title">
          SignUp
        </h1>
        <form>
          <div style={inputGroupStyle} className="input-group">
          <div style={inputFieldStyle} className="input-field" id="nameField">
  <i className="fa-solid fa-user"></i>
  <input
    style={inputStyle}
    type="text"
    placeholder="Name"
    name="name"
    value={formData.name}
    onChange={handleInputChange}
  />
</div>

<div style={inputFieldStyle} className="input-field">
  <i className="fa-solid fa-envelope"></i>
  <input
    style={inputStyle}
    type="email"
    placeholder="Email"
    name="email"
    value={formData.email}
    onChange={handleInputChange}
  />
</div>

<div style={inputFieldStyle} className="input-field">
  <i className="fa-solid fa-lock"></i>
  <input
    style={inputStyle}
    type="password"
    placeholder="Password"
    name="password"
    value={formData.password}
    onChange={handleInputChange}
  />
</div>

           <div style={btnFieldStyle} className="btn-field">
              <button
                style={buttonStyle}
                type="button"
                id="Submitbtn"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleSignUp}
              >
                SignUp
              </button>
              <span style={{ marginLeft: '10px', cursor: 'pointer' }}>
                Already have an account?{' '}
                <div
                  style={{ textDecoration: 'underline', padding: '0', color: 'blue' }}
                  
                  onClick={() => navigate('/login')}
                >
                  Login
                </div>
              </span>
              
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
