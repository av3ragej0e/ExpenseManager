
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)




const routes = new VueRouter({
    base: "/",
    mode: "history",
    routes: [
        {   
                path:'*',
                component: () => import(/* webpackChunkName: "Not_found" */ "./components/NotFoundComponent"), 
                name: "NotFound"
        },
                {
                    path: "/home",
                    name: "Example",
                    component: () => import(/* webpackChunkName: "MainPage" */ "./components/ExampleComponent"), 
                    children:[

                         {
                            path: "",
                            name: "Dashboard",
                            component: () => import(/* webpackChunkName: "DashboardPage" */ "./components/DashboardComponent"),
                            beforeEnter: authCheck 
                            
                        },

                        {
                            path: "role",
                            name: "Role",
                            component: () => import(/* webpackChunkName: "RolePage" */ "./components/RoleComponent"), 
                            
                        },

                        {
                            path: "user",
                            name: "User",
                            component: () => import(/* webpackChunkName: "UserPage" */ "./components/UserComponent"), 

                        },

                        {
                            path: "expense",
                            name: "Expense",
                            component: () => import(/* webpackChunkName: "ExpensePage" */ "./components/ExpenseComponent"), 
                            // beforeEnter: isAdmin
                        },

                        {
                            path: "expenses",
                            name: "Expenses",
                            component: () => import(/* webpackChunkName: "ExpensesPage" */ "./components/ExpensesComponent"), 
                        },


                    ]
                },
                

            ]

        })
        // function isAdmin (to, from, next) { 
        //         next(false)
        // }
        function authCheck (to, from, next) {

            axios.get('/auth_check').then((response)=>{
            


           
                

                

            next()


            

          }).catch((error)=>{


        
             next(false)


          })


          




        }
        

export default routes
