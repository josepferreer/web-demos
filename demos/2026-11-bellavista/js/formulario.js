document.querySelectorAll('form.formulario').forEach(function(f){
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var m=document.createElement('p');
    m.className='enviado';
    m.textContent='Mensaje enviado. Te respondemos lo antes posible.';
    f.replaceWith(m);
  });
});
