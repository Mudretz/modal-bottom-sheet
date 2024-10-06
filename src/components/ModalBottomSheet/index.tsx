import { FC, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { isTouchEvent } from "../../utils/isTouchEvent";
import { ModalBottomSheetProps } from "../../types";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import styles from "./styles.module.css";

/**
 * @name ModalBottomSheet
 * @description Cвайпер, отображающий контент с возможностью кастомизации бара.
 *
 * @param {boolean} visible - Определяет, виден ли свайпер.
 * @param {() => void} onHide - Функция, вызываемая для скрытия свайпера.
 * @param {React.ReactNode} children - Контент, который будет отображаться внутри свайпера.
 * @param {number} [transition=200] - Длительность анимации перехода (в миллисекундах). По умолчанию 200мс.
 * @param {number} [minHeight=200] - Минимальная высота свайпера (в пикселях). По умолчанию 200px.
 * @param {number} [maxHeight] - Максимальная высота свайпера (в пикселях).
 * @param {string} [classNameBar] - CSS-класс для кастомного бара.
 * @param {string} [classNameBarContainer] - CSS-класс для контейнера бара.
 * @param {string} [classNameModalContainer] - CSS-класс для контейнера свайпера.
 * @param {React.ReactNode} [customBar] - Кастомный элемент бара.
 *
 * @returns {JSX.Element} Возвращает JSX элемент компонента `ModalBottomSheet`.
 */

export const ModalBottomSheet: FC<ModalBottomSheetProps> = ({
    visible,
    onHide,
    children,
    transition = 200,
    minHeight,
    maxHeight,
    classNameBar,
    classNameBarContainer,
    classNameModalContainer,
    customBar,
}) => {
    const { height: windowHeight } = useWindowDimensions();
    const [shouldRender, setShouldRender] = useState(visible);
    const [height, setHeight] = useState(0); // Изначальная высота элемента
    const isResizing = useRef(false); // Для отслеживания состояния перетаскивания
    const startY = useRef(0);
    const swiperRef = useRef<HTMLDivElement>(null);
    const childrenRef = useRef<HTMLDivElement>(null);
    const currentMinHeight = minHeight ? minHeight : windowHeight * 0.3;
    const currentMaxHeight = maxHeight ? maxHeight : windowHeight * 0.8;

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
                if (childrenRef.current) {
                    const { height: testHeight } =
                        childrenRef.current.getBoundingClientRect();
                    console.log(testHeight, "@@tetestHeight");
                    if (
                        testHeight >= currentMinHeight &&
                        testHeight <= currentMaxHeight
                    ) {
                        setHeight(testHeight);
                    } else if (testHeight < currentMinHeight) {
                        setHeight(currentMinHeight);
                    } else if (testHeight > currentMaxHeight) {
                        setHeight(currentMaxHeight);
                    }
                }
            });
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
            } else if (currentMaxHeight >= height - deltaY) {
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

    if (!shouldRender || !children) return null;

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
                    data-testid='bottom-modal-background'
                >
                    <div
                        className={`${styles.modalContainer} ${classNameModalContainer ? classNameModalContainer : ""}`}
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
                        data-testid='bottom-modal-container'
                    >
                        <div
                            className={`${styles.barContainer} ${classNameBarContainer ? classNameBarContainer : ""}`}
                            onMouseDown={handleEventStart}
                            onTouchStart={handleEventStart}
                            data-testid='bottom-modal-bar-container'
                        >
                            {customBar !== undefined ? (
                                customBar
                            ) : (
                                <div
                                    className={`${styles.bar} ${classNameBar ? classNameBar : ""}`}
                                    data-testid='bottom-modal-bar'
                                />
                            )}
                        </div>
                        <div ref={childrenRef} className={styles.children}>
                            {renderChildren}
                        </div>
                    </div>
                </div>,
                document.body,
            )}
        </>
    );
};
