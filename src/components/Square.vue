<template>
    <div class="square" :class="{ 'white-square': isWhite, 'black-square': !isWhite }">
      <Piece v-if="piece" :type="piece.type" :color="piece.color" />
    </div>
  </template>
  
  <script>
  import Piece from "../components/Piece.vue";
  
  export default {
    props: {
      isWhite: Boolean,
      piece: Object
      
    },
    components: {
      Piece
    }
  };
  </script>
  
  <style scoped>
  .square {
    width: 50px;
    height: 50px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .white-square {
    background-color: white;
  }
  
  .black-square {
    background-color: black;
  }
  </style>
  