import { toast } from "sonner";
import { getErrorMessage } from "./getErrorMessage";

export async function executeWithToast<T>(action: () => Promise<T>, loadingMessage: string, sucessMessage: string): Promise<T> {

   const toastId = toast.loading(loadingMessage);
   
   try {
    const result = await action();

    toast.success(sucessMessage, {
        id: toastId
    });

    return result;

   } catch (error) {
        toast.error(getErrorMessage(error), {
            id: toastId
        });

        throw error
   }
}