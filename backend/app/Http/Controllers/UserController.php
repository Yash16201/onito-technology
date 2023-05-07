<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function register(Request $request)
    {
        try{
            $user = new User;
            $user->name = $request->name;
            $user->age = $request->age;
            $user->sex = $request->sex;
            $user->mobile = $request->mobile;
            $user->govt_id = $request->govt_id;
            $user->guardian_details = $request->guardian_details;
            $user->email = $request->email;
            $user->emergency_contact = $request->emergency_contact;
            $user->address = $request->address;
            $user->state = $request->state;
            $user->city = $request->city;
            $user->country = $request->country;
            $user->pincode = $request->pincode;
            $user->occupation = $request->occupation;
            $user->religion = $request->religion;
            $user->marital_status = $request->marital_status;
            $user->blood_group = $request->blood_group;
            $user->nationality = $request->nationality;
            $user->save();
            return response()->json([
                'user'=>$user
            ],200);
        }catch(\Exception $e){
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something goes wrong while inserting!!'.$e->getMessage()
            ],500);
        }   
    }
    public function fetchUser(){
        try{
            $User = User::get();
            return response()->json([
                'status' => 'success',
                'Users' => $User,
                'message' => 'User fetched successfully'
            ]);
        }catch(\Exception $e){
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something goes wrong while fetching!!'.$e->getMessage()
            ],500);
        }
    }
}
