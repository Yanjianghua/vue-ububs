<?php
namespace App\Servers\Backend;

use App\Repositories\Backend\LoginRepository;

class LoginServer extends CommonServer
{

    public function __construct(
        LoginRepository $loginRepository
    ) {
        $this->login = $loginRepository;
    }

    /**
     * 登录
     * @param  array $input [account, password, remember]
     * @return array
     */
    public function login(array $input)
    {
        $account  = isset($input['account']) ? strval($input['account']) : '';
        $password = isset($input['password']) ? strval($input['password']) : '';
        $remeber  = isset($input['remeber']) ? (bool) $input['remeber'] : false;
        if (!$account || !$password) {
            return ['code' => '002x001'];
        }
        $result['list'] = $this->login->login($account, $password, $remeber);
        if (!$result['list']) {
            return ['code' => '002x002'];
        }
        return ['登录成功', $result];
    }
    public function logout()
    {
        $result = $this->login->logout();
        return ['退出成功'];
    }
}
