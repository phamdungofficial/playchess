<template>
  <div id="divMain">
    <div id="divNguoiChoiCoDen">
      <table id="tblNguoiCoDen">
        <tr>
          <td><img ref="iCoDen" :src=" userCoDenImage" alt="" /></td>
        </tr>
        <tr>
          <td id="PointCoDen">{{  }}</td>
        </tr>
      </table>
    </div>
    <div>
      <form class="quanco" name="mauquanco">
        <label for="cars">Chọn màu quân cờ mà bạn muốn chọn:</label>
        <select name="mauco" id="mauco" v-model="selectedColor">
          <option value="CoDo">Đỏ</option>
          <option value="CoDen">Đen</option>
        </select>
        <br /><br />
      </form>
      <br /><br />
      <form class="quanco">
        <label for="cars">Chọn quân cờ mà bạn muốn chọn:</label>
        <select name="quanco" id="quanco" v-model="selectedPiece">
          <option value="Tot">Tốt</option>
          <option value="Xe">Xe</option>
          <option value="Ma">Mã</option>
          <option value="Tuong">Tượng</option>
          <option value="Hau">Hậu</option>
          <option value="Vua">Vua</option>
        </select>
        <br /><br />
        <input type="number" v-model="selectedRow" placeholder="Hàng Ngang" />
        <input type="number" v-model="selectedColumn" placeholder="Hàng Dọc" />
        <br /><br />
        <button id="btn__submit" @click.prevent="submitForm">Submit</button>
      </form>
    </div>
    <!-- <div v-show="shouldShow" class="possible-moves">
      <div v-for="move in possibleMoves" :key="move" class="possible-move" @click="performMove(move)">
      </div>
    </div> -->

    <div id="divBanCo">
      <table id="BanCo">
        <tr v-for="row in 8" :key="row">
          <td v-for="column in 8" :key="column" :id="`${row}${column}`" @click="cellClick(`${row}${column}`)" :data-key="getPieceKey(pieceName)">
            <img :id="`i${row}${column}`" :src="getImage(row, column)"  />
          </td>
        </tr>
      </table>
    </div>

    <div id="divNguoiChoiCoDo">
      <table id="tblNguoiChoiCoDo">
        <tr>
          <td><img ref="iCoDo" :src=" userCoDoImage" /></td>
        </tr>
        <tr>
          <td id="PointCoDo">{{  }}</td>
        </tr>
      </table>
    </div>
    <chess-constants />
    <car ref="car" :isCoDo="isCoDo" :isBien="isBien" :isCoDen="isCoDen" :DoiMau="DoiMau" />
    <horses ref="horses" :isCoDo="isCoDo" :isBien="isBien" :isCoDen="isCoDen" :DoiMau="DoiMau"/>
    <king ref="king" :isCoDo="isCoDo" :isBien="isBien" :isCoDen="isCoDen" :DoiMau="DoiMau"  />
    <pawn ref="pawn" :isCoDo="isCoDo" :isBien="isBien" :isCoDen="isCoDen" :DoiMau="DoiMau"  />
    <queen ref="queen" :isCoDo="isCoDo" :isBien="isBien" :isCoDen="isCoDen" :DoiMau="DoiMau"  />
    <statue ref="statue" :isCoDo="isCoDo" :isBien="isBien" :isCoDen="isCoDen" :DoiMau="DoiMau"  />
  </div>
</template>

<script>

// import { ref } from 'vue';

import ChessConstants from '../components/ChessConstants.vue';
import BanCo from './BanCo.vue';
import NguoiChoi from "./NguoiChoi.vue";
import LuotDi from './LuotDi.vue';

// import LogicImage from '../components/'

import Car from '../components/Car.vue';
import Horses from '../components/Horses.vue';
import King from '../components/King.vue';
import Pawn from '../components/Pawn.vue';
import Queen from '../components/Queen.vue';
import Statue from '../components/Statue.vue';


