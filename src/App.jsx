import './App.css';
import Footer from './components/Navigation/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import UserMessage from './components/UserMessage/UserMessage';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <>
      <Navigation />
      <AppRoutes />
      <Footer />
      <UserMessage />
    </>
  );
}

export default App;
