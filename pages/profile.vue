<template>
  <div>
    <v-container>
      <v-card class="mb-5">
        <v-container>
          <v-subheader>내 프로필</v-subheader>
          <v-form v-model="valid" @submit.prevent="onChangeNickname">
            <v-text-field
              v-model="nickname"
              :placeholder="currentNick"
              :rules="nicknameRules"
              required
            />
            <v-btn dark color="blue" type="submit">수정</v-btn>
          </v-form>
        </v-container>
      </v-card>
      <v-card class="mb-5">
        <v-list subheader>
          <v-subheader>팔로잉</v-subheader>
          <follow-list
            v-if="followingList.length > 0"
            :users="followingList"
            :remove="removeFollowing"
          />
          <p class="text-center body-2 grey--text text--darken-2" v-else>팔로잉이 없습니다.</p>
          <v-btn
            @click="loadMoreFollowings" 
            v-if="hasMoreFollowing"
            dark
            color="blue"
            style="width: 100%"
          >더보기</v-btn>
        </v-list>
      </v-card>
      <v-card class="mb-5">
        <v-list subheader>
          <v-subheader>팔로워</v-subheader>
          <follow-list
            v-if="followerList.length > 0"
            :users="followerList"
            :remove="removeFollower"
          />
          <p class="text-center body-2 grey--text text--darken-2" v-else>팔로워가 없습니다.</p>
          <v-btn
            @click="loadMoreFollowers"
            v-if="hasMoreFollower"
            dark
            color="blue"
            style="width: 100%"
          >더보기</v-btn>
        </v-list>
      </v-card>
    </v-container>
  </div>
</template>

<script>
  import FollowList from '~/components/FollowList';
  import { mapState } from 'vuex'
  export default {
    components: {
      FollowList,
    },
    data() {
      return {
        valid: false,
        nickname: '',
        currentNick: '',
        nicknameRules: [
          v => !!v || '닉네임을 입력하세요.',
        ],
      };
    },
    computed: {
      ...mapState({
        followerList: state => state.users.followerList,
        followingList: state => state.users.followingList,
        hasMoreFollowing: state => state.users.hasMoreFollowing,
        hasMoreFollower: state => state.users.hasMoreFollower
      })
    },
    fetch({ store }) {
      store.dispatch('users/loadFollowers');
      store.dispatch('users/loadFollowings');
    },
    methods: {
      initNickName () {
        this.currentNick = this.$store.state.users.me.nickname;
      },
      onChangeNickname() {
        this.$store.dispatch('users/changeNickname', {
          nickname: this.nickname,
        });
      },
      removeFollowing(id) {
        this.$store.dispatch('users/removeFollowing', { id });
      },
      removeFollower(id) {
        this.$store.dispatch('users/removeFollower', { id });
      },
      loadMoreFollowers() {
        this.$store.dispatch('users/loadFollowers');
      },
      loadMoreFollowings() {
        this.$store.dispatch('users/loadFollowings');
      },
    },
    head() {
      return {
        title: '프로필',
      };
    },
    mounted () {
      this.initNickName()
    },
    middleware: 'authenticated',
  };
</script>

<style scoped>
</style>