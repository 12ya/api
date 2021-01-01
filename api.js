$.get('https://api.openbrewerydb.org/breweries', function(data){

    console.log(data);
    data.forEach(e => {
        $('#table_data').append(
            '<tr id = "extra+data">'+
            '<td>'
            +'<button id="modalBtn" class="button">'+e.name+'</button>'
            +'<div id = "simpleModal" class="modal">'
             + '<div class="modal_content">'
                +'<span class="closeBtn">'+'&times;'+'</span>'
                +'<p>'+e.name+'<br>'+e.brewery_type+'<br>'+e.country+'<br>'+e.state+'<br>'+e.city+'<br>'+e.phone+'<br>'+e.website_url+'</p>'
              +'</div>'
            +'</div>'
            + '</td>'
            +'<td>'+e.brewery_type+'</td>'
            +'<td>'+e.country+'</td>'
            +'<td>'+e.website_url+'</td>'
        )
    });
    var modal = document.getElementById('simpleModal')
    var modalBtn = document.querySelectorAll('.button').forEach((el) =>
     el.addEventListener('click', openModal)   )
    var closeBtn = document.querySelectorAll('.closeBtn').forEach((el) =>
     el.addEventListener('click', closeModal))



    function openModal(e){
        console.log('het')
        console.log(e.target.nextSibling)
        e.target.nextSibling.style.display = 'block'
    }
    function closeModal(e){
        console.log('teh')
        console.log(e.target.parentElement.parentElement)
        e.target.parentElement.parentElement.style.display = 'none'
    }
})
 