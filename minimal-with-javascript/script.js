window.addEventListener('load', function() {
    window.setTimeout(
        function() {
            var element = document.getElementById('placeholder')
            element.innerText = 'Hello World'
        },
        5000
    )
})
