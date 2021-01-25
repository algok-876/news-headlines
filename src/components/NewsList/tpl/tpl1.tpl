<div class="news-item type-1" data-page="{{pageNum}}" data-index="{{index}}" data-uniquekey="{{uniquekey}}">
    <div class="main">
        <h1>{{title}}</h1>
        <div class="pic">
            <div class="img last"
            style="background-color:rgba(<%=Math.round(Math.random()*255)%>, <%=Math.round(Math.random()*255)%>, <%=Math.round(Math.random()*255)%>, <%=(Math.random()+0.1).toFixed(1)%>);">
                <img src="{{thumbnail_pic_s}}" alt="">
            </div>
        </div>
    </div>
    <div class="info">
        <span class="author">{{ author }}</span>
        <span class="date">{{ date }}</span>
    </div>
</div>
