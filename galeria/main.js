(function(){
  var demos = window.DEMOS || [];
  var rejilla = document.getElementById('rejilla');
  var vacio = document.getElementById('vacio');
  var cuenta = document.getElementById('cuenta');
  var fAutor = document.getElementById('f-autor');
  var fSector = document.getElementById('f-sector');

  function unicos(campo){
    var vistos = {};
    demos.forEach(function(d){ if (d[campo]) vistos[d[campo]] = true; });
    return Object.keys(vistos).sort(function(a, b){ return a.localeCompare(b, 'es'); });
  }

  function rellenar(select, valores){
    valores.forEach(function(v){
      var o = document.createElement('option');
      o.value = v;
      o.textContent = v;
      select.appendChild(o);
    });
  }

  function fechaLegible(f){
    if (!f) return '';
    var p = f.split('-');
    var meses = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
    return p[1] ? meses[parseInt(p[1], 10) - 1] + ' ' + p[0] : p[0];
  }

  function tarjeta(d){
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.className = 'tarjeta';
    a.href = 'demos/' + d.carpeta + '/index.html';

    var marco = document.createElement('div');
    marco.className = 'marco';
    if (d.preview){
      var img = document.createElement('img');
      img.src = 'demos/' + d.carpeta + '/preview.png';
      img.alt = 'Vista previa de ' + d.titulo;
      img.loading = 'lazy';
      marco.appendChild(img);
    } else {
      var s = document.createElement('div');
      s.className = 'sin-preview';
      s.textContent = d.titulo;
      marco.appendChild(s);
    }

    var info = document.createElement('div');
    info.className = 'info';
    var h = document.createElement('h2');
    h.textContent = d.titulo;
    var p = document.createElement('p');
    p.textContent = [d.autor, d.sector, fechaLegible(d.fecha)].filter(Boolean).join(' · ');
    info.appendChild(h);
    info.appendChild(p);

    a.appendChild(marco);
    a.appendChild(info);
    li.appendChild(a);
    return li;
  }

  function pintar(){
    var lista = demos.filter(function(d){
      return (!fAutor.value || d.autor === fAutor.value) &&
             (!fSector.value || d.sector === fSector.value);
    });
    rejilla.textContent = '';
    lista.forEach(function(d){ rejilla.appendChild(tarjeta(d)); });
    vacio.hidden = lista.length > 0;
    cuenta.textContent = lista.length + (lista.length === 1 ? ' demo' : ' demos');
  }

  rellenar(fAutor, unicos('autor'));
  rellenar(fSector, unicos('sector'));
  fAutor.addEventListener('change', pintar);
  fSector.addEventListener('change', pintar);
  pintar();
})();
