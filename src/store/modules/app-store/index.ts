import Vue from 'vue';
import Vuex, {Module} from 'vuex';
import {actions} from './actions';
import {mutations} from './mutations';
import {getters} from './getters';
import {RootState} from '@/store';
import {AppStoreItemModel} from '@/models/app-store-item.model';

Vue.use(Vuex);

export interface AppStoreState {
  appStoreList: AppStoreItemModel[];
  currentApp: AppStoreItemModel;
  currentAppSimilar: AppStoreItemModel[];
}

// message state model init
export const initialState = (): AppStoreState => {
  return {
    appStoreList: [],
    currentApp: {} as AppStoreItemModel,
    currentAppSimilar: [],
  };
};

export const appStore: Module<AppStoreState, RootState> = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
