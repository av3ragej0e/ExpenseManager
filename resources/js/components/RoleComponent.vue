


<template>
  <v-card flat>
    <v-card-text>

      <v-data-table :headers="headers" :items="desserts" class="elevation-1">

      <template v-slot:top>

      <v-form ref="form" v-model="valid">

      <v-toolbar flat>

        <v-toolbar-title>Roles</v-toolbar-title>

        <v-divider class="mx-4" inset vertical></v-divider>

        <v-spacer></v-spacer>

        <v-dialog v-model="dialog" max-width="500px">

          <template v-slot:activator="{ on, attrs }">

            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Add Role
            </v-btn>

          </template>

          <v-card>

            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                  
                    <v-text-field
                      v-model="editedItem.display_name"
                      label="Display Name"
                      :rules="displaynameRules"
                      required
                    >
                    </v-text-field>
                  
                  </v-col>

                  <v-col cols="12" sm="6" md="4">

                    <v-text-field
                      v-model="editedItem.description"
                      label="Description"
                      :rules="descriptionRules"
                      required
                    >
                    </v-text-field>

                  </v-col>


                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>

              <v-spacer></v-spacer>

              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>

              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
              >
                Save
              </v-btn>

            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>

              <v-spacer></v-spacer>
              
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
      </v-form>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"                                                          
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>

      <v-icon
        small
        @click="deleteItem(item)"
        :disabled="!!item.user.length"
      >
        mdi-delete
      </v-icon>

    </template>

      <template v-slot:[`item.created_at`]="{ item }">

          {{item.created_at.substr(item.created_at,10)}}
      
      </template>
     </v-data-table>
    </v-card-text>

        <BreadComponent :page="page"></BreadComponent> 

  </v-card>
</template>

<script>

  import BreadComponent from './BreadComponent'

  export default {

    data: () => ({

      valid: false,
      
      displaynameRules: [
        v => !!v || 'Display Name is required',
        
      ],
     
      descriptionRules: [
        v => !!v || 'Description is required',
        
      ],
      
      page:[
        {
          text: 'User Management',
          disabled: true,
           href: '',
        },
        {
          text: 'Roles',
          disabled: false,
          href: '',
          name:'Role'
        },
           ],


      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text:'Display Name',
          align: 'start',
          sortable: false,
          value: 'display_name',
        },
        { text: 'Description', value: 'description', sortable: false },
        { text: 'Created at', value: 'created_at', sortable: false },
        { text: 'Actions', value: 'actions', sortable: false },
      ],


      desserts: [],
      editedIndex: -1,
      editedItem: {
        display_name: null,
        description: null,
        created_at: null,
        
      },
      defaultItem: {
        display_name: null,
        description: null,
        created_at: null,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Add Role ' : 'Update Role'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    methods: {
      validate () {  
        this.$refs.form.validate()
        this.save()
        
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()

      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        axios.post('/delete_role', this.editedItem).then((response)=>{
        this.getRole()
        })
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        
        if ("id" in this.editedItem){

        axios.put('/update_role', this.editedItem).then((response)=>{

        this.getRole()
        this.close()
        })
          
        } else{

        axios.post('/add_role', this.editedItem).then((response)=>{

        this.getRole()
        this.close()
        })

        }

        this.resetValidation()
        this.reset()

     },

      getRole() {

        axios.get('/roles').then((response)=>{

        this.desserts=response.data

        })
      }
    },

      mounted () {
                
        this.getRole()

      },
    
  components: {
     BreadComponent,
              }

}

</script>

<style>

</style>