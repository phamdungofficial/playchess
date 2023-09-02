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
      Pawn(id) {
        const X = id.charAt(0);
        const Y = id.charAt(1);
        const iX = parseInt(X);
        const iY = parseInt(Y);
  
        switch (this.isCoDo(X, iY)) {
          // Dòng 2 cờ do
          case true:
            if (iX === 2) {
              for (let i = iX + 1; i <= iX + 2; i++) {
                if (this.isRong(i, iY)) this.DoiMau(i, iY);
                if (this.isCoDen(i, iY)) break;
              }
  
              // Ben trai
              if (!this.isBien(iX + 1, iY - 1) && this.isCoDen(iX + 1, iY - 1))
                this.DoiMau(iX + 1, iY - 1);
  
              // Ben phải
              if (!this.isBien(iX + 1, iY + 1) && this.isCoDen(iX + 1, iY + 1))
                this.DoiMau(iX + 1, iY + 1);
            } else {
              if (!this.isBien(iX + 1, iY) && this.isRong(iX + 1, iY))
                this.DoiMau(iX + 1, iY);
  
              // Ben trai
              if (!this.isBien(iX + 1, iY - 1) && this.isCoDen(iX + 1, iY - 1))
                this.DoiMau(iX + 1, iY - 1);
  
              // Ben phai
              if (!this.isBien(iX + 1, iY + 1) && this.isCoDen(iX + 1, iY + 1))
                this.DoiMau(iX + 1, iY + 1);
            }
            break;
  
          // Dong 2 cờ đen
          case false:
            if (iX === 7) {
              for (let i = iX - 1; i >= iX - 2; i--) {
                if (this.isRong(i, iY)) this.DoiMau(i, iY);
                if (this.isCoDo(i, iY)) break;
              }
  
              // Ben trai
              if (!this.isBien(iX - 1, iY - 1) && this.isCoDo(iX - 1, iY - 1))
                this.DoiMau(iX - 1, iY - 1);
  
              // Ben phai
              if (!this.isBien(iX - 1, iY + 1) && this.isCoDo(iX - 1, iY + 1))
                this.DoiMau(iX - 1, iY + 1);
            } else {
              console.log(iX);
              if (!this.isBien(iX - 1, iY) && this.isRong(iX - 1, iY)) {
                this.DoiMau(iX - 1, iY);
                break;
              }
  
              // Ben trai
              if (!this.isBien(iX - 1, iY - 1) && this.isCoDo(iX - 1, iY - 1)) {
                this.DoiMau(iX - 1, iY - 1);
                break;
              }
  
              // Ben phai
              if (!this.isBien(iX - 1, iY + 1) && this.isCoDo(iX - 1, iY + 1)) {
                this.DoiMau(iX - 1, iY + 1);
                break;
              }
            }
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
  
      isRong(X, Y) {
        // Định nghĩa hàm isRong tại đây
      },
  
      DoiMau(X, Y) {
        // Định nghĩa hàm DoiMau tại đây
      },
    },
  };
  </script>
  