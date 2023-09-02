import { ref } from 'vue';


export default {
    methods: {
        LuotDi() {
            const temp = this.$refs.iCoDo.src;
            this.$refs.iCoDo.src = this.$refs.iCoDen.src;
            this.$refs.iCoDen.src = temp;
        },
        DoiMau(X, Y) {
            this.$refs[X.toString() + Y.toString()].style.backgroundColor = "#F6CD61";
        },
        GetColor(id) {
            const rgb = window.getComputedStyle(this.$refs[id]).backgroundColor;
            const temp = rgb.substring(rgb.indexOf('(') + 1, rgb.length - 1).replace(/ /g, '');
            return temp; //rgb
        },
        GetName(id) {
            try {
                const src = this.$refs[id].src;
                const Ten = src.substring(src.lastIndexOf('/') + 1, src.length - 4);
                return Ten;
            } catch (err) {
                return err;
            }
        },
        isCoDo(X, Y) {
            const Temp = this.GetName(X.toString() + Y);
            return Temp.includes("Do");
        },
        isCoDen(X, Y) {
            const Temp = this.GetName(X.toString() + Y);
            return Temp.includes("Den");
        },
        isRong(X, Y) {
            const Temp = this.GetName(X.toString() + Y);
            return Temp.includes("Rong");
        },
        isBien(X, Y) {
            return X < 1 || X > 8 || Y < 1 || Y > 8;
        },
        diChuyen(id, idNew) {
            if (id === idNew || this.GetColor(idNew) !== this.Mau.NuocDi) {
                return false;
            }

            this.$refs["i" + idNew].src = this.$refs["i" + id].src;
            this.$refs["i" + id].src = this.CoDen.Rong;

            return true;
        },
    },
    data() {
        return {
            Mau: {
                NuocDi: "246,205,97",
            },
            CoDen: {
                Rong: 'Quanco/Rong.png',
            },
        };
    },
};
