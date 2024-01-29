const tablebody=document.getElementById("table-body")

const api = fetch("https://fakestoreapi.com/products")
  .then((data) => data.json())
  .then((datas) => {
    console.log(datas);
    for(let i=0;i<datas.length;i++){
        tablebody.innerHTML+=`<tr>
        <th>${datas[i].title}</th>
        <td>${datas[i].description}</td>
        <td>${datas[i].price}</td>
        <td><img src="${datas[i].image}"</img></td>
      </tr>`
        
    }
  });


