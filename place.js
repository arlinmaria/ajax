
$ (document).ready (function () {
    $.ajax ({ 
        type: "GET",
        url: "https://api.countrystatecity.in/v1/countries", 
        beforeSend: function (xhr) { 
            xhr.setRequestHeader ('X-CSCAPI-KEY', 'MnFTN3VKQ1lXY1ppRFRFT053Yzl4YkxBVEFnSEVGV1I2R0dTSHcwVg==');
        },
              success: function (response) {
                  $('#country-select').append ('<option selected disabled >Country</option>') 
                  for (i in response) {
                      $('#country-select').append ('<option value="' + response[i].iso2 + '">' + response [i].name +'</option>');
               }
      }
     })
     
     $('#country-select').change(function () {
         $('#state-select option').remove ()
         country_code = $('#country-select').val ()
         $.ajax({
             type: "GET",
             url: "https://api.countrystatecity.in/v1/countries/" + country_code + "/states",

             beforeSend: function (xhr) {
                 xhr.setRequestHeader ('X-CSCAPI-KEY', 'MnFTN3VKQ1lXY1ppRFRFT053Yzl4YkxBVEFnSEVGV1I2R0dTSHcwVg=='); 
         },
             succes: function (response) {
                 $('#state-select').append ('<option selected disabled >Select your state</option>')
                 for (i in response) 
                 $ ('#state-select').append ('<option value="' + response[i].iso2 + '">' + response [i].name + '</option>');
             }
         
        });
    });
});
