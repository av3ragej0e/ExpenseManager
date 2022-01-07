<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    use HasFactory;



    protected $fillable = [
        'category_id',
        'amount',
        'enty_date',
    ];

    public function expense_category()
    {
       return $this->belongsTo('App\Models\ExpenseCategory','id');

    }


}
