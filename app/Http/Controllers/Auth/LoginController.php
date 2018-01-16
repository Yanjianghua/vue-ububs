<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Http\Controllers\Common\BaseController;
use App\Servers\Backend\LoginServer as AdminLoginServer;
use App\Servers\Frontend\LoginServer as UserLoginServer;
use Illuminate\Http\Request;

class LoginController extends BaseController
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(AdminLoginServer $adminLoginServer, UserLoginServer $userLoginServer)
    {
        $this->adminLoginServer = $adminLoginServer;
        $this->userLoginServer       = $userLoginServer;
    }

    // 前台登录界面
    public function index()
    {
        return view('frontend.index');
    }

    // 后台登录界面
    public function backendIndex()
    {
        return view('backend.index');
    }

    public function backendLogin(Request $request)
    {
        $result = $this->adminLoginServer->login($request->all());
        return $this->responseResult($result);
    }
}
