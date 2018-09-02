var $oUl=$('.ulBox'),$lisBox=$('.listBox');
function  giveHtml(data) {
    data=data||[];
    var str='';
    data.forEach((item)=>{
        str+=`<li class="swiper-slide">
                <a href="#">
                    <img src="${item.img}" alt="">
                    <div>${item.title}</div></a>

            </li>`
    });
    $oUl.html(str);
}
function bannerFn() {
    var mySwiper=new Swiper('.swiper-container',{
        autoplay:{
            disableOnInteraction:false,
            delay:1000
        },
        loop:true,
        pagination:{
            el:'.swiper-pagination',
            type:'fraction',
            currentClass:'currentPage'
        }
    })
}

var p=new Promise(function (resolve,reject) {
    $.ajax({
        type:'get',
        url:'data/banner.json',
        success:function (data) {
            resolve(data)
        },
        error:function (res) {
            rejece(res)
        }
    })
});
p.then(function (data) {
    console.log(data);
    giveHtml(data);
    bannerFn(data)
},function () {
    
});
var lisPro=new Promise(function (resolve,reject) {
    $.ajax({
        type:'post',
        url:'./data/list.json',
        data:{t:1},
        success:function (data) {
            resolve(data)
        },
        error:function (res) {
            reject(res)
        }
    })
});
lisPro.then(function (data) {
    giveListHtml(data);
},function () {

});
function giveListHtml(data) {
    data=data||[];
    var str='';
    data.forEach((item)=>{
switch(item.type){
    case 0:
        str +=`<a href="##">
            <div class="text_box">
                <p>${item.title}</p>
                <div class="comment_box">
                    <em class="">
                        <span class="">${item.num}</span>
                        <span class="icon_com"></span>
                    </em>
                </div>

            </div>
        </a>`;
        break;
    case 1:
        str+=`<a href="##">
            <div class="img_box">
                <img src="${item.img}" alt="">
            </div>
            <div class="text_box">
                <p>${item.title}</p>
                <div class="comment_box">
                    <em class="">
                        <span class="">${item.num}</span>
                        <span class="icon_com"></span>
                    </em>
                </div>

            </div>
        </a>`;
        break;
    case 3:
        str+=` <a href="">
            <p>${item.title}</p>
            <div class="three_pic">
                <div>

                <img src="${item.img[0]}" alt=""></div>
                <div>  <img src="${item.img[1]}" alt=""></div>
            <div>
                <img src="${item.img[2]}" alt=""></div>
            </div>
            <div class="comment_box">
                <em class="">
                    <span class="">${item.num}</span>
                    <span class="icon_com"></span>
                </em>
            </div>
        </a>`
}
    })

    $lisBox.html(str);

}