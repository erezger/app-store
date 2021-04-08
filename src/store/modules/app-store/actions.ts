import {RootState} from '@/store/index';
import {ActionContext, ActionTree} from 'vuex';
import {AppStoreState} from '@/store/modules/app-store/index';
import AppStoreService from '@/globals/app-store.service';
import {$httpClient} from '@/globals/http-client';
import {authErrorInterceptor} from '@/globals/error.interceptors';
import {
  GET_APP_BY_PACKAGE_NAME,
  GET_APP_STORE_LIST,
  SET_APP_STORE_LIST,
  SET_CURRENT_APP,
  SET_CURRENT_APP_SIMILAR,
} from '@/types/app-store.types';
import {pluck} from 'rxjs/operators';
import {eventsHub} from '@/main';
import {AppStoreItemModel} from '@/models/app-store-item.model';

const appStoreService = new AppStoreService();
$httpClient.addResponseInterceptor(authErrorInterceptor);

export const actions: ActionTree<AppStoreState, RootState> = {

  [GET_APP_STORE_LIST]: (
    {state, commit}: ActionContext<AppStoreState, RootState>,
  ) => {
    appStoreService.getAppStoreItems()
      .pipe(
        pluck('most_popular_apps'),
      )
      .subscribe(
        (data) => {
          commit(SET_APP_STORE_LIST, data);
        },
      );
  },

  [GET_APP_BY_PACKAGE_NAME]: (
    {state, commit}: ActionContext<AppStoreState, RootState>,
    packageName: string,
  ) => {
    appStoreService.getAppByPackageName(packageName)
      .subscribe(
        (data) => {
          if (data) {
            commit(SET_CURRENT_APP, data);
            const similars: AppStoreItemModel[] = [];
            state.appStoreList.forEach((item) => {
              if (data.similar.includes(item.package_name)) {
                similars.push(item);
              }
            });
            commit(SET_CURRENT_APP_SIMILAR, similars);
          } else {
            eventsHub.$router.push({name: 'home'});
            eventsHub.$notify({
              group: 'store',
              title: 'package doesn\'t exist',
              text: 'There is no such a package',
            });
          }
        },
      );
  },
};
