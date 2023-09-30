const dataFetch = async (url, requestData) => {
  console.log("logging data", url, requestData);

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: requestData,
    });

    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      alert('An error occurred while sending the data.');
      return null; // Return null or handle the error as needed.
    }

    const data = await response.text();
    //console.log("the response is: ", data);
    return data;
  } catch (error) {
    console.error(error);
    alert('An error occurred while sending the data.');
    return null; // Return null or handle the error as needed.
  }
};

export default dataFetch;










































// const dataFetch = (url, requestData) => {

//   return new Promise((resolve, reject) => {
//     console.log("looging datum",url, requestData)
//       let requiredresult;
//      fetch(url, {
//        method: 'POST',
//        body: requestData,
//      })
//        .then(response => response.text())
//        .then(data => {
         
//          //const result = JSON.parse(data);
//          requiredresult=data;
//          console.log("the response is: ",data);
//          return data;
//        })
//        .catch(error => {
//          console.error(error);
//          alert('An error occurred while sending the data.');
//        });
 
      
//    });
  
//   };
  
//   export default dataFetch;

 
