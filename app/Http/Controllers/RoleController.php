<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function index()
    {
        return Role::with('user')->get();
    }
    public function addRole(Request $request)
    {
        $role = new Role;

        $role->display_name = $request->display_name;
        $role->description = $request->description;
        

        $role->save();
        return $role;
    }
    public function updateRole(Request $request)
    {

        
        $role = Role::find($request->id);

        $role->display_name = $request->display_name;
        $role->description = $request->description;
       

        $role->save();
        return $role;

    }
    public function deleteRole(Request $request)
    {

       
        
        $role = Role::find($request->id);
        
        
    
        $role->delete();
        

    }

    

}
