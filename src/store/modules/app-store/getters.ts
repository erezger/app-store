import {GetterTree} from 'vuex';
import {RootState} from '@/store/index';
import {AppStoreState} from '@/store/modules/app-store/index';
import {AppStoreItemModel} from '@/models/app-store-item.model';
import {APP_STORE_LIST, CURRENT_APP, CURRENT_APP_SIMILAR} from '@/types/app-store.types';

export const getters: GetterTree<AppStoreState, RootState> = {

  [APP_STORE_LIST](state): AppStoreItemModel[] {
    return state.appStoreList;
  },

  [CURRENT_APP](state): AppStoreItemModel {
    return state.currentApp;
  },

  [CURRENT_APP_SIMILAR](state): AppStoreItemModel[] {
    return state.currentAppSimilar;
  },
};
