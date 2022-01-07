


<template>

    <v-row>
      <v-col>
        <v-card  class="mx-auto"
                 max-width="700" flat>

                  <v-container>

                    <canvas id="myChart" width="400" height="400"></canvas>

                  </v-container>

        </v-card>
      </v-col>
    </v-row>

</template>


<script>

    

import Chart from 'chart.js/auto';

  export default {
    
    data () {

      return {
                categories: [],
                data:[],
             }
    
    },

    methods: {

    },
    
    async mounted(){
          
          var categ = []

              await axios.get('/expense_category').then((response)=>{
                    categ = response.data
          })

              await axios.get('/expense').then((response)=>{
                    
               this.data = response.data.map(row => row.amount.toString())
               this.categories = response.data.map(row2 => row2.category_id.toString())
                     
                      
          var removedup = []
              
                    response.data.forEach(element => {

              if(removedup.map(a=>a.category_id).includes(element.category_id)){

                var i = removedup.findIndex(b=>b.category_id==element.category_id)
                        removedup[i].amount = Number(removedup[i].amount) + Number(element.amount)
                    
              }else {

                removedup.push(element)
              }




          });

          var test = []   
          var dynamicColors = function() {
          var r = Math.floor(Math.random() * 255);
          var g = Math.floor(Math.random() * 255);
          var b = Math.floor(Math.random() * 255);

          return "rgb(" + r + "," + g + "," + b + ")";

          }          
            
       
          var poolColors = function (a) {
          var pool = [];
              for(let i = 0; i < a; i++) {
              pool.push(dynamicColors());
              }

              test=pool
          }

          poolColors(this.categories.length)

          var chardataset = [{
              
              label: 'Total Expense',
              data: removedup.map(row => row.amount),
              borderColor: 'rgb(255,255,255, 0.9)',
              backgroundColor: test,
              borderWidth: 1
          
          }]  

          var chartdata = {

              labels: removedup.map(row2 => {
          
              return categ.find(c=>c.id == row2.category_id)?.display_name

              }),

              datasets: chardataset
          }
    
          const ctx = document.getElementById('myChart').getContext('2d');
          const myChart = new Chart(ctx, {

              type: 'pie',
              data: chartdata
            
          });

          })
        
        },

  }

  history.pushState(null, null, null);
     window.addEventListener('popstate', function () {
        history.pushState(null, null, null);
    
    });

</script>