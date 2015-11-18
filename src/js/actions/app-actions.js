import AppContstants from '../constants/app-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';

export default {
  addItem( item ) {
    dispatch({
      actionType: AppContstants.ADD_ITEM, item
    })
  },
  removeItem( item ) {
    dispatch({
      actionType: AppContstants.REMOVE_ITEM, item
    })
  },
  increaseItem( item ) {
    dispatch({
      actionType: AppContstants.INCREASE_ITEM, item
    })
  },
  decreaseItem( item ) {
    dispatch({
      actionType: AppContstants.DECREASE_ITEM, item
    })
  }
}
