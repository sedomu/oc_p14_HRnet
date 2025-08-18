import {Form} from "@/components/Form.tsx";
import {useState} from "react";
import Dialog from "@/components/Dialog/Dialog.tsx";

export default function Home() {
    const [isDialogVisible, setIsDialogVisible] = useState(false)
    return <>
        <div className="flex w-full max-w-sm flex-col gap-6">
            <Form onSuccess={() => setIsDialogVisible(true)}/>

            <Dialog visible={isDialogVisible} onClose={() => {setIsDialogVisible(false)}}>
                Employee Created!
            </Dialog>
        </div>
    </>
}