
import { useCallback } from "react";
import useAxios from "../utils/services/axiosInstance";

export function useSendEmail() {
  const axiosInstance = useAxios();

  const sendEmail = useCallback(async (payload) => {
    const res = await axiosInstance.post("mail/send", payload);
    return res?.data ?? res;
  }, [axiosInstance]);

  return sendEmail;
}
