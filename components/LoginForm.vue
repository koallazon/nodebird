<template>
    <v-container>
        <v-card>
            <v-form ref="form" v-modal="valid" @submit.prevent="onSubmitForm">
                <v-container>
                    <v-text-field
                        v-model="email" 
                        :rules="emailRules"
                        label="이메일" 
                        type="email"
                        required
                    />
                    <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        label="비밀번호" 
                        type="paswword"
                        required
                    />
                    <v-btn color="green" type="submit" :disabled="!valid">로그인</v-btn>
                    <v-btn nuxt to="/signup">회원가입</v-btn>
                </v-container>
            </v-form>
        </v-card>
    </v-container>
    <v-container v-else>
        <v-card>
            <v-container>
                {{me.nickname}}님이 로그인되었습니다.
                <v-btn @click="onLogOut">로그아웃</v-btn>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            valid: false,
            email: '',
            password: '',
            emailRules: [
                v => !!v || '이 메일은 필수입니다.',
                v => /.+@+/.test(v) || '이메일이 유효하지 않습니다.',
            ],
            passwordRules: [
                v => !!v || '비밀번호는 필수입니다.'
            ]
        }
    },
    methods: {
        onSubmitForm () {
            this.$refs.form.validate();
        }
    },
}
</script>

<style scoped>

</style>