// *Get table of random users generated from the [Random User API](https://randomuser.me/)

const API = {

    // *NOTE: Long version
    // getUsers: function(){
    //     return fetch();
    // }

    //*ES6 shorthand
    getEmpData() {
        return fetch('https://randomuser.me/api/?results=100');
    }

}

export default API;
