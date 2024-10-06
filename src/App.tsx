import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { SwiperBottomSheet } from "./components/SwiperBottomSheet";
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
            <h2>Библиотека Swiper bottom sheet</h2>
            <div className='card'>
                <button onClick={() => setVisible(true)}>Открыть</button>
            </div>
            <SwiperBottomSheet
                visible={visible}
                onHide={() => setVisible(false)}
            >
                <div className='content'>{TEXT_LOREM}</div>
            </SwiperBottomSheet>
        </div>
    );
}

export default App;
