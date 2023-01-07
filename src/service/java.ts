import {AxiosPromise} from 'axios';

import Axios from '../util/axios';

export default {
  /**
   * 홈화면 회원정보를 가저오는 api
   * @returns
   */
  getMemberInfo(): AxiosPromise<getMemberInfoResponse> {
    return Axios({url: '/api/members', method: 'get'});
  },

  /**
   * 화해날짜 결심 api
   * @param date 형식은 XXXX/XX/XX
   * @returns
   */
  getReconciliation(date: string): AxiosPromise<getReconciliationResponse> {
    return Axios({
      url: '/api/members',
      method: 'patch',
      data: {reconciliationData: date},
    });
  },

  login(email: string, password: string): AxiosPromise<loginResponse> {
    return Axios({
      url: '/api/members/login',
      method: 'post',
      data: {
        email,
        password,
      },
    });
  },
  signUp(email: string, password: string): AxiosPromise<signUpResponse> {
    return Axios({
      url: '/api/members/signup',
      method: 'post',
      data: {
        email,
        password,
      },
    });
  },
};
