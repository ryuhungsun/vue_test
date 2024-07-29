<template lang="">
    <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    
  
  <v-navigation-drawer 
    v-model="drawer" 
    dark
    app
    :src="require('@/assets/sidebar.jpg')"
  >
    <template
      v-slot:img="props"
    >
      <v-img
        :gradient="gradient"
        v-bind="props"
      />
    </template>
    <v-toolbar flat>
      <v-list>
        <v-list-item>
          <v-list-item-title class="title">
            (주) 주성정보 
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list  class="pt-0">
      <v-list-item
        v-for="menu in menus"
        :key="menu.title"
        :to="menu.to"
        active-class="success"
        class="py-1"
      >
        <template v-if="menu.childrens"> <!-- 자식 메뉴가 있는경우 -->
          <v-list-group
            :prepend-icon="menu.icon" 
            :key="menu.id" 
            class="mx-n6"
          >
            <template v-slot:activator>
              <v-list-item-title>{{menu.title}}</v-list-item-title>
            </template>
            <template v-for="children in menu.childrens">
              <v-list-item 
                :to="children.to"
                :key="children.id" 
                class="py-1 mx-8"
                
              >
                <v-list-item-icon :active-class="'success'">
                  <v-icon>{{children.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                  {{children.title}}
                </v-list-item-title>
              </v-list-item>
            </template>
          </v-list-group>
        </template>  

        <template v-else> <!-- 단일 메뉴일 경우 -->
          <v-list-item-action>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content> 
            <v-list-item-title>{{ menu.title }}</v-list-item-title>
          </v-list-item-content>
        </template>
      </v-list-item>

    </v-list>
  </v-navigation-drawer>
     
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
<script>
export default {
    name: 'defaultLayout',
    data: () => ({
    drawer: false,
    gradient:'rgba(0,0,0,0.7), rgba(0,0,0,0.5)',
    menus: [
          { title: 'Home', icon: 'dashboard', to:'/'},
          { title: 'About', icon: 'mdi-view-list', to:'/grid' ,
             childrens: [
              {
                id:21,
                icon: "assignment_ind",
                title: "페이지2_1",
                to:'/temp '
              },
              {
                id:22,
                icon: "people_alt",
                title: "페이지2_2",
                to:'/table'
              }
            ]
          },
          { title: '버튼', icon: 'question_answer', to:'/button' },
          { title: '테이블', icon: 'question_answer', to:'/table' },
          { title: '아이콘', icon: 'question_answer', to:'/icon' },
          { title: '폼', icon: 'question_answer', to:'/form' },
          { title: '로그인', icon: 'mdi-login', to:'/authentication/sign-in' },
          { title: '회원가입', icon: 'mdi-logout', to:'/authentication/sign-up' },
          { title: '제품목록', icon: 'mdi-reproduction', to:'/page/product-list' },
          // { title: 'About', icon: 'question_answer', to:'/grid' },
          // { title: 'About', icon: 'question_answer', to:'/grid' }
        ]
  }),
}
</script>
<style lang="">
    
</style>