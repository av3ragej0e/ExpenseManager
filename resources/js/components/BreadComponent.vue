


<template>
     <div>
    
        <v-breadcrumbs :items="page">
          
          <template v-slot:divider>

            <v-icon>mdi-chevron-right</v-icon>

          </template>
        
      </v-breadcrumbs>

    </div>
</template>



<script>

  export default {

  props: ['page'],

  data: () => ({
      
    }),
  }
</script>