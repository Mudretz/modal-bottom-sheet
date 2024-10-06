import { render, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ModalBottomSheet } from "..";
import puppeteer, { Browser, Page } from "puppeteer";

describe("ModalBottomSheet", () => {
    const onHideMock = vi.fn();
    const containerTestId = "bottom-modal-container";
    const backgroundTestId = "bottom-modal-background";
    let browser: Browser;
    let page: Page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });

    it("contains the welcome text", async () => {
        await page.goto("http://localhost:5174");
        await page.waitForSelector(".App-welcome-text");
        const text = await page.$eval("Vite + React", (e) => e.textContent);
        expect(text).toContain("Vite + React");
    });

    afterAll(() => browser.close());

    it("Не должен рендериться, когда visible = false", () => {
        const { queryByTestId } = render(
            <ModalBottomSheet visible={false} onHide={onHideMock}>
                <div>Content</div>
            </ModalBottomSheet>,
        );
        expect(queryByTestId(containerTestId)).toBeNull();
    });

    it("Должен рендериться, когда visible = true", () => {
        const { getByTestId } = render(
            <ModalBottomSheet visible={true} onHide={onHideMock}>
                <div>Content</div>
            </ModalBottomSheet>,
        );
        expect(getByTestId(containerTestId)).toBeInTheDocument();
    });

    it("Должен вызывать onHide при клике на задний фон", () => {
        const { getByTestId } = render(
            <ModalBottomSheet visible={true} onHide={onHideMock}>
                <div>Content</div>
            </ModalBottomSheet>,
        );
        fireEvent.mouseDown(getByTestId(backgroundTestId));
        expect(onHideMock).toHaveBeenCalled();
    });

    it("Не должен вызывать onHide при клике на контент модального окна", async () => {
        // Мокаем getBoundingClientRect ДО рендеринга компонента
        const modalContainerMock = {
            height: 400,
            width: 100,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            x: 0,
            y: 0,
            toJSON: () => {},
        };

        // Создаем мок на контейнер
        vi.spyOn(
            HTMLElement.prototype,
            "getBoundingClientRect",
        ).mockReturnValue(modalContainerMock);

        // Рендерим компонент
        const { getByTestId } = render(
            <ModalBottomSheet
                visible={true}
                onHide={onHideMock}
                transition={300}
            >
                <div style={{ height: 400 }}>Content</div>
            </ModalBottomSheet>,
        );

        // Выполняем событие клика мыши на контент модального окна
        fireEvent.mouseDown(getByTestId(containerTestId));

        // Проверяем, что onHide не был вызван
        await waitFor(() => {
            expect(onHideMock).not.toHaveBeenCalled();
        });
    });

    it("Должен корректно устанавливать высоту на основе размера контента", async () => {
        // Мокаем getBoundingClientRect ДО рендеринга компонента
        const modalContainerMock = {
            height: 400,
            width: 100,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            x: 0,
            y: 0,
            toJSON: () => {},
        };

        // Создаем мок на контейнер
        vi.spyOn(
            HTMLElement.prototype,
            "getBoundingClientRect",
        ).mockReturnValue(modalContainerMock);

        // Рендерим компонент
        const { getByTestId } = render(
            <ModalBottomSheet
                visible={true}
                onHide={onHideMock}
                transition={300}
            >
                <div style={{ height: 400 }}>Content</div>
            </ModalBottomSheet>,
        );

        const modalContainer = getByTestId(containerTestId);

        // Ждем изменения стилей и проверяем
        await waitFor(() => {
            expect(modalContainer.style.height).toBe("400px");
        });
    });

    it("Должен отображать кастомный бар, если он передан", () => {
        const customBarTestId = "custom-bar";
        const customBar = <div data-testid={customBarTestId}>Custom Bar</div>;
        const { getByTestId } = render(
            <ModalBottomSheet
                visible={true}
                onHide={onHideMock}
                customBar={customBar}
            >
                <div>Content</div>
            </ModalBottomSheet>,
        );
        expect(getByTestId(customBarTestId)).toBeInTheDocument();
    });

    it("Должен сбрасывать состояние после окончания анимации при закрытии", () => {
        const { getByTestId } = render(
            <ModalBottomSheet visible={true} onHide={onHideMock}>
                <div>Content</div>
            </ModalBottomSheet>,
        );

        const modalContainer = getByTestId(containerTestId);
        fireEvent.transitionEnd(modalContainer);

        expect(modalContainer.style.height).toBe("0px");
    });
});
