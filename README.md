# modal-bottom-sheet

`ModalBottomSheet` — это настраиваемый компонент модального окна (свайпера), который позволяет взаимодействовать через свайпы, настраивать высоту контента и изменять внешний вид бара. Он поддерживает сенсорные события и события мышки, что делает его удобным как для мобильных устройств, так и для настольных ПК.

## Features

- Настраиваемый бар для нижнего листа с возможностью добавления пользовательских элементов.
- Свайп-жесты для показа или скрытия нижнего листа.
- Регулируемая минимальная и максимальная высота для листа.
- Колбэки для различных взаимодействий, таких как начало, завершение свайпа и его отмена.
- Поддержка сенсорных событий и событий мышки для совместимости с разными платформами.

## Install

Установка происходит через npm
```
npm install github:Mudretz/modal-bottom-sheet
```
Установка конкретной версии
```
npm install github:Mudretz/modal-bottom-sheet#v1.0.0
```

## Props

| Prop                      | Type                                                | Default               | Description                                                                 |
| ------------------------- | --------------------------------------------------- | --------------------- | --------------------------------------------------------------------------- |
| `visible`                 | `boolean`                                           | `false`               | Определяет, виден ли свайпер.                                               |
| `onHide`                  | `() => void`                                        | `null`                | Колбэк, вызываемый для скрытия свайпера.                                    |
| `children`                | `React.ReactNode`                                   | `null`                | Контент, который будет отображаться внутри свайпера.                        |
| `transition`              | `number`                                            | `200`                 | Длительность анимации перехода (в миллисекундах). По умолчанию 200мс.       |
| `minHeight`               | `number`                                            | `window height * 0.3` | Минимальная высота свайпера (в пикселях).                                   |
| `maxHeight`               | `number`                                            | `window height * 0.8` | Максимальная высота свайпера (в пикселях).                                  |
| `classNameBar`            | `string`                                            | `null`                | CSS-класс для кастомного бара.                                              |
| `classNameBarContainer`   | `string`                                            | `null`                | CSS-класс для контейнера бара.                                              |
| `classNameModalContainer` | `string`                                            | `null`                | CSS-класс для контейнера свайпера.                                          |
| `customBar`               | `React.ReactNode`                                   | `null`                | Кастомный элемент бара.                                                     |
| `onModalHide`             | `() => void`                                        | `null`                | Колбэк, вызываемый при скрытии модального окна.                             |
| `onModalShow`             | `() => void`                                        | `null`                | Колбэк, вызываемый при показе модального окна.                              |
| `propagateSwipe`          | `boolean`                                           | `false`               | Позволяет событиям смахивания распространяться на дочерние элементы.        |
| `onMoveStart`             | `(event) => void` | `null`                | Колбэк, вызываемый при начале перетаскивания.                               |
| `onMoveEnd`               | `(event) => void` | `null`                | Колбэк, вызываемый при завершении перетаскивания.                           |
| `onSwipeComplete`         | `(event) => void` | `null`                | Колбэк, вызываемый при завершении свайпа (когда высота превышает максимальную). |
| `onSwipeCancel`           | `(event) => void` | `null`                | Колбэк, вызываемый при отмене свайпа (когда высота меньше минимальной).     |
| `onBackdropClick`         | `() => void`                                        | `null`                | Функция, вызываемая при нажатии на задний фон.                              |

## Usage Example

```tsx
import React, { useState } from 'react';
import ModalBottomSheet from "modal-bottom-sheet";

const ExampleComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button onClick={() => setIsVisible(true)}>Show Modal</button>
      <ModalBottomSheet
        visible={isVisible}
        onModalHide={() => setIsVisible(false)}
        transition={300}
        minHeight={150}
        maxHeight={500}
        classNameBar="custom-bar"
        onBackdropClick={() => setIsVisible(false)}
      >
        <div>Your content goes here!</div>
      </ModalBottomSheet>
    </>
  );
};
```