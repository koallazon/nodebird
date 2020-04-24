<template>
    <v-list>
        <v-col v-for="user in users" :key="user.id" cols="12" md="4" style="display: inline-block">
            <v-list-item>
                <v-list-item-avatar color="indigo">
                    <span class="white--text headline">{{user.nickname[0]}}</span>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title v-text="user.nickname"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-icon @click="remove(user.id)">
                        mdi-minus-circle-outline
                    </v-icon>
                </v-list-item-action>
            </v-list-item>
        </v-col>
    </v-list>
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