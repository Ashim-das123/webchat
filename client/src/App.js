
import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from "./components/Messenger";
import AccountProvider from './context/AccountProvider';

function App() {
  const clientID = '895522618432-39ib2bo356dbpdqs3im6tj52qdg9ntqj.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientID}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>


    </GoogleOAuthProvider>

  );
}

export default App;
