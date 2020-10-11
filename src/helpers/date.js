export const getCurrentDate = () => {
    const date = new Date();
    let day = date.getDate().toString();
    let month = (date.getMonth() + 1).toString();
    
    if(day.length === 1){
        day = day.padStart(2,'0');
    }

    if(month.length === 1){
        month = month.padStart(2,'0');
    }

    let year = date.getFullYear();
    
    return `${year}/${month}/${day}`;

}