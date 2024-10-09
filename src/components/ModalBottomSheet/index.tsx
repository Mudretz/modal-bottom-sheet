import { FC, useLayoutEffect, useMemo, useRef, useState } from "react";
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
 * @param {React.ReactNode} children - Контент, который будет отображаться внутри свайпера.
 * @param {number} [transition=200] - Длительность анимации перехода (в миллисекундах). По умолчанию 200мс.
 * @param {number} [minHeight=200] - Минимальная высота свайпера (в пикселях). По умолчанию 200px.
 * @param {number} [maxHeight] - Максимальная высота свайпера (в пикселях).
 * @param {string} [classNameBar] - CSS-класс для кастомного бара.
 * @param {string} [classNameBarContainer] - CSS-класс для контейнера бара.
 * @param {string} [classNameModalContainer] - CSS-класс для контейнера свайпера.
 * @param {boolean} [propagateSwipe] - Позволяет событиям смахивания распространяться на дочерние элементы
 * @param {React.ReactNode} [customBar] - Кастомный элемент бара.
 * @param {() => void} [onModalHide] - Колбэк, вызываемый при скрытии модального окна.
 * @param {() => void} [onModalShow] - Колбэк, вызываемый при показе модального окна.
 * @param {(event: React.TouchEvent | React.MouseEvent) => void} [onMoveStart] - Колбэк, вызываемый при начале перетаскивания.
 * @param {(event: React.TouchEvent | React.MouseEvent) => void} [onMoveEnd] - Колбэк, вызываемый при завершении перетаскивания.
 * @param {(event: React.TouchEvent | React.MouseEvent) => void} [onSwipeComplete] - Колбэк, вызываемый при завершении свайпа (когда высота превышает максимальную).
 * @param {(event: React.TouchEvent | React.MouseEvent) => void} [onSwipeCancel] - Колбэк, вызываемый при отмене свайпа (когда высота меньше минимальной).
 * @param {() => void} [onBackdropClick] - Функция, вызываемая при нажатии на задний фон.
 * @returns {JSX.Element} Возвращает JSX элемент компонента `ModalBottomSheet`.
 */

export const ModalBottomSheet: FC<ModalBottomSheetProps> = ({
    visible,
    children,
    transition = 200,
    minHeight,
    maxHeight,
    classNameBar,
    classNameBarContainer,
    classNameModalContainer,
    customBar,
    propagateSwipe,
    onModalHide,
    onModalShow,
    onMoveStart,
    onMoveEnd,
    onSwipeComplete,
    onSwipeCancel,
    onBackdropClick,
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
        onMoveStart && onMoveStart(event);
    };

    useLayoutEffect(() => {
        if (visible) {
            setShouldRender(true); // Рендерим элемент при показе
            setTimeout(() => {
                if (childrenRef.current) {
                    const { height } =
                        childrenRef.current.getBoundingClientRect();
                    if (
                        height >= currentMinHeight &&
                        height <= currentMaxHeight
                    ) {
                        setHeight(height);
                    } else if (height < currentMinHeight) {
                        setHeight(currentMinHeight);
                    } else if (height > currentMaxHeight) {
                        setHeight(currentMaxHeight);
                    }
                    childrenRef.current.style.overflowX = "auto";
                }
            });
            document.body.style.overflow = "hidden"; // Убираем скролл заднего фона
        }
        return () => {
            document.body.style.overflow = "";
            if (childrenRef.current) {
                childrenRef.current.style.overflowX = "";
            }
        };
    }, [visible]);

    const handleEventMove = (event: React.TouchEvent | React.MouseEvent) => {
        const clientY = isTouchEvent(event)
            ? event.touches[0].clientY
            : event.clientY;
        if (isResizing.current && swiperRef.current) {
            swiperRef.current.style.overflow = "hidden";
            const deltaY = clientY - startY.current; // Разница в положении курсора
            if (windowHeight * 0.2 >= height - deltaY) {
                isResizing.current = false;
                onSwipeCancel && onSwipeCancel(event);
            } else if (currentMaxHeight >= height - deltaY) {
                setHeight((prevHeight) => prevHeight - deltaY);
            } else if (currentMaxHeight <= height - deltaY) {
                onSwipeComplete && onSwipeComplete(event);
                isResizing.current = false;
            }
            startY.current = clientY;
        }
    };

    const onAnimationEnd = () => {
        if (!visible) {
            setShouldRender(false); // Убираем элемент из DOM после завершения анимации
            setHeight(0);
            onModalHide && onModalHide();
        } else {
            onModalShow && onModalShow();
        }
    };

    const handleEventEnd = (event: React.TouchEvent | React.MouseEvent) => {
        if (isResizing.current) {
            onMoveEnd && onMoveEnd(event);
        }
        isResizing.current = false; // Завершение перетаскивания
        if (swiperRef.current) {
            swiperRef.current.style.overflow = "";
        }
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
                            onBackdropClick && onBackdropClick();
                        }
                    }}
                    style={{
                        backgroundColor: visible
                            ? "rgba(0, 0, 0, 0.3)"
                            : "rgba(0, 0, 0, 0)",
                        transition: transition
                            ? `background-color ${transition}ms`
                            : `background-color ${1}ms`,
                    }}
                    onMouseMove={handleEventMove}
                    onMouseUp={handleEventEnd}
                    onMouseLeave={handleEventEnd}
                    onTouchMove={handleEventMove}
                    onTouchEnd={handleEventEnd}
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
                        onMouseDown={
                            propagateSwipe ? handleEventStart : undefined
                        }
                        onTouchStart={
                            propagateSwipe ? handleEventStart : undefined
                        }
                    >
                        <div
                            className={`${styles.barContainer} ${classNameBarContainer ? classNameBarContainer : ""}`}
                            onMouseDown={
                                !propagateSwipe ? handleEventStart : undefined
                            }
                            onTouchStart={
                                !propagateSwipe ? handleEventStart : undefined
                            }
                        >
                            {customBar ? (
                                customBar
                            ) : (
                                <div
                                    className={`${styles.bar} ${classNameBar ? classNameBar : ""}`}
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
