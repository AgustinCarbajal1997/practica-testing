//__test_/Modal-test.js
import 'react-native';
import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import Modal from '../src/components/Modal';

describe('Pop up and alerts', () => {
  it('renders modal component', () => {
    let component = render(<Modal />);

    expect(component.getByTestId('modal-component')).toBeDefined();
    expect(component.getByText('Show Modal')).toBeDefined();
  });
  it('press button and show pop up and info for user', () => {
    let component = render(<Modal />);

    const onPress = component.getByText('Show Modal');

    act(() => {
      fireEvent(onPress, 'press');
    });

    component.rerender(<Modal />);

    const isModalActive = component.getByTestId('alert-component');

    expect(isModalActive).toBeDefined();

    const title = component.getByText('Ocurrio un error');
    const desc = component.getByText('Descripcion del error');
    const closeModal = component.getByText('Aceptar');

    expect(title).toBeDefined();
    expect(desc).toBeDefined();
    expect(closeModal).toBeDefined();

    act(() => {
      fireEvent(closeModal, 'press');
    });

    const isModalDeactivadated = component.queryAllByTestId('alert-component');
    expect(isModalDeactivadated.length).toEqual(0);
  });
});
