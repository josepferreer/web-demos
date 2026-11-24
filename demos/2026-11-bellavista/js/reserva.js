(function(){
  var form=document.querySelector('.reserva');
  if(!form) return;
  var cal=form.querySelector('.cal');
  var cLleg=form.querySelector('[data-campo="llegada"]');
  var cSal=form.querySelector('[data-campo="salida"]');
  var cHue=form.querySelector('[data-campo="huespedes"]');
  var lista=cHue.querySelector('.op');
  var hoy=new Date(); hoy.setHours(0,0,0,0);
  var ini=null, fin=null, vista=new Date(hoy.getFullYear(),hoy.getMonth(),1);
  var DIAS=['L','M','X','J','V','S','D'];

  function iso(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
  function desdeIso(s){var p=s.split('-').map(Number);return new Date(p[0],p[1]-1,p[2]);}
  function fmt(d){return d.toLocaleDateString('es-ES',{weekday:'short',day:'numeric',month:'short'}).replace(/\./g,'');}
  function igual(a,b){return !!a&&!!b&&a.getTime()===b.getTime();}

  function cerrar(){
    cal.hidden=true; lista.hidden=true;
    form.querySelectorAll('.campo').forEach(function(c){
      c.classList.remove('abierto');
      c.querySelector('.campo-btn').setAttribute('aria-expanded','false');
    });
  }
  function abrir(campo){
    var ya=campo.classList.contains('abierto');
    cerrar();
    if(ya) return;
    campo.classList.add('abierto');
    campo.querySelector('.campo-btn').setAttribute('aria-expanded','true');
    if(campo===cHue){ lista.hidden=false; colocar(lista,cHue); return; }
    if(ini) vista=new Date(ini.getFullYear(),ini.getMonth(),1);
    pintarCal(); cal.hidden=false; colocar(cal,form);
  }
  function colocar(pop,ancla){
    pop.classList.remove('abajo');
    var r=ancla.getBoundingClientRect();
    var alto=pop.offsetHeight+12;
    var arriba=r.top, abajo=window.innerHeight-r.bottom;
    if(abajo>=alto||(arriba<alto&&abajo>arriba)) pop.classList.add('abajo');
  }

  function mes(f){
    var y=f.getFullYear(), m=f.getMonth();
    var desfase=(new Date(y,m,1).getDay()+6)%7;
    var total=new Date(y,m+1,0).getDate();
    var nombre=f.toLocaleDateString('es-ES',{month:'long'});
    var h='<div class="mes"><p class="mes-t">'+nombre+' '+y+'</p><div class="sem">'+DIAS.map(function(d){return '<span>'+d+'</span>';}).join('')+'</div><div class="dias">';
    for(var i=0;i<desfase;i++) h+='<span></span>';
    for(var d=1;d<=total;d++){
      var f2=new Date(y,m,d), c='dia';
      if(igual(f2,hoy)) c+=' hoy';
      if(igual(f2,ini)) c+=' ini';
      if(igual(f2,fin)) c+=' fin';
      if(ini&&fin&&f2>ini&&f2<fin) c+=' rango';
      h+='<button type="button" class="'+c+'" data-d="'+iso(f2)+'"'+(f2<hoy?' disabled':'')+'>'+d+'</button>';
    }
    return h+'</div></div>';
  }
  function pintarCal(){
    var sig=new Date(vista.getFullYear(),vista.getMonth()+1,1);
    var primero=new Date(hoy.getFullYear(),hoy.getMonth(),1);
    var noches=(ini&&fin)?Math.round((fin-ini)/864e5):0;
    var texto=noches?noches+(noches===1?' noche':' noches'):(ini?'Elige la fecha de salida':'Elige la fecha de llegada');
    cal.innerHTML=
      '<div class="cal-nav"><button type="button" data-nav="-1" aria-label="Mes anterior"'+(vista<=primero?' disabled':'')+'><i></i></button><button type="button" data-nav="1" aria-label="Mes siguiente"><i></i></button></div>'+
      '<div class="meses">'+mes(vista)+mes(sig)+'</div>'+
      '<div class="cal-pie"><span>'+texto+'</span><button type="button" data-borrar>Borrar fechas</button></div>';
  }
  function pintarCampos(){
    [[cLleg,ini],[cSal,fin]].forEach(function(p){
      var v=p[0].querySelector('.val');
      v.textContent=p[1]?fmt(p[1]):'Añadir fecha';
      v.classList.toggle('vacio',!p[1]);
      p[0].querySelector('input').value=p[1]?iso(p[1]):'';
    });
  }

  cal.addEventListener('click',function(e){
    var b=e.target.closest('button');
    if(!b) return;
    if(b.dataset.nav){
      vista=new Date(vista.getFullYear(),vista.getMonth()+Number(b.dataset.nav),1);
      pintarCal(); return;
    }
    if(b.hasAttribute('data-borrar')){
      ini=null; fin=null; pintarCampos(); pintarCal(); return;
    }
    if(b.dataset.d){
      var d=desdeIso(b.dataset.d);
      if(!ini||(ini&&fin)||d<ini){ ini=d; fin=null; }
      else if(igual(d,ini)){ return; }
      else { fin=d; }
      pintarCampos(); pintarCal();
      if(fin){ cerrar(); }
      else { cLleg.classList.remove('abierto'); cSal.classList.add('abierto'); }
    }
  });

  [cLleg,cSal,cHue].forEach(function(c){
    c.querySelector('.campo-btn').addEventListener('click',function(){ abrir(c); });
  });

  var op=[1,2,3,4,5,6];
  lista.innerHTML=op.map(function(n){
    return '<button type="button" role="option" data-n="'+n+'"'+(n===2?' class="sel" aria-selected="true"':'')+'>'+n+(n===1?' persona':' personas')+'</button>';
  }).join('');
  lista.addEventListener('click',function(e){
    var b=e.target.closest('button');
    if(!b) return;
    lista.querySelectorAll('button').forEach(function(x){x.classList.remove('sel');x.removeAttribute('aria-selected');});
    b.classList.add('sel'); b.setAttribute('aria-selected','true');
    cHue.querySelector('.val').textContent=b.textContent;
    cHue.querySelector('input').value=b.dataset.n;
    cerrar();
  });

  document.addEventListener('click',function(e){ if(e.target.isConnected&&!form.contains(e.target)) cerrar(); });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape') cerrar(); });
})();
