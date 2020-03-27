//MENU
var header = document.getElementById('HeaderSuporteContent');
var click = window.document.getElementById('HeaderSuporte-TeamViewer');
var click1 = window.document.getElementById('HeaderSuporte-AnyDesk');
var click2 = window.document.getElementById('HeaderSuporte-AeroAdmin');

function btnSuporteTeamViewer() {
  if (click.style.display == 'none') {
    click.style.display = 'block';
    click1.style.display = 'none';
    click2.style.display = 'none';
  } else {
    click.style.display = 'none';
  }
}

function btnSuporteAnyDesk() {
  if (click1.style.display == 'none') {
    click.style.display = 'none';
    click1.style.display = 'block';
    click2.style.display = 'none';
  } else {
    click1.style.display = 'none';
  }
}

function btnSuporteAeroAdmin() {
  if (click2.style.display == 'none') {
    click.style.display = 'none';
    click1.style.display = 'none';
    click2.style.display = 'block';
  } else {
    click2.style.display = 'none';
  }
}

//Remover estado ao clicar no header
function remover(header = 'click') {
  click.style.display = 'none';
  click1.style.display = 'none';
  click2.style.display = 'none';
}