//MENU
var header = document.getElementById('HeaderSuporteContent');
var click = window.document.getElementById('HeaderSuporte-TeamViewer');
var click1 = window.document.getElementById('HeaderSuporte-AnyDesk');
var click2 = window.document.getElementById('HeaderSuporte-AeroAdmin');

function btnSuporte() {
  if (click.style.display = 'none') {
    click.style.display = 'block';
    click1.style.display = 'none';
    click2.style.display = 'none';
  } else {
    click.style.display = 'none';
    click1.style.display = 'none';
    click2.style.display = 'none';
  }
}

function btnSuporte1() {
  if (click1.style.display = 'none') {
    click.style.display = 'none';
    click1.style.display = 'block';
    click2.style.display = 'none';
  } else {
    click.style.display = 'none';
    click1.style.display = 'none';
    click2.style.display = 'none';
  }
}

function btnSuporte2() {
  if (click2.style.display = 'none') {
    click.style.display = 'none';
    click1.style.display = 'none';
    click2.style.display = 'block';
  } else {
    click.style.display = 'none';
    click1.style.display = 'none';
    click2.style.display = 'none';
  }
}
//Remover estado ao clicar no header
function remover(header = 'click') {
  click.style.display = 'none';
  click1.style.display = 'none';
  click2.style.display = 'none';
}