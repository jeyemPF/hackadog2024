function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  // dropdown
  document.querySelector('.dropdown-btn').addEventListener('click', function() {
    this.parentNode.classList.toggle('active');
  });
  document.querySelector('.dropdown2-btn').addEventListener('click', function() {
    this.parentNode.classList.toggle('active');
  });



  // pdf
