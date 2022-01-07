


<template>

  <v-card flat>
    <v-card-text>
      <v-data-table :headers="headers" :items="desserts" class="elevation-1">

        <template v-slot:top>

          <v-form ref="form" v-model="valid">

            <v-toolbar flat>

              <v-toolbar-title>Expenses</v-toolbar-title>

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
              Add Expense
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
                  
                    <v-select item-text="display_name" 
                              item-value="id"
                              :items="select"
                              v-model="editedItem.category_id"
                              label="Expense Category"
                              :rules="[v => !!v || 'Item is required']"
                              required
                    >
                    </v-select>
                  
                  </v-col>

                  <v-col cols="12" sm="6" md="4">

                    <v-text-field prepend-inner-icon="mdi-currency-usd"
                                  v-model="editedItem.amount"
                                  label="Amount"
                                  :rules="decimalRules"
                                  required
                    >
                    </v-text-field>
                    
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    
                    <v-dialog ref="dialog"
                              v-model="modal"
                              :return-value.sync="date"
                              persistent
                              width="290px"
                    >

                    <template v-slot:activator="{ on, attrs }">

                      <v-text-field v-model="editedItem.entry_date"
                                    label="Entry Date"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    :rules="dateRules"
                                    required
                      >
                      </v-text-field>

                    </template>

                      <v-date-picker v-model="editedItem.entry_date"
                                     scrollable
                                     :max="new Date().toISOString().substr(0, 10)"
                                     :min="new Date().toISOString().substr(0, 10)"
                      >

                        <v-spacer></v-spacer>

                          <v-btn
                              text
                              color="primary"
                              @click="modal = false"
                          >
                              Cancel
                          </v-btn>

                          <v-btn
                              text
                              color="primary"
                              @click="$refs.dialog.save(editedItem.entry_date)"
                          >
                              OK
                          </v-btn>

                      </v-date-picker>
                    </v-dialog>
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
      >
        mdi-delete
      </v-icon>
    </template>

    <template v-slot:[`item.category_id`]="{ item }">

        {{display_categname(item)}}
    
    </template>
    
    <template v-slot:[`item.created_at`]="{ item }">

        {{item.created_at.substr(item.created_at,10)}}
    
    </template>

      <template v-slot:[`item.amount`]="{ item }">

          {{item.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}
      
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
      
      decimalRules: [
        v => !!v || 'Amount is required',
        v => (v && v.length <= 10) || 'Amount must be less than 10 characters',
        
      ],
     
      dateRules: [
        v => !!v || 'Date is required',
      
      ],

      page:[
        {
          text: 'Expense Management',
          disabled: true,
        },
        {
          text: 'Expenses',
          disabled: false,
          href: '',
        },

      ],

      modal: false,

      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text:'Expense Category',
          align: 'start',
          sortable: false,
          value: 'category_id',
        },
        { text: 'Amount', value: 'amount', sortable: false },
        { text: 'Entry Date', value: 'entry_date', sortable: false },
        { text: 'Created at', value: 'created_at', sortable: false },
        { text: 'Actions', value: 'actions', sortable: false },
      ],

      desserts: [],
      editedIndex: -1,
      editedItem: {
        category_id: null,
        amount: null,
        entry_date: null,
        created_at: null,
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        
      },
      defaultItem: {
        category_id: null,
        amount: null,
        entry_date: null,
        created_at: null,
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      },    
      
      select: [],

    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Add Expense' : 'Update Expense'
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
      display_categname(item){

           return this.select?.find(c=>c.id==item.category_id)?.display_name

    },

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
      date () {

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

             axios.post('/delete_expense', this.editedItem).then((response)=>{

        this.getExpense()

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

             axios.put('/update_expense', this.editedItem).then((response)=>{

        this.getExpense()
        this.close()
         
        })
          
        } else{

             axios.post('/add_expense', this.editedItem).then((response)=>{

        this.getExpense()
        this.close()
        
        })

        }

        this.resetValidation()
        this.reset()

      },

      getExpense() {

             axios.get('/expense').then((response)=>{

         this.desserts=response.data

         })
    
         }
      
      },
    
  created () {
                
        this.getExpense()

             axios.get('/expense_category').then((response)=>{
        this.select=response.data
                  // console.log(response.data)
        })

  },

       
  components: {
       BreadComponent,
              }

}

</script>

<style>
</style>