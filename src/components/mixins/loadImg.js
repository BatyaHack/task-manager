function setImg(dataUrl) {

  let pic = document.getElementById('img-pic');
  document.getElementById('test-input').addEventListener('change', function () {

    if (this.files && this.files[0]) {
      let reader = new FileReader();
      reader.onload = (function (e) {
        dataUrl.newUser.img = e.target.result;
      });
      reader.readAsDataURL(this.files[0]);
    }

  });
}

export default setImg;
