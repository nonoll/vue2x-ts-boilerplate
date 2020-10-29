import { RouteConfigSingleView, RouteConfigMultipleViews } from 'vue-router/types/router';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IRouteMeta {
  meta?: {
    isAuthRequired?: boolean;
  };
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export type IRouteConfig =
  | (RouteConfigSingleView & IRouteMeta)
  | (RouteConfigMultipleViews & IRouteMeta);
