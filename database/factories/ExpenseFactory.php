<?php

namespace Database\Factories;

use App\Models\ExpenseCategory;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class ExpenseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //
            "user_id" => User::inRandomOrder()->first()->id,
            "category_id" => ExpenseCategory::inRandomOrder()->first()->id,
            "amount" => rand(1,100000),
            "entry_date" => $this->faker->date()

        ];
    }
}
