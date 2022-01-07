<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExpenseCategory extends Model
{
    use HasFactory;


    protected $fillable = [
        'display_name',
        'description',
    ];

    public function expense()
    {
       return $this->hasMany('App\Models\Expense', 'category_id');

    }
}
