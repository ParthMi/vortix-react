<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// Get the raw POST data
$input = json_decode(file_get_contents("php://input"), true);

if (!$input) {
    echo json_encode(['status' => 0, 'message' => 'Invalid input']);
    exit;
}

// Extract form data

$name = $input['name'] ?? '';
$email = $input['email'] ?? '';
$phone = $input['phone'] ?? '';
$message = $input['message'] ?? '';
$subject = $input['subject'] ?? 'Product Inquiry - Vortix Enterprise';

// Initialize HTML body for contact email
$html = "
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .logo {
            text-align: center;
            margin-bottom: 20px;
        }

        .logo img {
            max-width: 150px;
            height: auto;
        }

        h2 {
            font-size: 22px;
            color: #333;
            margin-bottom: 20px;
        }

        p {
            font-size: 16px;
            line-height: 1.6;
            color: #555;
        }

        .info {
            background-color: #f9f9f9;
            padding: 10px;
            border-left: 4px solid #007bff;
            margin-bottom: 20px;
            border-radius: 4px;
        }

        .info strong {
            display: inline-block;
            width: 100px;
            color: #333;
        }

        .message {
            padding: 15px;
            background-color: #f1f1f1;
            border-radius: 4px;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class='container'>
        <div class='logo'>
            <img src='https://vortixenterprise.com/images/logo/logo.png' alt='Company Logo'>
        </div>
        <h2>New Contact Form Submission</h2>
        <p>You have received a new message through the contact form on your website. Here are the details:</p>

        <div class='info'>
            <p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>
            <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
            <p><strong>Phone:</strong> " . htmlspecialchars($phone) . "</p>
        </div>

        <p><strong>Message:</strong></p>
        <div class='message'>" . nl2br(htmlspecialchars($message)) . "</div>
    </div>
</body>
</html>
";


// Send the contact email
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;  // Set to 2 for debugging
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info.vortixenterprise@gmail.com';
    $mail->Password   = 'fttrkuyikbzqknix'; // Make sure to use environment variables for sensitive data
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Use PHPMailer::ENCRYPTION_STARTTLS if using TLS
    $mail->Port       = 465;

    //Recipients
    $mail->setFrom('info.vortixenterprise@gmail.com', 'Vortix Enterprise');
    $mail->addAddress('info.vortixenterprise@gmail.com'); // Add the recipient address

    // Content
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $html;

    $mail->send();

    // Send the thank you email to the user
    $thankYouHtml = "
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Thank You for Contacting Us</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-image: url('https://vortixenterprise.com/images/email-bg.jpg');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        .container {
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            border-radius: 12px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            padding: 32px;
            max-width: 400px;
            width: 100%;
            text-align: center;
            color: #000;
        }

        .logo {
            margin-bottom: 24px;
            max-width: 150px;
        }

        .logo img {
            max-width: 150px;
        }

        .title {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 16px;
            color: #000;
        }

        .message {
            font-size: 16px;
            margin-bottom: 32px;
            color: #000;
        }

        .contact-info {
            margin-top: 20px;
            gap: 16px;
        }

        .contact-item {
            font-size: 16px;
        }

        @media (max-width: 600px) {
            .container {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class='container'>
        <div class='logo'><center>
            <img src='https://vortixenterprise.com/images/logo/logo.png' alt='Company Logo'>
            </center>
        </div>
        <h1 class='title'>Thank You for Contacting Us</h1>
        <p class='message'>
            We appreciate you reaching out. Our team will get back to you shortly.
        </p>
        <hr>
        <div class='contact-info'>
            <div class='contact-item'>
                <strong>Phone:</strong> +91 95105 95121
            </div>
            <div class='contact-item'>
                <strong>Email:</strong> <a href='mailto:info.vortixenterprise@gmail.com' style='color: #000; text-decoration: underline;'>info.vortixenterprise@gmail.com</a>
            </div>
            <div class='contact-item'>
                <strong>Address:</strong> Shop No.119, 4th Floor, Gruham Icon, Opp.Leck Garden, Kosad, Surat, Gujarat-394107,India
            </div>
        </div>
    </div>
</body>
</html>
";


    $mail->clearAddresses(); // Clear previously set addresses
    $mail->addAddress($email); // Add the recipient address for thank you email

    // Content
    $mail->Subject = 'Thank You for Contacting Us';
    $mail->Body    = $thankYouHtml;

    $mail->send();
    echo json_encode(['status' => 1, 'message' => 'Contact request sent successfully and thank you email has been sent']);
} catch (Exception $e) {
    echo json_encode(['status' => 0, 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo]);
}
