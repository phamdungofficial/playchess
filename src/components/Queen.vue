<template>
    <div></div>
  </template>
  
  <script>
  export default {
    props: {
      isCoDo: Function,
      isBien: Function,
      isCoDen: Function,
      DoiMau: Function,
    },
    methods: {
      Queen(id) {
        const X = id.toString().charAt(0);
        const Y = id.toString().charAt(1);
    
        const X_ = parseInt(X);
        const Y_ = parseInt(Y);
    
        // Di chuyển theo hàng và cột
        for (let i = 1; i <= 8; i++) {
          if (i !== X_) {
            this.DoiMau(i, Y_);
          }
          if (i !== Y_) {
            this.DoiMau(X_, i);
          }
        }
    
        // Di chuyển theo đường chéo chính
        for (let i = 1; i <= 8; i++) {
          const newX = X_ + i;
          const newY = Y_ + i;
          if (!this.isBien(newX, newY) && !this.isCoDen(newX, newY)) {
            this.DoiMau(newX, newY);
          } else {
            break; // Dừng khi gặp cản trở
          }
        }
        for (let i = 1; i <= 8; i++) {
          const newX = X_ - i;
          const newY = Y_ - i;
          if (!this.isBien(newX, newY) && !this.isCoDen(newX, newY)) {
            this.DoiMau(newX, newY);
          } else {
            break; // Dừng khi gặp cản trở
          }
        }
    
        // Di chuyển theo đường chéo phụ
        for (let i = 1; i <= 8; i++) {
          const newX = X_ + i;
          const newY = Y_ - i;
          if (!this.isBien(newX, newY) && !this.isCoDen(newX, newY)) {
            this.DoiMau(newX, newY);
          } else {
            break; // Dừng khi gặp cản trở
          }
        }
        for (let i = 1; i <= 8; i++) {
          const newX = X_ - i;
          const newY = Y_ + i;
          if (!this.isBien(newX, newY) && !this.isCoDen(newX, newY)) {
            this.DoiMau(newX, newY);
          } else {
            break; // Dừng khi gặp cản trở
          }
        }
      },
    },
  };
  </script>
  
  