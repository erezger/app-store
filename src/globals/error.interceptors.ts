import {eventsHub} from '@/main';
import {AxiosResponse} from 'axios';

export const authErrorInterceptor = {
  onFulFilled: (response: AxiosResponse) => {
    return response;
  },
  onError: (error) => {
    eventsHub.$notify({
      group: 'library',
      type: 'error',
      text: 'Global Error Occurred',
    });
    return error;
  },
};
