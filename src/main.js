document.addEventListener("DOMContentLoaded", function() {
    var tellerConnect = TellerConnect.setup({
      applicationId: import.meta.env.VITE_TELLER_APP_ID,
      products: ["verify"],
      onInit: function() {
        console.log("Teller Connect has initialized");
      },
      onSuccess: function(enrollment) {
        console.log("User enrolled successfully", enrollment.accessToken);
      },
      onExit: function() {
        console.log("User closed Teller Connect");
      }
    });

    var el = document.getElementById("teller-connect");
    el.addEventListener("click", function() {
      tellerConnect.open();
    });

    const token = enrollment.accessToken;
    const apiURL = import.meta.env.API_URL;
    $.ajax({
        url: apiURL,
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${token}`
        },
        success: function() {
            console.log('some token was sent to `${apiURL}`')
        },
        error: function(error){
            console.error('Error', error)
        }
        
    });
});

