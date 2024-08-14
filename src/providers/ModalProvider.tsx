// src/components/ModalProvider.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { closeModal } from '../store/modalSlice';

const ModalProvider: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { isOpen, modalType, modalProps } = useSelector((state: RootState) => state.modal);

    if (!isOpen || !modalType) return null;

    const handleClose = () => dispatch(closeModal());

    // You can use a dynamic import or conditional rendering to load modals
    // based on modalType and pass modalProps to them

    const renderModal = () => {
        switch (modalType) {
            case 'LOGIN':
                // return <ExampleModal {...modalProps} onClose={handleClose} />;
            // Add more cases for other modals
            default:
                return null;
        }
    };

    return <>{renderModal()}</>;
};

export default ModalProvider;
