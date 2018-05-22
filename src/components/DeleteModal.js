import React from 'react';
import Modal from 'react-modal';

const DeleteModal = (props) => (
    <Modal
        isOpen={props.showModal}
        onRequestClose={props.handleCancel}
        contentLabel="Confirm Deletion"
        closeTimeoutMS={200}
        className="modal"
        ariaHideApp={false}
    >
        <h4 className="modal__title">Are you sure you want to delete this item?</h4>
        <p className="modal__body">{props.expenseTitle} for {props.expenseAmount}</p>
        <div className="modal__actions">
            <button className="button" onClick={props.handleClearSelected}>Confirm Delete</button>
            <button className="button--secondary" onClick={props.handleCancel}>Cancel</button>
        </div>
    </Modal>
);

export default DeleteModal;