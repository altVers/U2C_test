import { useState } from "react";
import { Popup } from "./components/Popup/Popup";
import { Button } from "./components/Button/Button";

function App() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      {!popupOpen && (
        <Button variant="secondary" onClick={() => setPopupOpen(true)}>
          Расчет платежей
        </Button>
      )}
      <Popup isPopupOpen={popupOpen} setPopupOpen={setPopupOpen} />
    </>
  );
}

export default App;
