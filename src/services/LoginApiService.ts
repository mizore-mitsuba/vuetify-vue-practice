import http from '@/http-common';

class LoginApiService {
  get(id: string, pwd: string): Promise<any> {
    return http.get(`/api/login/${id}`);
  }

  create(data: any): Promise<any> {
    console.log('post: ' + JSON.stringify(data))
    return http.post('/api/login', data);
  }
}

export default new LoginApiService();