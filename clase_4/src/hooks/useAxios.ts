import { AxiosError, type AxiosResponse } from "axios";

export const useAxios = async <T>(
  fetcher: () => AxiosResponse
): Promise<T | undefined> => {
  try {
    const response = await fetcher();
    const data = await response.data;
    return data;
  } catch (error) {
    if (error instanceof AxiosError) throw new Error(error.message);
    return undefined;
  }
};
