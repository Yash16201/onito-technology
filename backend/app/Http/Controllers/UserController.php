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
            $user->name = $request->data['name'];
            $user->age = $request->data['age'];
            $user->sex = $request->data['sex'];
            $user->mobile = $request->data['mobile'];
            $user->govt_id = $request->data['govt_id'];
            $user->guardian_details = $request->data['guardian_details'];
            $user->email = $request->data['email'];
            $user->emergency_contact = $request->data['emergency_contact'];
            $user->address = $request->data['address'];
            $user->state = $request->data['state'];
            $user->city = $request->data['city'];
            $user->country = $request->data['country'];
            $user->pincode = $request->data['pincode'];
            $user->occupation = $request->data['occupation'];
            $user->religion = $request->data['religion'];
            $user->marital_status = $request->data['marital_status'];
            $user->blood_group = $request->data['blood_group'];
            $user->nationality = $request->data['nationality'];
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
            $User = User::select('name','age','sex','mobile','govt_id','guardian_details','nationality')->get();
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
