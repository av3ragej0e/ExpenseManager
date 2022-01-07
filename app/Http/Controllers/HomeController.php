<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home')->with('page', ["auth"=>User::with('role')->find(auth()->user()->id)]);
    }

    // public function roles()
    // {
    //     return 'role';
    // }

    // public function user()
    // {
    //     return 'user';
    // }

    // public function expense()
    // {
    //     return 'expense';
    // }

    public function authCheck()
    {
        return auth()->user();
    }
}
