import {type ReactNode} from "react";
import "./dialog.css";

type DialogProps = {
    visible: boolean;
    onClose: () => void;
    children?: ReactNode;
};

function Dialog({ visible, onClose, children = "tiny-react-dialog: children is missing" }: DialogProps){

    return <>
        {visible &&
            <div className="tiny-react-dialog__overlay" onClick={onClose}>
                <div className="tiny-react-dialog__container"  onClick={(e) => e.stopPropagation()}>
                    <div className="tiny-react-dialog__content">
                        {children}
                    </div>
                    <button
                        className="tiny-react-dialog__close"
                        onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-x-icon lucide-x">
                            <path d="M18 6 6 18"/>
                            <path d="m6 6 12 12"/>
                        </svg>
                    </button>
                </div>
            </div>
        }
    </>
}

export default Dialog;