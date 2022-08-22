import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory />', () => {

    test('debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory onAddCategory={() => {}} />);

        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: {  value : 'Saitam'} });

        expect(input.value).toBe('Saitam');

        // screen.debug();

    });

    test('debe de llamar onAddCategory si el input tiene un valor', () => {

        const inputValue = 'Saitam';
        const onAddCategory = jest.fn();

        render(<AddCategory onAddCategory={ onAddCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: {  value : inputValue} });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onAddCategory).toHaveBeenCalled();
        expect(onAddCategory).toHaveBeenCalledTimes(1);
        expect(onAddCategory).toHaveBeenCalledWith(inputValue);

        // screen.debug();

    });

    test('no debe de llamar el onAddCategory cuando el input esta vacio', () => {

        const onAddCategory = jest.fn();

        render(<AddCategory onAddCategory={ onAddCategory } />);

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onAddCategory).not.toHaveBeenCalled();

    });

});