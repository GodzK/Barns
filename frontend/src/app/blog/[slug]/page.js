export default function Page({params}){
    const prepare = {
        "1" : "Hello This is First",
        "2" : "What you gonna do",
        "3" : "Just End it Now!!"
    }
    const data = prepare[params.slug] || "no data found"
    return(
        <div>
            Slug ที่ {data}
        </div>
    )
}