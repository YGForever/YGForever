//仅供娱乐哈！！！！
window.onbeforeunload=function (){
    sessionStorage.removeItem('joke-alert');
}
let item = sessionStorage.getItem('joke-alert');
if (item == null) {
    const link = document.createElement('link');
    link.setAttribute('href', 'http://unpkg.com/layui@2.6.8/dist/css/layui.css');
    document.getElementsByTagName('head')[0].appendChild(link);
    const js = document.createElement('script');
    js.src = 'https://unpkg.com/layui@2.6.8/dist/layui.js';
    document.getElementsByTagName('head')[0].appendChild(js);
    setTimeout(() => {
        setInterval(() => {
            let msg = document.querySelectorAll('.textContainer')[document.querySelectorAll('.textContainer').length - 1].textContent;
            console.log(msg);
            item= sessionStorage.getItem('joke-alert');
            console.log(item);
            if (item != msg) {
                //不读取script
                if(msg.indexOf("script")==-1){
                    layer.msg(msg);
                    sessionStorage.setItem('joke-alert', msg);
                }
            }
        }, 1000)

    }, 2000)
}
