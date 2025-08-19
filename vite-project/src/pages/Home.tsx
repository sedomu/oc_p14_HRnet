import {Form} from "@/components/Form.tsx";
import {useState} from "react";
// import {TinyReactDialog} from "tiny-react-dialog";
// import { TinyReactDialog } from "tiny-react-dialog";
// import Dialog from "@/components/Dialog/Dialog";
// import {TinyReactDialog} from "tiny-react-dialog";
import {TinyReactDialog} from "tiny-react-dialog";

export default function Home() {
    const [isDialogVisible, setIsDialogVisible] = useState(false)
    return <>
        <div className="flex w-full max-w-sm flex-col gap-6">
            <Form onSuccess={() => setIsDialogVisible(true)}/>

            {/*<Dialog visible={isDialogVisible} onClose={() => {setIsDialogVisible(false)}}>*/}
            {/*    Employee Created!*/}
            {/*</Dialog>*/}
            {/*<TinyReactDialog visible={isDialogVisible} onClose={() => {setIsDialogVisible(false)}}>*/}
            {/*    C'est mon tiny*/}
            {/*</TinyReactDialog>*/}
            <TinyReactDialog visible={isDialogVisible} onClose={() => {setIsDialogVisible(false)}}>
                <div>C'est mon tiny from npm !!!</div>
            </TinyReactDialog>
        </div>
    </>
}