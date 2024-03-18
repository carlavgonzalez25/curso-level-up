import { type AxiosError } from "axios";
import { axiosInstance } from "../axios.config";

export const getResource = async <T>(url: string): Promise<T | AxiosError> => {
  try {
    const response = await axiosInstance.get<T>(url);
    return response.data;
  } catch (e: unknown) {
    return e as AxiosError;
  }
};
