import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ModalBottomSheet } from "./components/ModalBottomSheet";
import { TEXT_LOREM } from "./constants";

function App() {
    const [visible, setVisible] = useState(false);

    return (
        <div className='container'>
            <div>
                <a href='https://vitejs.dev' target='_blank'>
                    <img src={viteLogo} className='logo' alt='Vite logo' />
                </a>
                <a href='https://react.dev' target='_blank'>
                    <img
                        src={reactLogo}
                        className='logo react'
                        alt='React logo'
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <h2>Библиотека Modal bottom sheet</h2>
            <div className='card'>
                <button onClick={() => setVisible(true)}>Открыть</button>
            </div>
            <ModalBottomSheet
                visible={visible}
                onHide={() => setVisible(false)}
                transition={300}
            >
                <div className='content'>{TEXT_LOREM}</div>
            </ModalBottomSheet>
        </div>
    );
}

export default App;
