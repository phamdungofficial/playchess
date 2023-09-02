import { ref, onMounted } from 'vue';

export default {
  setup() {
    const hangNgang = '';
    const hangDoc = '';

    const VeBanCoTrangDen = () => {
      for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
          $('#' + i.toString() + j.toString()).css("backgroundColor", "rgb(255,255,255)");
          if (i % 2 != 0) {
            if (j % 2 == 0)
              $('#' + i.toString() + j.toString()).css("backgroundColor", "rgb(170,182,155)");
          } else {
            if (j % 2 != 0)
              $('#' + i.toString() + j.toString()).css("backgroundColor", "rgb(170,182,155)");
          }
        }
      }
    };

    const submitHandler = (e) => {
      e.preventDefault();

      const mauCo = mauco.value;
      const quanCo = quanco.value;


      const row = titleNgang.value;
      const column = titleDoc.value;
      const id = 'i' + row + column;

      const DatCo = () => {
        for (let i = 3; i < 7; i++) {
          for (let j = 1; j < 9; j++) {
            $("i" + i.toString() + j.toString()).src = "QuanCo/Rong.png";
          }
        }

        if (mauCo === 'do') {
          switch (quanCo) {
            case 'tot':
              $("#" + id).attr("src", CoDo.Tot);
              break;

            default:
              break;
          }
        } else {
          switch (quanCo) {
            case 'tot':

              break;

            default:
              break;
          }
        }
      };

      DatCo();
    };

    const mauco = ref('do');
    const quanco = ref('tot');
    const titleNgang = ref('');
    const titleDoc = ref('');

    onMounted(() => {
      VeBanCoTrangDen();
    });

    return {
      submitHandler,
      mauco,
      quanco,
      titleNgang,
      titleDoc,
    };
  },
};
