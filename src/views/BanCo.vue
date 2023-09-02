<template>
    <div id="divBanCo">
      <table id="BanCo">
        <tr v-for="row in 8" :key="row">
          <td v-for="col in 8" :key="col" :id="`${row}${col}`" @click="cellClick(`${row}${col}`)">
            <img :id="`i${row}${col}`" :src="getChessImage(row, col, selectedColor, selectedPiece)" />
          </td>
        </tr>
      </table>
    </div>
  </template>
  
<script>
import ChessConstants from '../components/ChessConstants.vue';

  // export default {
  //   components: {
  //   ChessConstants,
  //   },
  //   props: ['cellClick','selectedColor', 'selectedPiece'],
  //   methods: {
  //   cellClick(id) {
  //     this.cellClick(id);
  //   },
  //   setup(props) {
  //   const cellClick = (id) => { // Thay đổi tên biến này thành 'cellClick'
  //     props.cellClick(id);
  //   };
  
  //     return {
  //       cellClick,
       
  //     };
      
  //   },
  // }
  // };

  export default {
  props: ['cellClick', 'selectedColor', 'selectedPiece'], // Đảm bảo props đã được định nghĩa
  methods: {
    handleCellClick(id) {
      this.cellClick(id);
    },
    getChessImage(row, col) {
      // Thay 'chess' bằng dữ liệu thực tế mà bạn đã truyền vào từ props hoặc data
      const imageName = `${this.selectedColor === 'do' ? 'CoDo' : 'CoDen'}${this.selectedPiece.charAt(0).toUpperCase() + this.selectedPiece.slice(1)}.png`;
      return require(`@/assets/${imageName}`);
    },
  },
};

</script>
  