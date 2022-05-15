import './App.css';
import Form from './components/info_collection_form/form';
import { Route, Routes } from 'react-router-dom';
import Login from './components/info_collection_form/Login';
import Success from './components/info_collection_form/success';
function App() {
  return (
    <div  >
      <main>
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/Form" element={<Form />} />
          <Route path="/Success" element={<Success />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
