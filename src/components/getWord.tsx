export async function getWord(){
 
    try {
        const res = await fetch('https://random-word-api.herokuapp.com/word?lang=en');
        if(!res.ok){
          throw new Error (`Response status: ${res.status}`);
        }
        
        const data:string[] = await res.json();
        return data[0];
  
    } catch (error: any) {
      console.error(error.message);
    }
  }