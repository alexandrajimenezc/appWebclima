//Para almacenar datos del local storage

export class Store{
    constructor(){
        this.city ;
        this.countryCode= countryCode;
        this.defaulCity= 'ciudad bolivar';
        this.defaulCountry= 've';
    }

    getLocationData(){

        if(localStorage.getItem('city') === null && localStorage.getItem('countryCode')=== null ){
            this.city = this.defaulCity
            this.countryCode = this.defaulCountry
        }else{

            this.city = localStorage.getItem('city')
            this.countryCode = localStorage.getItem('countryCode')
        }

       return {
           city: this.city,
           countryCode: this.countryCode
       }
    }

    setLocationData(city, countryCode) {
        localStorage.setItem('city',city);
        localStorage.setItem('countryCode',countryCode)
    }
}