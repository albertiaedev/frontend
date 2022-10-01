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
    + "<br> Name: " + document.getElementById("name").value
    + "<br> Email: " + document.getElementById("email").value
    + "<br> Phone: " + document.getElementById("phone").value
    + "<br> Message <br>: " + document.getElementById("name").value
  }).then(
    message => alert("Message sent to" + getElementById("email"))
  );
}
