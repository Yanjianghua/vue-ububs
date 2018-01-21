<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable as AuthAuthenticatable;
use Illuminate\Contracts\Auth\Authenticatable as ContractsAuthenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;

class Admin extends Base implements ContractsAuthenticatable
{
    use Notifiable;
    use SoftDeletes;
    use AuthAuthenticatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username', 'email', 'password', 'permission_id', 'status',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
}
