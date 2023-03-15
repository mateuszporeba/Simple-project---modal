import React from 'react'
import { useEffect, useRef } from 'react';
import './Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsHoldingCircle, faX } from '@fortawesome/free-solid-svg-icons'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

const Modal =props => {

useEffect(() => {
    document.addEventListener("click", CheckIfClickOutsideModal, true)
}, [])

const refClick = useRef(null)

const CheckIfClickOutsideModal = (e) => {
    if(!refClick.current.contains(e.target)){
        console.log("wysyla z modal.js")
        //props.clickOutsideModal;
        props.clickOutsideModal(false);
    }
}

    return (
        <div className='modal-container' ref={refClick}>
            <div>
            <div className='modal-title'>
                <FontAwesomeIcon className='modal-title-icon' icon={faCircleQuestion} />
                Lorem ipsum dolor sit amet.
            </div>
            </div>
            <div className='modal-description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra porttitor tristique.
            </div>
            <div className='modal-buttons'>
                <button className='modal-confirm'>Confirm</button>
                <button className='modal-decline'>Decline</button>
            </div>
            <button className='modal-cancel'><FontAwesomeIcon icon={faX} /></button>
        </div>
    )
}

export default Modal;