<?php
namespace App\Servers\Common;

abstract class BaseServer
{
    protected $request;
    protected $adminRepository;
    protected $articleRepository;
    protected $categoryRepository;
    protected $leaveRepository;
    protected $tagRepository;
    protected $registerRepository;
    protected $loginRepository;
    protected $userRepository;
    protected $videoRepository;
}
