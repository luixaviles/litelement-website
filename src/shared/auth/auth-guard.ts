import { Commands, Context, RedirectResult } from '@vaadin/router';
import { AuthorizationService } from './authorization-service';
import { PageEnabled } from './page-enabled';

export class AuthGuard implements PageEnabled {
  private authService: AuthorizationService;

  constructor() {
    this.authService = new AuthorizationService();
  }

  public async pageEnabled(
    context: Context,
    commands: Commands,
    pathRedirect?: string
  ): Promise<RedirectResult | undefined> {
    const isAuthenticated = await this.authService.isAuthorized();

    if (!isAuthenticated) {
      console.warn('User not authorized', context.pathname);
      return commands.redirect(pathRedirect ? pathRedirect : '/');
    }

    return undefined;
  }
}

export async function authGuard(context: Context, commands: Commands) {
  const isAuthenticated = await new AuthorizationService().isAuthorized();

  if (!isAuthenticated) {
    console.warn('User not authorized', context.pathname);
    return commands.redirect('/');
  }

  return undefined;
}
