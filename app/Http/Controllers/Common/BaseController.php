<?php

namespace App\Http\Controllers\Common;

use App\Http\Controllers\Controller;

class BaseController extends Controller
{
    protected $server;

    public function __construct()
    {

    }

    /**
     * 响应返回
     * @param  array  $result 返回内容
     * @return Json
     */
    public function responseResult(array $result = [])
    {
        // 返回失败信息
        if (isset($result['code'])) {
            $code    = $result['code'];
            $message = isset(config('code')[$code]) ? config('code')[$code] : '';
            if (!$code || !$message) {
                $message = '系统发生错误，请联系管理员，QQ:292304400，gmail：linlm1994@gmail.com';
            }
            return response()->json([
                'status'  => false,
                'data'    => [],
                'message' => $message,
            ]);
        }
        // 返回成功信息
        $result['status'] = true;
        return response()->json($result);

        
    }
}
