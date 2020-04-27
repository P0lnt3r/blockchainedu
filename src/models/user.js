import { query as queryUsers } from '@/services/user';
import { checkCode , queryCurrent} from '@/services/publics'

const UserModel = {
  namespace: 'user',
  state: {
    currentUser: {},
  },
  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchCurrent(_, { call, put }) {
      console.log( 'dofetch current' );
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentUser',
        payload: response.data,
      });
    },
    *checkCode( { payload } , { call , put , select } ){
      const { code } = payload;
      const response = yield call(checkCode , code);
      yield put(
        {
          type: 'saveCurrentUser' ,
          payload: response.data
        }
      )
    }

  },
  reducers: {
    saveCurrentUser(state, action) {
      const { payload } = action;
      localStorage.setItem( "jwt" , payload.jwt  );
      return { ...state , currentUser:{ ...(payload.user) } }
    },
    changeNotifyCount(
      state = {
        currentUser: {},
      },
      action,
    ) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },

  },
};
export default UserModel;
