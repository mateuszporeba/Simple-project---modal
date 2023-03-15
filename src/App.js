import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [isModal, setIsModal] = useState(false);

  const handleModalClick = handleValue => {
    console.log("działa w app.js")
    setIsModal(handleValue);
  };

  return (
    <div>
      <button onClick={() => setIsModal(!isModal)}>Show</button>
      {isModal &&
        <Modal clickOutsideModal={handleModalClick} />}
    </div>
  );
}

export default App;
