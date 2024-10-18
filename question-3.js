// เริ่มเขียนโค้ดตรงนี้
async function getUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data.filter(person => person.name.length > 17).map(names => names.name);
    }
    catch(error){
        console.log(error)
    }
}


getUsers().then(datas => console.log(datas))