<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Role::factory(1)->create(["display_name" => "Admin", "description" => "Can Add, Edit, Delete."]);
        \App\Models\Role::factory(1)->create(["display_name" => "User", "description" => "Can Add and View."]);
        \App\Models\User::factory(1)->create(["name" => "Ken", "email" => "ken@email.com"]);
        \App\Models\User::factory(1)->create(["name" => "Glenda", "email" => "glenda@email.com", "role_id" => 2]);
        \App\Models\ExpenseCategory::factory(3)->create();
        \App\Models\Expense::factory(3)->create();

        
    }
}
