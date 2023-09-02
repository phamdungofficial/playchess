<!-- <script>
export default {
    methods: {

            const :data = [] 
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

    
    }

};



</script> -->