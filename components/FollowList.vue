<template>
    <div>
        <v-list-item v-for="user in users" :key="user.id" :class="`d-flex justify-start md-6`">
            <v-list-item-avatar>
                <v-img :src="user.avatar!='' ? user.avatar : basicProfile"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title v-text="user.nickname"></v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon class="float-left">
                <v-icon @click="remove(user.id)">
                    mdi-minus-box-outline
                </v-icon>
            </v-list-item-icon>
        </v-list-item>
    </div>
</template>

<script>
export default {
    props: {
        users: {
            type: Array,
            required: true
        },
        remove: {
            type: Function,
            required: true,
        }
    },
    data () {
        return {
            basicProfile : 'https://data.ac-illust.com/data/thumbnails/78/7877e8c81ac0a942265a9b65a049b784_t.jpeg',
        }
    }

}
</script>

<style scoped>

</style>