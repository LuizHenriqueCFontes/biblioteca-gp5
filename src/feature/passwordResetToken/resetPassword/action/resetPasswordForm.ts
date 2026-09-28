import { toast } from "sonner";
import { getErrorMessage } from "../../../../utils/getErrorMessage";

export async function resetPasswordForm<T>(action: () => Promise<T>, loadingMessage: string): Promise<T> {

   const toastId = toast.loading(loadingMessage);
   
   try {
    const result = await action();

    toast.dismiss(toastId);

    return result;

   } catch (error) {
        toast.error(getErrorMessage(error), {
            id: toastId
        });

        throw error
   }
}