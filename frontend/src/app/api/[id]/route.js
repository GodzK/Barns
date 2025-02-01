
export async function GET(req,{params}){
    console.log(req.method);
    
    return await Response.json({
        name : 'phakaphol',
        Surname : 'dherachaisuphakij',
        diary : `search where data is = ${params.id}`
    })
}