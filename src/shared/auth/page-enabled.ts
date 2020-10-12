import { Commands, Context, RedirectResult } from '@vaadin/router';

export interface PageEnabled {
  pageEnabled(
    context: Context,
    commands: Commands,
    pathRedirect?: string
  ): Promise<RedirectResult | undefined>;
}
