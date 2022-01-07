<?php

namespace Database\Factories;
use App\Models\User;

use Illuminate\Database\Eloquent\Factories\Factory;

class ExpenseCategoryFactory extends Factory
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
            "display_name" => $this->faker->text(), 
            "description" => $this->faker->text()
        ];
    }
}
