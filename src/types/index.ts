/**
 * Тип для описания взаимно исключающих полей:
 * либо используется `customBar`, либо `classNameBar`, но не оба одновременно.
 */
type CustomBar =
    | {
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
      }
    | {
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

export type SwiperProps = {
    visible: boolean;
    onHide: () => void;
    children: React.ReactNode;
    transition?: number;
    maxHeight?: number;
    minHeight?: number;
    classNameSwipeContainer?: string;
    classNameBarContainer?: string;
} & CustomBar;
