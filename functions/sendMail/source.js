exports = function(email, hostName) {
  email = "delloro.roberto@gmail.com";
  const sendGridApiUrl = "https://api.sendgrid.com/v3/mail/send";
  const sendGridApiKey = context.values.get('SendGridApiKey');

  var emailData = BuildEmailData(email, hostName);


  return context.http.post({
    url: sendGridApiUrl, headers: {Authorization: [`Bearer ${sendGridApiKey}`]}, body: emailData, encodeBodyAsJSON: true})
  .then(res =>{
    console.log (res.statusCode); 
    console.log (res.statusMessage); 
  });
};

  function BuildEmailData (email, hostName){
    var publishedHostName = "http://localhost";
    var senderEmail = "noreply@spluga.io"; //Replace with the email address appearing as sender
    var subject = "Invitation to Spluga";
    
    var emailData = {
      "personalizations": [
       {
          "to": [
            {
              "email": email
            }
          ],
          "subject": subject
        }
      ],
      "from": {
        "email": senderEmail
      },
      "content": [
        {
          "type": "text/html",
          "value": BuildEmailContentFromTemplate(hostName)
        }
      ]
      };
    
   return emailData;
  }
  
function BuildEmailContentFromTemplate (hostName){
  return `
    <!DOCTYPE html>
    <html>
      <head><title>Invitation</title></head>
      <body>
        <div>
            <h3>Hi,</h3>
            <p> <b>You are invited to join Spluga, to accept the invitation plase click the following <a href="${hostName}/team">link</a> </b>,
            <br>
       </div>
      </body>
    </html>`;
}