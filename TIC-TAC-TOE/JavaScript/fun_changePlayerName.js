// show overlay window by clicking 'Edit'

function showOverlay (event) {
  dataPlayerNum = + event.target.dataset.player

  aside.style.display = 'block';
  backdrop.style.display = 'block';
  formSelector.classList.remove('error')
  alertMessage.textContent = '';
  enteredInputMessage.value = '';
}

// cancel overlay window by clicking 'Cancel'

function cancelOverlay () {
  aside.style.display = 'none';
  backdrop.style.display = 'none';
}


// change playerName by clicking "Chnage"

function changeUserName(event) {
  event.preventDefault()
  const formData = new FormData (event.target);
  const playerName = formData.get('playername').trim()

  while (playerName === '') {
    formSelector.classList.add('error')
    alertMessage.textContent = 'please input correct name'
    return;
  }

  const playerNumSelector = document.getElementById('name_'+dataPlayerNum)
  playerNumSelector.textContent = playerName
  
  players[dataPlayerNum-1].name = playerName
  cancelOverlay()
}