import React from "react"
import $ from "jquery";

class Cart extends React.Component{
    
    // constructor(){
    //     super()
    //     this.state = {
    //         cart: [
    //             {
    //                 barang:"Sepatu", judul:"Bulan", penulis:"Tere Liye",
    //                 penerbit:"CV Harapan Kita", harga: 90000,
    //                 cover:"https://drive.google.com/uc?id=1ui-jyKgu3DqFyo7VKJu-FFXkaNQN3aSg"
    //             },
    //             {
    //                 isbn:"12346", judul:"Anak Badai", penulis:"Tere Liye",
    //                 penerbit:"CV Nusa Bangsa", harga: 80000,
    //                 cover:"https://drive.google.com/uc?id=1rJDcCOmsd14NL6DG3Wps_kewZomGcLU-"
    //             },

    render(){
        return(
            <div className="container">
                <div className="alert alert-success">
                    Ini adalah Halaman Cart
                </div>
            </div>
        )
    }
}
export default Cart;
