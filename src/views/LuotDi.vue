<template>
    <h1></h1>
  </template>
  
  <script>
  const CoDen = {
    Rong: "./src/assets/image/piece/Rong.png",
  };
  
  const Mau = {
    NuocDi: "#F6CD61",
  };
  
  import { ref } from 'vue';
  
  export default {
    setup() {
      const isClick = ref(false);
      const userCoDoImage = ref("./src/assets/image/user/User_Enb.png");
      const userCoDenImage = ref("./src/assets/image/user/User_Dis.png");
      let Location = "";
  
      function LuotDi() {
        const temp = userCoDoImage.value;
        userCoDoImage.value = userCoDenImage.value;
        userCoDenImage.value = temp;
      }
  
      function Click(id) {
        var X = id.charAt(0);
        var Y = id.charAt(1);
        if (isCoDo(X, Y) || isCoDen(X, Y)) {
          var Name = GetName(id);
          Name = Name.substring(0, Name.indexOf("_"));
          Location = id;
  
          // Kiểm tra này là quân cờ nào để xác định đường đi
          switch (Name) {
            case "Xe":
              Car(id);
              break;
  
            case "Ma":
              Horses(id);
              break;
  
            case "Tuong":
              Statue(id);
              break;
  
            case "Hau":
              Queen(id);
              break;
  
            case "Vua":
              King(id);
              break;
  
            case "Tot":
              Pawn(id);
              break;
  
            default:
              // Không click vào ổ chức quân cờ nào
              isClick.value = !isClick.value;
              break;
          }
        } else {
          var Name = GetName(id);
          Name = Name.substring(0, Name.indexOf("_"));
  
          if (diChuyen(Location, id)) {
            LuotDi();
          }
        }
      }
  
      // Các hàm khác ở đây
  
      return {
        isClick,
        userCoDoImage,
        userCoDenImage,
        LuotDi,
        Click,
        // Các hàm khác
      };
    },
  };
  </script>
  