export default {
  props: {
    
  },
  
  name: "Chessboard",
  components: {
    ChessConstants,
    BanCo,
    NguoiChoi,
    LuotDi,
    Car,
    Horses,
    King,
    Pawn,
    Queen,
    Statue,
  },
  data() {
    return {
      userCoDenImage: "./src/assets/image/user/User_Enb.png",
      userCoDoImage: "./src/assets/image/user/User_Dis.png",
      pointCoDen: 0,
      pointCoDo: 0,
      selectedColor: "CoDo",
      selectedPiece: "Tot",
      selectedRow: "",
      selectedColumn: "",
      ChessConstants:"",
      chessboardData: [],
      selectedCell: null,
      possibleMoves: [], 
      pieceKeys: {},
      shouldShow: false,
      preRow: null,
      preCol: null,
      preId: '00',
    };
  },
  methods: {
    VeBanCoTrangDen() {
      for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
          const cellId = i.toString() + j.toString();
          const cellElement = document.getElementById(cellId);
          cellElement.style.backgroundColor = "rgb(255,255,255)";
          if (i % 2 !== 0) {
            if (j % 2 === 0) {
              cellElement.style.backgroundColor = "rgb(170,182,155)";
            }
          } else {
            if (j % 2 !== 0) {
              cellElement.style.backgroundColor = "rgb(170,182,155)";
            }
          }
        }
      }
    },
    datCo() {
      for (let i = 3; i < 7; i++) {
        for (let j = 1; j < 9; j++) {
          document.getElementById("i" + i.toString() + j.toString()).src = "QuanCo/Rong.png";
        }
      }
    
    },
    ...NguoiChoi.methods,

      handleCar(id) {
        console.log("handl"  + id);
        if(this.isCheckMove(this.preId, id) || this.preId == '00')
        this.$refs.car.Car(id);
        return false;
      },
      handleHorses(id) {
        this.$refs.horses.Horses(id); 
      },
      handleKing(id) {
        this.$refs.king.King(id);
      },
      handlePawn(id) {
        this.$refs.pawn.Pawn(id); 
      },
      handleQueen(id) {
        this.$refs.queen.Queen(id);
      },
      handleStatue(id) {
        this.$refs.statue.Statue(id); 
      },
      ...LuotDi.setup(),

      removeHighlightFromAllCells() {
        const cells = document.querySelectorAll(".highlighted");
        cells.forEach((cell) => {
          cell.classList.remove("highlighted");
        });
      },
      isCheckMove(id, currentId){
        const X = id.charAt(0);
        const Y = id.charAt(1);
        // kiểm tra với từng trường hợp
        const nuocDi = this.findRookMoves(X,Y);
        console.log(nuocDi);
        console.log("preid" + id);
        console.log("current id = " + currentId);
        console.log("res = " + nuocDi.includes(id));
        return nuocDi.includes(currentId.toString());
      },
    findRookMoves(row, column) {
    const rookMoves = [];
    
    // Xác định tất cả các ô cờ trên cùng hàng
    for (let i = 1; i <= 8; i++) {
      if (i !== column) {
        rookMoves.push(`${row}${i}`);
      }
    }
    
    // Xác định tất cả các ô cờ trên cùng cột
    for (let i = 1; i <= 8; i++) {
      if (i !== row) {
        rookMoves.push(`${i}${column}`);
      }
    }
    
    return rookMoves;
  },
      cellClick(id) {
        // vẽ lại bàn cờ xoá hết high light
        if(this.isCheckMove(this.preId, id) || this.preId == '00'){
          this.VeBanCoTrangDen();
          const imgElement = document.getElementById("i"+this.preId);
          // xoá cái cũ
          if (imgElement) {
            imgElement.src="";
          }
          // Thêm vào vị trí mới
          const imgElementI = document.getElementById("i"+id);
          if (imgElementI) {
            imgElementI.src = "./src/assets/image/piece/Xe_Do.png"; // Đặt URL hình ảnh ở đây
          }
        }
        // remove ảnh ở vị trí preId
        
        console.log("id = " + id);
        this.clickedPieceKey = this.getPieceKey(id);
        console.log('clickedPieceKey',this.clickedPieceKey);
        
        // insert ảnh vào ô id
        
        if(this.selectedPiece === "Xe") {
          // this.shouldShow === true;

          this.handleCar(id);
          if(this.isCheckMove(this.preId, id) || this.preId == '00')
          this.preId = id
          return;
        } else if (this.selectedPiece === "Ma") {
          return this.handleHorses(id);
        } else if (this.selectedPiece === "Vua") {
          return this.handleKing(id);
        } else if (this.selectedPiece === "Tot") {
          return this.handlePawn(id);
        } else if (this.selectedPiece === "Hau") {
          return this.handleQueen(id);
        } else if (this.selectedPiece === "Tuong") {
          return this.handleStatue(id);
        }

        // if (this.showingMoves) {
        //   this.showingMoves = false;
        //   this.selectedCell = null;
        //   this.possibleMoves = [];
        // } else {
        
        //   this.showingMoves = true;
        //   this.selectedCell = id;
        //   this.calculatePossibleMoves(id);
        //   console.log(this.calculatePossibleMoves(id));
        //   console.log(this.selectedPiece);

         
        
          // this.handleCar(id); 
          // this.handleHorses(id);
          // this.handleKing(id); 
          // this.handlePawn(id);
          // this.handleQueen(id); 
          // this.handleStatue(id);
        
        // }
      },
      // performMove(move) {
      //   const [row, column] = move.split('');
      //   this.clickCell(row, column); // Thực hiện bước đi
      //   this.showingMoves = false;   // Tắt hiển thị các bước đi có thể
      //   this.selectedCell = null;    // Bỏ chọn ô cờ
      //   this.possibleMoves = [];     // Xóa danh sách bước đi
      // },
      // calculatePossibleMoves(id) {
      //   const possibleMoves = [];
      //   const [row, column] = [parseInt(id.charAt(0)), parseInt(id.charAt(1))];
      // },
      
    
      clickCell(row, column) {
          console.log(this.preRow + "test");

        // gọi hàm clear 
          const id = `${row}${column}`;
          this.preRow = row;
          this.preCol = column;
        
        if (this.isCoDo(row, column)) {
          this.LuotDi(); 
          this.DoiMau(row, column); 
          this.diChuyen(id, "newId");
          this.$refs[`i${row}${column}`][0].src = this.userCoDenImage;
        } else if (this.isCoDen(row, column)) {
          this.LuotDi(); 
          this.DoiMau(row, column); 
          this.diChuyen(id, "newId");
          this.$refs[`i${row}${column}`][0].src = this.userCoDoImage;
        }
    
      },
      clearHighLight(){

      },
    
    submitForm() {
      const data = [];
      data['location'] = 'i' + this.selectedRow + this.selectedColumn;

      if (this.selectedColor === "CoDo") {
        switch (this.selectedPiece) {
          case "Tot":
            data['link'] = ChessConstants.data().CoDo.Tot;
            break;
          case "Ma":
            data['link'] = ChessConstants.data().CoDo.Ma;
            break;
          case "Tuong":
            data['link'] = ChessConstants.data().CoDo.Tuong;
            break;
          case "Vua":
            data['link'] = ChessConstants.data().CoDo.Vua;
            break;
          case "Hau":
            data['link'] = ChessConstants.data().CoDo.Hau;
            break;
          case "Xe":
            data['link'] = ChessConstants.data().CoDo.Xe;
            break;
          default:
						break;  
        }
      } else {
        switch (this.selectedPiece) {
          case "Tot":
            data['link'] = ChessConstants.data().CoDen.Tot;
            break;
          case "Ma":
            data['link'] = ChessConstants.data().CoDen.Ma;
            break;
          case "Tuong":
            data['link'] = ChessConstants.data().CoDen.Tuong;
            break;
          case "Vua":
            data['link'] = ChessConstants.data().CoDen.Vua;
            break;
          case "Hau":
            data['link'] = ChessConstants.data().CoDen.Hau;
            break;
          case "Xe":
            data['link'] = ChessConstants.data().CoDen.Xe;
            break;
          default:
						break;  
        }
      }
      this.getImage(data['location'], data['link']);
      this.getPieceKey(this.selectedPiece);
      const location = 'i' + this.selectedRow + this.selectedColumn;
      const link = data['link'];

      this.chessboardData[location] = link;
      console.log(this.selectedPiece);

      return data;
    },
    getImage(row, column) {
      const location = `i${row}${column}`;
      return this.chessboardData[location];
      return link;

    },
    getPieceKey(pieceName){
      return pieceName;
    }
  },
  mounted() {
    this.VeBanCoTrangDen();
  },
  watch:
    {
      
        preRow(newPreRow, oldPreRow) {
          console.log(123);
        // Xử lý khi giá trị của preRow thay đổi
        console.log("preRow đã thay đổi từ", oldPreRow, "sang", newPreRow);

        // Thực hiện các hành động cần thiết khi preRow thay đổi
      },
    }
};
</script>

