<?php
  
  // Здесь что то делаем и отправляем ответ

  $response = array(

    'title'   => 'Заголовок ответа из action.php',
    'content' => 'Контент из action.php' 
  );

  echo json_encode($response);
?>