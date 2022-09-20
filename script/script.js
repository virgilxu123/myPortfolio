function selectTab(tabIndex) {
    //Hide All Tabs
    document.getElementById('tab1Content').style.display="none";
    document.getElementById('tab2Content').style.display="none";
    document.getElementById('tab3Content').style.display="none";
    
    //Show the Selected Tab
    document.getElementById('tab' + tabIndex + 'Content').style.display="block";
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "50%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }