function setImg(dataUrl) {

  console.log(dataUrl.newUser.img);

  let pic = document.getElementById('img-pic');
  document.getElementById('test-input').addEventListener('change', function () {

    if (this.files && this.files[0]) {
      let reader = new FileReader();
      reader.onload = (function (e) {
        dataUrl.newUser.img = e.target.result;
        console.log(dataUrl.newUser.img);
      });
      reader.readAsDataURL(this.files[0]);
    }

  });
}

export default setImg;
