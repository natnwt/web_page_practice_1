let isDark = localStorage.getItem('dark_scheme');
const darkModeBtn = document.getElementById('dark-mode-btn');

 const darkModeActive = ()=>{
    document.body.classList.add('dark_scheme');
    localStorage.setItem('dark_scheme', 'active');
 }

 const darkModeInactive = ()=>{
    document.body.classList.remove('dark_scheme');
    localStorage.setItem('dark_scheme', null);
 }

 if(isDark === 'active'){
  darkModeActive();
 }
darkModeBtn.addEventListener('click', () =>{
  isDark = localStorage.getItem('dark_scheme');
  if(isDark !== 'active'){
    darkModeActive();
  }
  else{
    darkModeInactive();
  }
})

const contactPanel = document.getElementById('contact-panel');
const contactBtn = document.getElementById('contact-id');

contactBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  const isVisible = contactBtn.getAttribute('aria-expanded');

  if(isVisible === "false"){
    contactBtn.setAttribute('aria-expanded', "true");
  }
  else{
    contactBtn.setAttribute('aria-expanded', "false");
  }
});
