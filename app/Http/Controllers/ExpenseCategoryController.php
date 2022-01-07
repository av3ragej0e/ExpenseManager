<?php

namespace App\Http\Controllers;

use App\Models\ExpenseCategory;
use Illuminate\Http\Request;

class ExpenseCategoryController extends Controller
{
    //
    public function index()
    {
        return ExpenseCategory::where('user_id', auth()->user()->id)->get();
    }
    public function addExpenseCategory(Request $request)
    {
        $ExpenseCategory = new ExpenseCategory;
        
        $ExpenseCategory->user_id = auth()->user()->id;
        $ExpenseCategory->display_name = $request->display_name;
        $ExpenseCategory->description = $request->description;
        

        $ExpenseCategory->save();
        return $ExpenseCategory;
    }
    public function updateExpenseCategory(Request $request)
    {

        
        $ExpenseCategory = ExpenseCategory::find($request->id);

        $ExpenseCategory->display_name = $request->display_name;
        $ExpenseCategory->description = $request->description;
       

        $ExpenseCategory->save();
        return $ExpenseCategory;

    }
    public function deleteExpenseCategory(Request $request)
    {

       
        
        $ExpenseCategory = ExpenseCategory::find($request->id);
        
        
        
        $ExpenseCategory->delete();
        

    }
}
