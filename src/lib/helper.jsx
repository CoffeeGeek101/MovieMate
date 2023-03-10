export function genreData(genre, genIds){
    const result = {};
    const structGen = genre.reduce((result, current)=>{
        result[current.id] = current.name;
        return result;
    },result);

    return genIds.map((id)=> (<div>{structGen[id]}</div>))
}