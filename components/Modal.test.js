import React from 'react';
import { render } from '@testing-library/react';
import Modal from './Modal';

describe('Modal component', () => {
  test('renders correctly when isOpen is true', () => {
    const { getByText } = render(
      <Modal isOpen={true} onClose={() => {}} title="Test modal">
        Modal content
      </Modal>
    );
    
    expect(getByText('Test modal')).toBeInTheDocument();
    expect(getByText('Modal content')).toBeInTheDocument();
  });

  test('does not render when isOpen is false', () => {
    const { container } = render(
      <Modal isOpen={false} onClose={() => {}} title="Test modal">
        Modal content
      </Modal>
    );

    expect(container.firstChild).toBeNull();
  });
});
