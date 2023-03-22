export function genreData(genre, genIds){
    const result = {};
    const structGen = genre.reduce((result, current)=>{
        result[current.id] = current.name;
        return result;
    },result);

    return genIds.slice(0,3).map((id)=> (<div>{structGen[id]}</div>))
}