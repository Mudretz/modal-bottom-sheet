import { useState } from "react";
import { ModalBottomSheet } from "./components/ModalBottomSheet";
import { TEXT_LOREM } from "./constants";

function App() {
    const [visible, setVisible] = useState(false);

    return (
        <div className='container'>
            <h1>Vite + React</h1>
            <h2>Библиотека Modal bottom sheet</h2>
            <div className='card'>
                <button onClick={() => setVisible(true)}>Открыть</button>
            </div>
            <ModalBottomSheet
                visible={visible}
                transition={500}
                onModalHide={() => {
                    console.log("@onModalHide Модальное окно закрыто");
                }}
                onModalShow={() => {
                    console.log("@onModalShow Модальное окно открыто");
                }}
                onMoveStart={() => {
                    console.log("@onMoveStart Начал перетаскивание");
                }}
                onMoveEnd={() => {
                    console.log("@onMoveEnd Завершил перетаскивание");
                }}
                onSwipeComplete={() => {
                    console.log("@onSwipeComplete Достиг максимальной высоты");
                }}
                onSwipeCancel={() => {
                    console.log("@onSwipeCancel Достиг минимальной высоты");
                    setVisible(false);
                }}
                onBackdropClick={() => {
                    setVisible(false);
                }}
            >
                <div className='content'>{TEXT_LOREM}</div>
            </ModalBottomSheet>
        </div>
    );
}

export default App;
