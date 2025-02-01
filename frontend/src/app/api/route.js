
export function GET(req,res){
    console.log(req.method);
    
    return Response.json({
        name : 'phakaphol',
        Surname : 'dherachaisuphakij'
    })
}