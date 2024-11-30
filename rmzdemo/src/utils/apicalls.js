import axios from "axios";

export const getIndoorData = async (sensorName) => {
    try {
        const requestOptions = {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjZTcwYjFiYjVhM2M1ZTBmMmEzNDc3IiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20ifSwiaWF0IjoxNzMxODcyMDUzfQ.9t4vX_lC9aVD9wSpTsxBHxpCmGbe17h_5webTp7BvNM",
            },
          };
          const url = `/api/v1/devices/sens-data?sensorName=${sensorName}&timeFrameInHours=1&deviceTypeId=6690ef7fdeb2b486e92011aa`;
          const response = await fetch(url, requestOptions);

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getOutdoorData = async (sensorName) => {
    try {
       
        const RequestOptions ={
            method:'POST',
            headers: {
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdF9uYW1lIjoiQXNoaXNoIiwiZW1haWwiOiJhc2hpc2gua3VtYXJAY2xhaXJjby5pbiIsImlkIjoiY2xhaXJjby1mZGZkOTNlNC1lYTljLTQxZWItODIzZS0xMjUwMmE5MTQxNTcudnRkZXB3ODZvdyIsImRvbWFpbiI6ImNsYWlyY28iLCJyb2xlcyI6WyJmZDU1YTM2OS0yNjA2LTQyODEtYjgyNS0yODBiNzBmYWM4MjkiXSwiaWF0IjoxNzEzMTYzNTYxLCJleHAiOjE3NDQ2OTk1NjF9.coHIb8hZ09bQ4f7jISgJVNpjw2WAc2Yi5lQ7CzyWy9Y',
                'api-key':'lcvhzec0ae4u20047s36mfexcjr2ebd3cpk28b9yca9c9f95d17dgeda',
               
            },
        }
        const body = {
                deviceId:`${sensorName}`,
                flag_details:{installation_type:"clairco"},
                fetchType:"latest",
            }
        
        
        const url = 'https://api.claircoair.com/api/fetchIaqData'
        const response = await axios.post(url,body,RequestOptions);
        
        const data = response.data
        return data;
    } catch (error) {
        console.log(error);
    }
};