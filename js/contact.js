var btn = document.getElementById("btn");
btn.addEventListener("submit", function (e) {
    e.preventDefault()
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var subcect = document.getElementById("subcect").value;
    var message = document.getElementById("message").value;
    var body = "name: " + name + "<br/> email: " + email +
        "<br/> : phone" + phone +  "<br/> message: " + message;

        Email.send({
            Host : "smtp.yourisp.com",
            Username : "enneccar.info@gmail.com",
            Password : "zrkpiybknlytqjba",
            To : 'enneccar.info@gmail.com',
            From : email,
            Subject : "New contact form",
            Body : body
        }).then(
            message => alert(message)
        );


    Email.send({
        SecureToken: "7d7e52ba-3f92-485a-8665-9630507c1cdf",
        To: 'enneccar.info@gmail.com',
        From: email,
        Subject: "New contact form",
        Body: body
    }).then(
        message => alert(message)
    );
})