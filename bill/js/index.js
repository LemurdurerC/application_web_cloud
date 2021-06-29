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
   

   
}
    function sendFile(event) {
        
        console.debug("data" + data);
        fetch('http://35.181.149.163:8000', {
            method: 'POST',
            body: data
        })
        
}
