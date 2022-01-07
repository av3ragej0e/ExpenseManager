<?php

namespace App\Http\Controllers;

use App\Models\Expense;
use Illuminate\Http\Request;

class ExpenseController extends Controller
{
    //
    public function index()
    {
        return Expense::where('user_id', auth()->user()->id)->get();
    }
    
    // public function chart()
    // {

    //     return Expense::with("expense_category")->where('user_id', auth()->user()->id)->selectRaw("SUM(amount)as total_amount")->selectRaw('category_id')->groupBy('category_id')->get();

    // }

    public function addExpense(Request $request)
    {   
        $expense = new Expense;
        
        $expense->user_id = auth()->user()->id;
        $expense->category_id = $request->category_id;
        $expense->amount = $request->amount;
        $expense->entry_date = $request->entry_date;
        

        $expense->save();
        return $expense;

    }
    public function updateExpense(Request $request)
    {

        // dd($request->all());
        $expense = Expense::find($request->id);

        $expense->category_id = $request->category_id;
        $expense->amount = $request->amount;
        $expense->entry_date = $request->entry_date;
        

        $expense->save();
        return $expense;

    }
    public function deleteExpense(Request $request)
    {

       
        
        $expense = Expense::find($request->id);
        
        
        $expense->delete();
        

    }

}
