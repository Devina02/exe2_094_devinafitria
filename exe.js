function sendData(event) {
    event.preventDefault();
  
    var name = document.getElementById("name").value;
    var kartun = document.querySelector("input[name=kartun]:checked").value;
    var pesan = document.getElementById("pesan").value;
    var deskripsi = document.getElementById("deskripsi").value;
    var birthdate = document.getElementById("birthdate").value;
    var gender = document.getElementById("gender").value;
  
    var alertMessage =
      "Nama: " + name +
      "\nBirthdate: " + birthdate +
      "\nJenis Kelamin: " + gender +
      "\nKartun: " + kartun +
      "\nDeskripsi: " + deskripsi +
      "\nPesan: " + pesan;
  
    alert(alertMessage);
  
    var data = {
      nama: name,
      kartun: kartun,
      pesan: pesan,
      deskripsi: deskripsi,
      birthdate: birthdate,
      gender: gender
    };
  
    localStorage.setItem("formData", JSON.stringify(data));
  }
  
