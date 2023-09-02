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
      Horses(id) {
        const X = id.charAt(0);
        const Y = id.charAt(1);
        const iX = parseInt(X);
        const iY = parseInt(Y);
        switch (this.isCoDo(X, Y)) {
          // Co do
          case true:
          // Co den
          case false:
            const moves = [
              [-2, -1],
              [-1, -2],
              [1, -2],
              [-1, 2],
              [2, -1],
              [2, 1],
              [1, 2],
              [-1, 2],
              [-2, 1],
            ];
  
            for (const move of moves) {
            const newX = iX + move[0];
            const newY = iY + move[1];
            console.log(this.isBien(newX, newY));
            if (!this.isBien(newX, newY) && !this.isCoDen(newX, newY)) {
              this.DoiMau(newX, newY);
            }
          }
            break;
  
          default:
        }
      },
    },
  };
  </script>
  