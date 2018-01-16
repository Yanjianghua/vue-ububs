<?php
namespace App\Servers\Frontend;


class LoginServer extends CommonServer
{

    public function __construct(
    ) {
    }

    /**
     * 登录
     * @param  Array $input [account, password, remember]
     * @return Array
     */
    public function login($input)
    {
        $account  = isset($input['account']) ? strval($input['account']) : '';
        $password = isset($input['password']) ? strval($input['password']) : '';
        $remember = isset($input['remember']) ? (bool) $input['remember'] : false;
    }

   
}
