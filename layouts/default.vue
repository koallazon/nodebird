<template>
    <v-app>
        <nav>
            <v-toolbar dark color="green">
                <v-toolbar-title>
                    <nuxt-link to="/" class="white--text">NodeBird</nuxt-link>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-text-field label="검색" hide-details prepend-icon="mdi-magnify" :style="{ display: 'flex', alignItems: 'center' }" />
                    <v-btn text nuxt to="/profile" :style="{ display: 'flex', alignItems: 'center' }">
                        <div>프로필</div>
                    </v-btn>
                    <v-btn text nuxt to="/signup" :style="{ display: 'flex', alignItems: 'center' }">
                        <div>회원가입</div>
                    </v-btn>            
                </v-toolbar-items>
            </v-toolbar>
        </nav>
        <v-row>
            <v-col cols="12" xs="12" md="4">
                로그인창 19분
            </v-col>
            <v-col cols="12" xs="12" md="8">
                컨텐츠
            </v-col>
        </v-row>
    </v-app>
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
</style>