<template lang="">
    <v-app>
        <v-app-bar
            app
            color="primary"
            dark
        >

            <v-toolbar-tile>Page Layout</v-toolbar-tile>
        </v-app-bar>
        <v-main>
            <v-container flud>
                <router-view/>
            </v-container>
        </v-main>
    </v-app>
</template>
<script>
export default {
    name: 'PageLayout'
}
</script>
<style lang="">
    
</style>