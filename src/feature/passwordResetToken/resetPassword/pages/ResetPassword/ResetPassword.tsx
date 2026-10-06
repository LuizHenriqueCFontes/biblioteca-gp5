import { useState } from "react";
import ResetPasswordDone from "../ResetPasswordDone/ResetPasswordDone";
import ResetPasswordForm from "../ResetPasswordForm/ResetPasswordForm";

export default function ResetPassword() {

    const [resetPassword, setResetPassword] = useState(false);

    return(
        <section>
            {resetPassword ? <ResetPasswordDone /> : <ResetPasswordForm setResetPassword={() => setResetPassword(true)}/>}
        </section>
    );
}