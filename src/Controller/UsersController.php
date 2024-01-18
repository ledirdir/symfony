<?php

namespace App\Controller;

use App\Entity\Possession;
use App\Entity\Users;
use App\Repository\UsersRepository;
use App\Repository\PossessionRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\Response;


#[Route('/users')]
class UsersController extends AbstractController
{

    public function __construct(private UsersRepository $repo,private PossessionRepository $possessionRepository, private EntityManagerInterface $em) {}

    public function all(Request $request, SerializerInterface $serializer)
    {
        if($request->isMethod('POST')) {
            $users = $this->repo->findAll();
            $data = $serializer->serialize($users, 'json', ['groups' => 'user']);
            return new JsonResponse($data, 200, [], true);
        } elseif ($request->isMethod('DELETE')) {
            
        }

        return $this->render('users/index.html.twig', [
            'controller_name' => 'IndexController',
        ]);
    }
}