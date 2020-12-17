export class AuthorizationService {
  private readonly key = 'key';

  public isAuthorized(): Promise<boolean> {
    const token = this.getToken();
    return new Promise((resolve, reject) => {
      resolve(token !== null);
      // resolve(true);
    });
  }

  setToken(token: string): void {
    localStorage.setItem(this.key, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.key);
  }
}
