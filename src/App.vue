<template>
  <div id="app">
    <Chessboard />
  </div>
</template>

<script>

import { useRoute } from 'vue-router';
import Chessboard from "./views/Chessboard.vue";
import BanCo from "./views/BanCo.vue";
import NguoiChoi from "./views/NguoiChoi.vue";
import ChessConstants  from './components/ChessConstants.vue';
import LuotDi from './views/LuotDi.vue';

export default {
  components: {
    Chessboard,
    BanCo,
    NguoiChoi,
    ChessConstants,
    LuotDi
    
  },
  setup() {
    const use = useRoute();
    

    return use
  },
  
};
</script>


