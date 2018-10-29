window.addEventListener('load', function() {

    fetch('data.txt')
        .then(function(resp) {
            return resp.text()
        })
        .then(function(text) {
            window.setTimeout(
                function() {
                    var element = document.getElementById('placeholder')
                    element.innerText = text
                },
                1000
            )
        })
})
