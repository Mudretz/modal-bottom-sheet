import { FC } from 'react';

/**
 * Тип для описания взаимно исключающих полей:
 * либо используется `customBar`, либо `classNameBar`, но не оба одновременно.
 */
declare type CustomBar = {
    /**
     * Кастомный элемент для отображения в качестве бара.
     * @type {React.ReactNode}
     */
    customBar?: React.ReactNode;
    /**
     * Если `customBar` используется, `classNameBar` не может быть установлен.
     * @type {never}
     */
    classNameBar?: never;
} | {
    /**
     * Если `classNameBar` используется, `customBar` не может быть установлен.
     * @type {never}
     */
    customBar?: never;
    /**
     * CSS-класс для кастомизации бара.
     * @type {string}
     */
    classNameBar?: string;
};

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
declare const ModalBottomSheet: FC<ModalBottomSheetProps>;
export default ModalBottomSheet;

declare type ModalBottomSheetProps = {
    visible: boolean;
    children: React.ReactNode;
    transition?: number;
    maxHeight?: number;
    minHeight?: number;
    classNameModalContainer?: string;
    classNameBarContainer?: string;
    propagateSwipe?: boolean;
    onModalHide?: () => void;
    onModalShow?: () => void;
    onMoveStart?: (event: React.TouchEvent | React.MouseEvent) => void;
    onMoveEnd?: (event: React.TouchEvent | React.MouseEvent) => void;
    onSwipeComplete?: (event: React.TouchEvent | React.MouseEvent) => void;
    onSwipeCancel?: (event: React.TouchEvent | React.MouseEvent) => void;
    onBackdropClick?: () => void;
} & CustomBar;

export { }
