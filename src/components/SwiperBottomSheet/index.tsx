import { createPortal } from "react-dom";
import {
    FC,
    PropsWithChildren,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { isTouchEvent } from "../../utils/isTouchEvent";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import styles from "./styles.module.css";

interface SwiperProps extends PropsWithChildren {
    visible: boolean;
    onHide: () => void;
}

export const Swiper: FC<SwiperProps> = ({ visible, onHide, children }) => {
    const { height: windowHeight } = useWindowDimensions();
    const [shouldRender, setShouldRender] = useState(visible);
    const [height, setHeight] = useState(0); // Изначальная высота элемента
    const isResizing = useRef(false); // Для отслеживания состояния перетаскивания
    const startY = useRef(0);
    const swiperRef = useRef<HTMLDivElement>(null);
    const transition = 200;

    const handleEventStart = (event: React.TouchEvent | React.MouseEvent) => {
        const clientY = isTouchEvent(event)
            ? event.touches[0].clientY
            : event.clientY;
        isResizing.current = true;
        startY.current = clientY; // Сохранение начальной позиции курсора
    };

    useEffect(() => {
        if (visible) {
            setShouldRender(true); // Рендерим элемент при показе
            setTimeout(() => {
                setHeight(windowHeight * 0.8);
            }, transition);
            document.body.style.overflow = "hidden"; // Убираем скролл заднего фона
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [visible]);

    const handleEventMove = (event: React.TouchEvent | React.MouseEvent) => {
        const clientY = isTouchEvent(event)
            ? event.touches[0].clientY
            : event.clientY;
        if (isResizing.current && swiperRef.current) {
            const deltaY = clientY - startY.current; // Разница в положении курсора
            if (windowHeight * 0.2 >= height) {
                isResizing.current = false;
                onHide();
            } else if (windowHeight * 0.8 >= height - deltaY) {
                setHeight((prevHeight) => prevHeight - deltaY);
            }
            startY.current = clientY; // Обновление позиции курсора
        }
    };

    const onAnimationEnd = () => {
        if (!visible) {
            setShouldRender(false); // Убираем элемент из DOM после завершения анимации
            setHeight(0);
        }
    };

    const handleEventEnd = () => {
        isResizing.current = false; // Завершение перетаскивания
    };

    const renderChildren = useMemo(() => {
        return children;
    }, [children]);

    if (!shouldRender) return null;

    return (
        <>
            {createPortal(
                <div
                    className={styles.back}
                    onMouseDown={(e) => {
                        if (e.target === e.currentTarget) {
                            onHide();
                        }
                    }}
                    style={{
                        backgroundColor: visible
                            ? "rgba(0, 0, 0, 0.3)"
                            : "rgba(0, 0, 0, 0)",
                    }}
                    onMouseMove={handleEventMove}
                    onMouseUp={handleEventEnd}
                    onMouseLeave={handleEventEnd}
                    onTouchMove={handleEventMove}
                    onTouchEnd={handleEventEnd}
                >
                    <div
                        className={styles.swiperContainer}
                        style={{
                            height: visible ? height : 0,
                            transition: isResizing.current
                                ? undefined
                                : transition
                                  ? `height ${transition}ms ease-in-out`
                                  : `height ${1}ms ease-in-out`,
                        }}
                        onClick={(event) => event.stopPropagation()}
                        ref={swiperRef}
                        onTransitionEnd={onAnimationEnd}
                    >
                        <div
                            className={styles.barContainer}
                            onMouseDown={handleEventStart}
                            onTouchStart={handleEventStart}
                        >
                            <div className={styles.bar} />
                        </div>
                        {renderChildren}
                    </div>
                </div>,
                document.body,
            )}
        </>
    );
};
