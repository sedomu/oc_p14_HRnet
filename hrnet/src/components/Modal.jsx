import { forwardRef, useImperativeHandle, useState } from 'react'
import styles from './Modal.module.css'

function Modal({ children }, ref) {
    const [showModal, setShowModal] = useState(false);

    useImperativeHandle(ref, () => ({
        open: () => setShowModal(true),
        close: () => setShowModal(false),
        isOpen: () => showModal,
    }));

    if (!showModal) return null;

    return <>
        <div className={styles.overlay} onClick={() => setShowModal(false)}>
            <div className={styles.window} onClick={(e) => e.stopPropagation()}>
                <div className={styles.close} onClick={() => setShowModal(false)}>
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 15.875 15.875"
>
                            <g
                                id="g7"
                                transform="translate(-80.795326,-144.26106)">
                                <circle
                                    fill="black"
                                    cx="88.732826"
                                    cy="152.19856"
                                    r="7.9375" />
                                <path
fill="white"
                                    d="m 86.599886,149.56572 a 0.5,0.5 0 0 0 -0.35347,0.14624 0.5,0.5 0 0 0 0,0.70694 l 1.77974,1.77922 -1.77974,1.77973 a 0.5,0.5 0 0 0 0,0.70694 0.5,0.5 0 0 0 0.70745,0 l 1.77922,-1.77922 1.77922,1.77922 a 0.5,0.5 0 0 0 0.70693,0 0.5,0.5 0 0 0 0,-0.70694 l -1.77922,-1.77973 1.77922,-1.77922 a 0.5,0.5 0 0 0 0,-0.70694 0.5,0.5 0 0 0 -0.35346,-0.14624 0.5,0.5 0 0 0 -0.35347,0.14624 l -1.77922,1.77922 -1.77922,-1.77922 a 0.5,0.5 0 0 0 -0.35398,-0.14624 z" />
                            </g>

                    </svg>
                </div>
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    </>;
}

export default forwardRef(Modal);