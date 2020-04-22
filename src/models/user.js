import { queryCurrent, query as queryUsers , checkCode } from '@/services/user';

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
          type: 'afterCheckCode' ,
          payload: response.data
        }
      )
    }

  },
  reducers: {
    afterCheckCode( state , action ){
      const { payload } = action;
      localStorage.setItem( "jwt" , payload.jwt  );
      return { ...state , currentUser:{ ...(payload.user) } }
    },

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
