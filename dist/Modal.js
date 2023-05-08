var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { keyframes, styled } from 'styled-components';
export var Modal = function (_a) {
    var isModalOpen = _a.isModalOpen, onCloseModal = _a.onCloseModal, children = _a.children;
    var _b = useState(false), isClosing = _b[0], setIsClosing = _b[1];
    var handleClose = useCallback(function () {
        setIsClosing(true);
        var timer = setTimeout(function () {
            setIsClosing(false);
            onCloseModal();
            clearTimeout(timer);
        }, 300);
    }, [onCloseModal]);
    var handleEscapeKeydown = useCallback(function (e) {
        if (e.key === 'Escape') {
            handleClose();
        }
    }, [handleClose]);
    useEffect(function () {
        document.body.addEventListener('keydown', handleEscapeKeydown);
        return function () {
            return document.body.removeEventListener('keydown', handleEscapeKeydown);
        };
    }, [handleEscapeKeydown]);
    return (_jsx(_Fragment, { children: isModalOpen &&
            createPortal(_jsxs("div", __assign({ role: "dialog", "aria-modal": true }, { children: [_jsx(ModalBackdrop, { onClick: handleClose }), _jsx(ModalContainer, __assign({ "$isClosing": isClosing }, { children: children }))] })), document.body) }));
};
var slideUp = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n"], ["\n  from {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n"])));
var slideDown = keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  from {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n"], ["\n  from {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n"])));
var ModalBackdrop = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground: rgba(0, 0, 0, 0.35);\n"], ["\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground: rgba(0, 0, 0, 0.35);\n"])));
var ModalContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tposition: fixed;\n\tbottom: 0;\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: 100%;\n\theight: 228px;\n\tpadding: 34px 0;\n\tborder-radius: 5px 5px 0px 0px;\n\tbackground: #fff;\n\tanimation: ", " 0.3s\n\t\tease-in-out forwards;\n"], ["\n\tposition: fixed;\n\tbottom: 0;\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: 100%;\n\theight: 228px;\n\tpadding: 34px 0;\n\tborder-radius: 5px 5px 0px 0px;\n\tbackground: #fff;\n\tanimation: ", " 0.3s\n\t\tease-in-out forwards;\n"])), function (_a) {
    var $isClosing = _a.$isClosing;
    return ($isClosing ? slideDown : slideUp);
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
