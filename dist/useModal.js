import { useState } from 'react';
export var useModal = function () {
    var _a = useState(false), isModalOpen = _a[0], setIsModalOpen = _a[1];
    var openModal = function () {
        setIsModalOpen(true);
    };
    var closeModal = function () {
        setIsModalOpen(false);
    };
    return { isModalOpen: isModalOpen, openModal: openModal, closeModal: closeModal };
};
