# @suyoungj/react-simple-modal-ts

A simple & customizable modal component for React with TypeScript support.

## Installation

```shell
# npm
npm i @suyoungj/react-simple-modal-ts

# yarn
yarn add @suyoungj/react-simple-modal-ts

```

## Imports

```tsx
import { Modal, useModal } from '@suyoungj/react-simple-modal-ts';
```

## Usage

The `useModal` hook provides an easy way to manage the state of the modal.
It returns an object with:

- `isModalOpen`: a boolean that indicates whether the modal is currently open.
- `openModal`: a function that opens the modal.
- `closeModal`: a function that closes the modal.

## Props

The `Modal` component accepts the following props:

- `isModalOpen` (required): a boolean that indicates whether the modal is currently open.
- `onCloseModal` (required): a function that is called when the modal is closed. This function should set the isModalOpen state to false.

```tsx
function ModalExample() {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <Modal isModalOpen={isModalOpen} onCloseModal={closeModal}>
        {/* Modal Content Here */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Modal>
    </>
  );
}

export default ModalExample;
```

## Example

![화면_기록_2023-05-08_오전_11_11_40_AdobeExpress](https://user-images.githubusercontent.com/19235163/236719238-ded91724-efef-4239-888d-d82de10eb034.gif)

## Features

- Closed by clicking the backdrop
- Closed when the Esc key is pressed

## Dependencies

- `React` (^17.0.2 or higher)
- `TypeScript` (^4.3.5 or higher)
- `styled-components` (^5.3.0 or higher)
