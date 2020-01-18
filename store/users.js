export const state = () => ({
    me: null,
    followerList: [{
        id: 1,
        nickname: '이태규'
    },{
        id: 2,
        nickname: '김진휘'
    },{
        id: 3,
        nickname: '이지윤'
    }],
    followingList: [{
        id: 1,
        nickname: '이태규'
    },{
        id: 2,
        nickname: '김진휘'
    },{
        id: 3,
        nickname: '이지윤'
    }],
});

export const mutations = {
    setMe(state, payload) {
        state.me = payload;
    },
    changeNickname(state, payload) {
        state.me.nickname = payload.nickname;
    },
    addFollowing(state, payload) {
        state.followerList.push(payload);
    },
    addFollower(state, payload) {
        state.followingList.push(payload);
    },
    removeFollower(state, payload) {
        const index = state.followerList.findIndex(v => v.id === payload.id);
        state.followerList.splice(index, 1);
    },
    removeFollower(state, payload) {
        const index = state.followingList.findIndex(v => v.id === payload.id);
        state.followingList.splice(index, 1);
    }
}

export const actions = {
    signUp({ commit, state }, payload) {
        //서버에 회원가입 요청을 보내는 부분
        commit('setMe', payload);
    },
    logIn({ commit }, payload) {
        commit('setMe', payload);
    },
    logOut({ commit }, payload) {
        commit('setMe', null);
    },
    changeNickname({ commit }, payload) {
        commit('changeNickname', payload);
    },
    addFollowing({ commit }, payload) {
        commit('addFollowing', payload);
    },
    addFollower({ commit }, payload) {
        commit('addFollower', payload);
    },
    removeFollowing({ commit }, payload) {
        // 비동기 요청
        commit('removeFollowing', payload);
    },
    removeFollower({ commit }, payload) {
        commit('removeFollower', payload);
    }
}