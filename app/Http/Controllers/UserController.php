<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //
    public function index()
    {
        return User::with('role')->get();
    }
    public function addUser(Request $request)
    {
        $user = new User;

        $user->name = $request->name;
        $user->email = $request->email;
        $user->role_id = $request->role_id;
        $user->password = Hash::make('password');

        $user->save();
        return $user;

    }
    public function updateUser(Request $request)
    {

        // dd($request->all());
        $user = User::find($request->id);

        $user->name = $request->name;
        $user->email = $request->email;
        $user->role_id = $request->role_id;
        $user->password = Hash::make('password');

        $user->save();
        return $user;

    }
    public function deleteUser(Request $request)
    {

       
        
        $user = User::find($request->id);
        
        
    
        $user->delete();
        

    }
    
}
