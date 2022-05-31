import './App.css';
import { Form } from './components/Form/Form';
import { PopupTip } from './components/Popup/Variants/PopupTip';
import { useEffect, useState } from 'react';
import { List } from './components/List/List';
import { PopupPreload } from './components/Popup/Variants/PopupPreload';

function App() {
  const token = 'Token d7d760367ea3c6ae5a565858a859a79c4f813604'
  const [currentPopup, setCurrentPopup] = useState(null)
  const [resultData, setResultData] = useState(null)
  return (
    <div className="App">
      <Form resultData={resultData} setResultData={setResultData} setCurrentPopup={setCurrentPopup} token={token} />
      {currentPopup === 'tip' ? <PopupTip setCurrentPopup={setCurrentPopup} /> : null}
      {currentPopup === 'preload' ? <PopupPreload /> : null}
      <List resultData={resultData} />
    </div>
  );
}

export default App;