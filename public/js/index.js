

let data = new FormData();


+   
    function ($) {
        'use strict';

        var uploadForm = document.getElementById('js-upload-form');

        var startUpload = function (files) {
            console.log(files)
        }

        uploadForm.addEventListener('submit', function (e) {
            var uploadFiles = document.getElementById('js-upload-files').files;
            e.preventDefault()
            startUpload(uploadFiles)





        })

    }

function loadFile(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    t = event.target.files[0];
    
    data.append('file', event.target.files[0])

    data.append('cookie', document.cookie)
   

   
}
    async function sendFile(event) {
   
        event.preventDefault();
         await fetch('http://15.237.169.44:8000', {
            method: 'POST',
            body: data,
            headers: {'Allow-Control-Allow-Origin': '*'
            }
            
        }).then(response => {
            console.log("myData1: ", response);
            var temp = response.json();
            console.log("temp ", temp);
            return temp;
        }).then(text => {
            swal("Votre image a bien été envoyée",JSON.stringify(text),"success");	 
        });

    
        
}

function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}
