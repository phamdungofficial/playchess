<template>
  <h1></h1>
</template>

<script>
export default {
  methods: {
    LuotDi() {
      const temp = this.userCoDoImage;
      this.userCoDoImage = this.userCoDenImage;
      this.userCoDenImage = temp;
    },
   DoiMau(X, Y) {
      const cellId = X.toString() + Y.toString();
      const cellElement = document.getElementById(cellId);
      cellElement.style.backgroundColor = "#F6CD61";
      console.log("doi mau X Y");
    },
    GetColor(id) {
      const rgb = window.getComputedStyle(this.$refs[id]).backgroundColor;
      const temp = rgb.replace(/\s/g, "");
      return temp; 
    },
    GetName(id) {
      try {
        const src = this.$refs["i" + id][0].src;
        const Ten = src.substring(src.lastIndexOf('/') + 1, src.length - 4);
        return Ten;
      } catch (err) {
        return err;
      }
    },
    isCoDo(X, Y) {
      const Temp = this.GetName(X, Y); 
      if (typeof Temp === 'string') {
        return Temp.localeCompare("Do") === 0;
      }
      return false;
    },
    isCoDen(X, Y) {
      const Temp = this.GetName(X, Y); 
      if (typeof Temp === 'string') {
        return Temp.localeCompare("Den") === 0;
      }
      return false;
    },
    isRong(X, Y) {
      const Temp = this.GetName(X + Y); 
      if (typeof Temp === 'string') {
        return Temp.localeCompare("Rong") === 0;
      }
      return false;
    },
    isBien(X, Y) {
      return X < 1 || X > 8 || Y < 1 || Y > 8;
    },
    diChuyen(id, idNew) {
      if (id.localeCompare(idNew) === 0 || this.GetColor(idNew).localeCompare(Mau.NuocDi) !== 0) {
        return false;
      }

      this.$refs["i" + idNew][0].src = this.$refs["i" + id][0].src;
      this.$refs["i" + id][0].src = CoDen.Rong;

      return true;
    },
  },
};
</script>
