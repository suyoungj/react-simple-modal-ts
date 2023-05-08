import { PropsWithChildren } from 'react';
interface ModalProps {
    isModalOpen: boolean;
    onCloseModal: () => void;
}
export declare const Modal: ({ isModalOpen, onCloseModal, children, }: PropsWithChildren<ModalProps>) => import("react/jsx-runtime").JSX.Element;
export {};
