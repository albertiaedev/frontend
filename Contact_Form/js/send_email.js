// function senEmail()

function sendEmail(){
  Email.send({
    Host : "smtp.yourisp.com",
    Username : "username",
    Password : "password",
    To : 'email',
    From : document.getElementById("email").value,
    Subject : "Contact Form",
    Body : "You have a new request"
  }).then(
    message => alert(message)
  );
}
