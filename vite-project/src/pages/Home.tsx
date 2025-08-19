import { Form } from "@/components/Form.tsx";
import { useState } from "react";
import { TinyReactDialog } from "tiny-react-dialog";

export default function Home() {
    const [isDialogVisible, setIsDialogVisible] = useState(false);
    return (
        <>
            <div className="flex w-full max-w-sm flex-col gap-6">
                <Form onSuccess={() => setIsDialogVisible(true)} />
                <TinyReactDialog
                    visible={isDialogVisible}
                    onClose={() => {
                        setIsDialogVisible(false);
                    }}
                >
                    <div>Employee Created!</div>
                </TinyReactDialog>
            </div>
        </>
    );
}
