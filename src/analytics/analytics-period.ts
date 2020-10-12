import {
  PreventAndRedirectCommands,
  Router,
  RouterLocation,
} from '@vaadin/router';
import { LitElement, html, customElement, css, property } from 'lit-element';

enum Period {
  day = 'Day',
  week = 'Week',
  month = 'Month',
  year = 'Year',
}

@customElement('lit-analytics-period')
export class AnalyticsPeriod extends LitElement {
  @property({ type: String }) period: Period = Period.week;

  render() {
    return html` <h3>Period: Last ${this.period}</h3> `;
  }

  public onAfterEnter(
    location: RouterLocation,
    commands: PreventAndRedirectCommands,
    router: Router
  ): void {
    const period = location.params.period; // path: 'analytics/:period'
    if (period !== undefined) {
      this.period = Period[period as keyof typeof Period] || Period.week;
    }
  }
}
