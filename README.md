# React + TypeScript + Vite

## Props

| Prop                      | Type              | Default               | Description                                                           |
| ------------------------- | ----------------- | --------------------- | --------------------------------------------------------------------- |
| `visible`                 | `boolean`         | `false`               | Определяет, виден ли свайпер.                                         |
| `onHide`                  | `() => void`      | `null`                | Колбэк, вызываемый для скрытия свайпера.                              |
| `children`                | `React.ReactNode` | `null`                | Контент, который будет отображаться внутри свайпера.                  |
| `transition`              | `number`          | `200`                 | Длительность анимации перехода (в миллисекундах). По умолчанию 200мс. |
| `minHeight`               | `number`          | `200`                 | Минимальная высота свайпера (в пикселях). По умолчанию 200px.         |
| `maxHeight`               | `number`          | `window height * 0.8` | Максимальная высота свайпера (в пикселях).                            |
| `classNameBar`            | `string`          | `null`                | CSS-класс для кастомного бара.                                        |
| `classNameBarContainer`   | `string`          | `null`                | CSS-класс для контейнера бара.                                        |
| `classNameModalContainer` | `string`          | `null`                | CSS-класс для контейнера свайпера.                                    |
| `customBar`               | `React.ReactNode` | `null`                | Кастомный элемент бара.                                               |
| `onModalHide`             | `() => void`      | `null`                | Колбэк, вызываемый при скрытии модального окна.                       |
| `onModalShow`             | `() => void`      | `null`                | Колбэк, вызываемый при показе                                         |
