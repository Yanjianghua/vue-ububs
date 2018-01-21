<?php
namespace App\Repositories\Backend;

use App\Models\Admin;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AdminRepository extends CommonRepository
{

    public function __construct(Admin $admin)
    {
        parent::__construct($admin);
    }

    /**
     * 列表
     * @param  array $input 查询条件
     * @return object
     */
    public function getLists($input)
    {
        $search = isset($input['search']) ? (array) $input['search'] : [];
        $pageSize = isset($input['pageSize']) ? intval($input['pageSize']): 10;
        $result = DB::table('admins')->paginate($pageSize);
        return $result;
    }
}
