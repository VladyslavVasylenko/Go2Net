<?php

	session_start();

	header("Content-Type: text/html; charset=utf-8");

	$where = array('amelnychuk@go2net.com.ua'); //TODO: change it

	$from = "general@go2net.com.ua";

       // default ajax response

    $responseBody = array( 

        'success'   => false, 

        'message'   => 'Unknown Error'

    );

	

	// sanitize data

	function sanitize($data) {

	   $data = trim($data);

	   $data = stripslashes($data);

	   $data = htmlspecialchars($data);

	   return $data;

	}

	

	// validate post input and sanitize

        

	if ($_SERVER['REQUEST_METHOD'] == 'POST') {

		$message = '';

		if ($_POST) {

			if($key == "email" && !preg_match("/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/", $value)){

					exit;

			}

			if (empty($_POST['name']) || empty($_POST['tel']) || empty($_POST['messege'])) {
				exit;
			}

			$message = join("\r\n", $_POST);

			$message = $_POST['name']."\r\n".$_POST['tel']."\r\n".$_POST['messege'];

			$subject = $_POST['subject'];

            $subject = $subject.' '.date('Y-m-d H:i:s');

			$headers = array(

				'From: '.$from,

				'Reply-To: '.$from,

				'Content-type: text/plain; charset=utf-8',

				'X-Mailer: PHP/'.phpversion()

			);

			//var_dump($headers);die();

			$h = join("\r\n", $headers)."\r\n";

			$sent = false;

			foreach($where as $w)

			{

				//echo $w;

				if (mail($w, $subject, htmlspecialchars_decode($message), $h))

					$sent = true;

				else

					break;

			}

			if ($sent) {

				$responseBody['success'] = true; 

				$responseBody['message'] = "OK"; // everything is ok

				echo json_encode($responseBody);

			}

			else {

				$responseBody['message'] = "Mail Function Error"; 

				echo json_encode($responseBody); 

				exit; 			

			}

		}

		else {

			$responseBody['message'] = "No POST variables"; 

			echo json_encode($responseBody); 

			exit; 

		}

	}

	else {

		$responseBody['message'] = "Bad Request Method"; 

		echo json_encode($responseBody); 

		exit; 		

	}



    

?>