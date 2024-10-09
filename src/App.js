import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Faculty from './Faculty';
import DetailFaculty from './pages/DetailFaculty';
import AddFaculty from './pages/AddFaculty';
import AddEdit from './pages/AddEdit';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/faculty/:id" element={<DetailFaculty />} />
          <Route path="/faculty/add" element={<AddFaculty />} />
          <Route path='/addeditfaculty' element={<AddEdit />} />
          <Route path='/addeditfaculty/:id' element={<AddEdit />} />          
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;