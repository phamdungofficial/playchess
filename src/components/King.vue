<template>
    <div></div>
  </template>
  
  <script>
  export default {
    methods: {
      props: {
        isCoDo: Function,
        isBien: Function,
        isCoDen: Function,
        DoiMau: Function,
      },
      King(id) {
        const X = id.toString().charAt(0);
        const Y = id.toString().charAt(1);
  
        const X_ = parseInt(X);
        const Y_ = parseInt(Y);
  
        switch (this.isCoDo(X, Y)) {
          // Cờ đỏ
          case true:
            // Xử lý cho cờ đỏ
            break;
  
          // Cờ Den
          case false:
            // Đi xuống
            if (!this.isBien(X_ - 1, Y_) && !this.isCoDen(X_ - 1, Y_)) {
              this.DoiMau(X_ - 1, Y_);
            }
  
            // Đi xuống phải
            if (!this.isBien(X_ - 1, Y_ + 1) && !this.isCoDen(X_ - 1, Y_ + 1)) {
              this.DoiMau(X_ - 1, Y_ + 1);
            }
  
            // Đi xuống trái
            if (!this.isBien(X_ - 1, Y_ - 1) && !this.isCoDen(X_ - 1, Y_ - 1)) {
              this.DoiMau(X_ - 1, Y_ - 1);
            }
  
            // Đi lên
            if (!this.isBien(X_ + 1, Y_) && !this.isCoDen(X_ + 1, Y_)) {
              this.DoiMau(X_ + 1, Y_);
            }
  
            // Đi lên phải
            if (!this.isBien(X_ + 1, Y_ + 1) && !this.isCoDen(X_ + 1, Y_ + 1)) {
              this.DoiMau(X_ + 1, Y_ + 1);
            }
  
            // Đi lên trái
            if (!this.isBien(X_ + 1, Y_ - 1) && !this.isCoDen(X_ + 1, Y_ - 1)) {
              this.DoiMau(X_ + 1, Y_ - 1);
            }
  
            // qua trái
            if (!this.isBien(X_, Y_ - 1) && !this.isCoDen(X_, Y_ - 1)) {
              this.DoiMau(X_, Y_ - 1);
            }
  
            // qua phai
            if (!this.isBien(X_, Y_ + 1) && !this.isCoDen(X_, Y_ + 1)) {
              this.DoiMau(X_, Y_ + 1);
            }
            break;
          default:
            // Xử lý trường hợp mặc định (nếu cần)
            break;
        }
      },
  
      isCoDo(X, Y) {
        // Định nghĩa hàm isCoDo tại đây
      },
  
      isBien(X, Y) {
        // Định nghĩa hàm isBien tại đây
      },
  
      isCoDen(X, Y) {
        // Định nghĩa hàm isCoDen tại đây
      },
  
      DoiMau(X, Y) {
        // Định nghĩa hàm DoiMau tại đây
      },
    },
  };
  </script>
  