<style>
body {
    margin: 0px;
    padding: 0px;
    background-color: #EDEDED;

}

#divMain {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(-90deg, #6866e5, #ebc1b2);
}

#divNguoiChoiCoDen {
    float: left;
    width: 25%;
    height: 100%;
}

#tblNguoiCoDen {
    width: 100%;
    margin-top: 140%;
    margin-left: auto;
    margin-right: auto
}

#iCoDo,
#iCoDen {
    height: 100px;
    width: 100px;
}

#tblNguoiChoiCoDo {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}

#divBanCo {
    /* padding-top: 5px; */
    float: left;
    width: 50%;
    height: 100%;
    position: relative;
    top: -13rem;
}

#divNguoiChoiCoDo {
    float: left;
    width: 25%;
    height: 100%;
}

#PointCoDen {
    color: yellow;
}

#PointCoDo {
    color: red;
}

#BanCo {
    margin: auto;
    width: 600px;
    height: 600px;
}

#BanCo td {
    height: 70px;
    width: 70px;
    border-collapse: collapse;
    border: 2px solid #aab69b;
}

#BanCo td:hover {
    border-width: 2px;
    border-collapse: collapse;
    border-style: solid;
    border-color: aqua;
}

img {
    display: block;
    margin: 0 auto;
}

.quanco {

    position: relative;
    left: -28rem;
    font-size: 1.7rem;
    top: 4rem;
}

#mauco,
#quanco {
    font-size: 1.5rem;
    height: 2.5rem;
    width: 7rem;
    border: none;
    border-radius: 6px;
}


#btn__submit {
    height: 3.3rem;
    width: 9rem;
    font-size: 1.4rem;
    border-radius: 5px;
    border: none;
    background-color: aliceblue;
    background-image: linear-gradient(200deg, #2f3ce3 24%, #db4193 73%);
    color: white;
}

#title--ngang,
#title--doc {
    height: 2.5rem;
    width: 10rem;
    font-size: 1.5rem;
    border: none;
    border-radius: 6px;
}
</style>
