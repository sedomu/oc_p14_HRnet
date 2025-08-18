import {useState} from "react";
import "./dialog.css";


export default function Dialog(){
    const [visible, setVisible] = useState(true)

    return <>
        {visible &&
            <div className="tiny-react-dialog__overlay" onClick={() => setVisible(true)}>
                <div className="tiny-react-dialog__container"  onClick={(e) => e.stopPropagation()}>
                    <div className="tiny-react-dialog__content">
                        Employee Created!
                    </div>
                    <button
                        className="tiny-react-dialog__close"
                        onClick={() => setVisible(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
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