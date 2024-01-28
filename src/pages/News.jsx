import React from 'react';
import './style/news-page.css'
import news from '../news_articles.json'

function News() {

  return (
    <div>

<div class="wrap">

{news.map(data=>(

   <div>
   <div class="post">
  <div class="feat-img"><img src={data.image}/>
  </div>
<article>
  <header>
   <h2><a href={data.link}>{data.headline}</a></h2>
    <p class="author-cred">Source-<a href="#">Moneycontrol.com</a>{data.date} <a href="#">  </a></p>
  </header>
  <p>{data.content}</p>  
  <footer>
    {/* <a href="#" class="more-link">Read More</a> */}
  </footer>
</article>
</div>
   </div>
  


))}
  

</div>

    </div>
  )
}

export default News;