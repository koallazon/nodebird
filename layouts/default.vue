<template>
    <div>
        <v-toolbar color="green" dark>
            <v-toolbar-title>
                <nuxt-link to="/">NodeBird</nuxt-link>
            </v-toolbar-title>
            <v-toolbar-items>
                <v-btn text nuxt to="/profile">
                    <span>프로필</span>
                </v-btn>
                <v-btn text nuxt to="/signup">
                    <span>회원가입</span>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-layout>
            <v-flex xs12 md4>
                <LoginForm />
            </v-flex>
            <v-flex xs12 md8>
                <nuxt />
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import LoginForm from '~/components/LoginForm'
    export default {
        components: {
            LoginForm,
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
        color: inherit;
    }
    header {
        height: 48px;
    }
</style>