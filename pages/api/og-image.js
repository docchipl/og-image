import { withOGImage } from 'next-api-og-image';
import DropDate from '../../components/DropDate';

export default withOGImage({ 
    template: { 
        react: async ({ id }) => {

            if (!id) {
                throw new Error('Invalid notion page id')
            }

            const res = await fetch('https://api.docchi.pl/api/anime/find/'+id)
            .catch(error => {console.log(error)});
            let data = await res.json();
            
            return(
                <html>
                    <head>
                    <style dangerouslySetInnerHTML={{ __html: style }} />
                    </head>
      
                    <body>
                    {data && (
                        <div className='container'>
                            <div className='horiz'>
                                <div className="fighter_profile_anis_cover_wrap__HSkb7">
                                    <div className="fighter_profile_anis_cover__BIr4U" style={{backgroundImage: `url(${data.avatar})`}}></div>
                                </div>
                                <div className='lhs position-relative'>
                                    <div className='main'>
                                        {data.season && data.started_airing && (
                                            <h2 className="season_episodes">
                                                {JSON.parse(data.season).season} {JSON.parse(data.season).year}
                                                <span>{JSON.parse(data.started_airing).episodes_number} Odcinków</span>
                                            </h2>
                                        )}
                                        <h1 className='title first-h1'>{data.name_en}</h1>
                                        <div className="m-2">
                                            <h3 className="gold">Nowe odcinki wychodzą w</h3>
                                            <p><DropDate data={data.broadcast}/></p>
                                        </div>
                                    </div>
                                    <div className="m-3">
                                        <div>
                                            {JSON.parse(data.genre).map((i, index) => (
                                                <h2 className="fighter_profile_genre___3oB5" key={index}>{i.name}</h2>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <img
                                src={data.avatar}
                                className='rhs position-relative'
                                />
                            </div>
                        </div>
                    )}
                    </body>
              </html>
            )
        }
    },
    cacheControl: 'max-age=0, s-maxage=86400, stale-while-revalidate=3600',
    type: 'jpeg',
    quality: 100,
})
const style = `
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
:root {
  --padding: 8vmin;
}
* {
  box-sizing: border-box;
}
body {
    font-family: Montserrat,sans-serif;
    padding: 0;
    margin: 0;
}
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--padding);
  background: #1F2027;
  color: #fff;
}
.horiz {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: var(--padding);
  width: 100%;
  height: 100%;
}
.lhs {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.rhs {
  width: 35%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
}
.title {
  font-size: 3.2em;
  line-height: 1.3;
}
.metadata {
  color: #A9ACC0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: calc(var(--padding) * 0.3);
  font-size: 1em;
}
.author {
  font-size: 1.25em;
  color: #51ecfd;
  font-weight: bolder;
}
.author-image {
  background-size: cover;
  width: 10vmin;
  min-width: 10vmin;
  max-width: 10vmin;
  height: 10vmin;
  min-height: 10vmin;
  max-height: 10vmin;
  border-radius: 50%;
  background-image: url(https://docchi.pl/logo512.png);
}
.metadata-rhs {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5em;
}
.detail {
  overflow-wrap: break-word;
}
.fighter_profile_anis_cover_wrap__HSkb7 {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: brightness(50%);
    overflow: hidden;
}
.fighter_profile_anis_cover__BIr4U {
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background-size: cover;
    background-position: 50%;
    filter: blur(20px);
    opacity: .35;
}
.position-relative{
    position: relative;
}
.fw-lighter{
    font-weight: lighter;
}
.first-h1{
    margin-bottom: 0;
    padding-bottom: 0;
}
.second-h1{
    padding-top: 0;
    margin-top: 0;
    font-size: 2.25em;
}
.m-3{

}
.m-2{
    width: 20rem;
}
.m-2 p{
    font-size: 1.25em;
}
.fighter_profile_genre___3oB5 {
    display: inline-block;
    line-height: 1.1em;
    padding: .25em .50em .25em;
    background-color: rgba(249, 249, 249, 0.1);
    color: #fff;
    border-radius: 20px;
    margin: 0 2px 5px 0;
    transition: all .2s ease-in-out!important;
}
.text-center{
    text-align: center;
}
.season_episodes{
    text-transform: capitalize;
    font-weight: normal;
}
.season_episodes span::before{
    content: "•";
    margin-right: 10px;
    margin-left: 10px;
    font-size: 30px;
    font-weight: bolder;
}
.gold{
    color: #ffc107;
}
`