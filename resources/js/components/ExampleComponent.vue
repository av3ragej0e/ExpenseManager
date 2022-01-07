


<template>

  <v-app id="inspire">
  
      <v-navigation-drawer v-model="drawer" app color="#fff">
    
        <v-list>
          <v-list-item>
            <v-list-item-avatar height="200px" width="200px" class="mx-auto">

              <v-img :src="img"></v-img>

            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link >
                  <v-list-item-content align="center">
                        <v-list-item-title class="text-h6" >

                          <strong>  {{auth_user.name}} </strong>

                        </v-list-item-title>

                      <v-list-item-subtitle class="text-h7"> {{auth_user.role.display_name}} </v-list-item-subtitle>

                  </v-list-item-content>
            </v-list-item>
        </v-list>

                                    <v-divider></v-divider>
          
    <v-list nav dense>

      <v-list-item-group v-model="selectedItem" color="primary">

        <v-list-item :to="{name:'Dashboard'}">
          <v-list-item-title> Dashboard </v-list-item-title>
            </v-list-item>

          <v-list-item v-if="auth_user.role.display_name == 'Admin'">
              <v-list-item-title> User Management </v-list-item-title>
            </v-list-item> 
        
             <div v-if="auth_user.role.display_name == 'Admin'">
              <v-list-item v-for="(item, i) in admins" :key="i" :to="{name: item.name}">

                <v-list-item-title v-text="item.text" style="margin-left:40px"></v-list-item-title>

              </v-list-item>
             </div>

              <v-list-item>

                  <v-list-item-title> Expense Management </v-list-item-title>

               </v-list-item>
      
                <v-list-item v-for="(item, i) in cruds" :key="'A'+ i" :to="{name: item.name}">

                  <v-list-item-title v-text="item.text" style="margin-left:40px"></v-list-item-title>

                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>

    <!-- <v-app-bar app color="white">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    
      <v-spacer></v-spacer>
        <v-card-title> <strong> Welcome to Expense Manager </strong> </v-card-title>
        <v-card-title>|</v-card-title>
        <v-card-title>Log out</v-card-title>
    
    </v-app-bar> -->

                      <router-view :auth="auth_user"></router-view>
  
  </v-app>
</template>
  



<script>

    
export default {

    data: () => ({
      selectedItem: 0,
      drawer:null,
      admins: [
        { text:'Roles', name:'Role'},
        { text:'Users', name:'User'},
     ],

      cruds: [
        {text:'Expense Categories', name:'Expense'},
        {text:'Expenses', name:'Expenses'},
     ],

      auth_user: {},
      img: location.origin.concat("/img/dy.png")

    }),

    created() {

          this.auth_user=this.$attrs.auth
    }
}

 history.pushState(null, null, null);
    window.addEventListener('popstate', function () {
        history.pushState(null, null, null);
    });

</script>

<style scoped>
</style>