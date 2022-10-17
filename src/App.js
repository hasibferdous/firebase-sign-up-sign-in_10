import {getAuth} from 'firebase/auth'
import './App.css';
import RegisterReactBootstrap from './Component/RegisterReactBootstrap';
import app from './Firebase/firbase.init';
const auth = getAuth(app);

const handleRegister = (event) =>{
  //preventing default behavior
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  console.log(email, password);
}
const handleEmailChange = event =>{
  console.log(event.target.value);
}
const handlePasswordChange = event =>{
  console.log(event.target.value);
}


function App() {
  return (
    <div className="">
      <RegisterReactBootstrap></RegisterReactBootstrap>
    </div>
  );
}
export default App;
