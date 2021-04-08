import {MutationTree} from 'vuex';
import {AppStoreState} from '@/store/modules/app-store/index';
import {AppStoreItemModel} from '@/models/app-store-item.model';
import {SET_APP_STORE_LIST, SET_CURRENT_APP, SET_CURRENT_APP_SIMILAR} from '@/types/app-store.types';

export const mutations: MutationTree<AppStoreState> = {

  [SET_APP_STORE_LIST]: (state, appStoreList: AppStoreItemModel[]) => {
    state.appStoreList = appStoreList;
  },

  [SET_CURRENT_APP]: (state, currentApp: AppStoreItemModel) => {
    state.currentApp = currentApp;
  },

  [SET_CURRENT_APP_SIMILAR]: (state, currentAppSimilar: AppStoreItemModel[]) => {
    state.currentAppSimilar = currentAppSimilar;
  },
};
